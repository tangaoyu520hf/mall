/**
 * Created by tangaoyu on 2017/6/15.
 */
import axios from './indexAxios'
import {Notification } from 'element-ui'
export default (store,router)=>{
// 添加一个请求拦截器
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    let token = store.state.user.tokenInfo.token;
    if(token){
      config.headers.common['Authorization']='Bearer '+token;
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
    let response = error.response
    if (!response) {
      Notification.error({
        title: '请求超时',
        message: '服务器太久没有响应, 请重试!'
      })
    }else{
      let data = response.data
      switch (data.status) {
        case 400:
          //TODO 后续可以处理一下后台的格式
          Promise.reject(error);
          break;
        case 401:
          //TODO 直接跳转到没有权限的界面
          router.push('/login');
          break;
        case 403:
          store.dispatch('logout').then(()=>{
            router.push('/login');
          });
          break;
        case 404:
          Notification.error({
            title: '404',
            message: data.path+'地址没有找到'
          });
          break;
        default:
          if(process.env.NODE_ENV==='development'){
            Notification.error({
              title: '服务器错误',
              message: data.message
            });
          }else{
            //TODO 后续可以实现异常信息上报
          }
      }
    }
    return Promise.reject(error);
  });
}
