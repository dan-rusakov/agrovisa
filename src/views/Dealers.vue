<template>
  <div class="content">
    <section class="dealers">
      <div class="dealers__wrapper">
        <h1 class="dealers__title">Поставщикам</h1>
        <div class="dealers__text-box">
          <h3>СХЕМА ВЗАИМОДЕЙСТВИЯ С ПОСТАВЩИКАМИ ООО «АГРОВИЗА»</h3>
          <ol>
            <li>Свяжитесь с нами <router-link :to="{name: 'Contacts'}" tag="a">любым удобным для вас способом</router-link></li>
            <li>Получите образцы документов для оформления договора, ТТН и Анкету поставщика в разделе <router-link :to="{name: 'Documents'}" tag="a">Документы.</router-link></li>
            <li>С текущими ценами можно ознакомиться в разделе <router-link :to="{name: 'PriceList'}" tag="a">прайс-лист</router-link></li>
            <li>Наши менеджеры оперативно свяжутся с вами по поводу поставки сельскохозяйственной продукции.</li>
          </ol>
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
