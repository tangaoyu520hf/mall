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
                <div class='vtitle' v-if='indexType == 0'>
                  <em class='v v02'></em>{{ helpCenterList[0].dictName }}
                </div>
                <div class='vtitle' v-else>
                  <em class='v v01'></em>{{ helpCenterList[0].dictName }}
                </div>

                <div class='vcon' v-if='indexType == 0'>
                  <ul class='vconlist clearfix' style='display:block;'>
                    <dd v-for='(helpCenter, index) in helpCenterList'>
                      <div v-if='index == 0'>
                        <input type='hidden' :value='helpCenter.id' id='helpCenterMenuIndex'>
                        <li class='select' :data-value='helpCenter.id'>
                          <a href='javascript:;'>{{ helpCenter.title }}</a>
                        </li>
                      </div>
                      <div v-else>
                        <li class='' :data-value='helpCenter.id'>
                          <a href='javascript:;'>{{ helpCenter.title }}</a>
                        </li>
                      </div>
                    </dd>
                  </ul>
                </div>
                <div class='vcon' v-else>
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
  import 'static/js/index';

  export default {
    name: 'helpCenter',
    beforeCreate(){
    },
    created(){

      this.$validator.setLocale('zh_CN');

      this.$http.post(this.sys + '/helpCenter/ui/list')
        .then(res => {
          this.helpType = res.data.data;

          this.$nextTick(() => {
            $(this.$el).on('click', 'div.vtitle', function () {
              $('em.v', $(this)).toggleClass('v02').toggleClass('v01');
              $(this).next('div.vcon').children('ul.vconlist').toggle();
            });
            var vue = this;
            vue.getData($('#helpCenterMenuIndex').val())

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
    methods: {
      getData(id){
        this.$http.post(this.sys + '/helpCenter/getHelpCenter?id=' + id, {id: id})
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
