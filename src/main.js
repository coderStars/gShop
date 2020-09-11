import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import '@/mock'


import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
Vue.config.productionTip = false

Vue.component('TypeNav', TypeNav)
Vue.component('SliderLoop', SliderLoop)
import Vuex from 'vuex'

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')
