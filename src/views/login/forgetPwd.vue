<template>
  <!--header end-->
  <div class="findPersonal">
    <div class="w1200 clearfix">
      <div class="placebox">
        <i class="icons icon-currentplace"></i>当前位置：
        <!--<a href="#">供应大厅></a>-->
        <span>找回密码</span>
      </div>
      <!--当前位置end-->
      <div class="findPersonal-content">
        <div class="findPersonal-txt">
          <div class="findPersonal-steps clearfix">
            <div class="find-steps">
              <span class="steps-current">1</span>
              <p class="txt-current">填写账号</p>
            </div>
            <!--step1 end-->
            <div class="step-line"></div>
            <div class="find-steps">
              <span>2</span>
              <p>验明身份</p>
            </div>
            <!--step2 end-->
            <div class="step-line"></div>
            <div class="find-steps">
              <span>3</span>
              <p>重置密码</p>
            </div>
            <!--step3 end-->
            <div class="step-line"></div>
            <div class="find-steps">
              <span>4</span>
              <p>完成</p>
            </div>
            <!--step4 end-->
            <div class="findPersonal-info">
              <h3 class="fp-stepsbox-tit"><span>请填写您要找回密码的账号</span></h3>
              <div class="fp-steps-iptbox">
                <span>账号：</span>
                <input type="text"  class="fp-steps-ipt" placeholder="请输入账号"/>
                <p class="fp-error" style="display:none">密码输入有误！</p>
              </div>
              <!--账号end-->
              <div class="fp-steps-iptbox">
                <span>验证码：</span>
                <input type="text" class="fp-steps-yzm90" placeholder="请输入验证码"/>
                <a href="javascript:void(0);" class="img-yzm"><img src="images/yzm.jpg"/></a>
                <a href="javascript:void(0);" class="fp-change">换一张</a>
              </div>
              <!--验证码end-->
              <div class="fp-btnbox">
                <a href="findPersonal-step2.html" class="fp-step-btn">下一步</a>
              </div>
            </div>
            <!--内容区end-->
          </div>
        </div>
      </div>
      <!--findPersonal-content end-->
    </div>
  </div>
  <!--找回密码end-->
</template>

<script>
  export default {
    name: 'forgetPwd',
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
