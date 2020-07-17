<template>
  <section class="products">
    <div class="products__wrapper">
      <h2 class="products__title">Продукция</h2>
      <div class="products__gallery">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="@/assets/images/products-img1.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Пшеница</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="@/assets/images/products-img2.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Ячмень</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="@/assets/images/products-img3.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Кукуруза</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="@/assets/images/products-img4.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Подсолнечник</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="@/assets/images/products-img5.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Соя</p>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="@/assets/images/products-img6.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Рожь</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="@/assets/images/products-img7.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Лен</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="@/assets/images/products-img8.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Рапс</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="@/assets/images/products-img9.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Горох</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="@/assets/images/products-img10.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Нут</p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: 'Products',
    mounted() {
      new Swiper(this.$el.querySelector('.swiper-container'), {
        loop: false,
        slidesPerView: 5,
        spaceBetween: 40,
        navigation: {
          prevEl: this.$el.querySelector('.swiper-button-prev'),
          nextEl: this.$el.querySelector('.swiper-button-next'),
        },
      })
    }
  }
</script>

<style lang="scss">
  .products {
    background-color: $white;
    padding: 100px 0;
  }

  .products__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .products__title {
    width: 100%;
    text-align: center;
    font-family: $font-family-base;
    font-size: 34px;
    font-weight: $semibold;
    color: $text-color;
    margin: 0 0 40px;
  }

  .products__gallery {
    width: 100%;
    position: relative;
    padding: 0 70px;
  }

  .product-card__img-box {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
    border-radius: 1000px;
    overflow: hidden;
    display: block;
  }

  .product-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .product-card__name {
    font-family: $font-family-base;
    font-weight: $semibold;
    color: $text-color;
    font-size: 22px;
    margin: 20px 0 0;
    text-align: center;

    &--small {
      font-size: 18px;
      margin: 13px 0 0;
    }
  }
</style>
