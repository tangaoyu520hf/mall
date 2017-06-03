<template>
  <div class="mc-body">
    <v-top></v-top>
    <div class="mc-top-box">
      <div class="mc-top">
        <a href="../index.html" class="mc-lz-logo"></a>
        <span class="mc_top_bt">会员中心</span>
      </div>
    </div>
    <div class="mc-container-body">
      <v-sider-menu></v-sider-menu>
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  /*import '@/styles/login.css';*/
  import vFooter from '../layout/footer.vue'
  import vTop from './top.vue'
  import vSiderMenu from './mcSiderMenu.vue'
  import 'static/js/main'
  export default {
    name: 'mcHome',
    components:{vFooter,vTop,vSiderMenu},
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../styles/index.css';
</style>
