<template>
  <div>
    <!--footer start-->
    <div class="footer-nav">
      <div class="w1200 clearfix">
        <div class="footerbox clearfix">
          <div class="links-wh">
            <h2><i class="icons icon-link"></i>友情链接</h2>
            <div class="footernav-txt clearfix">
              <ul>
                <li v-for="nav in navigation"><a :href="nav.url" :target="nav.openType">{{nav.navigationName}}</a></li>
              </ul>
            </div>
          </div>
          <!--友情链接 end-->
          <div class="help-wh" v-for="(value, key) in help">
            <h2><i :class="key"></i>{{value.type.dictName}}</h2>
            <div class="footernav-txt clearfix">
              <ul>
                <li v-for="item in value.list">
                  <router-link :to="{ name: 'helpCenterView', params: { helpId: item.helpId }}">{{item.title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <!--帮助中心 end-->
          <div class="follow-wh">
            <h2><i class="icons icon-follow"></i>关注我们</h2>
            <div class="footernav-txt clearfix">
              <ul>
                <li><a href="javascript:void(0);">APP下载</a></li>
                <li class="ewm-imgbox"><a href="#"><img src="../../assets/images/ewm.jpg"/></a></li>

              </ul>
            </div>
          </div>
          <!--关注我们 end-->
        </div>
      </div>
    </div>
    <!--footer-nav end-->
    <div class="footer-copyright">
      <div class="w1200 clearfix">
        <div class="footer-copyrightbox">
          <p>{{$store.state.setting['COPYRIGHT']}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*import '@/styles/login.css';*/
  export default {
    name: 'footer',
    data () {
      return {
        navigation:[],
        help:[]
      }
    },
    created(){
      this.loadData();
    },
    methods: {
      loadData(){
        this.$http.post(this.sys+'/api/index/navigation')
          .then(res => {
            this.navigation=res.data.data
          })
        this.$http.post(this.sys+'/api/index/help')
          .then(res => {
            this.help=res.data.data
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
