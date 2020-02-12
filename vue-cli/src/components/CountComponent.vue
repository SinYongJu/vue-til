<template>
  <div id="CountComponent">
    <strong>count : {{ count }}</strong>
    <button v-on:click="increase">+</button>
    <button v-on:click="decrease">-</button>
  </div>
</template>

<script>
export default {
  name: 'CountComponent',
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    increase() {
      this.count = ++this.count
    },
    decrease() {
      this.count = --this.count
    }
  }
}
</script>

<style>
#CountComponent strong {
  display: block;
}
</style>
