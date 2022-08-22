import Vue from 'vue'
import VueRouter from 'vue-router'
import all from '../views/all.vue'
import chart from '../views/chart/index.vue'
import G6 from '../views/G6/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    component: all
  },
  {
    path: '/chart',
    name: 'chart',
    component: chart
  },
  {
    path: '/G6',
    name: 'G6',
    component: G6
  }
]

const router = new VueRouter({
  routes
})

export default router
