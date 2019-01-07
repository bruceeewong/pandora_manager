import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/photo',
      name: 'photo',
      component: () => import(/* webpackChunkName: "about" */ './views/Photo.vue')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import(/* webpackChunkName: "about" */ './views/Video.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import(/* webpackChunkName: "about" */ './views/Music.vue')
    },
    {
      path: '/doc',
      name: 'doc',
      component: () => import(/* webpackChunkName: "about" */ './views/Doc.vue')
    }
  ]
})
