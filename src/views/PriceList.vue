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
  import 'vue-multiselect/dist/vue-multiselect.min.css'

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

<style lang="scss">
  .price-list {
    background-color: $white;
    padding: 80px 0 110px;
  }

  .price-list__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .price-list__filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 60px;
  }

  .price-list__reset-btn {
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $text-color;
    border-bottom: 1px solid $text-color;
    margin-left: auto;
    outline: none;
    transition: .25s color ease, .25s border-color ease;

    &:hover, &:focus {
      color: $brand-color;
      border-color: $brand-color;
    }
  }

  .price-list__show-btn {
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $text-color;
    padding: 7px 24px;
    border: 2px solid $text-color;
    border-radius: 6px;
    outline: none;
    transition: .25s border-color ease, .25s background-color ease;

    &:hover, &:focus {
      border-color: $brand-color;
      background-color: $brand-color;
    }
  }

  .price-list__results {
    width: 100%;
  }

  .price-list__company-info {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 30px;
  }

  .price-list__company-name {
    font-family: $font-family-base;
    font-size: 28px;
    font-weight: $semibold;
    color: $text-color;
    margin: 0 0 12px;
  }

  .price-list__company-description {
    font-family: $font-family-base;
    font-size: 16px;
    font-weight: $semibold;
    color: $text-color;
    margin: 0 0 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .price-list__company-link {
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $brand-color;
    margin: 0 30px 0 0;
    border-bottom: 1px solid $brand-color;
  }

  .price-list__contact-btn {
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $text-color;
    padding: 7px 24px;
    border: 2px solid $brand-color;
    border-radius: 6px;
  }

  .price-list__company-right-box {
    margin-left: auto;
  }

  .price-list__result-table {
    width: 100%;
    border-spacing: 0;
    border-radius: 6px;
    border: 2px solid #DEDDDD;

    th {
      white-space: nowrap;
      padding: 8px 18px;
      text-align: center;
    }

    td {
      background-color: #F6F6F6;
      padding: 8px 18px;
      font-family: $font-family-base;
      font-size: 16px;
      font-weight: $semibold;
      color: $text-color;

      &:nth-child(2) {
        white-space: nowrap;
        text-align: center;
      }

      &:nth-child(3) {
        white-space: nowrap;
        text-align: center;
      }
    }

    th, td {
      border-bottom: 2px solid #dedddd;
      border-left: 2px solid #dedddd;

      &:first-child {
        border-left: none;
      }
    }

    tr:last-child td {
      border-bottom: none;
    }
  }

  .price-list__table-title {
    font-family: $font-family-base;
    font-size: 16px;
    font-weight: $bold;
    color: $text-color;
    margin: 0;
  }

  .price-list__table-text {
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $text-color;
    margin: 6px 0 0;
  }

  .price-list__multiselect {
    width: 230px;
    margin-right: 30px;
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $text-color;
    cursor: pointer;
    min-height: 38px;

    &:last-of-type {
      margin-right: 0;
    }

    .multiselect__tags {
      border: 2px solid #e5e5e5;
      border-radius: 8px;
      min-height: 38px;
      padding: 9px 40px 0 18px;
    }

    .multiselect__placeholder {
      padding: 0;
      margin: 0;
      font-size: 14px;
      line-height: 1.3;
    }

    .multiselect__single {
      margin: 0;
      padding: 0;
      font-size: 14px;
      line-height: 1.3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .multiselect__select {
      height: 36px;
    }

    &.multiselect--active:not(.multiselect--above) .multiselect__current,
    &.multiselect--active:not(.multiselect--above) .multiselect__input,
    &.multiselect--active:not(.multiselect--above) .multiselect__tags {
      border-radius: 8px;
    }

    .multiselect__option {
      background-color: #F6F6F6;
      border: none;
      color: $text-color;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 11px 18px;
      font-family: $font-family-base;
      font-weight: $medium;
      max-width: 230px;

      &--selected {
        .price-list__checkbox::before {
          opacity: 1;
        }
      }

      &--highlight {
        background-color: #E5E5E5;
      }
    }

    .multiselect__content-wrapper {
      border: none;
    }

    .price-list__checkbox {
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid $gray;
      border-radius: 4px;
      flex-shrink: 0;
      margin-right: 15px;
      position: relative;

      &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 2px;
        background-color: $brand-color;
        position: absolute;
        top: 3px;
        left: 3px;
        opacity: 0;
        transition: .25s opacity ease;
      }
    }

    .price-list__option-text {
      text-align: right;
      flex-grow: 1;
      white-space: normal;
    }
  }
</style>
