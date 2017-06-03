// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//表单校验插件
import './core/validate'

//vuex
import store from './store/index'

//http 请求框架
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'http://172.18.1.31:8080';
Vue.use(VueAxios, axios)
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  let userinfo = store.state.user.userinfo;
  if(userinfo&&userinfo.token){
    config.headers.common['Authorization']='Bearer '+userinfo.token;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


//自定义js
import 'static/js/index';

//国际化
import i18n  from './core/i18n'

Vue.config.productionTip = false

Vue.prototype.pro = '/pro'
Vue.prototype.sys = '/sys'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
});

