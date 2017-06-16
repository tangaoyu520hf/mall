/**
 * Created by tangaoyu on 2017/6/2.
 */
import { localStorage } from '@/core/localStore'
import util from '@/core/util'
import Vue from 'vue'
import {moudules} from '@/config'
/**
 * 获取路由菜单
 * @param data
 * @returns {*}
 */
function getRoutes(menus) {
  let routes = [];
  menus.forEach((currentValue) => {
    let route = {
      path: currentValue.fullUrl,
      meta:{
        name: currentValue.resName
      }
    };
    if(currentValue.resPid=='0'){
      route.component = util.load('views/layout/mcHome');
    }else if(currentValue.resPid!='0'&&currentValue.children.length>0&&currentValue.resUrl===''){
      route.component = util.load('views/layout/context');
    }else{
      route.component = util.load(currentValue.resUrl);
    }
    if(currentValue.children.length>0){
      route.children = [{
        path: '',
        hidden: true,
        redirect:  currentValue.children[0].fullUrl
      },...getRoutes(currentValue.children)]
    }
    routes.push(route);
  });
  return routes;
}

const module = {
  state:{
    //登录成功后的用户信息
    tokenInfo:localStorage.get('tokenInfo')||{},
    userinfo: localStorage.get('userinfo') || {},
    menuListByApplicaion:[],
    //记住密码相关信息，现在暂且只做记住一个账号密码
    //后期：每次登录成功一次，就缓存到列表中，然后在登录表单，输入时，会出现下拉列表选择之前登录过得用户
    remumber: {
      remumber_flag: window.localStorage.getItem('remumber_flag') ? true : false,
      remumber_login_info: window.localStorage.getItem('remumber_login_info') || {
        username: '',
        token: ''
      }
    }
  },
  mutations:{
    setToken(state,token){
      //设置token的 直接将原有的直接清0
      state.tokenInfo = token;
      localStorage.set('tokenInfo',state.tokenInfo);
    },
    setUserInfo(state,userInfo){
      state.userinfo = {...userInfo};
      localStorage.set('userinfo',state.userinfo);
    },
    setUserInfoDetail(state,userInfo){
      state.userinfo = {...state.userinfo,...userInfo}
      localStorage.set('userinfo',state.userinfo);
    },
    logout(state){
      state.userinfo = {};
      state.tokenInfo = {};
      localStorage.set('userinfo',state.userinfo);
      localStorage.set('tokenInfo',state.tokenInfo);
    }
  },
  getters: {
    getTopMenus: state => {
      let menus =  state.userinfo.menuList||[];
      return menus
    },
    getSubMenus: (state) => {
      let menus = []
      if(state.userinfo.menuList){
        state.userinfo.menuList.forEach((obj) =>menus=[...menus,...obj.children]);
      }
      return menus
    },
    getRoutes: (state,getters) => {
      return getRoutes(getters.getTopMenus);
    },
    getUserInfo:(state) =>{
      return state.userinfo
    }
  },
  actions: {
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        Vue.axios.post(moudules.system+'/api/user/logout').then(response => {
          if(response.data.respCode=='200'){
            commit('logout')
            resolve();
          }else{
            reject(response.data);
          }
        }).catch((error)=>{
          reject(error);
        })
      })
    }
  }
}
export default module
