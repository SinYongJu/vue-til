<template>
  <div id="UserInfo">id : {{ userId }}</div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    id: String
  },
  computed: {
    userId: function() {
      return parseInt(this.id)
    }
  }
}
</script>

<style></style>
