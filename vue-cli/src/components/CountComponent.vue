<template>
  <div id="CountComponent">
    <strong>count : {{ count }}</strong>
    <button v-on:click="increase">+</button>
    <button v-on:click="decrease">-</button>
    <button v-on:click="multiply2x">X2</button>
    <p>{{ computedCount }}</p>
    <button v-on:click="timeout5secLater">later 5 sec,Add 1</button>
  </div>
</template>

<script>


import { mapState,mapGetters, mapMutations, mapActions } from 'vuex'
// const { mapState,mapGetters, mapMutations, mapActions } = createNamespacedHelpers('countStore')

export default {
  name: 'CountComponent',
  created:function(){
    console.log(this)
    console.log(this.$store)
  },
  methods: {
    ...mapMutations('countStore',['increase','decrease','multiply']),
    ...mapActions('countStore',['timer']),
    multiply2x (){
      this.count !== 0 ? this.multiply({ num : 2 }) : false
    }, // 요게 사용 방법인가 ,
    timeout5secLater (){
      this.timer({ timer : 5000 })
    }
  },
  computed: {
  ...mapState('countStore',{
    count : state => state.count,
  }), // map state의 사용법
  ...mapGetters('countStore', ['computedCount']) // mapGetters 사용법
  }
}
</script>

<style>
#CountComponent strong {
  display: block;
}
</style>
