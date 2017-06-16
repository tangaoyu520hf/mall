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
                <input type="text" autocomplete="off" name="userName"  data-vv-validate-on="blur" v-model="formData.userName" :data-vv-as="$t('fields.account')"
                       v-validate="{ rules: { required: true, alpha_dash: true,max:30,remote:{validator:this.checkUserNameUnique} } }" :class="{'fp-steps-ipt': true, 'ipt-error': errors.has('userName') }" :placeholder="$t('please')+$t('fields.account')" />
                <p class="fp-error" v-show="errors.has('userName')">{{errors.first('userName')}}</p>
              </div>
              <!--账号end-->
              <div class="fp-steps-iptbox">
                <span>{{$t("fields.captcha")}}：</span>
                <input type="text" name="checkCode" data-vv-validate-on="blur" :class="{'fp-steps-yzm90': true, 'ipt-error': errors.has('checkCode') }" :placeholder="$t('please')+$t('fields.captcha')"  v-model="checkCode" :data-vv-as="$t('fields.captcha')"
                       v-validate="{ rules: { required: true, alpha_dash: true,max:4 }}" />
                <v-captcha :page="this.page" ref="captcha"></v-captcha>
                <p class="fp-error" v-show="errors.has('checkCode')">{{errors.first('checkCode')}}</p>
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
                <label>{{user.userName}}</label>
              </div>
              <!--账号end-->
              <div class="fp-steps-iptbox">
                <span>{{$t("fields.phone")}}：</span>
                <label>{{user.phone}}</label>
              </div>
              <!--账号end-->
              <div class="fp-steps-iptbox">
                <span>{{$t("fields.sms")}}：</span>
                <input type="text" name="smsCode" data-vv-validate-on="blur" :class="{'fp-steps-yzm': true, 'ipt-error': errors.has('smsCode') }"  v-model="smsCode" :data-vv-as="$t('fields.sms')"
                       v-validate="{ rules: { required: true, alpha_dash: true,max:6 }}" :placeholder="$t('please')+$t('fields.sms')">
                <span class="fp-yzm-txt" @click="getSMS()">{{$t("fields.getsms")}}</span>
                <p class="fp-error" v-show="errors.has('smsCode')">{{errors.first('smsCode')}}</p>
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
                <input type="password" name="password" v-validate="'required|complexityPwd|max:20'" :data-vv-as="$t('fields.newpwd')"
                       v-model="formData.password" :class="{'fp-steps-ipt': true, 'ipt-error': errors.has('password') }" :placeholder="$t('please')+$t('fields.newpwd')">
                <p class="fp-error" v-show="errors.has('password')">{{errors.first('password')}}</p>
              </div>
              <!--新密码end-->
              <div class="fp-steps-iptbox">
                <span>{{$t("fields.pwd")}}：</span>
                <input type="password" name="pwd" v-model="formData.pwd" v-validate="'required|max:20|confirmed:password'"  :class="{'fp-steps-ipt': true, 'ipt-error': errors.has('pwd') }" :data-vv-as="$t('fields.pwd')" :placeholder="$t('please')+$t('fields.pwd')">
                <p class="fp-error" v-show="errors.firstByRule('pwd','required')">{{errors.first('pwd')}}</p>
                <p class="fp-error" v-show="errors.firstByRule('pwd','confirmed')">确认密码必须和密码一致</p>
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
        page: 'forgetPwd',
        step: 1,
        checkCode: '',
        smsCode: '',
        formData: {
          userId:'',
          userName: '',
          pwd: '',
          password: '',
          phone: ''
        },
        user:{
          userName: '',
          userId:'',
          phone:'',
          email:''
        },
        result:false,
      }
    },
    methods:{
      goStep(){
        if (this.step == 1) {
          this.$validator.validate('userName', this.formData.userName).then(result => {
            this.result = result;
          });
          if (this.result)
            this.$http.get(this.moudules.system + '/api/captcha/check?webId=' + this.$store.getters.getWebId + '&page=' + this.page + '&code=' + this.checkCode).then(response => {
              if (response.data.data) {
                this.errors.remove('checkCode')
                this.addStep();
                this.loadUser();
              } else {
                this.errors.add('checkCode', this.$t('error.checkCode'))
                this.$refs.captcha.loadData()
              }
            });
        }
        if (this.step == 2) {
          this.$http.get(this.moudules.system + '/api/captcha/check?key=' + this.user.email+'&code=' + this.smsCode).then(response => {
            if (response.data.data) {
              this.errors.remove('smsCode')
              this.addStep();
            } else {
              this.errors.add('smsCode', this.$t('error.smsCode'))
            }
          });
        }
        if (this.step == 3) {
          this.$validator.validate('password', this.formData.password).then(result => {
            this.result=result;
          });
          if (this.result)
            this.$validator.validate('pwd', this.formData.pwd).then(result => {
              this.result = result;
            })
          if (this.result){
//            var param = {
//              userId: this.user.userId,
//              password: this.formData.password,
//              tag: this.user.email,
//              code: this.smsCode,
//            };

            this.$http.post(this.moudules.system + '/api/user/resetPassword?userId='+this.user.userId+'&password='+this.formData.password+'&tag='+this.user.email+'&code='+this.smsCode).then(response => {
              if (response.data.data) {
                this.errors.remove('pwd')
                this.addStep();
              } else {
                this.errors.add('pwd', response.data.respMsg)
              }
            });
          }
        }
      },
      addStep(){
        this.step=this.step+1;
      },
      getSMS(){
        this.$http.get(this.moudules.system + '/api/common/sendEmail?tag=' + this.user.email).then(response => {
          response.data.data;
        });
      },
      loadUser(){
        this.$http.get(this.moudules.system + '/api/user/info?userName=' + this.formData.userName).then(response => {
          this.user = response.data.data;
        });
      },
      checkUserNameUnique(){
        return new Promise(resolve => {
          if(this.formData.userName){
            this.$http.get(this.moudules.system+'/api/user/checkUserName?userName='+this.formData.userName).then(response => {
              this.result = response.data.data;
              resolve({
                vaild:response.data.data,
                data:response.data.data?null:this.$t('error.account'),
              })
            });
          }
        });
      }
    },
    created() {
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
          error:{
            account: '该帐号未注册',
            checkCode: '验证码不正确',
            smsCode: '短信验证码不正确',
            newpwd: '请输入密码',
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
