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
  import 'swiper/css/swiper.css';

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

<style lang="scss">
  .dealers {
    background-color: $white;
    padding: 80px 0 110px;
  }

  .dealers__wrapper {
    max-width: 986px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .dealers__title {
    font-family: $font-family-base;
    font-size: 52px;
    font-weight: $bold;
    color: $text-color;
    margin: 0 0 50px;
    width: 100%;
    text-align: center;
  }

  .dealers__text-box {
    width: calc(100% - 370px);
    margin-right: 100px;

    p {
      font-family: $font-family-base;
      font-weight: $medium;
      font-size: 18px;
      color: $text-color;
      margin: 0 0 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    h2, h3 {
      font-family: $font-family-base;
      font-weight: $semibold;
      font-size: 22px;
      color: $text-color;
      margin: 0 0 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul, ol {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    li {
      font-family: $font-family-base;
      font-weight: $medium;
      font-size: 18px;
      color: $text-color;
      display: list-item;
      list-style-position: inside;
    }

    a {
      font-family: $font-family-base;
      font-weight: $medium;
      font-size: 18px;
      color: $brand-color;
      border-bottom: 1px solid $brand-color;
    }
  }

  .dealers__gallery {
    width: 270px;
  }

  .dealers__gallery .product-card {
    margin-bottom: 50px;
  }

  .dealers__gallery .swiper-pagination-fraction,
  .dealers__gallery .swiper-pagination-custom,
  .dealers__gallery .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0;
  }

  .dealers__gallery .swiper-pagination-bullet {
    background-color: #e5e5e5;

    &-active {
      background-color: $white;
    }
  }

  .dealers__gallery-title {
    font-family: $font-family-base;
    font-size: 22px;
    color: $text-color;
    font-weight: $semibold;
    margin: 0 0 20px;
    text-align: center;
  }
</style>
