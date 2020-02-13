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
import { getStoreByNamespace, STORE_NAMES } from '../store/'
const { mapState,mapGetters, mapMutations, mapActions } = getStoreByNamespace(STORE_NAMES.COUNT_STORE)
const countStoreMutations = mapMutations(['increase','decrease','multiply'])
const countStoreActions = mapActions(['timer'])
const countStoreGetters = mapGetters(['computedCount'])
const countStoreState = mapState({
   count : state => state.count,
})

export default {
  name: 'CountComponent',
  created:function(){
    console.log('create',this)
    console.log(this.$store)
  },
  methods: {
    ...countStoreMutations,
    ...countStoreActions,
    multiply2x (){
      this.count !== 0 ? this.multiply({ num : 2 }) : false
    }, // 요게 사용 방법인가 ,
    timeout5secLater (){
      this.timer({ timer : 5000 })
    }
  },
  computed: {
  ...countStoreState, // map state의 사용법
  ...countStoreGetters // mapGetters 사용법
  // (...) local computed...
  }
}
</script>

<style>
#CountComponent strong {
  display: block;
}
</style>
