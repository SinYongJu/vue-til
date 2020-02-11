import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import HelloWorld from '../components/HelloWorld'
import UserInfo from '../components/UserInfo'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/hello', name: 'hello', component: HelloWorld },
    { path: '/user/:id', name: 'user', component: UserInfo }
  ]
})

export default router
