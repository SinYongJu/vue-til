import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@pages/Index.vue'
import Detail from '@pages/Detail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/detail/:id', name: 'detail', component: Detail },
    { path: '/', name: 'index', component: Index },
    { path: '*', redirect: '/' }
  ]
})

export default router
