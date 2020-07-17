<template>
  <section class="advantages">
    <div class="advantages__wrapper">
      <div class="advantage">
        <svg class="advantage__icon" width="78" height="78">
          <use xlink:href="#icon-award"></use>
        </svg>
        <p class="advantage__text">Оптимальные закупочные цены</p>
      </div>
      <div class="advantage">
        <svg class="advantage__icon" width="78" height="78">
          <use xlink:href="#icon-weight"></use>
        </svg>
        <p class="advantage__text">Различные варианты условий поставки и оплаты</p>
      </div>
      <div class="advantage">
        <svg class="advantage__icon" width="78" height="78">
          <use xlink:href="#icon-cargo"></use>
        </svg>
        <p class="advantage__text">Широкая сеть элеваторов-партнеров</p>
      </div>
      <div class="advantage">
        <svg class="advantage__icon" width="78" height="78">
          <use xlink:href="#icon-planet"></use>
        </svg>
        <p class="advantage__text">Работаем по всей территории России</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Advantages',
  }
</script>

<style lang=scss>
  .advantages {
    background-color: #F6F6F6;
    padding: 50px 0;
  }

  .advantages__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
  }

  .advantage {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .advantage__icon {
    display: block;
    margin-right: 18px;
    flex-shrink: 0;
  }

  .advantage__text {
    font-family: $font-family-base;
    font-weight: $semibold;
    font-size: 18px;
    color: $text-color;
    margin: 0;
    max-width: 160px;
  }
</style>
