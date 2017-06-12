/**
 * Created by tangaoyu on 2017/6/5.
 */
import util from '../core/util';
export default [{
  path: '/',
  redirect: '/index'
}, {
  path: '/home',
  component: util.load('views/layout/home'),
  children: [{
    path: '',
    redirect: '/index',
  }, {
    path: '/index',
    name: 'index',
    component: util.load('views/index'),
    meta: {notRequire: true}
  }, {
    path: '/login',
    name: 'login',
    component: util.load('views/login/login'),
    meta: {notRequire: true}
  }, {
    path: '/register',
    name: 'register',
    component: util.load('views/login/register'),
    meta: {notRequire: true}
  }, {
    path: '/forgetPwd',
    name: 'forgetPwd',
    component: util.load('views/login/forgetPwd'),
    meta: {notRequire: true}
  }, {
    path: '/helpCenter/:helpId',
    name: 'helpCenterView',
    component: util.load('views/helpCenter/helpCenter'),
    meta: {notRequire: true}
  },  {
    path: '/helpCenter',
    name: 'helpCenter',
    component: util.load('views/helpCenter/helpCenter'),
    meta: {notRequire: true}
  }, {
    path: '/mall',
    name: 'mall',
    component: util.load('views/mall/mall'),
    meta: {notRequire: true}
  }, {
    path: '/supplyHall',
    name: 'supplyHall',
    component: util.load('views/supplyHall/supplyHall'),
    meta: {notRequire: true}
  }, {
    path: '/purchaseHall',
    name: 'purchaseHall',
    component: util.load('views/purchaseHall/purchaseHall'),
    meta: {notRequire: true}
  },{
    path: '/articleCatalog',
    name: 'articleCatalog',
    component: util.load('views/articleCatalog/articleCatalog'),
    meta: {notRequire: true}
  },{
    path: '/supplyInfo',
    name:'supplyInfo',
    component:util.load('views/enterpriseStore/supplyInfo'),
    meta:{notRequire: true}
  },{
    path: '/quoteDetail',
    name:'quoteDetail',
    component:util.load('views/supplyHall/quoteDetail'),
    meta:{notRequire: true}
  },{
    path: '/biddingDetail',
    name:'biddingDetail',
    component:util.load('views/supplyHall/biddingDetail'),
    meta:{notRequire: true}
  },{
    path: '/confirmOrder',
    name:'confirmOrder',
    component:util.load('views/order/confirmOrder'),
    meta:{notRequire: true}
  },{
    path: '/aboutUs',
    name:'aboutUs',
    component:util.load('views/aboutUs/aboutUs'),
    meta:{notRequire: true}
  },{
    path: '/contactUs',
    name:'contactUs',
    component:util.load('views/aboutUs/contactUs'),
    meta:{notRequire: true}
  },{
    path: '/friendLink',
    name:'friendLink',
    component:util.load('views/aboutUs/friendLink'),
    meta:{notRequire: true}
  }]
}, {
  path: '/mcHome',
  component: util.load('views/layout/mcHome'),
  children: [{
    path: '/productManage/updateProduct/:productId',
    component: util.load('views/memberCentre/productManage/editProduct'),
    meta:{name:'商品编辑',permission:'myProduct:update'}
  },{
    path: '/productManage/productDetail/:productId',
    component: util.load('views/memberCentre/productManage/editProduct'),
    meta:{name:'商品详情',permission:'myProduct:view'}
  }]
}]
