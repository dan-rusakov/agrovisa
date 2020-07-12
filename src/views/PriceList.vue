<template>
  <div class="content">
    <section class="price-list">
      <div class="price-list__wrapper">
        <div class="price-list__filter">
          <button type="button" class="price-list__reset-btn">Сбросить фильтр</button>
          <button type="button" class="price-list__show-btn">Показать</button>
        </div>
        <div class="price-list__results">
          <div class="price-list__company-info">
            <div class="price-list__company-left-box">
              <h3 class="price-list__company-name">ООО “Компания 2”</h3>
              <p class="price-list__company-description">Область, г. Город, ул. Улица 1</p>
              <a href="" class="price-list__company-link">Основной договор</a>
              <a href="" class="price-list__company-link">Агентский договор</a>
            </div>
            <div class="price-list__company-right-box">
              <button class="price-list__contact-btn">Связаться с нами</button>
            </div>
          </div>
          <table class="price-list__result-table">
            <tr>
              <th>Продукция</th>
              <th>Цена</th>
              <th>Цена + НДС</th>
            </tr>
            <tr>
              <td>
                <p class="price-list__table-title">Продукт</p>
                <p class="price-list__table-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget venenatis risus. Maecenas malesuada nulla in urna porttitor, eget auctor quam efficitur. Praesent id est turpis. Suspendisse pretium.</p>
              </td>
              <td>12.20 р</td>
              <td>14.40 р</td>
            </tr>
            <tr>
              <td>
                <p class="price-list__table-title">Продукт</p>
                <p class="price-list__table-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget venenatis risus. Maecenas malesuada nulla in urna porttitor, eget auctor quam efficitur. Praesent id est turpis. Suspendisse pretium.</p>
              </td>
              <td>12.20 р</td>
              <td>14.40 р</td>
            </tr>
            <tr>
              <td>
                <p class="price-list__table-title">Продукт</p>
                <p class="price-list__table-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget venenatis risus. Maecenas malesuada nulla in urna porttitor, eget auctor quam efficitur. Praesent id est turpis. Suspendisse pretium.</p>
              </td>
              <td>12.20 р</td>
              <td>14.40 р</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'PriceList',
  }
</script>

<style lang="scss">
  .price-list {
    background-color: $white;
    padding: 80px 0 110px;
  }

  .price-list__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .price-list__filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 60px;
  }

  .price-list__reset-btn {
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $text-color;
    border-bottom: 1px solid $text-color;
    margin-right: 30px;
    margin-left: auto;
    outline: none;
    transition: .25s color ease, .25s border-color ease;

    &:hover, &:focus {
      color: $brand-color;
      border-color: $brand-color;
    }
  }

  .price-list__show-btn {
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $text-color;
    padding: 7px 24px;
    border: 2px solid $text-color;
    border-radius: 6px;
    outline: none;
    transition: .25s border-color ease, .25s background-color ease;

    &:hover, &:focus {
      border-color: $brand-color;
      background-color: $brand-color;
    }
  }

  .price-list__results {
    width: 100%;
  }

  .price-list__company-info {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 30px;
  }

  .price-list__company-name {
    font-family: $font-family-base;
    font-size: 28px;
    font-weight: $semibold;
    color: $text-color;
    margin: 0 0 12px;
  }

  .price-list__company-description {
    font-family: $font-family-base;
    font-size: 16px;
    font-weight: $semibold;
    color: $text-color;
    margin: 0 0 30px;
  }

  .price-list__company-link {
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $brand-color;
    margin: 0 30px 0 0;
    border-bottom: 1px solid $brand-color;
  }

  .price-list__contact-btn {
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $text-color;
    padding: 7px 24px;
    border: 2px solid $brand-color;
    border-radius: 6px;
  }

  .price-list__company-right-box {
    margin-left: auto;
  }

  .price-list__result-table {
    width: 100%;
    border-spacing: 0;
    border-radius: 6px;
    border: 2px solid #DEDDDD;

    th {
      white-space: nowrap;
      padding: 8px 18px;
      text-align: center;
    }

    td {
      background-color: #F6F6F6;
      padding: 8px 18px;
      font-family: $font-family-base;
      font-size: 16px;
      font-weight: $semibold;
      color: $text-color;

      &:nth-child(2) {
        white-space: nowrap;
        text-align: center;
      }

      &:nth-child(3) {
        white-space: nowrap;
        text-align: center;
      }
    }

    th, td {
      border-bottom: 2px solid #dedddd;
      border-left: 2px solid #dedddd;

      &:first-child {
        border-left: none;
      }
    }

    tr:last-child td {
      border-bottom: none;
    }
  }

  .price-list__table-title {
    font-family: $font-family-base;
    font-size: 16px;
    font-weight: $semibold;
    color: $text-color;
    margin: 0 0 6px;
  }

  .price-list__table-text {
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $text-color;
    margin: 0;
  }
</style>
