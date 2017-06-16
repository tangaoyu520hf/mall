<template>
  <div>
    <div class="logincontent">
      <div class="w1200 clearfix">
        <div class="loginbox-bg clearfix">
          <div class="loginbox b-radius6">
            <h2>{{$t("loginMsg")}}</h2>
            <p class="error-txt" v-show="errors.has('username')||errors.has('password')">请输入用户名和密码</p>
            <p class="error-txt" v-show="errors.has('errMsg')">{{errors.first('errMsg')}}</p>
            <p class="iptbox b-radius">
              <label><i class="icons icon-user"></i></label>
              <input type="text" name="username" v-model="data.username" data-vv-as="用户名" v-validate="'required'" class="ipt" placeholder="请输入用户名"  >
            </p>
            <p class="iptbox b-radius">
              <label><i class="icons icon-pwd"></i></label>
              <input type="password" name="password" class="ipt" placeholder="请输入密码" v-model="data.password" >
            </p>
            <p class="login-txt">
              <router-link to="/register" class="txt-zc">免费注册</router-link>
              <router-link to="/forgetPwd" class="wj-pwd">忘记密码？</router-link>
            </p>
            <div class="login-btn"><a style="cursor: pointer" @click="login">登录</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    name: 'login',
    created(){

    },
    data () {
      return {
        data: {
          username: '',
          password: ''
        }
      }
    },
    methods:{
      ...mapMutations([
        'setToken',
        'setUserInfo'
      ]),
      login(){
        this.$validator.validateAll().then(result => {
          if (result) {
            this.$http.post(this.moudules.system+'/api/user/login', this.data).then(response => {
              if(response.data.respCode!='200'){
                this.errors.add('errMsg',response.data.respMsg)
              }else{
                //设置登录token以及过期时间
                this.setToken(response.data.data)
                //获取用户信息及用户权限信息
                this.$http.get(this.moudules.system+'/user/info').then(response => {
                  let userInfo = response.data.data;
                  userInfo.menuList = userInfo.menus || [];
                 /* userInfo.roleFunctions = response.data.data.roleFunctionDTOS || {};*/
                  this.setUserInfo(userInfo)
                  //动态添加路由
                  this.$router.addRoutes(this.$store.getters.getRoutes);
                  var redirect = this.$route.params.redirect;
                  if (redirect) {
                    this.$router.push(redirect);
                  } else {
                    this.$router.push('/');
                  }
                }).catch(()=>{
                  //登录之后如果获取个人信息失败则将token置空
                  this.setToken('');
                })

              }
            });
          }
        }).catch(()=>{});
      }
    },
    i18n: { // `i18n` option
      messages: {
        ch: {loginMsg:'用户登录'}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../styles/login.css';
</style>
