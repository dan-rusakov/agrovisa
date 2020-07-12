import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/logistics',
    name: 'Logistics',
    component: () => import(/* webpackChunkName: "logistics" */ '../views/Logistics.vue')
  },
  {
    path: '/dealers',
    name: 'Dealers',
    component: () => import(/* webpackChunkName: "dealers" */ '../views/Dealers.vue')
  },
    {
      path: '/price-list',
      name: 'PriceList',
      component: () => import(/* webpackChunkName: "price-list" */ '../views/PriceList.vue')
    },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
