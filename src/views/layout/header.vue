<template>
  <div>
    <v-top></v-top>
    <!--hd-top end-->
    <div class="header">
      <div class="w1200 clearfix">
        <router-link to="/" class="lz-logo"></router-link>
        <div class="lz-search">
          <div class="functionbox">
            <ul>
              <li><a href="javascript:;" class="f-current" name="supplyHall" dt-action="/webshop/supplyHall/supplyHallPg.do">供应</a></li>
              <li><a href="javascript:;" name="purchaseHall" dt-action="/webshop/purchaseHall/purchaseHallPg.do">求购</a></li>
              <li><a href="javascript:;" name="shop" dt-action="/webshop/shop/shopPg.do">供应商</a></li>
            </ul>
          </div>
          <div class="searchcntent">
            <div class="search-input fl">
              <input type="text" class="lz-ipt" placeholder="请输入煤种、品名、供货公司、主指标、交货地等...">
            </div>
            <div class="search-btn fl">
              <a href="javascript:;"><i class="icons icon-search"></i>搜索</a>
            </div>
            <!--搜索内容start-->
            <div class="searchResult" style="display:none">
              <ul>
                <li>搜索结果1</li>
                <li>搜索结果2</li>
                <li>搜索结果3</li>
              </ul>
            </div>
            <!--搜索内容end-->
          </div>
        </div>
        <!--search end-->
        <div class="zl-nav">
          <ul id="top-nav">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="mall">商城</router-link></li>
            <li><router-link to="supplyHall">供应大厅</router-link></li>
            <li><router-link to="purchaseHall">求购大厅</router-link></li>
            <li><router-link to="logistics-sources.html">物流服务</router-link></li>
            <li><router-link :to="{ name: 'articleCatalog'}">资讯服务</router-link></li>
          </ul>
        </div>
        <!--nav end-->
      </div>
    </div>
    <!--header end-->
  </div>
</template>

<script>
  /*import '@/styles/login.css';*/
  import vTop from './top.vue'
  export default {
    name: 'header',
    components:{vTop},
    created(){
      this.$nextTick(()=>{
        /*nav*/
        $('#top-nav').lavaLamp({
          fx: 'backout',
          speed: 700,
          click: function () {
            return true
          }
        })
      });
    },
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
