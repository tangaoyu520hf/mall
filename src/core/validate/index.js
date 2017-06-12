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

Validator.extend('mobile', {
  messages: {
    zh_CN: () => '请填写正确的手机号码'
  },
  validate: value => {
    return /^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|70)\d{8}$/.test(value)
  }
});

Validator.extend('remote', {
  messages: {
    zh_CN: (field, params, data) => {
      return (data && data.vaild)?'':data;
    }
  },
  validate: (value,params) => {
    if(params&&params.length>0){
      //获取方法
      let validator = params[0].validator
      if(validator){
        let result = validator.call(this)
        if(result&&typeof result.then === 'function' )
          return result
      }
    }
    return Promise.resolve({
      vaild:false,
      data:'请返回正确的结果集'
    });
  }
});




const dictionary = {
  zh_CN: {
    messages: {
      required: (field) => '请输入'+field,
      email: () =>'请输入合法的邮箱'
    }
  }
};
Validator.updateDictionary(dictionary);

const config = {
  locale: 'zh_CN',
  fieldsBagName: 'veeFields'
};
Vue.use(VeeValidate, config);
