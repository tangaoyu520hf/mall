import Vue from 'vue'
import Router from 'vue-router'
import util from '../core/util';
Vue.use(Router)

let router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/home',
      component: util.load('views/layout/home'),
      children: [{
        path: '',
        redirect: '/index',
      },{
        path: '/index',
        name: 'index',
        component: util.load('views/index'),
        meta: {notRequire: true}
      },{
        path: '/login',
        name: 'login',
        component: util.load('views/login/login'),
        meta: {notRequire: true}
      },{
        path: '/register',
        name: 'register',
        component: util.load('views/login/register'),
        meta: {notRequire: true}
      },{
        path: '/forgetPwd',
        name: 'forgetPwd',
        component: util.load('views/login/forgetPwd'),
        meta: {notRequire: true}
      },{
        path: '/helpCenter',
        name: 'helpCenter',
        component: util.load('views/helpCenter/helpCenter'),
        meta: {notRequire: true}
      },{
        path: '/mall',
        name:'mall',
        component:util.load('views/mall/mall'),
        meta:{notRequire: true}
      },{
        path: '/supplyHall',
        name:'supplyHall',
        component:util.load('views/supplyHall/supplyHall'),
        meta:{notRequire: true}
      },{
        path: '/purchaseHall',
        name:'purchaseHall',
        component:util.load('views/purchaseHall/purchaseHall'),
        meta:{notRequire: true}
      }]
    }, {
      path: '/mcHome',
      component: util.load('views/layout/mcHome'),
      children: [{
        path: '',
        redirect: '/mcPersonalnfo',
      },{
        path: '/mcPersonalnfo',
        component: util.load('views/memberCentre/accountManage/personalnfo'),
      }]
    }
  ]
});
export default router
