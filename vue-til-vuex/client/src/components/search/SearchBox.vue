<template>
  <div class="box_search">
    <input type="text" v-model="keyword" class="inp_comm" @keydown="inputHndr" :placeholder="placeHolder"/>
    <button type="button" class="btn_comm">검색</button>
  </div>
</template>

<script>
export default {
  name: 'comp-search-box',
  props: {
      inputHndr : {
          type: Function,
          required : true,
      },
      placeHolder : {
          type: String,
          default : 'search ... '
      }
  },
  data() {
    return {
      keyword: ''
    }
  }
}
</script>

<style></style>
