import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import HelloWorld from '../components/HelloWorld'
// import UserInfo from '../components/UserInfo'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', meta: { requiresAuth: true }, name: 'about', component: About },
    { path: '/hello', meta: { requiresAuth: true }, name: 'hello', component: HelloWorld },
    { path: '*', redirect: '/' }
    // {
    //   path: '/user/:id',
    //   name: 'user',
    //   component: UserInfo,
    //   // beforeEnter: protectRoute,
    //   props: true
    // }
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
