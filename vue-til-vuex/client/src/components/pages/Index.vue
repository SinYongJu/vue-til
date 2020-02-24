<template>
  <div>
    <h2>index page</h2>
    <MemberList/>
  </div>
</template>

<script>
import MemberList from '@comp/memberList/MemberList.vue'
export default {
  name: 'page-index',
  components: {
    MemberList
  }
}
</script>

<style></style>
