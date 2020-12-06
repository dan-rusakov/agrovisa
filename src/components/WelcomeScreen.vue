<template>
  <section class="welcome-screen">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slider" :key="index">
          <div class="welcome-screen__slide"
               :style="{backgroundImage: `url(${slide.background.url})`}">
            <p class="welcome-screen__slide-title">{{ slide.title }}</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    name: 'WelcomeScreen',
    props: {
      slider: Array,
    },
    mounted() {
      new Swiper(this.$el.querySelector('.swiper-container'), {
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: this.$el.querySelector('.swiper-pagination'),
          clickable: true,
        },
        speed: 500,
        autoplay: {
          delay: 5000,
        },
      })
    }
  }
</script>
