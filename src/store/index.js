/**
 * Created by tangaoyu on 2017/4/20.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import util from '@/core/util'
import { localStorage } from '@/core/localStore'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user
  },
  getters: {
    loading: state => state.loading,
    sidebar: state => state.sidebar,
    menuList: state => state.menuList,
    userInfo:state => state.userInfo,
    setting:state => state.setting,
    getWebId:state=>{
      if(state.webId) return state.webId
      else{
        let uuid = util.uuid4();
        localStorage.set('WEB_ID',uuid);
        return uuid;
      }
    }
  },
  state: {
    menuList: {},
    loading: false,
    sidebar: {
      opened: true
    },
    device: {
      isMobile: false
    },
    setting:{}
  },
  mutations: {
    setSetting(state,setting){
      state.setting = setting;
    }
  }
});
