<template>
  <div>
    <h2>index page</h2>
    <!-- <MemberList/> -->
    <!-- suggest -->
    <search-box-with-suggest :searchHndr="searchKeyupInputHndr()" />
    <!-- //suggest -->
  </div>
</template>

<script>
import SearchBoxWithSuggest from '@comp/search/SearchBoxWithSuggest.vue'
import { createNamespacedHelpers } from 'vuex'
const {
  //  mapState,
  mapGetters,
  mapActions,
  mapMutations
} = createNamespacedHelpers('suggest/')
const debounce = (func, delay) => {
    let inDebounce = null
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}
export default {
  name: 'page-index',
  components: {
    SearchBoxWithSuggest
  },
  computed: {
    ...mapGetters(['suggestList'])
  },
  methods: {
    ...mapActions(['suggest']),
    ...mapMutations(['changeKeyword']),
    searchKeyupInputHndr() {
     return debounce(event => {
        this.changeKeyword(event.target.value)
      }, 300)
    }
  }
}
</script>

<style></style>
