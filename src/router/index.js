import Vue from 'vue'
import Router from 'vue-router'
import PagesTop from '@/pages/Top'
import PagesTest from '@/pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: PagesTop
    },
    {
      path: '/test',
      name: 'Test',
      component: PagesTest
    }
  ]
})
