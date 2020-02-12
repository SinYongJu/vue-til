import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const countStore = {}

const store = new vuex.Store({
  modules: {
    countStore: countStore
  }
})

export default store
