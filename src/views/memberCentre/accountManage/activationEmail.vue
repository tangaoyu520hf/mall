<template>
  <div>
    邮件激活
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapMutations} from 'vuex';
  import {
    Dialog,
    Button,
    Form,
    FormItem,
    Input,
  } from 'element-ui'
  Vue.use(Dialog)
  Vue.use(Button)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Input)
  export default {
    created(){
      this.activationEamil();
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods:{
      ...mapMutations([
        'setUserInfoDetail'
      ]),
      /**
       * 激活邮箱
       */
      activationEamil(){
        if(this.$route.query.token){
          this.$http.post(this.moudules.system+'/user/activationEamil',$.param({token:this.$route.query.token})).then((res) => {
            if(res.data.respCode=='200'){
              this.setUserInfoDetail({email:res.data.data})
              this.$message({
                message: '邮件已激活',
                type: 'success'
              });
            }else{
              this.$message.error('邮件激活失败，请重试');
            }
          });
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../styles/mc_new_css.css';

  table tr th, table tr td {
    text-align: center;
    word-wrap: break-word;
    overflow: hidden;
    word-break: break-all;
    font-size: 12px;
    color: #333333;
    padding: 12px 2px;
  }

  tr {
    border: 1px solid #edf0f2;
  }
</style>
