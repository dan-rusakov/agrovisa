<template>
  <div class="content">
    <section class="logistics-page">
      <div class="logistics-page__wrapper">
        <h1 class="logistics-page__title">Логистика</h1>
        <div class="logistics-page__description-box">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget venenatis risus. Maecenas malesuada nulla in urna porttitor, eget auctor quam efficitur. Praesent id est turpis. Suspendisse pretium libero fermentum ultricies sodales. Nam ut nisi pharetra, fringilla elit sed, vulputate nisi. Sed tempus, sem vel tincidunt dignissim, turpis risus iaculis ex.</p>
          <h3>Lorem ipsum dolor </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget venenatis risus. Maecenas malesuada nulla in urna porttitor, eget auctor quam efficitur.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget venenatis risus. Maecenas malesuada nulla in urna porttitor, eget auctor quam efficitur. Praesent id est turpis. Suspendisse pretium.</p>
          <h3>Sed tempus sem vel risus ex</h3>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Praesent id est turpis</li>
            <li>Maecenas malesuada nulla in urna porttitor</li>
          </ol>
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
