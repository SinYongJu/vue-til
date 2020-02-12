<template>
  <div id="CountComponent">
    <strong>count : {{ count }}</strong>
    <button v-on:click="increase">+</button>
    <button v-on:click="decrease">-</button>
    <button v-on:click="multiply2x">X2</button>
    <p>{{ computedCount }}</p>
    <button v-on:click="timer5secLater">later 5 sec,Add 1</button>
  </div>
</template>

<script>


import { createNamespacedHelpers } from 'vuex'
const { mapState,mapGetters, mapMutations, mapActions } = createNamespacedHelpers('countStore')

export default {
  name: 'CountComponent',
  methods: {
    ...mapMutations(['increase','decrease','multiply']),
    ...mapActions(['timer']),
    multiply2x (){
      this.count !== 0 ? this.multiply({ num : 2 }) : false
    }, // 요게 오버 라이딩 하는 방법인가 ,
    timer5secLater (){
      this.timer({ timer : 5000 })
    }
  },
  computed: {
  ...mapState({
    count : state => state.count,
  }), // map state의 사용법
  ...mapGetters(['computedCount']) // mapGetters 사용법
  }
}
</script>

<style>
#CountComponent strong {
  display: block;
}
</style>
