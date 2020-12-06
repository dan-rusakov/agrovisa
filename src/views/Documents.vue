<template>
  <div class="content" v-if="acf">
    <section class="documents">
      <div class="documents__wrapper">
        <h1 class="documents__title">Документы</h1>
        <div class="documents__list">
          <a
              :href="document.document.url"
              class="document"
              v-for="(document, index) in acf.documents"
              :key="index"
              target="_blank"
          >
            <h4 class="document__name">{{ document.name }}</h4>
            <p class="document__text">{{ document.description }}</p>
            <p class="document__format">{{ document.document.subtype }}</p>
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
  import api from '../api';

  export default {
    name: 'Documents',
    data() {
      return {
        acf: null,
      };
    },
    created() {
      api.getCurrentPage('documents', (response) => {
        this.acf = response[0]?.acf;
      });
    }
  }
</script>
