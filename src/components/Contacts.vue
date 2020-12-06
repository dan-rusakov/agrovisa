<template>
  <section class="contacts" id="contacts">
    <iframe class="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Afe889829a44251fdf5eba9ab7b2329d8f0b0e494bf016dd0cf0cd0b315843ceb&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
    <div class="contacts__wrapper">
      <div class="contacts__form-box">
        <div class="contacts__form-text-box">
          <p class="contacts__form-mark">Адрес</p>
          <p class="contacts__form-text">{{ contacts.address }}</p>
        </div>
        <div class="contacts__form-text-box">
          <p class="contacts__form-mark">Телефон</p>
          <p class="contacts__form-text">{{ contacts.phone }}</p>
        </div>
        <div class="contacts__form-text-box">
          <p class="contacts__form-mark">Email</p>
          <p class="contacts__form-text">{{ contacts.email }}</p>
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
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Contacts',
    props: {
      contacts: Object,
    },
    data() {
      return {
        name: null,
        phoneEmail: null,
        message: null,
        formSent: false,
        feedbackAction: '/wp-json/api/feedback',
      }
    },
    methods: {
      sendForm() {
        axios.post(this.feedbackAction, {
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
      }
    }
  }
</script>
