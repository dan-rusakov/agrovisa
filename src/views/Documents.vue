<template>
  <div class="content">
    <section class="documents">
      <div class="documents__wrapper">
        <h1 class="documents__title">Документы</h1>
        <div class="documents__list">
          <a href="#!" class="document">
            <h4 class="document__name">Sed tempus sem</h4>
            <p class="document__text">Sed tempus sem dolor sit amet turpis</p>
            <p class="document__format">XLS</p>
            <svg class="document__icon" width="16" height="16">
              <use xlink:href="#icon-download"></use>
            </svg>
          </a>
          <a href="#!" class="document">
            <h4 class="document__name">Sed tempus sem</h4>
            <p class="document__text">Sed tempus sem dolor sit amet turpis</p>
            <p class="document__format">DOC</p>
            <svg class="document__icon" width="16" height="16">
              <use xlink:href="#icon-download"></use>
            </svg>
          </a>
          <a href="#!" class="document">
            <h4 class="document__name">Sed tempus sem</h4>
            <p class="document__text">Sed tempus sem dolor sit amet turpis</p>
            <p class="document__format">XLS</p>
            <svg class="document__icon" width="16" height="16">
              <use xlink:href="#icon-download"></use>
            </svg>
          </a>
          <a href="#!" class="document">
            <h4 class="document__name">Sed tempus sem</h4>
            <p class="document__text">Sed tempus sem dolor sit amet turpis</p>
            <p class="document__format">DOCX</p>
            <svg class="document__icon" width="16" height="16">
              <use xlink:href="#icon-download"></use>
            </svg>
          </a>
          <a href="#!" class="document">
            <h4 class="document__name">Sed tempus sem</h4>
            <p class="document__text">Sed tempus sem dolor sit amet turpis</p>
            <p class="document__format">DOC</p>
            <svg class="document__icon" width="16" height="16">
              <use xlink:href="#icon-download"></use>
            </svg>
          </a>
          <a href="#!" class="document">
            <h4 class="document__name">Sed tempus sem</h4>
            <p class="document__text">Sed tempus sem dolor sit amet turpis</p>
            <p class="document__format">XLS</p>
            <svg class="document__icon" width="16" height="16">
              <use xlink:href="#icon-download"></use>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Documents',
  }
</script>

<style lang="scss">
  .documents {
    background-color: $white;
    padding: 80px 0 110px;
  }

  .documents__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .documents__title {
    font-family: $font-family-base;
    font-size: 52px;
    font-weight: $bold;
    color: $text-color;
    margin: 0 0 50px;
    width: 100%;
    text-align: center;
  }

  .documents__list {
    display: grid;
    grid-template-columns: repeat(5, 190px);
    justify-content: space-between;
    align-items: start;
    width: 100%;
    grid-row-gap: 30px;
  }

  .document {
    background-color: $white;
    border: 2px solid #DEDEDE;
    border-radius: 8px;
    padding: 12px 16px 9px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    position: relative;
    outline: none;
    transition: .25s border-color ease;

    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: -10px;
      right: -11px;
      border-color: transparent #fff transparent transparent;
      border-style: solid;
      border-width: 0 41px 41px 0;
    }

    &::after {
      content: '';
      border-color: transparent transparent #DEDEDE #DEDEDE;
      border-style: solid;
      border-width: 12px;
      border-radius: 0 0 0 7px;
      position: absolute;
      right: -2px;
      top: -2px;
      width: 0;
      height: 0;
      transition: .25s border-color ease;
    }

    &:hover, &:focus {
      border-color: $brand-color;
      outline: none;

      &::after {
        border-color: transparent transparent $brand-color $brand-color;
      }
    }
  }

  .document__name {
    font-family: $font-family-base;
    font-weight: $semibold;
    font-size: 16px;
    color: $text-color;
    margin: 0 0 4px;
  }

  .document__text {
    font-family: $font-family-base;
    font-weight: $medium;
    font-size: 14px;
    color: $text-color;
    margin: 0 0 15px;
  }

  .document__format {
    font-family: $font-family-base;
    font-weight: $semibold;
    font-size: 12px;
    color: $text-color;
    text-transform: uppercase;
  }

  .document__icon {
    display: block;
    margin-left: auto;

  }
</style>
