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
  },
  /**
   * 컴포넌트에서의 navigation guard hooks
   */
  beforeRouteEnter(to, from,next) {
    // 이 컴포넌트를 렌더링하는 라우트 앞에 호출됩니다.
    // 이 가드가 호출 될 때 아직 생성되지 않았기 때문에
    // `this` 컴포넌트 인스턴스에 접근 할 수 없습니다!
    console.log('beforeRouteEnter',to,from)
    next()
  },
  beforeRouteLeave(to, from,next) {
    // 이 컴포넌트를 렌더링하는 라우트가 이전으로 네비게이션 될 때 호출됩니다.
    // `this` 컴포넌트 인스턴스에 접근 할 수 있습니다.
    console.log('beforeRouteLeave',to,from)
    next()
  }
}
</script>

<style></style>
