<template>
  <div>
    <div class="hd-top">
      <div class="w1200 clearfix">
        <div class="fl hd-lefttxt">
          <span class="mr5">欢迎来到大宗商品B2B电商平台！</span>
          <router-link to="/"><i class="icons icon-home"></i>首页</router-link>
          <router-link to="/register" class="txt-register">免费注册</router-link>
          <router-link to="/login" class="txt-login">立即登录</router-link>
        </div>
        <div class="fr hd-righttxt">
          <ul>
            <li><a href="mc-html/my-order-buy.html">我的订单</a></li>
            <li><a href="aboutUs.html">关于我们</a></li>
            <li class="noborder"><a href="helpCenter-buyers.html">帮助中心</a></li>
          </ul>
          <div class="txt-phone"><i class="icons icon-phone"></i>0533-2221555</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*import '@/styles/login.css';*/
  export default {
    name: 'top',
    created(){
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
