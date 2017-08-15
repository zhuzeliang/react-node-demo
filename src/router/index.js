import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import Toast from '../pages/Toast'
import Indicator from '../pages/Indicator'
import Loadmore from '../pages/Loadmore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/Toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/Indicator',
      name: 'Indicator',
      component: Indicator
    },
    {
      path: '/Loadmore',
      name: 'Loadmore',
      component: Loadmore
    },
    // {
    //   path: '/Messagebox',
    //   name: 'Messagebox',
    //   component: Messagebox
    // },
    // {
    //   path: '/Actionsheet',
    //   name: 'Actionsheet',
    //   component: Actionsheet
    // }
  ]
})
