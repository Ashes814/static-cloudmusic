import Vue from 'vue'
import VueRouter from 'vue-router'
import Computed from '../Computed.vue'

Vue.use(VueRouter)

// 路由 

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'computed',
      component: Computed
    },
    {
      path: '/purchase',
      name: 'purchase',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 指定了我们要展示的组件名
      component: () => import('../PurchaseCar.vue')
    },{
      path: '/musicList',
      name: 'musicList',
      component: () => import('../MusicList.vue')
    },{
      path: '/card',
      name: 'card',
      component: () => import('../views/CardView.vue')
    }
  ]
})

export default router
