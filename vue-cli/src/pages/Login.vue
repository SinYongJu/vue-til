<template>
  <div id="Login">
    <div>
      <label for="inputId">id</label>
      <input v-model="id" type="text" id="inputId" />
    </div>
    <div>
      <label for="inputPwd">pwd</label>
      <input v-model="pwd" type="text" id="inputPwd" />
    </div>
    <button type="button" v-on:click="login">login</button>
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
