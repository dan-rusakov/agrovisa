<template>
  <div class="content" v-if="acf">
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
              label="name"
              class="price-list__multiselect"
          >
            <template slot="option" slot-scope="props">
              <span class="price-list__checkbox"></span>
              <p class="price-list__option-text">{{props.option.name}}</p>
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
              label="name"
              class="price-list__multiselect"
          >
            <template slot="option" slot-scope="props">
              <span class="price-list__checkbox"></span>
              <p class="price-list__option-text">{{props.option.name}}</p>
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
              label="name"
              class="price-list__multiselect"
          >
            <template slot="option" slot-scope="props">
              <span class="price-list__checkbox"></span>
              <p class="price-list__option-text">{{props.option.name}}</p>
            </template>
          </multiselect>
          <button type="button" class="price-list__reset-btn" @click="resetFilter">Сбросить фильтр</button>
        </div>
        <div class="price-list__results">
          <div class="price-list__company-info">
            <div class="price-list__company-left-box" v-html="acf.page_description" />
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
                <p class="price-list__table-title">{{ product.product_select }}</p>
                <p class="price-list__table-text" v-show="product.description">{{ product.description }}</p>
                <div class="price-list__table-regions">
                  <p
                      class="price-list__table-region"
                      v-for="(region, index) in product.region_select"
                      :key="index"
                  >{{ region }}</p>
                </div>
                <div class="price-list__table-elevators">
                  <p
                      class="price-list__table-elevator"
                      v-for="(elevator, index) in product.elevator_select"
                      :key="index"
                  >{{ elevator }}</p>
                </div>
              </td>
              <td>{{ product.price | formattedPrice }}</td>
              <td>{{ product.price_vat | formattedPrice }}</td>
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
  import api from '../api';

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
        acf: null,
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
          productsList = productsList.filter(item => item.region_select.some(region => region === this.selectedRegion.name));
        }

        if (this.selectedElevator) {
          productsList = productsList.filter(item => item.elevator_select.some(elevator => elevator === this.selectedElevator.name));
        }

        if (this.selectedProduct) {
          productsList = productsList.filter(item => item.product_select === this.selectedProduct.name);
        }

        return productsList;
      },
      sortedRegions() {
        if (!this.regions) return 0;

        const newRegions = JSON.parse(JSON.stringify(this.regions));

        return newRegions.sort(function(a, b) {
          const regionA = a.name.toLowerCase();
          const regionB = b.name.toLowerCase();

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
        if (!this.elevators) return 0;

        const newElevators = JSON.parse(JSON.stringify(this.elevators));

        return newElevators.sort(function(a, b) {
          const elevatorA = a.name.toLowerCase();
          const elevatorB = b.name.toLowerCase();

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
    created() {
      api.getCurrentPage('price-list', (response) => {
        this.acf = response[0]?.acf;
        this.regions = this.acf.regions;
        this.elevators = this.acf.elevators;
        this.productsFilter = this.acf.products;
        this.products = this.acf.price_list;
      });
    },
  }
</script>
