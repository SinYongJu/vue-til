import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import HelloWorld from '../components/HelloWorld'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/hello', name: 'hello', component: HelloWorld }
  ]
})

export default router
