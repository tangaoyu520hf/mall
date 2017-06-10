<template>
  <div>
    <div class='helpCenter-banner'></div>
    <div class='infoBox-content'>
      <div class='w1200 clearfix'>
        <div class='placebox'>
          <i class='icons icon-currentplace'></i>{{$t('currentLocation')}}：
          <span>{{$t('helpCenter')}}</span>
        </div>
        <!--当前位置end-->
        <div class='infoBox-box'>
          <div class='infoBox-leftside'>
            <div class='sevices-topbg'></div>
            <div class='info-vnav'>
              <h2 class='infoBox-navtit'>{{$t('helpCenter')}}</h2>

              <div class='vnavbox' v-for='(helpCenterList, key, indexType) in helpType'>
                <div class='vtitle'>
                  <em class='v v01'></em>{{ helpCenterList[0].dictName }}
                </div>

                <div class='vcon'>
                  <ul class='vconlist clearfix' style='display:none;'>
                    <dd v-for='(helpCenter, index) in helpCenterList'>
                      <li class='' :data-value='helpCenter.id'>
                        <a href='javascript:;'>{{ helpCenter.title }}</a>
                      </li>
                    </dd>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <!--leftside end-->
          <div class='infoBox-rightside'>
            <h2 class='infoBox-rightside-tit'><span class='blueline'></span>{{ helpCenter.title }}</h2>
            <div class='infoBox-list' v-html='helpCenter.content'>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'helpCenter',
    beforeCreate(){
    },
    created(){
      this.$validator.setLocale('zh_CN');

      this.$http.post(this.sys + '/api/helpCenter/list')
        .then(res => {
          this.helpType = res.data.data;

          this.$nextTick(() => {
            $(this.$el).on('click', 'div.vtitle', function () {
              $('em.v', $(this)).toggleClass('v02').toggleClass('v01');
              $(this).next('div.vcon').children('ul.vconlist').toggle();
            });
            var vue = this;
            var helpId=this.$route.params.helpId;
            if(helpId){
              $('li[data-value='+helpId+']').addClass('select');
              $('li[data-value='+helpId+']').parents('ul.vconlist').toggle();
            }else{
              $('ul.vconlist:first').find('li:first').addClass('select');
              $('em.v:first').toggleClass('v02');
              $('ul.vconlist:first').toggle();
              helpId=$('ul.vconlist:first').find('li:first').attr('data-value');
            }
            vue.getData(helpId);

            $(this.$el).find('ul.vconlist').on('click', 'li', function () {
              $('ul.vconlist li.select').removeClass('select');
              $(this).addClass('select');
              vue.getData($(this).attr('data-value'));
            });
          });
        })
    },
    data () {
      return {
        helpType: {},
        helpCenter: {}
      }
    },
    watch: {
      '$route' (to) {
        $('em.v.v02').removeClass('v02');
        $('ul.vconlist').css('display','none')
        var li=$('li[data-value='+to.params.helpId+']');
        li.parents('em.v').toggleClass('v02').toggleClass('v01');
        li.parents('ul.vconlist').toggle();
        li.click();
      }
    },
    methods: {
      getData(id){
        this.$http.post(this.sys + '/api/helpCenter/getHelpCenter?id=' + id, {id: id})
          .then(res => {
            this.helpCenter = res.data.data
          })
      }
    },
    i18n: { // `i18n` option
      messages: {
        ch: {
          currentLocation: '当前位置',
          helpCenter: '帮助中心'
        }
      }
    }
  }
</script>

<style scoped>
</style>
