import Vue from 'vue';
require('./headers');
import 'vue-multiselect/dist/vue-multiselect.min.css';
import 'swiper/css/swiper.css';
import './assets/scss/app.scss';

import router from './router';
import App from './App.vue';
import store from './store';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
