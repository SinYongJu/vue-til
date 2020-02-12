<template>
  <div id="Index">
    <h1>Welcome!!!</h1>
    index
    <TodoComponent
      v-bind:todo="todo"
      v-bind:onClickCreate="clickCreate"
      v-bind:onClickDelete="clickDelete"
    />
  </div>
</template>

<script>
import TodoComponent from '../components/TodoComponent'

function localStorage() {}
localStorage.prototype.getTodoList = function() {
  const item = window.localStorage.getItem('todo')
  return item ? JSON.parse(item) : []
}
localStorage.prototype.setTodoList = function(list) {
  const target = JSON.stringify(list)
  const item = window.localStorage.setItem('todo', target)
  return item ? item : []
}

const local = new localStorage()

export default {
  name: 'Index',
  data: function() {
    return {
      todo: []
    }
  },
  components: {
    TodoComponent: TodoComponent
  },
  methods: {
    clickCreate: function(title, desc) {
      const todoList = this.todo
      const lastItemId = todoList[todoList.length - 1].id
      const insertId = (todoList.length > 0 && lastItemId + 1) || 0
      this.todo = todoList.concat({
        id: insertId,
        title,
        desc
      })
    },
    clickDelete: function(targetIndex) {
      this.todo = this.todo.filter(todoItem => todoItem.id !== targetIndex)
    },
    setTodo: function() {
      const localTodo = local.getTodoList()
      this.todo = localTodo
    }
  },
// lifecycle에서 todo set을 하는 경우 
//   created: function() {
//     this.setTodo()
//   },
  /**
   * 컴포넌트에서의 navigation guard hooks
   */
  beforeRouteEnter(to, from, next) {
    // 이 컴포넌트를 렌더링하는 라우트 앞에 호출됩니다.
    // 이 가드가 호출 될 때 아직 생성되지 않았기 때문에
    // `this` 컴포넌트 인스턴스에 접근 할 수 없습니다!
    console.log('beforeRouteEnter', to, from)
    // constle.log(localTodo)
    // this 접근은 못한다
    // this.setTodo()
    /**
     * 단 next 함수의 콜백의 인자로 사용 가능한 부분 
     * vm  === VueRouter
     */
    next(vm => {
        vm.setTodo()
    })

  },
  beforeRouteLeave(to, from, next) {
    // 이 컴포넌트를 렌더링하는 라우트가 이전으로 네비게이션 될 때 호출됩니다.
    // `this` 컴포넌트 인스턴스에 접근 할 수 있습니다.
    console.log('beforeRouteLeave', to, from)
    local.setTodoList(this.todo)
    next()
  }
}
</script>

<style></style>
