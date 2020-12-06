import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
    {
      path: '/documents',
      name: 'Documents',
      component: () => import(/* webpackChunkName: "documents" */ '../views/Documents.vue')
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
    },
  ],
  mode: 'history',
  base: '',

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.afterEach((to) => { // (to, from)
  let body = document.querySelector('body');

  const slug = !(to.params.postSlug)
    ? to.params.pageSlug
    : to.params.postSlug;
  body.classList.add('vue--page--' + slug);
});

export default router;
