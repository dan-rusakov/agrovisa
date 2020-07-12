<template>
  <section class="contacts" id="contacts">
    <iframe class="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Afe889829a44251fdf5eba9ab7b2329d8f0b0e494bf016dd0cf0cd0b315843ceb&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
    <div class="contacts__wrapper">
      <div class="contacts__form-box">
        <div class="contacts__form-text-box">
          <p class="contacts__form-mark">Адрес</p>
          <p class="contacts__form-text">445000, г. Тольятти, ул. Юбилейная, 19</p>
        </div>
        <div class="contacts__form-text-box">
          <p class="contacts__form-mark">Телефон</p>
          <p class="contacts__form-text">+7-(8482)-11-11-11</p>
        </div>
        <div class="contacts__form-text-box">
          <p class="contacts__form-mark">Email</p>
          <p class="contacts__form-text">mail@agrovisa.ru</p>
        </div>
        <form action="/" method="post" class="contacts__form">
          <input type="text" class="contacts__input" placeholder="Имя">
          <input type="text" class="contacts__input" placeholder="Телефон/Email">
          <textarea name="message" class="contacts__textarea" placeholder="Сообщение"></textarea>
          <button type="submit" class="contacts__submit-btn">Отправить</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Contacts',
  }
</script>

<style lang="scss">
  .contacts {
    position: relative;
    height: 65vh;
  }

  .contacts__map {
    position: absolute;
    top: 0;
    left: 0;
  }

  .contacts__form-box {
    width: 430px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(47, 47, 47, 0.15);
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: $white;
    padding: 25px;
    pointer-events: all;
  }

  .contacts__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
    pointer-events: none;
  }

  .contacts__form-text-box {
    margin-bottom: 20px;
  }

  .contacts__form-mark {
    font-family: $font-family-base;
    font-weight: $semibold;
    font-size: 14px;
    color: $gray;
    margin: 0 0 2px;
  }

  .contacts__form-text {
    font-family: $font-family-base;
    font-weight: $semibold;
    font-size: 18px;
    color: $text-color;
    margin: 0;
  }

  .contacts__input {
    width: 100%;
    padding: 7px 12px;
    border: 2px solid #C4C4C4;
    border-radius: 6px;
    font-family: $font-family-base;
    font-size: 14px;
    color: $text-color;
    margin-bottom: 20px;
    outline: none;
    transition: .25s border-color ease;

    &::placeholder {
      color: $gray;
    }

    &:hover, &:focus {
      border-color: $brand-color;
    }
  }

  .contacts__textarea {
    width: 100%;
    padding: 7px 12px;
    border: 2px solid #C4C4C4;
    border-radius: 6px;
    font-family: $font-family-base;
    font-size: 14px;
    color: $text-color;
    margin-bottom: 20px;
    outline: none;
    transition: .25s border-color ease;
    resize: none;

    &::placeholder {
      color: $gray;
    }

    &:hover, &:focus {
      border-color: $brand-color;
    }
  }

  .contacts__submit-btn {
    padding: 7px 24px;
    border: 2px solid $brand-color;
    font-family: $font-family-base;
    font-weight: $semibold;
    color: $text-color;
    border-radius: 6px;
    background-color: $white;
    outline: none;
    transition: .25s background-color ease;

    &:hover, &:focus {
      background-color: $brand-color;
    }
  }

  .contacts__form {
    margin-top: 40px;
  }
</style>
