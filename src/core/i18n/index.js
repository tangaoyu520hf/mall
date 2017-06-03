/**
 * Created by tangaoyu on 2017/4/28.
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'

//一些公共的messages可以写在其中
const messages = {
  ch: {}
}
//加载国际化
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ch', // set locale
  messages, // set locale messages
});
export default i18n
