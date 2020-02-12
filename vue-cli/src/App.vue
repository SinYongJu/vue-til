<template>
  <div id="app">
    <router-link to="/" tag="div" >index</router-link>
    <router-link to="/login" tag="div" >login</router-link>
    <router-link to="/home" tag="div" >home</router-link>
    <router-link to="/about" tag="div">about</router-link>
    <router-link to="/hello" tag="div">hello</router-link>
    <router-link v-bind:to="userPath" tag="div">UserInfo</router-link>
    <hr>
    <br>
    <router-view></router-view>
    <br>
    <hr>
    <CountComponent />
  </div>
</template>

<script>
import CountComponent from './components/CountComponent'

export default {
  name: 'App',
  computed:{
    userPath : function (){
      let randomId = this.randomId
      return `/user/${randomId}`
    },
    randomId : function (){
      return Math.floor(Math.random(20) * 10)
    }
  },
  components : {
    CountComponent
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height:100vh;
}
</style>
