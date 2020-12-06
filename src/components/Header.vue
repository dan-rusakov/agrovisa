<template>
  <header class="header">
    <nav class="header__wrapper">
      <div class="header__content-box">
        <div class="header__top-line">
          <a href="tel:+79111111111" class="header__phone">{{ phone }}</a>
        </div>
        <div class="header__bottom-line">
          <ul class="header__menu">
            <li class="header__menu-item">
              <router-link :to="{name: 'Home', hash: '#about'}" @click.native="scrollFix('#about')" class="header__menu-link" tag="a">О компании</router-link>
            </li>
            <li class="header__menu-item">
              <router-link :to="{name: 'Products'}" class="header__menu-link" tag="a">Продукция</router-link>
            </li>
            <li class="header__menu-item">
              <router-link :to="{name: 'Logistics'}" class="header__menu-link" tag="a">Логистика</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="header__content-box">
        <router-link :to="{name: 'Home'}" class="header__logo-box" tag="a">
          <img src="../assets/img/logo.svg" alt="Агровиза" class="header__logo">
        </router-link>
      </div>
      <div class="header__content-box">
        <div class="header__content-box">
          <div class="header__top-line">
            <button type="button" class="header__popup-btn" @click="openCallbackPopup = true">Заказать звонок</button>
          </div>
          <div class="header__bottom-line">
            <ul class="header__menu">
              <li class="header__menu-item">
                <router-link :to="{name: 'PriceList'}" class="header__menu-link" tag="a">Прайс-лист</router-link>
              </li>
              <li class="header__menu-item">
                <router-link :to="{name: 'Dealers'}" class="header__menu-link" tag="a">Поставщикам</router-link>
              </li>
              <li class="header__menu-item">
                <router-link :to="{name: 'Contacts'}" class="header__menu-link" tag="a">Контакты</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <CallbackPopup :opened="openCallbackPopup" @close-popup="openCallbackPopup = false" />
  </header>
</template>

<script>
  import api from '../api';
  import CallbackPopup from './CallbackPopup';

  export default {
    name: 'Header',
    components: {
      CallbackPopup,
    },
    data() {
      return {
        phone: null,
        openCallbackPopup: false,
      };
    },
    methods: {
      scrollFix(hashbang) {
        location.href = hashbang;
      }
    },
    created() {
      api.getCurrentPage('contacts', (response) => {
        this.phone = response[0]?.acf.main_phone;
      });
    },
  }
</script>
