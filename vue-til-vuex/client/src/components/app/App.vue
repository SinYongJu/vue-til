<template>
  <div id="app">
    <h1>Hello Vue~?!!</h1>
     <ul>
      <router-link to="/" tag="li">Index</router-link>
      <router-link to="/detail/" tag="li">detail</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
}
</style>
