<template>
  <div class="fullSlide clearfix">
    <div class="bd">
      <ul>
        <li v-for="adv in advert.advertList" :_src="adv.imageUrl" style="background:#328dcd center 0 no-repeat;"><a :href="adv.url" :target="adv.openType"></a></li>
      </ul>
    </div>
    <div class="hd">
      <ul></ul>
    </div>
    <span class="prev"></span>
    <span class="next"></span>
  </div>
</template>

<script>
  import  bannerOne from '../../assets/images/banner/1.jpg'
  import  bannerTwo from '../../assets/images/banner/2.jpg'
  import  bannerThree from '../../assets/images/banner/3.jpg'
  export default {
    props: ['code'],
    name: 'advert',
    data () {
      return {
        bannerOne, bannerTwo, bannerThree , advert:{},img:'http://localhost:8102'
      }
    },
    methods: {
      loadData(){
        this.$http.post(this.ecoms+'/api/advert/list4Code?advertPositionCode='+this.code)
          .then(res => {
            this.advert=res.data.data
            var array=this.advert.advertList;
            for (var i = 0; i < array.length; i++) {
              var obj = array[i];
              obj.imageUrl=this.img+'/'+obj.imageUrl.replace(/\\/g, '/');
            }
            this.$nextTick(() => {
              $(this.$el).hover(
                function () {
                  $(this).find('.prev,.next').stop(true, true).fadeTo('show', 0.5)
                },
                function () {
                  $(this).find('.prev,.next').fadeOut()
                }
              )
              $(this.$el).slide({
                titCell: '.hd ul',
                mainCell: '.bd ul',
                effect: 'fold',
                autoPlay: true,
                autoPage: true,
                trigger: 'click',
                startFun: function (i) {
                  var curLi = jQuery('.fullSlide .bd li').eq(i)
                  if (curLi.attr('_src')) {
                    let attr = curLi.attr('_src')
                    let imgPath = 'url(' + attr + ')'
                    curLi.css('background-image', imgPath)
                  }
                }
              })
            });
          })
      }
    },
    created(){
      /*banner*/

      this.loadData();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
