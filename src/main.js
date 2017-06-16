// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routerFunction from './router'

import { Loading, MessageBox, Message,Notification } from 'element-ui'

//自定义js
import 'static/js/index';

//国际化
import i18n  from './core/i18n'

//表单校验插件
import './core/validate'
//vuex
import store from './store/index'

import axiosInit from './core/axios/index'

//初始化路由
let router = routerFunction(store);
//初始化 axios
axiosInit(store,router);


Vue.config.productionTip = false

//在原型上增加element 相关方法 比如 消息提示
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
});

