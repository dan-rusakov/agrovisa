<template>
  <section class="about" id="about">
    <div class="about__wrapper">
      <h2 class="about__title">О компании</h2>
      <div class="about__text-box" v-html="content" />
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    name: 'About',
    props: {
      content: String,
    },
    mounted() {
      new Swiper(this.$el.querySelector('.swiper-container'), {
        loop: true,
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
