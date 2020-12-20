<template>
  <section class="products">
    <div class="products__wrapper">
      <h2 class="products__title">Продукция</h2>
      <div class="products__gallery">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(product, index) in products" :key="index">
              <div class="product-card">
                <picture class="product-card__img-box">
                  <img :src="product.image.url" :alt="product.title" class="product-card__img">
                </picture>
                <p class="product-card__name">{{ product.title }}</p>
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
    props: {
      products: Array,
    },
    mounted() {
      new Swiper(this.$el.querySelector('.swiper-container'), {
        loop: false,
        slidesPerView: 5,
        spaceBetween: 40,
        navigation: {
          prevEl: this.$el.querySelector('.swiper-button-prev'),
          nextEl: this.$el.querySelector('.swiper-button-next'),
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          481: {
            slidesPerView: 2,
          },
          601: {
            slidesPerView: 3,
          },
          769: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        },
      })
    }
  }
</script>
