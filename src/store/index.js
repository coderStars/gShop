import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)


import home from './home'
import search from './search'

// const state = {}

// const mutations = {}

// const actions = {}

// const getters = {}

export default new Vuex.Store({
  modules: {
    home,
    search
  }
})