<template>
  <div class="content">
    <section class="products-page">
      <div class="products-page__wrapper">
        <h1 class="products-page__title">Продукция</h1>
        <p class="products-page__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget venenatis risus. Maecenas malesuada nulla in urna porttitor, eget auctor quam efficitur. Praesent id est turpis. Suspendisse pretium libero fermentum ultricies sodales. Nam ut nisi pharetra, fringilla elit sed, vulputate nisi. Sed tempus, sem vel tincidunt dignissim, turpis risus iaculis ex,</p>
        <div class="products-page__gallery">
          <div class="products-page__img-box">
            <img
                :src="product.img"
                :alt="product.name"
                :class="['products-page__img', {'products-page__img--active': index === activeProductIndex}]"
                v-for="(product, index) in products"
                :key="product.id"
            >
          </div>
          <div class="products-page__product-description-box">
            <p class="products-page__product-name">{{ products[activeProductIndex].name }}</p>
            <p class="products-page__product-description">{{ products[activeProductIndex].description }}</p>
            <div class="products-page__action-box">
              <a :href="products[activeProductIndex].pricePageUrl" class="products-page__price-btn">Прайс лист</a>
              <div class="products-page__navigation-box">
                <button type="button" class="products-page__navigation-btn" @click="changeProduct(-1)">
                  <svg class="products-page__navigation-icon" width="14" height="14">
                    <use xlink:href="#icon-arrow"></use>
                  </svg>
                </button>
                <button type="button" class="products-page__navigation-btn" @click="changeProduct(+1)">
                  <svg class="products-page__navigation-icon" width="14" height="14">
                    <use xlink:href="#icon-arrow"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Products',
    data() {
      return {
        products: [
          {
            id: 1,
            img: require('@/assets/images/product-page-img1.jpg'),
            name: 'Пшеница',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget venenatis risus. Maecenas malesuada nulla in urna porttitor, eget auctor quam efficitur. Praesent id est turpis. Suspendisse pretium libero fermentum ultricies sodales. Nam ut nisi pharetra, fringilla elit sed, vulputate nisi. Sed tempus, sem vel tincidunt dignissim, turpis risus iaculis ex,',
            pricePageUrl: '#!',
          },
          {
            id: 2,
            img: require('@/assets/images/product-page-img2.jpg'),
            name: 'Ячмень',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget venenatis risus. Maecenas malesuada nulla in urna porttitor, eget auctor quam efficitur. Praesent id est turpis. Suspendisse pretium libero fermentum ultricies sodales.',
            pricePageUrl: '#!',
          },
        ],
        activeProductIndex: 0,
      }
    },
    methods: {
      changeProduct(direction) {
        let currentIndex = this.activeProductIndex;
        currentIndex += direction;

        if (currentIndex === -1) {
          currentIndex = this.products.length - 1;
        } else if (currentIndex === this.products.length) {
          currentIndex = 0;
        }

        this.activeProductIndex = currentIndex;
      }
    },
  }
</script>

<style lang="scss">
  .products-page {
    background-color: $white;
    padding: 80px 0 110px;
  }

  .products-page__wrapper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .products-page__title {
    font-family: $font-family-base;
    font-size: 52px;
    font-weight: $bold;
    color: $text-color;
    margin: 0 0 50px;
  }

  .products-page__description {
    font-family: $font-family-base;
    font-size: 18px;
    font-weight: $medium;
    color: $text-color;
    margin: 0 0 90px;
    max-width: 830px;
  }

  .products-page__gallery {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .products-page__img-box {
    width: calc(50% - 10px);
    margin-right: 20px;
    height: 280px;
    border-radius: 8px;
    overflow: hidden;
  }

  .products-page__img {
    object-fit: cover;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;

    &--active {
      opacity: 1;
      visibility: visible;
      width: 100%;
      height: 100%;
      margin: 0;
      clip: auto;
      position: relative;
    }
  }

  .products-page__product-description-box {
    width: calc(50% - 10px);
    background-color: #FFCB53;
    border-radius: 8px;
    padding: 35px 40px;
    transition: .35s height ease;
    height: 330px;
    display: flex;
    flex-direction: column;
  }

  .products-page__product-name {
    font-family: $font-family-base;
    font-size: 32px;
    font-weight: $semibold;
    color: $text-color;
    margin: 0 0 15px;
  }

  .products-page__product-description {
    font-family: $font-family-base;
    font-size: 18px;
    font-weight: $medium;
    color: $text-color;
    margin: 0 0 30px;
  }

  .products-page__action-box {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin-top: auto;
  }

  .products-page__price-btn {
    padding: 7px 24px;
    border: 2px solid $text-color;
    border-radius: 6px;
    font-family: $font-family-base;
    font-size: 14px;
    font-weight: $semibold;
    color: $text-color;
    outline: none;
    transition: .25s background-color ease;

    &:hover, &:focus {
      outline: none;
      background-color: $white;
    }
  }

  .products-page__navigation-btn {
    width: 30px;
    height: 30px;
    background-color: $white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $white;
    outline: none;
    transition: .25s border-color ease;

    &:first-child {
      margin-right: 30px;
    }

    &:last-child {
      transform: rotate(180deg);
    }

    &:hover, &:focus {
      border-color: $text-color;
    }
  }

  .products-page__navigation-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .products-page__navigation-icon {
    display: block;
    fill: $text-color;
  }
</style>
