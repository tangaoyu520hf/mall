/**
 * Created by tangaoyu on 2017/6/1.
 */
import Vue from 'vue'
import VeeValidate,{Validator} from 'vee-validate'
import cn from 'vee-validate/dist/locale/zh_CN'

Validator.addLocale(cn);

Validator.extend('complexityPwd', {
  messages: {
    zh_CN: field => field + '要求包含大小写字母及数字组合！'
  },
  validate: value => (/[A-Z]+/.test(value) && /[a-z]+/.test(value) && /[0-9]+/.test(value))
});

Validator.extend('isMobile', {
  messages: {
    zh_CN: () => '请填写正确的手机号码'
  },
  validate: value => {
    return /^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|70)\d{8}$/.test(value)
  }
});


const config = {
  locale: 'zh_CN',
  fieldsBagName: 'veeFields'
};
Vue.use(VeeValidate, config);
