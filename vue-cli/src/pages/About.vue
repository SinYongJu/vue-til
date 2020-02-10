<template>
  <div class="About">
      <h2>About</h2>
      {{ msg }}
      <router-link to="/home" tag="div">home</router-link>
      <router-link to="/about" tag="div">about</router-link>
  </div>
</template>

<script>
export default {
    name: 'About',
    props: {
        msg: String
    }
}
</script>

<style>
    #About{}
</style>