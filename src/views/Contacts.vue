<template>
  <div class="content" v-if="acf">
    <section class="contacts-page">
      <div class="contacts-page__wrapper">
        <h1 class="contacts-page__title">Контакты</h1>
        <div class="contacts-page__description" v-html="content.content.rendered"/>
        <div class="contacts-page__content-box">
          <div class="contacts-page__map-box">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A15d0ac972cf629e07d62754a74c869147baa07d44f21629b845d9e97802cedb5&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
          </div>
          <div class="contacts-page__text-box">
            <div class="contacts-page__region-contacts-box">
              <multiselect
                  v-model="selectedRegion"
                  :options="sortedRegions"
                  :searchable="false"
                  :close-on-select="true"
                  :show-labels="false"
                  placeholder="Регион"
                  label="region"
                  class="price-list__multiselect contacts-page__multiselect"
              >
                <template slot="option" slot-scope="props">
                  <span class="price-list__checkbox"></span>
                  <p class="price-list__option-text">{{ props.option.region }}</p>
                </template>
              </multiselect>
              <template v-if="selectedRegion">
                <div class="contacts__form-text-box">
                  <p class="contacts__form-text">{{ selectedRegion.person_name }}</p>
                </div>
                <div class="contacts__form-text-box">
                  <p class="contacts__form-mark">Телефон</p>
                  <p class="contacts__form-text">{{ selectedRegion.phone }}</p>
                </div>
                <div class="contacts__form-text-box">
                  <p class="contacts__form-mark">Email</p>
                  <p class="contacts__form-text">{{ selectedRegion.email }}</p>
                </div>
              </template>
              <template v-else>
                <div class="contacts__form-text-box">
                  <p class="contacts__form-text">По всей России</p>
                </div>
                <div class="contacts__form-text-box">
                  <p class="contacts__form-mark">Телефон</p>
                  <p class="contacts__form-text">{{ acf.main_phone }}</p>
                </div>
                <div class="contacts__form-text-box">
                  <p class="contacts__form-mark">Email</p>
                  <p class="contacts__form-text">{{ acf.main_email }}</p>
                </div>
              </template>
            </div>
            <div class="contacts__form-text-box">
              <p class="contacts__form-mark">Адрес</p>
              <p class="contacts__form-text">{{ acf.main_address }}</p>
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
  import axios from 'axios';
  import Multiselect from 'vue-multiselect';
  import api from '../api';

  export default {
    name: 'Contacts',
    components: {
      Multiselect,
    },
    data() {
      return {
        acf: null,
        content: null,
        selectedRegion: null,
        name: null,
        phoneEmail: null,
        message: null,
        formSent: false,
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
      btnText() {
        return this.formSent ? 'Отправлено' : 'Отправить';
      },
      sortedRegions() {
        const newRegions = JSON.parse(JSON.stringify(this.acf.contacts));

        return newRegions.sort(function(a, b) {
          const regionA = a.region.toLowerCase();
          const regionB = b.region.toLowerCase();

          if (regionA < regionB) {
            return -1;
          }

          if (regionA > regionB) {
            return 1;
          }

          return 0;
        })
      }
    },
    created() {
      api.getCurrentPage('contacts', (response) => {
        this.content = response[0];
        this.acf = response[0]?.acf;
      });
    },
  }
</script>
