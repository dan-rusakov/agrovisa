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
                  <img src="../assets/img/products-img1.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Пшеница</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="../assets/img/products-img2.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Ячмень</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="../assets/img/products-img3.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Кукуруза</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="../assets/img/products-img4.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Подсолнечник</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="../assets/img/products-img5.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Соя</p>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="../assets/img/products-img6.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Рожь</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="../assets/img/products-img7.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Лен</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="../assets/img/products-img8.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Рапс</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="../assets/img/products-img9.jpg" alt="" class="product-card__img">
                </picture>
                <p class="product-card__name">Горох</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img src="../assets/img/products-img10.jpg" alt="" class="product-card__img">
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
