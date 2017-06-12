<template>
  <div class="registercontent">
    <div class="w1200 clearfix">
      <div class="registerbox-bg clearfix">
        <div class="registerbox b-radius6">
          <h2 class="clearfix"><span class="fl">账号注册</span>
            <router-link to="/login" class="txt-dl">已有帐号，直接登录</router-link>
          </h2>
          <p class="iptbox b-radius">
            <label><i class="icons icon-user"></i></label>
            <input type="text" autocomplete="off" name="username"  data-vv-delay="2000" v-model="formData.userName" data-vv-as="用户名"
                   v-validate="{ rules: { required: true, alpha_dash: true,max:60,remote:{validator:this.checkUserNameUnique} } }" class="ipt" placeholder="请输入用户名">
          </p>
          <p class="error-txt" v-show="errors.has('username')">{{errors.first('username')}}</p>
          <p class="error-txt" v-show="errors.has('errMsg')">{{errors.first('errMsg')}}</p>
          <p class="iptbox b-radius">
            <label><i class="icons icon-pwd"></i></label>
            <input type="password" autocomplete="off" name="password" v-validate="'required|complexityPwd|max:60'" data-vv-as="密码"
                   v-model="formData.password" class="ipt" placeholder="请输入密码">
          </p>
          <p class="error-txt" v-show="errors.has('password')">{{errors.first('password')}}</p>
          <p class="iptbox b-radius">
            <label><i class="icons icon-qrpwd"></i></label>
            <input type="password" autocomplete="off" name="confirmPassword" v-validate="'required|confirmed:password'" data-vv-as="确认密码" v-model="formData.confirmPassword" class="ipt"
                   placeholder="请再次输入密码">
          </p>
          <p class="error-txt" v-show="errors.firstByRule('confirmPassword','required')">{{errors.first('confirmPassword')}}</p>
          <p class="error-txt" v-show="errors.firstByRule('confirmPassword','confirmed')">确认密码必须和密码一致</p>
          <p class="iptbox b-radius">
            <label><i class="icons icon-tel"></i></label>
            <input type="text" data-vv-as="手机号码" autocomplete="off" name="phone" v-model="formData.phone" v-validate="'required|mobile'" class="ipt"
                   placeholder="请输入手机号码">
          </p>
          <p class="error-txt" v-show="errors.has('phone')">{{errors.first('phone')}}</p>
          <p class="iptbox b-radius">
            <label><i class="icons icon-mailbox"></i></label>
            <input type="text" autocomplete="off" name="email" data-vv-as="邮箱"  v-validate="{ rules: { required: true, email: true } }" v-model="formData.email" class="ipt" placeholder="请输入邮箱地址">
          </p>
          <p class="error-txt" v-show="errors.has('email')">{{errors.first('email')}}</p>
          <div class="yzmbox">
            <p class="iptbox b-radius">
              <label><i class="icons icon-yzm"></i></label>
              <input type="text" name="checkCode" data-vv-as="验证码" v-model="checkCode" v-validate="'required'" class="ipt140" placeholder="请输入验证码">
            </p>
            <span class="yzm-txt" @click="getVerificationCode">获取验证码</span>
            <p class="error-txt" v-show="errors.has('checkCode')">{{errors.first('checkCode')}}</p>
          </div>
          <p class="login-txt">
            <input type="checkbox" name="terms" v-validate="'required'" id="checkBox" class="ipt-checkbox">
            <span class="fl">同意</span>
            <a href="javascript:;" class="txt-zc">《用户条款》</a>
          </p>
          <p class="error-txt" v-show="errors.has('terms')">请阅读用户条款</p>
          <div class="login-btn"><a v-on:click.stop.prevent="register">注册</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    name: 'register',
    created() {
    },
    data () {
      return {
        checkCode:'',
        formData: {
          userName:'',
          confirmPassword: '',
          password: '',
          phone: '',
          email: ''
        },

      }
    },
    methods:{
      ...mapMutations([
        'setToken'
      ]),
      register(){
        this.$validator.validateAll().then(result => {
          if(result){
            this.$http.post(this.moudules.system+'/api/user/register?checkCode='+this.checkCode, this.formData).then(response => {
              if(response.data.respCode!='200'){
                this.errors.add('errMsg',response.data.respMsg)
              }else{
                let token = response.data.data;
                this.setToken(token)
                this.$router.push('/');
              }
            });
          }
        });
      },
      getVerificationCode(){
        if(!this.veeFields.username.valid&&!this.veeFields.phone.valid&&!this.veeFields.email.valid){
          this.$message.error('请先填写合法的用户名及手机号码及邮箱地址');
        }
        this.$http.get(this.moudules.system+'/api/common/sendEmail?tag='+this.formData.email)
      },
      checkUserNameUnique(){
        return new Promise(resolve => {
          if(this.formData.userName){
            this.$http.get(this.moudules.system+'/api/user/checkUserName?userName='+this.formData.userName).then(response => {
              resolve({
                valid:!response.data.data,
                data:'该账号已被注册，请更换',
              })
            });
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../styles/login.css';
</style>
