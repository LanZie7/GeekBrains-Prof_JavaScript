// creates a Vue instance that pull together our routes(links), data(in the store)
// and base(App.vue) and tells Webpack what element to insert it into in public/index.html
import '@/styles/style.sass';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
