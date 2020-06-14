import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../pages/home';
import cart from '../pages/cart';
import genderOverview from "../pages/genderOverview";
import allProducts from '../pages/allProducts';

Vue.use(VueRouter);

// Router stores an array of all the routes (aka links) we'll use for the app
const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/cart/',
    name: 'cart',
    component: () => import('../pages/cart'),
  },
  {
    path: '/products/:id', // dynamic path
    name: 'product',
    component: () => import('../pages/product'),
  },
  {
    path: '/:gender/',
    name: 'gender-overview',
    component: () => import('../pages/genderOverview'),
  },
  {
    path: '/checkout/',
    name: 'checkout',
    component: () => import('../pages/checkout'),
  },
  {
    path: '/all-products/',
    name: 'all-products',
    component: () => import('../pages/allProducts'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
