<template>
  <div class="content" v-if="acf">
    <section class="products-page">
      <div class="products-page__wrapper">
        <h1 class="products-page__title">Продукция</h1>
        <div class="products-page__description" v-html="acf.page_description" />
        <div class="products-page__gallery">
          <div class="products-page__img-box">
            <img
                :src="product.image.url"
                :alt="product.name"
                :class="['products-page__img', {'products-page__img--active': index === activeProductIndex}]"
                v-for="(product, index) in acf.products"
                :key="index"
            >
          </div>
          <div class="products-page__product-description-box">
            <p class="products-page__product-name">{{ acf.products[activeProductIndex].name }}</p>
            <div
                class="products-page__product-description"
                v-html="acf.products[activeProductIndex].description"
            />
            <div class="products-page__action-box">
              <router-link
                  :to="{name: 'PriceList'}"
                  class="products-page__price-btn"
                  tag="a"
              >Прайс-лист</router-link>
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
  import api from '../api';

  export default {
    name: 'Products',
    data() {
      return {
        acf: null,
        activeProductIndex: 0,
      }
    },
    created() {
      api.getCurrentPage('products', (response) => {
        this.acf = response[0]?.acf;
      });
    },
    methods: {
      changeProduct(direction) {
        let currentIndex = this.activeProductIndex;
        currentIndex += direction;

        if (currentIndex === -1) {
          currentIndex = this.acf.products.length - 1;
        } else if (currentIndex === this.acf.products.length) {
          currentIndex = 0;
        }

        this.activeProductIndex = currentIndex;
      }
    },
  }
</script>
