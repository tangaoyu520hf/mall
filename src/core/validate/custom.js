/**
 * Created by tangaoyu on 2017/6/8.
 */
export default {
  /**
   * 验证是否是数字类型
   * @param rule
   * @param value
   * @param callback
   */
  checkNumber : (rule, value, callback) => {
    if(value){
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字值'));
      } else {
        callback();
      }
    } else {
      callback();
    }
  }
}
