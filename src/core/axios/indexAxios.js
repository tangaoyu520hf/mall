/**
 * Created by tangaoyu on 2017/6/15.
 */
//http 请求框架
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import {moudules} from '@/config'

axios.defaults.baseURL = process.env.BASE_URL;
Vue.use(VueAxios, axios)
Vue.prototype.moudules=moudules

Vue.prototype.pro = '/product'
Vue.prototype.sys = '/admin'
Vue.prototype.ecoms = '/ecoms'

export default axios


