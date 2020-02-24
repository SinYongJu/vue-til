import Vue from 'vue'
import Vuex from 'vuex'

import members from './modules/members'

Vue.use(Vuex)

const store = new Vuex.store({
  modules: {
    members
  }
})

export default store
