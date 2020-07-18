<template>
  <div class="content">
    <section class="dealers">
      <div class="dealers__wrapper">
        <h1 class="dealers__title">Поставщикам</h1>
        <div class="dealers__text-box">
          <h3>СХЕМА ВЗАИМОДЕЙСТВИЯ С ПОСТАВЩИКАМИ ООО «АГРОВИЗА»</h3>
          <ol>
            <li>Свяжитесь с нами <router-link :to="{name: 'Home', hash: '#contacts'}" @click.native="scrollFix('#contacts')" tag="a">любым удобным для вас способом</router-link></li>
            <li>Получите образцы документов для оформления договора, ТТН и Анкету поставщика в разделе <router-link :to="{name: 'Documents'}" tag="a">Документы.</router-link></li>
            <li>С текущими ценами можно ознакомиться в разделе <router-link :to="{name: 'PriceList'}" tag="a">прайс-лист</router-link></li>
            <li>Наши менеджеры оперативно свяжутся с вами по поводу поставки сельскохозяйственной продукции.</li>
          </ol>
        </div>
        <div class="dealers__gallery">
          <p class="dealers__gallery-title">Нам требуется</p>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="product-card">
                  <picture class="product-card__img-box">
                    <img src="@/assets/images/products-img1.jpg" alt="" class="product-card__img">
                  </picture>
                  <p class="product-card__name product-card__name--small">Пшеница</p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="product-card">
                  <picture class="product-card__img-box">
                    <img src="@/assets/images/products-img3.jpg" alt="" class="product-card__img">
                  </picture>
                  <p class="product-card__name product-card__name--small">Кукуруза</p>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="product-card">
                  <picture class="product-card__img-box">
                    <img src="@/assets/images/products-img3.jpg" alt="" class="product-card__img">
                  </picture>
                  <p class="product-card__name product-card__name--small">Кукуруза</p>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    name: 'Dealers',
    methods: {
      scrollFix(hashbang) {
        location.href = hashbang;
      }
    },
    mounted() {
      new Swiper(this.$el.querySelector('.swiper-container'), {
        loop: false,
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
          el: this.$el.querySelector('.swiper-pagination'),
          clickable: true,
        },
      })
    }
  }
</script>
