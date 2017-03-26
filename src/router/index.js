import Vue from 'vue'
import Router from 'vue-router'
import pages from '../pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: pages.indexPage
    }
  ]
})
