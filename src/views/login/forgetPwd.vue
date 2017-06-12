<template>
  <!--header end-->
  <div class="findPersonal">
    <div class="w1200 clearfix">
      <div class="placebox">
        <i class="icons icon-currentplace"></i>{{$t("current")}}：
        <!--<a href="#">供应大厅></a>-->
        <span>{{$t("findpwd")}}</span>
      </div>
      <!--当前位置end-->
      <div class="findPersonal-content">
        <div class="findPersonal-txt">
          <div class="findPersonal-steps clearfix">
            <div class="find-steps">
              <span  :class="step==1? 'steps-current' : 'steps-graybg'">1</span>
              <p :class="step==1? 'txt-current' : ''">{{$t("step1.head")}}</p>
            </div>
            <!--step1 end-->
            <div class="step-line"></div>
            <div class="find-steps">
              <span  :class="step==2? 'steps-current' : step>2?'steps-graybg':''">2</span>
              <p :class="step==2? 'txt-current' : ''">{{$t("step2.head")}}</p>
            </div>
            <!--step2 end-->
            <div class="step-line"></div>
            <div class="find-steps">
              <span  :class="step==3? 'steps-current' : step>3?'steps-graybg':''">3</span>
              <p class="step==3? 'txt-current' : ''">{{$t("step3.head")}}</p>
            </div>
            <!--step3 end-->
            <div class="step-line"></div>
            <div class="find-steps">
              <span :class="step==4? 'steps-current' : step>4?'steps-graybg':''">4</span>
              <p class="step==4? 'txt-current' : ''">{{$t("step4.head")}}</p>
            </div>
            <!--step4 end-->
            <div v-if="step==1" class="findPersonal-info">
              <h3 class="fp-stepsbox-tit"><span>{{$t("step1.title")}}</span></h3>
              <div class="fp-steps-iptbox">
                <span>{{$t("fields.account")}}：</span>
                <input type="text"  class="fp-steps-ipt" :placeholder="$t('please')+$t('fields.account')" />
                <p class="fp-error" style="display:none"></p>
              </div>
              <!--账号end-->
              <div class="fp-steps-iptbox">
                <span>{{$t("fields.captcha")}}：</span>
                <input type="text" class="fp-steps-yzm90" :placeholder="$t('please')+$t('fields.captcha')"/>
                <v-captcha page="forgetPwd"></v-captcha>
              </div>
              <!--验证码end-->
              <div class="fp-btnbox">
                <a @click="goStep" class="fp-step-btn">{{$t("next")}}</a>
              </div>
            </div>

            <div v-if="step==2" class="findPersonal-info">
              <h3 class="fp-stepsbox-tit"><span>{{$t("step2.title")}}</span></h3>
              <div class="fp-steps-iptbox">
                <span>{{$t("fields.account")}}：</span>
                <label>zhangbiliu</label>
              </div>
              <!--账号end-->
              <div class="fp-steps-iptbox">
                <span>{{$t("fields.phone")}}：</span>
                <label>13590143437</label>
              </div>
              <!--账号end-->
              <div class="fp-steps-iptbox">
                <span>{{$t("fields.sms")}}：</span>
                <input type="text" class="fp-steps-yzm" :placeholder="$t('please')+$t('fields.sms')">
                <span class="fp-yzm-txt">{{$t("fields.getsms")}}</span>
              </div>
              <!--验证码end-->
              <div class="fp-btnbox">
                <a @click="goStep" class="fp-step-btn">{{$t("next")}}</a>
              </div>
            </div>

            <div v-if="step==3" class="findPersonal-info">
              <h3 class="fp-stepsbox-tit"><span>{{$t("step3.title")}}</span></h3>
              <div class="fp-steps-iptbox">
                <span>{{$t("fields.newpwd")}}：</span>
                <input type="password" class="fp-steps-ipt" :placeholder="$t('please')+$t('fields.newpwd')">
                <p class="fp-error" style="display:none"></p>
              </div>
              <!--新密码end-->
              <div class="fp-steps-iptbox">
                <span>{{$t("fields.pwd")}}：</span>
                <input type="password" class="fp-steps-ipt":placeholder="$t('please')+$t('fields.pwd')">
                <p class="fp-error" style="display:none"></p>
              </div>
              <!--新密码end-->
              <div class="fp-btnbox">
                <a @click="goStep" class="fp-step-btn">{{$t("commit")}}</a>
              </div>
            </div>

            <div v-if="step==4" class="findPersonal-info">
              <p class="fp-img"><img src="../../assets/images/fp-icon-success.png"></p>
              <p class="fp-success-txt">{{$t("success")}}</p>
              <div class="fp-btnbox">
                <router-link to="/login" class="fp-step-btn">{{$t("relogin")}}</router-link>
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
  import vCaptcha from '@/components/captcha.vue'
  export default {
    name: 'forgetPwd',
    components:{vCaptcha},
    data () {
      return {
        step: 1
      }
    },
    methods:{
      goStep(){
        this.step=this.step+1;
      }
    },
    i18n: { // `i18n` option
      messages: {
        ch: {
          current:'当前位置',
          findpwd:'找回密码',
          please:'请输入',
          success:'重置成功，请牢记新的登录密码。',
          fields: {
            account: '账号',
            captcha: '验证码',
            phone: '已验证手机',
            sms: '短信验证码',
            getsms: '获取验证码',
            newpwd: '新密码',
            pwd: '确认密码',
          },
          next: '下一步',
          commit: '确定',
          relogin: '重新登录',
          step1:{
            head:'填写账号',
            title:'请填写您要找回密码的账号',
          },
          step2:{
            head:'验明身份',
            title:'请输入手机验证码'
          },
          step3:{
            head:'重置密码',
            title:'请输入密码'
          },
          step4:{
            head:'完成',
            title:'请填写您要找回密码的账号'
          },
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../styles/login.css';
</style>
