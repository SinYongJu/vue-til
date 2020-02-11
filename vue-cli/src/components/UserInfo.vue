<template>
  <div id="UserInfo">
    id : {{ id }}
    <br/>
    {{computedUser}}
    <br>
    <h2>count : {{count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data: function(){
    let {id} = this.$route.params
    return {
      id: parseInt(id),
      count : 5
    }
  },
  computed : {
    computedUser : function(){
      return `User ${this.id}, Welcome!!`
    }
  },
  mounted : function(){
    const time = 1000
    let timer = null
    timer = setInterval(()=>{
      if(this.count === 0){
        clearInterval(timer)
        return this.$router.push({ name:'home' })
      }
      this.count = --this.count
      return this.count
    },time)
  },
}
</script>

<style>

</style>
