import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Index from '../pages/Index'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)

/**
 * vue router는
 * 1. pipe line으로 구성되어 있다 .
 * 2. 인자 to 어디어디로
 * 3. 인자 from 어디어디로 부터
 * 4. 인자 next <-- 요게 navigation update
 * 5. next 함수의 경우 순환 참가 될 수 있으므로 route 변경 시 순환참조를 막도록 하여야 한다
 */

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/login', name: 'login', component: Login },
    { path: '/home', meta: { requiresAuth: true }, name: 'home', component: Home },
    { path: '/about', meta: { requiresAuth: true }, name: 'about', component: About }, // local navigation guard
    { path: '/hello', meta: { requiresAuth: true }, name: 'hello', component: HelloWorld },
    { path: '*', redirect: '/' }
  ],
  scrollBehavior: () => ({ y: 0 })
})

// navigation guard
const _checkAuth = (isAuth, to, next) =>
  isAuth ? next() : next({ path: '/', query: { redirect: to.fullPath } })

const _checkRequiresAuth = (isAuth, to, next, hndr) =>
  to.matched.some(({ meta }) => meta.requiresAuth) ? hndr(isAuth, to, next) : next()

router.beforeEach((to, from, next) => {
  let isAuth = false // vuex data bindings
  _checkRequiresAuth(isAuth, to, next, _checkAuth)
})

// afterEach
/**
 * 1. 라우터에서 제공하는 hooks 들을 promise 실행 후 실행 된다.
 * 2. 라우트 이동 완료 후 실행
 * 3. next 가 제공 되지 않아서 navigation update를 실행 하지 않는다.
 * 4. 라우터 객체의 변화가 있어야만 실행 됨.
 */
router.afterEach((to, from) => {
  console.log('afterEach \n', 'to', to, '\n', 'from', from)
})

// navigation guard others...

export default router
