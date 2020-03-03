<template>
  <ul class="list_suggest">
      <li v-for="(suggest, index) in suggestList" :key="suggest.id+'__'+index"> 
        <strong>{{suggest.id}}</strong>      
        <em>{{suggest.name}}</em>      
        <p>{{suggest.email}}</p>   
      </li>
  </ul>
</template>

<script>
export default {
    name : 'comp_search_suggest_list',
    props:{
        suggestList : {
            type : Array,
            default : () => []
        }
    }
}
</script>

<style>

</style>