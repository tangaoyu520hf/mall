<template>
  <div class="bg-f0 pb20">
    <div class="infoService-banner"></div>
    <div class="infoService-content">
      <div class="w1200 clearfix">
        <div class="mc-dzl">
          <span class="mc-icon mc-icon-dz"></span>
          <div class="mc-dz-div">
            当前位置：
            <a href="/webshop/notice/infoNotice.do">关于我们&gt;</a>
            <span class="mc-dq" href="javascript:void(0);">友情链接</span>
          </div>
        </div>

        <div class="infoService-box">
          <div class="infoBox-leftside">
            <div class="sevices-topbg"></div>
            <div class="infoBox-nav">
              <h2 class="infoBox-navtit">关于我们</h2>
              <ul>
                <li class="">
                  <a href="aboutus">公司介绍</a>
                </li>
                <li class="">
                  <a href="contactUs">联系我们</a>
                </li>
                <li class="txt-hover">
                  <a href="friendLink">友情链接</a>
                </li>
              </ul>
            </div>
          </div>
          <!--leftside end-->
          <div class="infoBox-rightside">
            <div>
              <h2 class="infoBox-rightside-tit"><span class="blueline"></span>友情链接</h2>
              <div class="infoBox-txtcontent friend-link-content">
                <ul >
                  <li  v-for='(friendLink,indexType) in friendLinkList'>
                    <a :href="friendLink.url" target="_blank"><span>{{friendLink.navigationName}}</span></a>
                  </li>
                </ul>
              </div>
              <!--list end-->
            </div>
          </div>
          <!--rightside end-->
        </div>
        <!--infoService-box end-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'friendLink',
    created(){
      this.$nextTick(() => {
        this.list();
      });
    },
    data () {
      return {
        friendLinkList:[]
      }
    },
    methods:{
      list(){
        this.$http.post(this.sys +'/api/friendLink/list', this.data).then(response => {
          if(response.data.respCode!='200'){
            this.errors.add('errMsg',response.data.respMsg)
          }else{
            this.friendLinkList =response.data.data;
          }
        });
      }
    }
  }
</script>
