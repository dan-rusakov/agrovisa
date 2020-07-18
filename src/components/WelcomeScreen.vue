<template>
  <section class="welcome-screen">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="welcome-screen__slide"
               :style="{backgroundImage: `url(${require('@/assets/images/welcome-screen-img1.jpg')})`}">
            <p class="welcome-screen__slide-title">Закупка и продажа сельскохозяйственной продукции</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="welcome-screen__slide"
               :style="{backgroundImage: `url(${require('@/assets/images/welcome-screen-img1.jpg')})`}">
            <p class="welcome-screen__slide-title">Экспорт сельскохозяйственной продукции</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="welcome-screen__slide"
               :style="{backgroundImage: `url(${require('@/assets/images/welcome-screen-img1.jpg')})`}">
            <p class="welcome-screen__slide-title">Перевозки сельскохозяйственной продукции</p>
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
    mounted() {
      new Swiper(this.$el.querySelector('.swiper-container'), {
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: this.$el.querySelector('.swiper-pagination'),
          clickable: true,
        },
      })
    }
  }
</script>
