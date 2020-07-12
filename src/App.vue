<template>
  <div id="app">
    <header class="header">
      <nav class="header__wrapper">
        <div class="header__content-box">
          <div class="header__top-line">
            <a href="tel:+79111111111" class="header__phone">+7 (911) 111-11-11</a>
          </div>
          <div class="header__bottom-line">
            <ul class="header__menu">
              <li class="header__menu-item">
                <a href="#!" class="header__menu-link">О компании</a>
              </li>
              <li class="header__menu-item">
                <a href="#!" class="header__menu-link">Продукция</a>
              </li>
              <li class="header__menu-item">
                <a href="#!" class="header__menu-link">Логистика</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="header__content-box">
          <a href="#!" class="header__logo-box">
            <img src="./assets/images/logo.png" alt="Агровиза" class="header__logo">
          </a>
        </div>
        <div class="header__content-box">
          <div class="header__content-box">
            <div class="header__top-line">
              <button type="button" class="header__popup-btn">Вход</button>
              <button type="button" class="header__popup-btn">Заказать звонок</button>
            </div>
            <div class="header__bottom-line">
              <ul class="header__menu">
                <li class="header__menu-item">
                  <a href="#!" class="header__menu-link">О компании</a>
                </li>
                <li class="header__menu-item">
                  <a href="#!" class="header__menu-link">Продукция</a>
                </li>
                <li class="header__menu-item">
                  <a href="#!" class="header__menu-link">Логистика</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <router-view/>
    <footer class="footer">
      <div class="footer__wrapper">
        <a href="#!" class="footer__logo-box">
          <img src="./assets/images/logo.png" alt="Агровиза" class="footer__img">
        </a>
        <div class="footer__text-box">
          <p class="footer__text">Вся информация на сайте носит справочный характер и не является публичной офертой, определяемой статьей 437 ГК РФ</p>
          <p class="footer__text">© 2020 ООО «Агровиза»</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
  .header {
    background-color: $white;
    padding: 20px 0 18px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: 2;
  }

  .header__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
  }

  .header__content-box {
    display: flex;
    flex-direction: column;
  }

  .header__phone {
    font-size: 16px;
    display: block;
    font-family: $font-family-base;
    font-weight: $semibold;
    color: $text-color;
    margin: 0;
    text-decoration: none;
    outline: none;
    transition: .25s color ease;

    &:hover, &:focus {
      color: $brand-color;
      outline: none;
    }
  }

  .header__menu {
    padding: 0;
    margin: 0;
  }

  .header__menu-item {
    display: inline-block;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  .header__menu-link {
    font-family: $font-family-base;
    font-weight: $semibold;
    color: $text-color;
    font-size: 18px;
    margin: 0;
    text-decoration: none;
    outline: none;
    transition: .25s color ease;

    &:hover, &:focus {
      color: $brand-color;
      outline: none;
    }
  }

  .header__top-line {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 18px;
  }

  .header__popup-btn {
    font-family: $font-family-base;
    font-weight: $semibold;
    color: $text-color;
    font-size: 16px;
    padding: 0 3px;
    border-bottom: 1px solid $text-color;
    margin-right: 20px;
    outline: none;
    transition: .25s color ease, .25s border-color ease;

    &:first-child {
      margin-left: auto;
    }

    &:last-child {
      margin-right: 0;
    }

    &:hover, &:focus {
      border-color: $brand-color;
      color: $brand-color;
    }
  }

  .footer {
    width: 100%;
    background-color: $white;
    padding: 38px 0;
    box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.05);
  }

  .footer__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
  }

  .footer__text-box {
    max-width: 460px;
    margin-left: auto;
    text-align: right;
  }

  .footer__text {
    font-family: $font-family-base;
    font-weight: $semibold;
    color: $text-color;
    font-size: 14px;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
