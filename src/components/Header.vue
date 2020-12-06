<template>
  <header class="header">
    <nav class="header__wrapper">
      <div class="header__content-box">
        <a :href="`tel:${formattedPhone}`" class="header__phone">{{ phone }}</a>
        <ul class="header__menu">
          <li class="header__menu-item">
            <router-link
              :to="{name: 'Home', hash: '#about'}"
              @click.native="scrollFix('#about')"
              class="header__menu-link"
              tag="a"
            >О компании</router-link>
          </li>
          <li class="header__menu-item">
            <router-link :to="{name: 'Products'}" class="header__menu-link" tag="a">Продукция</router-link>
          </li>
          <li class="header__menu-item">
            <router-link :to="{name: 'Logistics'}" class="header__menu-link" tag="a">Логистика</router-link>
          </li>
        </ul>
        <button type="button" class="header__popup-btn header__popup-btn--tablet" @click="openCallbackPopup = true">Заказать звонок</button>
      </div>
      <div class="header__content-box">
        <router-link :to="{name: 'Home'}" class="header__logo-box" tag="a">
          <img src="../assets/img/logo.svg" alt="Агровиза" class="header__logo">
        </router-link>
      </div>
      <div class="header__content-box">
        <button type="button" class="header__popup-btn" @click="openCallbackPopup = true">Заказать звонок</button>
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
        <button
          :class="['header__burger', {'header__burger--active': mobileMenuIsOpen}]"
          aria-label="Открыть меню"
          type="button"
          @click="mobileMenuIsOpen = !mobileMenuIsOpen"
        >
          <span class="header__burger-line"></span>
        </button>
      </div>
    </nav>
    <CallbackPopup :opened="openCallbackPopup" @close-popup="openCallbackPopup = false" />
    <transition name="fade">
      <div class="header__mobile-menu-box" v-if="mobileMenuIsOpen">
        <ul class="header__mobile-menu">
          <li class="header__mobile-menu-item">
            <router-link
              :to="{name: 'Home', hash: '#about'}"
              class="header__mobile-menu-url"
              tag="a"
              @click.native="mobileMenuClickHandler('#about')"
            >О компании</router-link>
          </li>
          <li class="header__mobile-menu-item">
            <router-link
              :to="{name: 'Products'}"
              class="header__mobile-menu-url"
              tag="a"
              @click="mobileMenuClickHandler"
            >Продукция</router-link>
          </li>
          <li class="header__mobile-menu-item">
            <router-link
              :to="{name: 'Logistics'}"
              class="header__mobile-menu-url"
              tag="a"
              @click="mobileMenuClickHandler"
            >Логистика</router-link>
          </li>
          <li class="header__mobile-menu-item">
            <router-link
              :to="{name: 'PriceList'}"
              class="header__mobile-menu-url"
              tag="a"
              @click="mobileMenuClickHandler"
            >Прайс-лист</router-link>
          </li>
          <li class="header__mobile-menu-item">
            <router-link
              :to="{name: 'Dealers'}"
              class="header__mobile-menu-url"
              tag="a"
              @click="mobileMenuClickHandler"
            >Поставщикам</router-link>
          </li>
          <li class="header__mobile-menu-item">
            <router-link
              :to="{name: 'Contacts'}"
              class="header__mobile-menu-url"
              tag="a"
              @click="mobileMenuClickHandler"
            >Контакты</router-link>
          </li>
        </ul>
      </div>
    </transition>
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
        mobileMenuIsOpen: false,
      };
    },
    methods: {
      scrollFix(hashbang) {
        location.href = hashbang;
      },
      mobileMenuClickHandler(hashbang) {
        this.mobileMenuIsOpen = false;

        if (hashbang) {
          this.scrollFix(hashbang);
        }
      },
    },
    created() {
      api.getCurrentPage('contacts', (response) => {
        this.phone = response[0]?.acf.main_phone;
      });
    },
    computed: {
      formattedPhone() {
        return this.phone ? this.phone.replace(/[ ()—-]/g, '') : '';
      },
    },
  }
</script>
