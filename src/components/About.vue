<template>
  <section class="about" id="about">
    <div class="about__wrapper">
      <h2 class="about__title">О компании</h2>
      <div class="about__text-box">
        <p>
          Агровиза была создана в 2020 году для закупки и продажи сельскохозяйственной продукции на внутреннем рынке
          России и экспорта в страны ближнего и дальнего зарубежья.
        </p>
        <p>
          Компания сотрудничает с поставщиками из разных регионов России и стремится предложить им оптимальные
          закупочные цены, удобные схемы работы и оплаты, автомобильный и железнодорожный транспорт, который доставит
          груз по назначению в полной сохранности и точно в срок.
        </p>
        <p>
          Продукция, с которой работает Агровиза - это пшеница, кукуруза, ячмень, бобовые и масличные культуры. Прием
          товара на элеваторе, обработка документов, отправка груза за рубеж происходит быстро, что давно уже оценили
          многие фермерские и крестьянские хозяйства - поставщики зерна и сельхозпродукции.
        </p>
      </div>
      <div class="about__gallery-box">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <article class="person-card">
                <picture class="person-card__img-box">
                  <img src="@/assets/images/person-card-img.jpg" alt="" class="person-card__img">
                </picture>
                <p class="person-card__post">Должность</p>
                <strong class="person-card__name">Фамилия Имя Отчество</strong>
                <p class="person-card__description">Тел./факс: +7-(8482)-11-11-11</p>
              </article>
            </div>
            <div class="swiper-slide">
              <article class="person-card">
                <picture class="person-card__img-box">
                  <img src="@/assets/images/person-card-img.jpg" alt="" class="person-card__img">
                </picture>
                <p class="person-card__post">Должность</p>
                <strong class="person-card__name">Фамилия Имя Отчество</strong>
                <p class="person-card__description">Тел./факс: +7-(8482)-11-11-11</p>
              </article>
            </div>
            <div class="swiper-slide">
              <article class="person-card">
                <picture class="person-card__img-box">
                  <img src="@/assets/images/person-card-img.jpg" alt="" class="person-card__img">
                </picture>
                <p class="person-card__post">Должность</p>
                <strong class="person-card__name">Фамилия Имя Отчество</strong>
                <p class="person-card__description">Тел./факс: +7-(8482)-11-11-11</p>
              </article>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/css/swiper.css';

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

<style lang="scss">
  .about {
    background-color: $white;
    padding: 100px 0;
  }

  .about__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .about__title {
    width: 100%;
    text-align: center;
    font-family: $font-family-base;
    font-size: 34px;
    font-weight: $semibold;
    color: $text-color;
    margin: 0 0 40px;
  }

  .about__text-box {
    width: calc(100% - 484px);

    p {
      font-family: $font-family-base;
      font-size: 18px;
      color: $text-color;
      font-weight: $medium;
      margin: 0 0 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .about__gallery-box {
    width: 368px;
    margin-left: 116px;
  }

  .person-card {
    margin-bottom: 50px;
  }

  .about__gallery-box .swiper-pagination-fraction,
  .about__gallery-box .swiper-pagination-custom,
  .about__gallery-box .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0;
  }

  .about__gallery-box .swiper-pagination-bullet {
    background-color: #e5e5e5;

    &-active {
      background-color: $white;
    }
  }

  .person-card__img-box {
    width: 100%;
    padding-bottom: 125%;
    margin-bottom: 22px;
    display: block;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
  }

  .person-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .person-card__post {
    font-family: $font-family-base;
    font-weight: $semibold;
    font-size: 12px;
    color: $gray;
    margin: 0 0 8px;
  }

  .person-card__name {
    font-family: $font-family-base;
    font-weight: $bold;
    font-size: 16px;
    color: $text-color;
    margin: 0 0 8px;
    display: block;
  }

  .person-card__description {
    font-family: $font-family-base;
    font-weight: $medium;
    font-size: 12px;
    color: $gray;
    margin: 0;
  }
</style>
