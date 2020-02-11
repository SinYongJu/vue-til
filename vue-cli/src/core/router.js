import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import HelloWorld from '../components/HelloWorld'
import UserInfo from '../components/UserInfo'

Vue.use(VueRouter)

// 임시
const bool = true
function protectRoute(to, from, next) {
  // write protection logic to here
  if (bool) {
    return next()
  }
  next({
    name: 'home'
  })
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/hello', name: 'hello', component: HelloWorld },
    {
      path: '/user/:id',
      name: 'user',
      component: UserInfo,
      beforeEnter: protectRoute,
      props: true
    }
  ]
})
export default router
