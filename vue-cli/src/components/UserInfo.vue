<template>
  <div id="UserInfo">
    id : {{ id }}
    
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    id: Number
  },
  computed : {

  }
}
</script>

<style>
#UserInfo {
}
</style>
