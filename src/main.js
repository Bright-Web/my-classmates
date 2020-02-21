import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import Coolness from './components/anton/Coolness'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [ 
  {
    name: "Coolness",
    path: "/coolness",
    component: Coolness
  }
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
