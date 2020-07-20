<template>
  <div class="content">
    <section class="price-list">
      <div class="price-list__wrapper">
        <div class="price-list__filter">
          <multiselect
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
              <button class="price-list__contact-btn" @click="openCallbackPopup = true">Связаться с нами</button>
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
                <div class="price-list__table-regions">
                  <p class="price-list__table-region" v-for="region in product.regions" :key="region.slug">{{ region.name }}</p>
                </div>
                <div class="price-list__table-elevators">
                  <p class="price-list__table-elevator" v-for="elevator in product.elevators" :key="elevator.slug">{{ elevator.name }}</p>
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
  import CallbackPopup from '../components/CallbackPopup';

  export default {
    name: 'PriceList',
    components: {
      Multiselect,
      CallbackPopup,
    },
    data() {
      return {
        openCallbackPopup: false,
        regions: [
          {
            name: 'Самарская область',
            slug: 'samarskaya_oblast',
          },
          {
            name: 'Саратовская область',
            slug: 'saratovskaja_oblast',
          },
          {
            name: 'Волгоградская область',
            slug: 'volgogradskaja_oblast',
          },
          {
            name: 'Республика Татарстан',
            slug: 'respublika_tatarstan',
          },
          {
            name: 'Тамбовская область',
            slug: 'tambovskaja_oblast',
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
          },
          {
            name: 'Суровикинский элеватор',
            slug: 'surovikinskij_jelevator',
          },
          {
            name: 'Волгоградский элеватор',
            slug: 'volgogradskij_jelevator',
          },
          {
            name: 'Николаевское ХПП',
            slug: 'nikolaevskoe_hpp',
          },
          {
            name: 'Зерно Духовницка',
            slug: 'zerno_duhovnicka',
          },
          {
            name: 'Элеватор Ровное',
            slug: 'jelevator_rovnoe',
          },
          {
            name: 'Дергачевский элеватор',
            slug: 'dergachevskij_jelevator',
          },
          {
            name: 'Питерский хлеб',
            slug: 'piterskij_hleb',
          },
          {
            name: 'Новоузенский Зерновой Терминал',
            slug: 'novouzenskij_zernovoj_terminal',
          },
          {
            name: 'ЭлеваторЗерноПродукт (Михайловка)',
            slug: 'jelevatorzernoprodukt_(mihajlovka)',
          },
          {
            name: 'Новоузенское ХПП',
            slug: 'novouzenskoe_hpp',
          },
          {
            name: 'Элеватор Текэ Тау',
            slug: 'jelevator_tekje_tau',
          },
          {
            name: 'Актанышское ХПП',
            slug: 'aktanyshskoe_hpp',
          },
          {
            name: 'Набережночелнинский элеватор',
            slug: 'naberezhnochelninskij_jelevator',
          },
          {
            name: 'Платоновский элеватор',
            slug: 'platonovskij_jelevator',
          },
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
          {
            name: 'Рожь',
            slug: 'rye',
          },
        ],
        selectedProduct: null,
        products: [
          {
            id: 1,
            name: 'Пшеница фуражная',
            regions: [
              {
                name: 'Самарская область',
                slug: 'samarskaya_oblast',
              },
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Республика Татарстан',
                slug: 'respublika_tatarstan',
              },
              {
                name: 'Тамбовская область',
                slug: 'tambovskaja_oblast',
              },
            ],
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
              },
              {
                name: 'Суровикинский элеватор',
                slug: 'surovikinskij_jelevator',
              },
              {
                name: 'Волгоградский элеватор',
                slug: 'volgogradskij_jelevator',
              },
              {
                name: 'Николаевское ХПП',
                slug: 'nikolaevskoe_hpp',
              },
              {
                name: 'Зерно Духовницка',
                slug: 'zerno_duhovnicka',
              },
              {
                name: 'Элеватор Ровное',
                slug: 'jelevator_rovnoe',
              },
              {
                name: 'Дергачевский элеватор',
                slug: 'dergachevskij_jelevator',
              },
              {
                name: 'Питерский хлеб',
                slug: 'piterskij_hleb',
              },
              {
                name: 'Новоузенский Зерновой Терминал',
                slug: 'novouzenskij_zernovoj_terminal',
              },
              {
                name: 'ЭлеваторЗерноПродукт (Михайловка)',
                slug: 'jelevatorzernoprodukt_(mihajlovka)',
              },
              {
                name: 'Новоузенское ХПП',
                slug: 'novouzenskoe_hpp',
              },
              {
                name: 'Элеватор Текэ Тау',
                slug: 'jelevator_tekje_tau',
              },
              {
                name: 'Актанышское ХПП',
                slug: 'aktanyshskoe_hpp',
              },
              {
                name: 'Набережночелнинский элеватор',
                slug: 'naberezhnochelninskij_jelevator',
              },
              {
                name: 'Платоновский элеватор',
                slug: 'platonovskij_jelevator',
              },
            ],
            type: 'wheat',
          },
          {
            id: 2,
            name: 'Пшеница 5 класс',
            description: 'Год урожая 2020, клейковина 14, ИДК 100, клоп до 6, протеин ≥ 10,5%, ЧП ≥ 190, натура 720, фузариоз до 1%, семена подсолнечника ≤0,5%, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            regions: [
              {
                name: 'Самарская область',
                slug: 'samarskaya_oblast',
              },
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Республика Татарстан',
                slug: 'respublika_tatarstan',
              },
              {
                name: 'Тамбовская область',
                slug: 'tambovskaja_oblast',
              },
            ],
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
              },
              {
                name: 'Суровикинский элеватор',
                slug: 'surovikinskij_jelevator',
              },
              {
                name: 'Волгоградский элеватор',
                slug: 'volgogradskij_jelevator',
              },
              {
                name: 'Николаевское ХПП',
                slug: 'nikolaevskoe_hpp',
              },
              {
                name: 'Дергачевский элеватор',
                slug: 'dergachevskij_jelevator',
              },
              {
                name: 'Питерский хлеб',
                slug: 'piterskij_hleb',
              },
              {
                name: 'Новоузенский Зерновой Терминал',
                slug: 'novouzenskij_zernovoj_terminal',
              },
              {
                name: 'ЭлеваторЗерноПродукт (Михайловка)',
                slug: 'jelevatorzernoprodukt_(mihajlovka)',
              },
              {
                name: 'Новоузенское ХПП',
                slug: 'novouzenskoe_hpp',
              },
              {
                name: 'Элеватор Текэ Тау',
                slug: 'jelevator_tekje_tau',
              },
              {
                name: 'Актанышское ХПП',
                slug: 'aktanyshskoe_hpp',
              },
              {
                name: 'Набережночелнинский элеватор',
                slug: 'naberezhnochelninskij_jelevator',
              },
              {
                name: 'Платоновский элеватор',
                slug: 'platonovskij_jelevator',
              },
            ],
            type: 'wheat',
          },
          {
            id: 3,
            name: 'Пшеница 5 класс',
            description: 'Год урожая 2020, клейковина 14, ИДК 100, клоп до 6, протеин ≥ 10,5%, ЧП ≥ 190, натура 720, фузариоз до 1%, семена подсолнечника ≤0,5%, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 10000,
            price_vat: 11000,
            regions: [
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Зерно Духовницка',
                slug: 'zerno_duhovnicka',
              },
              {
                name: 'Элеватор Ровное',
                slug: 'jelevator_rovnoe',
              },
            ],
            type: 'wheat',
          },
          {
            id: 4,
            name: 'Пшеница 4 класс, протеин 11,5',
            description: 'Год урожая 2020, клейковина 18, ИДК 95, клоп до 5, протеин ≥ 11,5%, ЧП ≥ 200, натура 730, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            regions: [
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Тамбовская область',
                slug: 'tambovskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Суровикинский элеватор',
                slug: 'surovikinskij_jelevator',
              },
              {
                name: 'Дергачевский элеватор',
                slug: 'dergachevskij_jelevator',
              },
              {
                name: 'Питерский хлеб',
                slug: 'piterskij_hleb',
              },
              {
                name: 'Новоузенский Зерновой Терминал',
                slug: 'novouzenskij_zernovoj_terminal',
              },
              {
                name: 'ЭлеваторЗерноПродукт (Михайловка)',
                slug: 'jelevatorzernoprodukt_(mihajlovka)',
              },
              {
                name: 'Новоузенское ХПП',
                slug: 'novouzenskoe_hpp',
              },
              {
                name: 'Платоновский элеватор',
                slug: 'platonovskij_jelevator',
              },
            ],
            type: 'wheat',
          },
          {
            id: 5,
            name: 'Пшеница 4 класс, протеин 11,5',
            description: 'Год урожая 2020, клейковина 18, ИДК 95, клоп до 5, протеин ≥ 11,5%, ЧП ≥ 200, натура 730, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 11400,
            price_vat: 12540,
            regions: [
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Самарская область',
                slug: 'samarskaya_oblast',
              },
            ],
            elevators: [
              {
                name: 'Волгоградский элеватор',
                slug: 'volgogradskij_jelevator',
              },
              {
                name: 'Николаевское ХПП',
                slug: 'nikolaevskoe_hpp',
              },
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
              },
            ],
            type: 'wheat',
          },
          {
            id: 6,
            name: 'Пшеница 4 класс, протеин 11,5',
            description: 'Год урожая 2020, клейковина 18, ИДК 95, клоп до 5, протеин ≥ 11,5%, ЧП ≥ 200, натура 730, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 10600,
            price_vat: 11660,
            regions: [
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Зерно Духовницка',
                slug: 'zerno_duhovnicka',
              },
              {
                name: 'Элеватор Ровное',
                slug: 'jelevator_rovnoe',
              },
            ],
            type: 'wheat',
          },
          {
            id: 7,
            name: 'Пшеница 4 класс, протеин 11,5',
            description: 'Год урожая 2020, клейковина 18, ИДК 95, клоп до 5, протеин ≥ 11,5%, ЧП ≥ 200, натура 730, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 10200,
            price_vat: 11220,
            regions: [
              {
                name: 'Республика Татарстан',
                slug: 'respublika_tatarstan',
              },
            ],
            elevators: [
              {
                name: 'Элеватор Текэ Тау',
                slug: 'jelevator_tekje_tau',
              },
              {
                name: 'Актанышское ХПП',
                slug: 'aktanyshskoe_hpp',
              },
              {
                name: 'Набережночелнинский элеватор',
                slug: 'naberezhnochelninskij_jelevator',
              },
            ],
            type: 'wheat',
          },
          {
            id: 8,
            name: 'Пшеница 4 класс, протеин 12,5',
            description: 'Год урожая 2020, клейковина 18, ИДК 95, клоп до 5, протеин ≥ 11,5%, ЧП ≥ 200, натура 730, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            regions: [
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Тамбовская область',
                slug: 'tambovskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Суровикинский элеватор',
                slug: 'surovikinskij_jelevator',
              },
              {
                name: 'Дергачевский элеватор',
                slug: 'dergachevskij_jelevator',
              },
              {
                name: 'Питерский хлеб',
                slug: 'piterskij_hleb',
              },
              {
                name: 'Новоузенский Зерновой Терминал',
                slug: 'novouzenskij_zernovoj_terminal',
              },
              {
                name: 'ЭлеваторЗерноПродукт (Михайловка)',
                slug: 'jelevatorzernoprodukt_(mihajlovka)',
              },
              {
                name: 'Новоузенское ХПП',
                slug: 'novouzenskoe_hpp',
              },
              {
                name: 'Платоновский элеватор',
                slug: 'platonovskij_jelevator',
              },
            ],
            type: 'wheat',
          },
          {
            id: 9,
            name: 'Пшеница 4 класс, протеин 12,5',
            description: 'Год урожая 2020, клейковина 18, ИДК 95, клоп до 5, протеин ≥ 11,5%, ЧП ≥ 200, натура 730, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 11500,
            price_vat: 12650,
            regions: [
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Волгоградский элеватор',
                slug: 'volgogradskij_jelevator',
              },
              {
                name: 'Николаевское ХПП',
                slug: 'nikolaevskoe_hpp',
              },
            ],
            type: 'wheat',
          },
          {
            id: 10,
            name: 'Пшеница 4 класс, протеин 12,5',
            description: 'Год урожая 2020, клейковина 18, ИДК 95, клоп до 5, протеин ≥ 11,5%, ЧП ≥ 200, натура 730, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 10800,
            price_vat: 11880,
            regions: [
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Зерно Духовницка',
                slug: 'zerno_duhovnicka',
              },
              {
                name: 'Элеватор Ровное',
                slug: 'jelevator_rovnoe',
              },
            ],
            type: 'wheat',
          },
          {
            id: 11,
            name: 'Пшеница 4 класс, протеин 12,5',
            description: 'Год урожая 2020, клейковина 18, ИДК 95, клоп до 5, протеин ≥ 11,5%, ЧП ≥ 200, натура 730, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 10600,
            price_vat: 11660,
            regions: [
              {
                name: 'Самарская область',
                slug: 'samarskaya_oblast',
              },
            ],
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
              },
            ],
            type: 'wheat',
          },
          {
            id: 12,
            name: 'Пшеница 4 класс, протеин 12,5',
            description: 'Год урожая 2020, клейковина 18, ИДК 95, клоп до 5, протеин ≥ 11,5%, ЧП ≥ 200, натура 730, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 10400,
            price_vat: 11440,
            regions: [
              {
                name: 'Республика Татарстан',
                slug: 'respublika_tatarstan',
              },
            ],
            elevators: [
              {
                name: 'Элеватор Текэ Тау',
                slug: 'jelevator_tekje_tau',
              },
              {
                name: 'Актанышское ХПП',
                slug: 'aktanyshskoe_hpp',
              },
              {
                name: 'Набережночелнинский элеватор',
                slug: 'naberezhnochelninskij_jelevator',
              },
            ],
            type: 'wheat',
          },
          {
            id: 13,
            name: 'Пшеница 3 класс, протеин 13,5',
            description: 'Год урожая 2020, клейковина 23, ИДК 90, клоп до 2, протеин ≥ 13,5%, ЧП ≥ 280, натура 750, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            regions: [
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Тамбовская область',
                slug: 'tambovskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Суровикинский элеватор',
                slug: 'surovikinskij_jelevator',
              },
              {
                name: 'Дергачевский элеватор',
                slug: 'dergachevskij_jelevator',
              },
              {
                name: 'Питерский хлеб',
                slug: 'piterskij_hleb',
              },
              {
                name: 'Новоузенский Зерновой Терминал',
                slug: 'novouzenskij_zernovoj_terminal',
              },
              {
                name: 'ЭлеваторЗерноПродукт (Михайловка)',
                slug: 'jelevatorzernoprodukt_(mihajlovka)',
              },
              {
                name: 'Новоузенское ХПП',
                slug: 'novouzenskoe_hpp',
              },
              {
                name: 'Платоновский элеватор',
                slug: 'platonovskij_jelevator',
              },
            ],
            type: 'wheat',
          },
          {
            id: 14,
            name: 'Пшеница 3 класс, протеин 13,5',
            description: 'Год урожая 2020, клейковина 23, ИДК 90, клоп до 2, протеин ≥ 13,5%, ЧП ≥ 280, натура 750, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 11800,
            price_vat: 12980,
            regions: [
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Самарская область',
                slug: 'samarskaya_oblast',
              },
            ],
            elevators: [
              {
                name: 'Волгоградский элеватор',
                slug: 'volgogradskij_jelevator',
              },
              {
                name: 'Николаевское ХПП',
                slug: 'nikolaevskoe_hpp',
              },
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
              },
            ],
            type: 'wheat',
          },
          {
            id: 15,
            name: 'Пшеница 3 класс, протеин 13,5',
            description: 'Год урожая 2020, клейковина 23, ИДК 90, клоп до 2, протеин ≥ 13,5%, ЧП ≥ 280, натура 750, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 11000,
            price_vat: 12100,
            regions: [
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Зерно Духовницка',
                slug: 'zerno_duhovnicka',
              },
              {
                name: 'Элеватор Ровное',
                slug: 'jelevator_rovnoe',
              },
            ],
            type: 'wheat',
          },
          {
            id: 16,
            name: 'Пшеница 3 класс, протеин 13,5',
            description: 'Год урожая 2020, клейковина 23, ИДК 90, клоп до 2, протеин ≥ 13,5%, ЧП ≥ 280, натура 750, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            price: 10600,
            price_vat: 11660,
            regions: [
              {
                name: 'Республика Татарстан',
                slug: 'respublika_tatarstan',
              },
            ],
            elevators: [
              {
                name: 'Элеватор Текэ Тау',
                slug: 'jelevator_tekje_tau',
              },
              {
                name: 'Актанышское ХПП',
                slug: 'aktanyshskoe_hpp',
              },
              {
                name: 'Набережночелнинский элеватор',
                slug: 'naberezhnochelninskij_jelevator',
              },
            ],
            type: 'wheat',
          },
          {
            id: 17,
            name: 'Пшеница 3 класс, протеин 14,5',
            description: 'Год урожая 2020, клейковина 23, ИДК 90, клоп до 2, протеин ≥ 14,5%, ЧП ≥ 280, натура 760, примесь др. злаковых культур ≤ 5%, пшеница др. типа ≤ 20%',
            regions: [
              {
                name: 'Самарская область',
                slug: 'samarskaya_oblast',
              },
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Республика Татарстан',
                slug: 'respublika_tatarstan',
              },
              {
                name: 'Тамбовская область',
                slug: 'tambovskaja_oblast',
              },
            ],
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
              },
              {
                name: 'Суровикинский элеватор',
                slug: 'surovikinskij_jelevator',
              },
              {
                name: 'Волгоградский элеватор',
                slug: 'volgogradskij_jelevator',
              },
              {
                name: 'Николаевское ХПП',
                slug: 'nikolaevskoe_hpp',
              },
              {
                name: 'Зерно Духовницка',
                slug: 'zerno_duhovnicka',
              },
              {
                name: 'Элеватор Ровное',
                slug: 'jelevator_rovnoe',
              },
              {
                name: 'Дергачевский элеватор',
                slug: 'dergachevskij_jelevator',
              },
              {
                name: 'Питерский хлеб',
                slug: 'piterskij_hleb',
              },
              {
                name: 'Новоузенский Зерновой Терминал',
                slug: 'novouzenskij_zernovoj_terminal',
              },
              {
                name: 'ЭлеваторЗерноПродукт (Михайловка)',
                slug: 'jelevatorzernoprodukt_(mihajlovka)',
              },
              {
                name: 'Новоузенское ХПП',
                slug: 'novouzenskoe_hpp',
              },
              {
                name: 'Элеватор Текэ Тау',
                slug: 'jelevator_tekje_tau',
              },
              {
                name: 'Актанышское ХПП',
                slug: 'aktanyshskoe_hpp',
              },
              {
                name: 'Набережночелнинский элеватор',
                slug: 'naberezhnochelninskij_jelevator',
              },
              {
                name: 'Платоновский элеватор',
                slug: 'platonovskij_jelevator',
              },
            ],
            type: 'wheat',
          },
          {
            id: 18,
            name: 'Ячмень',
            description: 'Год урожая 2020, натура ≥ 600, влажность ≤ 14,5%, сорная примесь ≤ 2%, фузариоз до 0,2%, семена подсолнечника не более 0,5%, зерновая примесь до 10%',
            regions: [
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Тамбовская область',
                slug: 'tambovskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Суровикинский элеватор',
                slug: 'surovikinskij_jelevator',
              },
              {
                name: 'Дергачевский элеватор',
                slug: 'dergachevskij_jelevator',
              },
              {
                name: 'Питерский хлеб',
                slug: 'piterskij_hleb',
              },
              {
                name: 'Новоузенский Зерновой Терминал',
                slug: 'novouzenskij_zernovoj_terminal',
              },
              {
                name: 'ЭлеваторЗерноПродукт (Михайловка)',
                slug: 'jelevatorzernoprodukt_(mihajlovka)',
              },
              {
                name: 'Новоузенское ХПП',
                slug: 'novouzenskoe_hpp',
              },
              {
                name: 'Платоновский элеватор',
                slug: 'platonovskij_jelevator',
              },
            ],
            type: 'barley',
          },
          {
            id: 19,
            name: 'Ячмень',
            description: 'Год урожая 2020, натура ≥ 600, влажность ≤ 14,5%, сорная примесь ≤ 2%, фузариоз до 0,2%, семена подсолнечника не более 0,5%, зерновая примесь до 10%',
            price: 9500,
            price_vat: 10450,
            regions: [
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Волгоградский элеватор',
                slug: 'volgogradskij_jelevator',
              },
              {
                name: 'Николаевское ХПП',
                slug: 'nikolaevskoe_hpp',
              },
            ],
            type: 'barley',
          },
          {
            id: 20,
            name: 'Ячмень',
            description: 'Год урожая 2020, натура ≥ 600, влажность ≤ 14,5%, сорная примесь ≤ 2%, фузариоз до 0,2%, семена подсолнечника не более 0,5%, зерновая примесь до 10%',
            price: 9300,
            price_vat: 10230,
            regions: [
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Зерно Духовницка',
                slug: 'zerno_duhovnicka',
              },
              {
                name: 'Элеватор Ровное',
                slug: 'jelevator_rovnoe',
              },
            ],
            type: 'barley',
          },
          {
            id: 21,
            name: 'Ячмень',
            description: 'Год урожая 2020, натура ≥ 600, влажность ≤ 14,5%, сорная примесь ≤ 2%, фузариоз до 0,2%, семена подсолнечника не более 0,5%, зерновая примесь до 10%',
            price: 9000,
            price_vat: 9900,
            regions: [
              {
                name: 'Самарская область',
                slug: 'samarskaya_oblast',
              },
            ],
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
              },
            ],
            type: 'barley',
          },
          {
            id: 22,
            name: 'Ячмень',
            description: 'Год урожая 2020, натура ≥ 600, влажность ≤ 14,5%, сорная примесь ≤ 2%, фузариоз до 0,2%, семена подсолнечника не более 0,5%, зерновая примесь до 10%',
            price: 8800,
            price_vat: 9680,
            regions: [
              {
                name: 'Республика Татарстан',
                slug: 'respublika_tatarstan',
              },
            ],
            elevators: [
              {
                name: 'Элеватор Текэ Тау',
                slug: 'jelevator_tekje_tau',
              },
              {
                name: 'Актанышское ХПП',
                slug: 'aktanyshskoe_hpp',
              },
              {
                name: 'Набережночелнинский элеватор',
                slug: 'naberezhnochelninskij_jelevator',
              },
            ],
            type: 'barley',
          },
          {
            id: 23,
            name: 'Кукуруза',
            description: 'Год урожая 2020, влажность 14,5%, сорная примесь до 2%, семена подсолнечника ≤ 0,5%, битые ≤ 5%, поврежденные ≤ 5%, поврежденные сушкой ≤ 2%, амброзия max. 10 шт на кг',
            regions: [
              {
                name: 'Самарская область',
                slug: 'samarskaya_oblast',
              },
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Республика Татарстан',
                slug: 'respublika_tatarstan',
              },
              {
                name: 'Тамбовская область',
                slug: 'tambovskaja_oblast',
              },
            ],
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
              },
              {
                name: 'Суровикинский элеватор',
                slug: 'surovikinskij_jelevator',
              },
              {
                name: 'Волгоградский элеватор',
                slug: 'volgogradskij_jelevator',
              },
              {
                name: 'Николаевское ХПП',
                slug: 'nikolaevskoe_hpp',
              },
              {
                name: 'Зерно Духовницка',
                slug: 'zerno_duhovnicka',
              },
              {
                name: 'Элеватор Ровное',
                slug: 'jelevator_rovnoe',
              },
              {
                name: 'Дергачевский элеватор',
                slug: 'dergachevskij_jelevator',
              },
              {
                name: 'Питерский хлеб',
                slug: 'piterskij_hleb',
              },
              {
                name: 'Новоузенский Зерновой Терминал',
                slug: 'novouzenskij_zernovoj_terminal',
              },
              {
                name: 'ЭлеваторЗерноПродукт (Михайловка)',
                slug: 'jelevatorzernoprodukt_(mihajlovka)',
              },
              {
                name: 'Новоузенское ХПП',
                slug: 'novouzenskoe_hpp',
              },
              {
                name: 'Элеватор Текэ Тау',
                slug: 'jelevator_tekje_tau',
              },
              {
                name: 'Актанышское ХПП',
                slug: 'aktanyshskoe_hpp',
              },
              {
                name: 'Набережночелнинский элеватор',
                slug: 'naberezhnochelninskij_jelevator',
              },
              {
                name: 'Платоновский элеватор',
                slug: 'platonovskij_jelevator',
              },
            ],
            type: 'corn',
          },
          {
            id: 24,
            name: 'Рожь',
            description: '1-2 группа',
            regions: [
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Тамбовская область',
                slug: 'tambovskaja_oblast',
              },
            ],
            elevators: [
              {
                name: 'Суровикинский элеватор',
                slug: 'surovikinskij_jelevator',
              },
              {
                name: 'Дергачевский элеватор',
                slug: 'dergachevskij_jelevator',
              },
              {
                name: 'Питерский хлеб',
                slug: 'piterskij_hleb',
              },
              {
                name: 'Новоузенский Зерновой Терминал',
                slug: 'novouzenskij_zernovoj_terminal',
              },
              {
                name: 'ЭлеваторЗерноПродукт (Михайловка)',
                slug: 'jelevatorzernoprodukt_(mihajlovka)',
              },
              {
                name: 'Новоузенское ХПП',
                slug: 'novouzenskoe_hpp',
              },
              {
                name: 'Платоновский элеватор',
                slug: 'platonovskij_jelevator',
              },
            ],
            type: 'rye',
          },
          {
            id: 25,
            name: 'Рожь',
            description: '1-2 группа',
            price: 8500,
            price_vat: 9350,
            regions: [
              {
                name: 'Самарская область',
                slug: 'samarskaya_oblast',
              },
              {
                name: 'Саратовская область',
                slug: 'saratovskaja_oblast',
              },
              {
                name: 'Волгоградская область',
                slug: 'volgogradskaja_oblast',
              },
              {
                name: 'Республика Татарстан',
                slug: 'respublika_tatarstan',
              },
            ],
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
              },
              {
                name: 'Волгоградский элеватор',
                slug: 'volgogradskij_jelevator',
              },
              {
                name: 'Николаевское ХПП',
                slug: 'nikolaevskoe_hpp',
              },
              {
                name: 'Зерно Духовницка',
                slug: 'zerno_duhovnicka',
              },
              {
                name: 'Элеватор Ровное',
                slug: 'jelevator_rovnoe',
              },
              {
                name: 'Элеватор Текэ Тау',
                slug: 'jelevator_tekje_tau',
              },
              {
                name: 'Актанышское ХПП',
                slug: 'aktanyshskoe_hpp',
              },
              {
                name: 'Набережночелнинский элеватор',
                slug: 'naberezhnochelninskij_jelevator',
              },
            ],
            type: 'rye',
          },
        ]
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
          productsList = productsList.filter(item => item.regions.some(region => region.slug === this.selectedRegion.slug));
        }

        if (this.selectedElevator) {
          productsList = productsList.filter(item => item.elevators.some(elevator => elevator.slug === this.selectedElevator.slug));
        }

        if (this.selectedProduct) {
          productsList = productsList.filter(item => item.type === this.selectedProduct.slug);
        }

        return productsList;
      },
      sortedRegions() {
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
    }
  }
</script>
