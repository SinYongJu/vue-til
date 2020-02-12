<template>
  <div id="Index">
    <h1>Welcome!!!</h1>
    index
    <TodoComponent />
  </div>
</template>

<script>
import TodoComponent from '../components/TodoComponent'

export default {
  name: 'Index',
  components: {
    TodoComponent: TodoComponent
  }
}
</script>

<style></style>
