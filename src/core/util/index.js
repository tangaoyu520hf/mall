/**
 * Created by tangaoyu on 2017/6/2.
 */
import UUID from 'uuid'

export default {
  /**
   * 懒加载 component
   * @param url
   * @param component
   * @returns {function(): *}
   */
  load (component) {
    return () => System.import(`@/${component}.vue`)
  },
  /**
   * 把source上的key从目标对象上获取值
   * @param target
   * @param source
   */
  cover (target, source) {
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        let value = target[prop]
        if (value !== undefined) {
          source[prop] = value
        }
      }
    }
  },
  uuid4(){
    return UUID.v4();
  },
  phoneHide(phone){
    if(phone)
      return phone.replace(/(\d{3})(\d{4})(\d{4})/,'$1****$3');
  },
  emailHide(email){
    if(email)
      return email.replace(/(\w?)(\w+)(\w)(@\w+\.[a-z]+(\.[a-z]+)?)/, '$1****$3$4');
  }
}
