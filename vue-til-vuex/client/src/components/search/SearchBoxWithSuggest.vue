<template>
  <div clas="search_comm">
    <search-box :input-hndr="searchHndr" place-holder="search placeholder" />
    <transition>
      <suggest-list :suggest-list="suggestList" />
    </transition>
  </div>
</template>

<script>
import SearchBox from '@comp/search/SearchBox'
import SuggestList from '@comp/search/SuggestList'
export default {
  name: 'comp_search_box_with_suggest',
  components: {
    SearchBox,
    SuggestList
  },
  props: {
    suggestList: {
      type: Array,
      default: () => []
    },
    searchHndr: {
        type : Function,
        required : true
    }
  },
}
</script>

<style></style>
