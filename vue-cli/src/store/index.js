import vue from 'vue'
import vuex from 'vuex'
import modules from './modules'

vue.use(vuex)

const store = new vuex.Store({
  // options
  strict: true,
  // modules
  modules
})

export default store
