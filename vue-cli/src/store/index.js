import vue from 'vue'
import vuex from 'vuex'
import { modules, STORE_NAMES } from './modules'

vue.use(vuex)

const store = new vuex.Store({
  // options
  strict: true,
  // modules
  modules
})

const getStoreByNamespace = namespace => {
  const { mapState, mapGetters, mapMutations, mapActions } = vuex.createNamespacedHelpers(namespace)
  return {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  }
}

export { store, getStoreByNamespace, STORE_NAMES }
