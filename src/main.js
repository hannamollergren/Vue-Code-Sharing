import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import axios from 'axios' 

Vue.use(VueRouter, axios);

const router = new VueRouter({
	routes: Routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
