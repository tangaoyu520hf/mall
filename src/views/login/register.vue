<template>
  <div class="registercontent">
    <div class="w1200 clearfix">
      <div class="registerbox-bg clearfix">
        <div class="registerbox b-radius6">
          <h2 class="clearfix"><span class="fl">账号注册</span> <a href="login.html" class="txt-dl">已有帐号，直接登录</a></h2>
          <p class="error-txt" style="display:none">用户名错误！</p>
          <p class="iptbox b-radius">
            <label><i class="icons icon-user"></i></label>
            <input type="text" class="ipt" placeholder="请输入用户名">
          </p>
          <p class="iptbox b-radius">
            <label><i class="icons icon-pwd"></i></label>
            <input type="password" class="ipt" placeholder="请输入密码">
          </p>
          <p class="iptbox b-radius">
            <label><i class="icons icon-qrpwd"></i></label>
            <input type="password" class="ipt" placeholder="请再次输入密码">
          </p>
          <p class="iptbox b-radius">
            <label><i class="icons icon-tel"></i></label>
            <input type="text" class="ipt" placeholder="请输入手机号码">
          </p>
          <p class="iptbox b-radius">
            <label><i class="icons icon-mailbox"></i></label>
            <input type="text" class="ipt" placeholder="请输入邮箱地址">
          </p>
          <div class="yzmbox">
            <p class="iptbox b-radius">
              <label><i class="icons icon-yzm"></i></label>
              <input type="text" class="ipt140" placeholder="请输入验证码">
            </p>
            <span class="yzm-txt">获取验证码</span>
          </div>
          <p class="login-txt">
            <input type="checkbox" id="checkBox" checked="" class="ipt-checkbox">
            <span class="fl">同意</span>
            <a href="javascript:;" class="txt-zc">《用户条款》</a>
          </p>
          <div class="login-btn"><a href="login.html">注册</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../styles/login.css';
</style>
