import vue from 'vue'
import vuex from 'vuex'
import countState from './modules/count'

vue.use(vuex)

const countStore = {
  namespaced: true,
  ...countState
}
const store = new vuex.Store({
  strict: true,
  namespaced: true,
  modules: {
    countStore
  }
})

export default store
