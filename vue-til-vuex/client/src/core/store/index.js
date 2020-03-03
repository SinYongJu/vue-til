import Vue from 'vue'
import Vuex from 'vuex'

import members from './modules/members'
import suggest from './modules/suggest'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    members,
    suggest
  }
})

export default store
