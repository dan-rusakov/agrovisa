<template>
  <section class="about" id="about">
    <div class="about__wrapper">
      <h2 class="about__title">О компании</h2>
      <div class="about__text-box">
        <p>
          <b>ООО «АГРОВИЗА»</b> – молодая и стремительно развивающаяся российская компания. Основное направление нашей деятельности связано с закупкой и продажей сельскохозяйственной продукции на внутреннем рынке России и экспортом в страны ближнего и дальнего зарубежья.
        </p>
        <p>
          Головной офис компании расположен в г. Тольятти, но мы также открыли обособленное подразделение в г. Ростов-на-Дону, что позволяет эффективно взаимодействовать с сельхозтоваропроизводителями, перевозчиками, хранителями зерна и покупателями по всей территории страны.
        </p>
        <p>
          Сельскохозяйственные культуры, которые закупает <b>АГРОВИЗА</b> - пшеница, кукуруза, ячмень, бобовые и масличные. Актуальный прайс-лист со всеми доступными базисами поставки можно увидеть на вкладке <router-link :to="{name: 'PriceList'}" tag="a">«Прайс-лист»</router-link>
        </p>
        <p>
          Наша компания всегда открыта сотрудничеству с поставщиками с/х продукции из разных регионов России. Мы предлагаем оптимальные закупочные цены, удобные схемы работы, четкое соблюдение сроков оплаты и оперативное сопровождение всех своих поставок. <b>АГРОВИЗА</b> настроена на долгосрочные партнерские отношения, поэтому к каждому поставщику мы подходим индивидуально – готовы рассмотреть различные варианты условий поставки и оплаты.
        </p>
        <p>
          В партнёрскую инфраструктуру <b>АГРОВИЗА</b> входят такие производственно-логистические комплексы, как линейные и портовые элеваторы на малой воде, транспортные операторы, таможенные брокеры и другие специализированные подразделения, что позволяет оперативно и в полном объеме сопровождать все наши поставки.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    name: 'About',
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
