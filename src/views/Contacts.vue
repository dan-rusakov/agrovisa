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
                  class="price-list__multiselect"
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
  import 'vue-multiselect/dist/vue-multiselect.min.css';

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

<style lang="scss">
  .contacts-page {
    background-color: $white;
    padding: 80px 0 110px;
  }

  .contacts-page__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contacts-page__title {
    font-family: $font-family-base;
    font-size: 52px;
    font-weight: $bold;
    color: $text-color;
    margin: 0 0 50px;
    width: 100%;
    text-align: center;
  }

  .contacts-page__description {
    font-family: $font-family-base;
    font-weight: $medium;
    font-size: 18px;
    color: $text-color;
    margin: 0 0 80px;
    max-width: 830px;
  }

  .contacts-page__content-box {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr max-content;
    grid-column-gap: 100px;
  }

  .contacts-page__map-box {
    width: 100%;
  }

  .contacts-page__text-box {
    width: 380px;
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
    margin-bottom: 30px;

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

  .contacts-page__region-contacts-box {
    border-bottom: 2px solid #C4C4C4;
    margin-bottom: 35px;
    padding-bottom: 15px;
  }
</style>
