<template>
  <div class="content" v-if="content">
    <section class="logistics-page">
      <div class="logistics-page__wrapper">
        <h1 class="logistics-page__title">Логистика</h1>
        <div class="logistics-page__description-box" v-html="content.content.rendered" />
      </div>
    </section>
  </div>
</template>

<script>
  import api from '../api';

  export default {
    name: 'Logistics',
    data() {
      return {
        content: null,
      };
    },
    created() {
      api.getCurrentPage('logistics', (response) => {
        this.content = response[0];
      });
    }
  }
</script>
