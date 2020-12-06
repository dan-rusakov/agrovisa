<template>
  <div class="content" v-if="content">
    <section class="dealers">
      <div class="dealers__wrapper">
        <h1 class="dealers__title">Поставщикам</h1>
        <div class="dealers__text-box" v-html="content.content.rendered" />
      </div>
    </section>
  </div>
</template>

<script>
  import api from '../api';

  export default {
    name: 'Dealers',
    data() {
      return {
        content: null,
      };
    },
    created() {
      api.getCurrentPage('dealers', (response) => {
        this.content = response[0];
      });
    }
  }
</script>
