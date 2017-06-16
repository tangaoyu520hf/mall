<template>
  <div class="captcha">
    <input type="hidden" name="captchaWebId" :value="$store.getters.getWebId"/>
    <input type="hidden" name="captchaPage" :value="page"/>
    <a href="javascript:void(0);" @click="loadData()" class="img-yzm"><img :src="url" alt="loading"/></a>
    <a href="javascript:void(0);" @click="loadData()" class="fp-change">{{$t("change")}}</a>
  </div>
</template>

<script>
  export default {
    name: 'captcha',
    props: ['page'],
    data () {
      return {
        url: '',
      }
    },
    methods:{
      loadData(){
        this.url =  this.$http.defaults.baseURL+this.sys + '/api/captcha/kaptcha.jpg?webId=' + this.$store.getters.getWebId + '&page=' + this.page+'&t='+Math.random();
      }
    },
    created(){
      this.loadData();
    },
    i18n: { // `i18n` option
      messages: {
        ch: {change:'换一张'}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .captcha img {
    width: 100px;
    height: 40px;
  }
</style>
