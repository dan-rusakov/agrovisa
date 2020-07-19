<template>
  <transition name="fade">
    <div class="callback-popup-wrapper" v-if="opened" @click="closePopup">
      <div class="callback-popup" ref="popup">
        <form class="callback-popup__content" action="/send-email" method="post" @submit.prevent="sendForm">
          <h3 class="callback-popup__title">Оставьте номер телефона</h3>
          <p class="callback-popup__description">Менеджер свяжется с вами в ближайшее время</p>
          <input type="tel" class="contacts__input" placeholder="Телефон" v-model="phone">
          <button class="contacts__submit-btn" type="submit">{{ btnText }}</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
  import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
  import axios from 'axios';

  export default {
    name: 'CallbackPopup',
    props: {
      opened: Boolean,
    },
    data() {
      return {
        phone: null,
        formSent: false,
      }
    },
    methods: {
      closePopup(evt) {
        if (!evt.target.closest('.callback-popup')) {
          this.$emit('close-popup');
        }
      },
      sendForm() {
        axios.post('/send-email', {
          phoneEmail: this.phone,
        })
          .then(() => {
            this.formSent = true;
            this.phone = null;
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
    },
    watch: {
      opened(value) {
        if (value) {
          disableBodyScroll(this.$refs.popup, {
            reserveScrollBarGap: true,
          });
        } else {
          setTimeout(() => {
            enableBodyScroll(this.$refs.popup, {
              reserveScrollBarGap: true,
            });
          });
        }
      }
    }
  }
</script>
