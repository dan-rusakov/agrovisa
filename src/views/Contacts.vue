<template>
  <div class="content">
    <section class="contacts-page">
      <div class="contacts-page__wrapper">
        <h1 class="contacts-page__title">Контакты</h1>
        <p class="contacts-page__description">Главный офис компании АГРОВИЗА расположен в г. Тольятти, а обособленное подразделение в г. Ростов-на-Дону. Чтобы связаться с нашими сотрудниками, вы можете позвонить по телефону <b style="white-space: nowrap;">8 (800) 555-28-26</b> либо написать на электронную почту info@agrovisa.ru и уточнить любую интересующую вас информацию.</p>
        <div class="contacts-page__content-box">
          <div class="contacts-page__map-box">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A15d0ac972cf629e07d62754a74c869147baa07d44f21629b845d9e97802cedb5&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
          </div>
          <div class="contacts-page__text-box">
            <div class="contacts-page__region-contacts-box">
              <multiselect
                  v-model="selectedRegion"
                  :options="regions"
                  :searchable="false"
                  :close-on-select="true"
                  :show-labels="false"
                  placeholder="Регион"
                  label="name"
                  class="price-list__multiselect contacts-page__multiselect"
              >
                <template slot="option" slot-scope="props">
                  <span class="price-list__checkbox"></span>
                  <p class="price-list__option-text">{{props.option.name}}</p>
                </template>
              </multiselect>
              <template v-if="selectedRegion">
                <div class="contacts__form-text-box">
                  <p class="contacts__form-text">{{ selectedManager.name }}</p>
                </div>
                <div class="contacts__form-text-box">
                  <p class="contacts__form-mark">Телефон</p>
                  <p class="contacts__form-text">{{ selectedManager.phone }}</p>
                </div>
                <div class="contacts__form-text-box">
                  <p class="contacts__form-mark">Email</p>
                  <p class="contacts__form-text">{{ selectedManager.email }}</p>
                </div>
              </template>
              <template v-else>
                <div class="contacts__form-text-box">
                  <p class="contacts__form-text">{{ baseContacts.title }}</p>
                </div>
                <div class="contacts__form-text-box">
                  <p class="contacts__form-mark">Телефон</p>
                  <p class="contacts__form-text">{{ baseContacts.phone }}</p>
                </div>
                <div class="contacts__form-text-box">
                  <p class="contacts__form-mark">Email</p>
                  <p class="contacts__form-text">{{ baseContacts.email }}</p>
                </div>
              </template>
            </div>
            <div class="contacts__form-text-box">
              <p class="contacts__form-mark">Адрес</p>
              <p class="contacts__form-text">445140, г. Тольятти, ул. Коммунальная, 7</p>
            </div>
            <form action="/send-email" method="post" class="contacts__form" @submit.prevent="sendForm">
              <input
                  type="text"
                  class="contacts__input"
                  placeholder="Имя"
                  name="name"
                  v-model="name"
                  required
              >
              <input
                  type="text"
                  class="contacts__input"
                  placeholder="Телефон/Email"
                  name="phone-email"
                  required
                  v-model="phoneEmail"
              >
              <textarea
                  class="contacts__textarea"
                  placeholder="Сообщение"
                  name="message"
                  v-model="message"
              ></textarea>
              <button type="submit" class="contacts__submit-btn">{{ btnText }}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from "axios";
  import Multiselect from 'vue-multiselect';

  export default {
    name: 'Contacts',
    components: {
      Multiselect,
    },
    data() {
      return {
        name: null,
        phoneEmail: null,
        message: null,
        formSent: false,
        regions: [
          {
            name: 'Самарская область',
            slug: 'samarskaya_oblast',
          },
          {
            name: 'Оренбургская область',
            slug: 'orenburgskaja_oblast',
          },
          {
            name: 'Республика Татарстан',
            slug: 'respublika_tatarstan',
          },
          {
            name: 'Республика Башкирия',
            slug: 'respublika_bashkirija',
          },
        ],
        selectedRegion: null,
        baseContacts: {
          title: 'По всей России',
          phone: '8 (800) 555-28-26',
          email: 'info@agrovisa.ru ',
        },
        managers: [
          {
            name: 'Дмитрий',
            phone: '+7 939 714-55-55',
            email: 'd.kiselev@agrovisa.ru',
            region: 'samarskaya_oblast',
          },
          {
            name: 'Данила',
            phone: '+7 937 208-55-55',
            email: 'd.zoteev@agrovisa.ru',
            region: 'orenburgskaja_oblast',
          },
          {
            name: 'Кирилл',
            phone: '+7 989 702-07-87',
            email: 'k.reukov@agrovisa.ru',
            region: 'respublika_tatarstan',
          },
          {
            name: 'Владислав',
            phone: '+7 918 535-49-00',
            email: 'v.prokudin@agrovisa.ru',
            region: 'respublika_bashkirija',
          },
        ]
      }
    },
    methods: {
      sendForm() {
        axios.post('/send-email', {
          name: this.name,
          phoneEmail: this.phoneEmail,
          message: this.message,
        })
          .then(() => {
            this.formSent = true;
            this.name = null;
            this.phoneEmail = null;
            this.message = null;
          })
          .catch(error => {
            if (!error.response) {
              alert('Ошибка сети. Проверьте ваше подключение к интернету.');
              console.log(error)
            } else {
              alert(error.response.data.message || error.message);
            }
          });
      }
    },
    computed: {
      selectedManager() {
        let newManager = null;

        this.managers.forEach(manager => {
          if (manager.region === this.selectedRegion.slug) {
            newManager = manager;
          }
        });

        return newManager;
      },
      btnText() {
        return this.formSent ? 'Отправлено' : 'Отправить';
      }
    }
  }
</script>
