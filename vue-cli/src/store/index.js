import vue from 'vue'
import vuex from 'vuex'
import countStore from './modules/countStore'

vue.use(vuex)

export const STORE_NAMES = {
  COUNT_STORE: 'countStore'
}

const store = new vuex.Store({
  strict: true,
  modules: {
    [STORE_NAMES.COUNT_STORE]: countStore
  }
})

export default store
