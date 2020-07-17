<template>
  <div class="content">
    <section class="logistics-page">
      <div class="logistics-page__wrapper">
        <h1 class="logistics-page__title">Логистика</h1>
        <div class="logistics-page__description-box">
          <p>АГРОВИЗА – молодая и стремительно развивающаяся российская компания. Основное направление нашей деятельности связано с закупкой и продажей сельскохозяйственной продукции на внутреннем рынке России и экспортом в страны ближнего и дальнего зарубежья.</p>
          <p>В партнёрскую инфраструктуру компании входят такие производственно-логистические комплексы, как линейные и портовые элеваторы на малой воде, транспортные операторы, таможенные брокеры и другие специализированные подразделения, что позволяет оперативно и в полном объеме сопровождать все наши поставки. </p>
          <p>Кроме этого, АГРОВИЗА также осуществляет перевозки сельскохозяйственной продукции собственным парком автомобильного транспорта, который доставит груз по назначению в полной сохранности и точно в срок.</p>
          <h3>ПЯТЬ ПРЕИМУЩЕСТВ НАШИХ ПЕРЕВОЗОК:</h3>
          <ol>
            <li>Оптимальные гибкие условия поставок сельскохозяйственных культур</li>
            <li>Наработанные логистические схемы использования наземного, речного и морского транспорта</li>
            <li>Строгое соблюдение договорных обязательств, особенно в пунктах, касающихся сроков и условий поставки</li>
            <li>Постоянное документальное и информационное сопровождение всех наших поставок и оперативное взаимодействие с покупателем.</li>
            <li>Лояльные цены на продукцию на условиях FOB</li>
          </ol>
          <p><b>Если вам необходимо перевезти сельскохозяйственную продукцию не беспокоясь о срывах сроков и безопасности перевозки – мы всегда готовы порадовать вас чётко организованной поставкой!</b></p>
          <p>Также, АГРОВИЗА всегда открыта для любых предложений о поставках и партнёрстве. Мы готовы заключать договора на перевозку наземным, речным и морским транспортом на следующих условиях:</p>
          <p><a href="#!">Коммерческое предложение с расценками на перевозку с/х продукции (для Т/Х до 3000 тн) </a></p>
          <p><a href="#!">Коммерческое предложение с расценками на перевозку с/х продукции (для Т/Х свыше 3000 тн) </a></p>
          <h3>В СЛУЧАЕ ВАШЕЙ ЗАИНТЕРЕСОВАННОСТИ, ПРОСИМ ОБРАЩАТЬСЯ:</h3>
          <p>8 (800) 555-28-26</p>
          <p>Павлова Ольга, 8 (917) 126-08-88, logist@agrovisa.ru</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Logistics',
  }
</script>

<style lang="scss">
  .logistics-page {
    background-color: $white;
    padding: 80px 0 110px;
  }

  .logistics-page__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logistics-page__title {
    font-family: $font-family-base;
    font-size: 52px;
    font-weight: $bold;
    color: $text-color;
    margin: 0 0 50px;
  }

  .logistics-page__description-box {
    max-width: 830px;

    p {
      font-family: $font-family-base;
      font-weight: $medium;
      font-size: 18px;
      color: $text-color;
      margin: 0 0 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    h2, h3 {
      font-family: $font-family-base;
      font-weight: $semibold;
      font-size: 22px;
      color: $text-color;
      margin: 0 0 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul, ol {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    li {
      font-family: $font-family-base;
      font-weight: $medium;
      font-size: 18px;
      color: $text-color;
      display: list-item;
      list-style-position: inside;
    }

    a {
      font-family: $font-family-base;
      font-weight: $medium;
      font-size: 18px;
      color: $brand-color;
      border-bottom: 1px solid $brand-color;
    }
  }
</style>
