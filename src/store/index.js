/**
 * Created by tangaoyu on 2017/4/20.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
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
