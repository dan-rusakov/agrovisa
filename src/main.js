import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import 'swiper/css/swiper.css'
import './assets/css/app.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
