<template>
  <div class='mc-left-box'><span class='mc-left-top'></span>
    <div class='mc-left-nav'>
      <div class='mc-subNavBox'>
        <template v-for='item in $store.getters.getTopMenus'>
          <div class='mc-subNav'><span class='mc-icon mc-icon-memhome'></span>{{item.resName}}</div>
          <ul class='mc-navContent'  :style="isShow(item)">
            <li v-for='childItem in item.children'>
              <router-link :class="{'mc-left-nav-pitch':$route.path==childItem.fullUrl}" :to="childItem.fullUrl">{{childItem.resName}}
              </router-link>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mcSiderMenu',
    created(){
      this.$nextTick(() => {
        $('.mc-subNav').click(function () {
          $(this).toggleClass('mc-currentDd').siblings('.mc-subNav').removeClass('mc-currentDd')
          $(this).toggleClass('mc-currentDt').siblings('.mc-subNav').removeClass('mc-currentDt')

          // 修改数字控制速度， slideUp(500)控制卷起速度
          $(this).next('.mc-navContent').slideToggle(500).siblings('.mc-navContent').slideUp(500);
        })
      })
    },
    computed: {

    },
    data () {
      return {}
    },
    methods:{
      isShow(item){
        let obj = item.children.find((item) => {
          return item.fullUrl == this.$route.path;
        });
        return obj?{display: 'block'}:''
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
  @import '../../styles/index.css';
</style>
