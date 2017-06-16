<template>
  <div>
    <div class="hd-top">
      <div class="w1200 clearfix">
        <div class="fl hd-lefttxt">
          <span class="mr5">欢迎来到大宗商品B2B电商平台！</span>
          <router-link to="/"><i class="icons icon-home"></i>首页</router-link>
          <template v-if="$store.state.user.tokenInfo.token">
            <router-link to="/accountManage/mcPersonalnfo" style="cursor: pointer" class="txt-register">{{$store.getters.getUserInfo.loginName}}</router-link>
            <a style="cursor: pointer" @click="logouting" class="txt-login">退出登录</a>
          </template>
          <template v-else>
            <router-link to="/register" class="txt-register">免费注册</router-link>
            <router-link to="/login" class="txt-login">立即登录</router-link>
          </template>

        </div>
        <div class="fr hd-righttxt">
          <ul>
            <li><router-link to="/accountManage/mcPersonalnfo">个人信息</router-link></li>
            <li><router-link to="/aboutUs">关于我们</router-link></li>
            <li class="noborder"><router-link to="/helpCenter">帮助中心</router-link></li>
          </ul>
          <div class="txt-phone"><i class="icons icon-phone"></i>{{$store.state.setting['SERVICE_TEL']}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*import '@/styles/login.css';*/
  import { mapActions } from 'vuex'
  export default {
    name: 'top',
    created(){
      this.$store.state;
    },
    data () {
      return {}
    },
    methods:{
      ...mapActions([
        'logout'
      ]),
      logouting(){
        this.logout().then(()=>{
          this.$router.push('/login');
        });
        //TODO 这里可以实现跳转到登录页面 预留
/*        //重现登录刷新首页重新加载路由，因为如果用路由跳转则原来用户的路由还是可以进行跳转，因为原来的路由已经加载了并，没有进行清除
        window.location.href='/';*/
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
