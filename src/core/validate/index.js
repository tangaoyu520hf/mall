/**
 * Created by tangaoyu on 2017/6/1.
 */
import Vue from 'vue'
import VeeValidate,{Validator} from 'vee-validate'
import cn from 'vee-validate/dist/locale/zh_CN'

Validator.addLocale(cn);
const config = {
  locale: 'zh_CN',
};
Vue.use(VeeValidate, config);
