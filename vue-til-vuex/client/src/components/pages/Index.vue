<template>
  <div>
    <h2>index page</h2>
    <!-- <MemberList/> -->
    <!-- suggest -->
    <search-box-with-suggest/>
    <!-- //suggest -->
  </div>
</template>

<script>
import SearchBoxWithSuggest from '@comp/search/SearchBoxWithSuggest.vue'
export default {
  name: 'page-index',
  data(){
    return {
      keyword : ''
    }
  },
  components: {
    SearchBoxWithSuggest
  }
}
</script>

<style></style>
