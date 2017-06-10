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
            <input type="text" autocomplete="off" name="username" v-model="formData.username" data-vv-as="用户名"
                   v-validate="'required|alpha_num|max:60|isEq'" class="ipt" placeholder="请输入用户名">
          </p>
          <p class="error-txt" v-show="errors.has('username')">{{errors.first('username')}}</p>
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
          <p class="error-txt" v-show="errors.has('confirmPassword')">{{errors.first('confirmPassword')}}</p>
          <p class="iptbox b-radius">
            <label><i class="icons icon-tel"></i></label>
            <input type="text" data-vv-as="手机号码" autocomplete="off" name="phone" v-model="formData.phone" v-validate="'required|isMobile'" class="ipt"
                   placeholder="请输入手机号码">
          </p>
          <p class="error-txt" v-show="errors.has('phone')">{{errors.first('phone')}}</p>
          <p class="iptbox b-radius">
            <label><i class="icons icon-mailbox"></i></label>
            <input type="text" autocomplete="off" name="email" v-validate="{ rules: { required: true, email: true } }" v-model="email" class="ipt" placeholder="请输入邮箱地址">
          </p>
          <p class="error-txt" v-show="errors.has('email')">{{errors.first('phone')}}</p>
          <div class="yzmbox">
            <p class="iptbox b-radius">
              <label><i class="icons icon-yzm"></i></label>
              <input type="text" class="ipt140" placeholder="请输入验证码">
            </p>
            <span class="yzm-txt" @click="getVerificationCode">获取验证码</span>
          </div>
          <p class="login-txt">
            <input type="checkbox" id="checkBox" class="ipt-checkbox">
            <span class="fl">同意</span>
            <a href="javascript:;" class="txt-zc">《用户条款》</a>
          </p>
          <div class="login-btn"><a v-on:click.stop.prevent="register">注册</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'register',
    created() {
      if(!this.$validator.rules.isEq){
        this.$validator.extend('isEq', {
          getMessage: () => '两次输入的密码不一致',
          validate: (value,obj) => new Promise(resolve => {
            alert( this.formData[obj[0]]);
            let isEq = value === this.formData.password;
            resolve({
              valid: isEq
            });
          })
        });
        this.$validator.attach('email', 'required|email|dwa');
      }
    },
    data () {
      return {
        formData: {
          username:'',
          confirmPassword: '',
          password: '',
          phone: ''
        },
        email: ''
      }
    },
    methods:{
      register(){
        this.$validator.validateAll().then(result => {
          if(result){
            this.$validator.validate('confirmPassword', this.formData.confirmPassword).then(result=>{
              alert(result);
            })
          }
        });
      },
      getVerificationCode(){
        if(!this.veeFields.username.valid&&!this.veeFields.phone.valid){
          this.$message.error('请先填写合法的用户名及手机号码');
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../styles/login.css';
</style>
