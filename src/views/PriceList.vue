<template>
  <div class="content">
    <section class="price-list">
      <div class="price-list__wrapper">
        <div class="price-list__filter">
          <multiselect
              v-if="regions"
              v-model="selectedRegion"
              :options="sortedRegions"
              :searchable="false"
              :close-on-select="true"
              :show-labels="false"
              placeholder="Область"
              label="Name"
              class="price-list__multiselect"
          >
            <template slot="option" slot-scope="props">
              <span class="price-list__checkbox"></span>
              <p class="price-list__option-text">{{props.option.Name}}</p>
            </template>
          </multiselect>
          <multiselect
              v-if="elevators"
              v-model="selectedElevator"
              :options="sortedElevators"
              :searchable="false"
              :close-on-select="true"
              :show-labels="false"
              placeholder="Элеватор"
              label="Name"
              class="price-list__multiselect"
          >
            <template slot="option" slot-scope="props">
              <span class="price-list__checkbox"></span>
              <p class="price-list__option-text">{{props.option.Name}}</p>
            </template>
          </multiselect>
          <multiselect
              v-if="productsFilter"
              v-model="selectedProduct"
              :options="productsFilter"
              :searchable="false"
              :close-on-select="true"
              :show-labels="false"
              placeholder="С/Х культура"
              label="Name"
              class="price-list__multiselect"
          >
            <template slot="option" slot-scope="props">
              <span class="price-list__checkbox"></span>
              <p class="price-list__option-text">{{props.option.Name}}</p>
            </template>
          </multiselect>
          <button type="button" class="price-list__reset-btn" @click="resetFilter">Сбросить фильтр</button>
        </div>
        <div class="price-list__results">
          <div class="price-list__company-info">
            <div class="price-list__company-left-box">
              <p class="price-list__company-description">Цены (руб/т) действуют с 14.07.2020 с 00:00</p>
              <p class="price-list__company-description">Базис поставки - СРТ</p>
              <p class="price-list__company-description">Ждем Ваших звонков:</p>
              <p class="price-list__company-description">тел. +7 939 714-55-55 (Дмитрий)</p>
              <p class="price-list__company-description">8 (800) 555-28-26</p>
            </div>
            <div class="price-list__company-right-box">
              <button class="price-list__contact-btn" @click="openCallbackPopup = true">Связаться с нами</button>
            </div>
          </div>
          <table class="price-list__result-table" v-if="products">
            <tr>
              <th>Продукция</th>
              <th>Цена</th>
              <th>Цена + НДС</th>
            </tr>
            <tr v-for="product in filteredProducts" :key="product.id">
              <td>
                <p class="price-list__table-title">{{ product.product.Name }}</p>
                <p class="price-list__table-text" v-show="product.product.Description">{{ product.product.Description }}</p>
                <div class="price-list__table-regions">
                  <p class="price-list__table-region" v-for="region in product.regions" :key="region.id">{{ region.Name }}</p>
                </div>
                <div class="price-list__table-elevators">
                  <p class="price-list__table-elevator" v-for="elevator in product.elevators" :key="elevator.id">{{ elevator.Name }}</p>
                </div>
              </td>
              <td>{{ product.Price | formattedPrice }}</td>
              <td>{{ product.PriceVAT | formattedPrice }}</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <CallbackPopup :opened="openCallbackPopup" @close-popup="openCallbackPopup = false"/>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  import CallbackPopup from '../components/CallbackPopup'
  import axios from 'axios'

  export default {
    name: 'PriceList',
    components: {
      Multiselect,
      CallbackPopup,
    },
    data() {
      return {
        openCallbackPopup: false,
        regions: null,
        selectedRegion: null,
        elevators: null,
        selectedElevator: null,
        productsFilter: null,
        selectedProduct: null,
        products: null,
      }
    },
    methods: {
      resetFilter() {
        this.selectedRegion = null;
        this.selectedElevator = null;
        this.selectedProduct = null;
      },
    },
    computed: {
      filteredProducts() {
        let productsList = this.products;

        if (this.selectedRegion) {
          productsList = productsList.filter(item => item.regions.some(region => region.id === this.selectedRegion.id));
        }

        if (this.selectedElevator) {
          productsList = productsList.filter(item => item.elevators.some(elevator => elevator.id === this.selectedElevator.id));
        }

        if (this.selectedProduct) {
          productsList = productsList.filter(item => item.product.product_type === this.selectedProduct.id);
        }

        return productsList;
      },
      sortedRegions() {
        const newRegions = JSON.parse(JSON.stringify(this.regions));

        return newRegions.sort(function(a, b) {
          const regionA = a.Name.toLowerCase();
          const regionB = b.Name.toLowerCase();

          if (regionA < regionB) {
            return -1;
          }

          if (regionA > regionB) {
            return 1;
          }

          return 0;
        })
      },
      sortedElevators() {
        const newElevators = JSON.parse(JSON.stringify(this.elevators));

        return newElevators.sort(function(a, b) {
          const elevatorA = a.Name.toLowerCase();
          const elevatorB = b.Name.toLowerCase();

          if (elevatorA < elevatorB) {
            return -1;
          }

          if (elevatorA > elevatorB) {
            return 1;
          }

          return 0;
        })
      },
    },
    filters: {
      formattedPrice(value) {
        return value ? value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.') + ' р/т' : '-';
      }
    },
    beforeCreate() {
      axios.get('http://localhost:3001/api/price-lists')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          this.products = [];
          console.log(error);
        });

      axios.get('http://localhost:3001/api/regions')
        .then(response => {
          this.regions = response.data;
        })
        .catch(error => {
          this.regions = [];
          console.log(error);
        });

      axios.get('http://localhost:3001/api/elevators')
        .then(response => {
          this.elevators = response.data;
        })
        .catch(error => {
          this.elevators = [];
          console.log(error);
        });

      axios.get('http://localhost:3001/api/product-types')
        .then(response => {
          this.productsFilter = response.data;
        })
        .catch(error => {
          this.productsFilter = [];
          console.log(error);
        });
    }
  }
</script>
