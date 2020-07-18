<template>
  <div class="content">
    <section class="price-list">
      <div class="price-list__wrapper">
        <div class="price-list__filter">
          <multiselect
              v-model="selectedRegion"
              :options="regions"
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
              v-model="selectedElevator"
              :options="elevators"
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
            <div class="price-list__company-left-box">
              <p class="price-list__company-description">Цены (руб/т) действуют с 14.07.2020 с 00:00</p>
              <p class="price-list__company-description">Базис поставки - СРТ</p>
              <p class="price-list__company-description">Ждем Ваших звонков:</p>
              <p class="price-list__company-description">тел. +7 939 714-55-55 (Дмитрий)</p>
              <p class="price-list__company-description">8 (800) 555-28-26</p>
            </div>
            <div class="price-list__company-right-box">
              <button class="price-list__contact-btn">Связаться с нами</button>
            </div>
          </div>
          <table class="price-list__result-table">
            <tr>
              <th>Продукция</th>
              <th>Цена</th>
              <th>Цена + НДС</th>
            </tr>
            <tr v-for="product in filteredProducts" :key="product.id">
              <td>
                <p class="price-list__table-title">{{ product.name }}</p>
                <p class="price-list__table-text" v-show="product.description">{{ product.description }}</p>
              </td>
              <td>{{ product.price | formattedPrice }}</td>
              <td>{{ product.price_vat | formattedPrice }}</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'PriceList',
    components: {
      Multiselect,
    },
    data() {
      return {
        regions: [
          {
            name: 'Самарская область',
            slug: 'samarskaya_oblast',
          },
        ],
        selectedRegion: null,
        elevators: [
          {
            name: 'Приволжский портовый элеватор',
            slug: 'privolzhsky_port_elevator',
          },
          {
            name: 'Порт Тольятти ',
            slug: 'port_tolyatti',
          },
          {
            name: 'Октябрьская ХБ',
            slug: 'oktjabrskaja_hb',
          }
        ],
        selectedElevator: null,
        productsFilter: [
          {
            name: 'Пшеница',
            slug: 'wheat',
          },
          {
            name: 'Ячмень',
            slug: 'barley',
          },
          {
            name: 'Кукуруза',
            slug: 'corn',
          },
        ],
        selectedProduct: null,
        products: [
          {
            id: 1,
            name: 'Пшеница фуражная',
            price: 9000,
            price_vat: 9900,
            regions: [
              'samarskaya_oblast',
            ],
            elevators: [
              'privolzhsky_port_elevator',
              'port_tolyatti',
              'oktjabrskaja_hb',
            ],
            type: 'wheat',
          },
          {
            id: 2,
            name: 'Пшеница 5 класс',
            description: 'Год урожая 2020, клейковина 14, ИДК 100, клоп до 6, протеин ≥ 10,5%, ЧП ≥ 190, натура 720, фузариоз до 1%, семена подсолнечника ≤0,5%, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 9200,
            price_vat: 10120,
            regions: [
              'samarskaya_oblast',
            ],
            elevators: [
              'privolzhsky_port_elevator',
              'port_tolyatti',
              'oktjabrskaja_hb',
            ],
            type: 'wheat',
          },
          {
            id: 3,
            name: 'Пшеница 4 класс, протеин 11,5',
            description: 'Год урожая 2020, клейковина 18, ИДК 95, клоп до 5, протеин ≥ 11,5%, ЧП ≥ 200, натура 730, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 9700,
            price_vat: 10670,
            regions: [
              'samarskaya_oblast',
            ],
            elevators: [
              'privolzhsky_port_elevator',
              'port_tolyatti',
              'oktjabrskaja_hb',
            ],
            type: 'wheat',
          },
          {
            id: 4,
            name: 'Пшеница 4 класс, протеин 12,5',
            description: 'Год урожая 2020, клейковина 18, ИДК 95, клоп до 5, протеин ≥ 11,5%, ЧП ≥ 200, натура 730, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 9900,
            price_vat: 10890,
            regions: [
              'samarskaya_oblast',
            ],
            elevators: [
              'privolzhsky_port_elevator',
              'port_tolyatti',
              'oktjabrskaja_hb',
            ],
            type: 'wheat',
          },
          {
            id: 5,
            name: 'Пшеница 3 класс, протеин 13,5',
            description: 'Год урожая 2020, клейковина 23, ИДК 90, клоп до 2, протеин ≥ 13,5%, ЧП ≥ 280, натура 750, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 10200,
            price_vat: 11220,
            regions: [
              'samarskaya_oblast',
            ],
            elevators: [
              'privolzhsky_port_elevator',
              'port_tolyatti',
              'oktjabrskaja_hb',
            ],
            type: 'wheat',
          },
          {
            id: 6,
            name: 'Пшеница 3 класс, протеин 14,5',
            description: 'Год урожая 2020, клейковина 23, ИДК 90, клоп до 2, протеин ≥ 14,5%, ЧП ≥ 280, натура 760, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            regions: [
              'samarskaya_oblast',
            ],
            elevators: [
              'privolzhsky_port_elevator',
              'port_tolyatti',
              'oktjabrskaja_hb',
            ],
            type: 'wheat',
          },
          {
            id: 7,
            name: 'Ячмень',
            description: 'Год урожая 2020, натура ≥ 600, влажность ≤ 14,5%, сорная примесь ≤ 2%, фузариоз до 0,2%, семена подсолнечника не более 0,5%, зерновая примесь до 10%',
            price: 9000,
            price_vat: 9900,
            regions: [
              'samarskaya_oblast',
            ],
            elevators: [
              'privolzhsky_port_elevator',
              'port_tolyatti',
              'oktjabrskaja_hb',
            ],
            type: 'barley',
          },
          {
            id: 8,
            name: 'Кукуруза',
            description: 'Год урожая 2020, влажность 14,5%, сорная примесь до 2%, семена подсолнечника ≤ 0,5%, битые ≤ 5%, поврежденные ≤ 5%, поврежденные сушкой ≤ 2%, амброзия max. 10 шт на кг',
            regions: [
              'samarskaya_oblast',
            ],
            elevators: [
              'privolzhsky_port_elevator',
              'port_tolyatti',
              'oktjabrskaja_hb',
            ],
            type: 'corn',
          },
        ]
      }
    },
    methods: {
      resetFilter() {
        this.selectedRegion = null;
        this.selectedElevator = null;
        this.selectedProduct = null;
        this.filteredProducts;
      },
    },
    computed: {
      filteredProducts() {
        let productsList = this.products;

        if (this.selectedRegion) {
          productsList = productsList.filter(item => item.regions.includes(this.selectedRegion.slug));
        }

        if (this.selectedElevator) {
          productsList = productsList.filter(item => item.elevators.includes(this.selectedElevator.slug));
        }

        if (this.selectedProduct) {
          productsList = productsList.filter(item => item.type === this.selectedProduct.slug);
        }

        return productsList;
      }
    },
    filters: {
      formattedPrice(value) {
        return value ? value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.') + ' р/т' : '-';
      }
    }
  }
</script>
