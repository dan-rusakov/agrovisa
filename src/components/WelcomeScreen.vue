<template>
  <section class="welcome-screen">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="welcome-screen__slide"
               :style="{backgroundImage: `url(${require('@/assets/images/welcome-screen-img1.jpg')})`}">
            <p class="welcome-screen__slide-title">Закупка и экспорт сельскохозяйственной продукции</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="welcome-screen__slide"
               :style="{backgroundImage: `url(${require('@/assets/images/welcome-screen-img1.jpg')})`}">
            <p class="welcome-screen__slide-title">Закупка и экспорт сельскохозяйственной продукции</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="welcome-screen__slide"
               :style="{backgroundImage: `url(${require('@/assets/images/welcome-screen-img1.jpg')})`}">
            <p class="welcome-screen__slide-title">Закупка и экспорт сельскохозяйственной продукции</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/css/swiper.css';

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

<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .welcome-screen {
    height: calc(100vh - 106px);
  }

  .welcome-screen__slide {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(360deg, rgba(47, 47, 47, 0.58) 0%, rgba(47, 47, 47, 0) 100%);
      z-index: -1;
    }
  }

  .welcome-screen__slide-title {
    font-family: $font-family-base;
    font-weight: $bold;
    color: $white;
    font-size: 62px;
    margin: 0;
    max-width: 700px;
    text-align: center;
    line-height: 1.2;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: $white;
    border-radius: 10px;
    opacity: 1;
    border: 2px solid transparent;
    position: relative;

    &::before {
      content: '';
      width: 32px;
      height: 32px;
      display: block;
      position: absolute;
      top: calc(50% - 16px);
      left: calc(50% - 16px);
    }

    &-active {
      border-color: $brand-color;
    }
  }

  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 10px;
  }

  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 30px;
  }

  .swiper-button-prev:after, .swiper-button-next:after {
    font-size: 34px;
  }

  .swiper-button-prev, .swiper-button-next {
    color: $text-color;
    outline: none;
    transition: .25s opacity ease;

    &:hover, &:focus {
      opacity: 0.6;
    }
  }

  .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled {
    color: #C4C4C4;
    opacity: 1;
  }

  .swiper-button-prev {
    left: 0;
    top: 56px;
    margin: 0;
  }

  .swiper-button-next {
    right: 0;
    top: 56px;
    margin: 0;
  }
</style>
