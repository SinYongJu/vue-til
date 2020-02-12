<template>
  <div id="TodoComponent">
      <h2>Todo List</h2>
      <div>
        <div>
            <label for="todoTitle"> Todo's title : </label>
            <input type="text" id="todoTitle" v-model="title">
        </div>
        <div>
            <label for="todoDesc"> Todo's desc : </label>
            <input type="text" id="todoDesc" v-model="desc">
        </div>
        <button type="button" v-on:click="clickInsert">insert</button>
      </div>
      <ul>
          <li v-bind:key="todoItem.id" v-for="todoItem in todo">
              <span>id : {{todoItem.id}} </span>
              <div>Title : <strong>{{todoItem.title}}</strong></div>
              <div>Desc : <span>{{todoItem.desc}}</span></div>
              <button v-on:click="clickDelete(todoItem.id)">Delete</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name : 'TodoComponent',
  props : {
      todo : Array,
      onClickInsert:Function,
      onClickDelete : Function

  },
  data : function (){
      return {
        title: '',
        desc : ''          
      }
  },
  methods : {
    clickInsert : function(){
      this.onClickInsert(this.title,this.desc)
      this.title = ''
      this.desc = ''      
    },  
    clickDelete : function (id) {
      this.onClickDelete(id)
    }
  }
 
}
</script>

<style>

</style>