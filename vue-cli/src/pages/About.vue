<template>
  <div class="About">
      <h2>About</h2>
      {{ msg }}
      <router-link to="/hello" tag="div">hello</router-link>
      <router-link to="/" tag="div">home</router-link>
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