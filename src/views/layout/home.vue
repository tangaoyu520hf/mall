<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  /*import '@/styles/login.css';*/
  import vFooter from '../layout/footer.vue'
  import vHeader from '../layout/header.vue'
  import 'static/js/main'
  export default {
    name: 'home',
    components:{vFooter,vHeader},
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
