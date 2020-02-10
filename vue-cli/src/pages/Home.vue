<template>
  <div class="Home">
      <h2>Home</h2>
      {{ msg }}
      <router-link to="/home" tag="div">home</router-link>
      <router-link to="/about" tag="div">about</router-link>
  </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        msg: String
    }
}
</script>

<style>
    #Home{}
</style>