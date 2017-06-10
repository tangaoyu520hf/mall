<template>
  <div>
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
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
    },
    methods: {
      ...mapMutations([
        'setSetting'
      ]),
      loadData(){
        this.$http.post(this.sys+'/api/index/setting')
          .then(res => {
            this.setSetting(res.data.data);
          })
      }
    },
    created(){
      this.loadData();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../styles/index.css';
</style>
