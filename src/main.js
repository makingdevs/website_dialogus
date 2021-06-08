import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'coach/css/plugins.css'
import 'coach/search/search.css'
import 'coach/quform/css/base.css'
import 'coach/css/styles.css'
import 'coach/css/custom.css'

import jQuery from 'jquery'
window.jQuery = jQuery

import 'coach/js/jquery.min.js'
import 'coach/js/popper.min.js'
//import 'coach/search/search.js'
//import 'coach/js/nav-menu.js'
import './assets/js/search.js'
import './assets/js/nav-menu.js'
import 'coach/js/easy.responsive.tabs.js'
//import 'coach/js/owl.carousel.js'
import 'coach/js/jquery.counterup.min.js'
//import 'coach/js/jquery.stellar.min.js'
import 'coach/js/waypoints.min.js'
import 'coach/js/countdown.js'




Vue.use(VueRouter)
import { rtdbPlugin } from 'vuefire'
Vue.use(rtdbPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
