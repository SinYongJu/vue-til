import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Index from '../pages/Index'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Index },
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

export default router
