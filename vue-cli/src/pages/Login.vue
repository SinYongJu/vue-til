<template>
  <div id="Login">
    <div>
      <label for="inputId">id</label>
      <input type="text" id="inputId" />
    </div>
    <div>
      <label for="inputPwd">password</label>
      <input type="text" id="inputPwd" />
    </div>
    <button type="button" v-on:click="login"></button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function() {
    return {
      id: '',
      pwd: ''
    }
  },
  methods: {
    login: function() {
      console.log('login')
    }
  }
}
</script>

<style></style>
