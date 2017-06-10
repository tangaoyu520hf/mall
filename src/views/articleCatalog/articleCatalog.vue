<template>
  <div class="bg-f0 pb20">
    <div class="infoService-banner"></div>
    <div class="infoService-content">
      <div class="w1200 clearfix">
        <div class="mc-dzl">
          <span class="mc-icon mc-icon-dz"></span>
          <div class="mc-dz-div">
            {{$t('currentLocation')}}：
            <a href="/articleCatalog">{{$t('articleCatalog')}}&gt;</a>
            <span class="mc-dq" href="javascript:void(0);">{{ articleCatalog.name }}</span>
          </div>
        </div>

        <div class="infoService-box">
          <div class="infoService-leftside">
            <div class="sevices-topbg"></div>
            <div class="infoBox-nav">
              <h2 class="infoBox-navtit">{{$t('articleCatalog')}}</h2>

              <el-tree :data="treeData" :props="defaultProps" :render-content="renderContent" ref="tree"  node-key="id" highlight-current accordion @node-click="handleNodeClick">
              </el-tree>

            </div>
          </div>

            <div class="infoService-rightside">
              <div v-if="articleNews==null">
                <h2 class="infoService-rightside-tit">
                  <span class="blueline"></span>{{ articleCatalog.name }}</h2>

                <div class="infoService-list">
                  <ul id="noticeList" v-for='(articleNews, index) in pageData.records'>
                    <li>
                      <i class="icons icon-infonotice"></i>
                      <a :data-id="articleNews.newsId" @click="getArticleNews(articleNews.newsId)" class="infoService-txt fl">{{articleNews.title}}</a>
                      <span class="infoService-time fr">{{articleNews.publishTime}}</span>
                    </li>
                  </ul>

                  <div class="pagination-pagesbox">
                    <div class="pagination-pages-new" data-pagesize="10">

                      <el-pagination
                        @current-change="handleCurrentChange"
                        layout="prev, pager, next"
                        :total=pageData.total>
                      </el-pagination>

                    </div>
                  </div>
                  <!--分页end-->
                </div>
                <!--list end-->
              </div>
              <div v-else>

                <h2 class="infoService-rightside-tit"><span class="blueline"></span>{{articleCatalog.name}}</h2>
                <div class="infoService-detailbox">
                  <h1>{{ articleNews.title }}</h1>
                  <h4>{{$t('publishTime')}}:{{articleNews.publishTime}}</h4>
                  <div class="infoService-detailbox-txt"><strong v-html='articleNews.content'></strong></div>
                </div>

                <!--txt end-->
              </div>
              </div>
            </div>


          <!--leftside end-->
          <!--rightside end-->
        </div>
        <!--infoService-box end-->
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Pagination,Tree} from 'element-ui'
  Vue.use(Tree)
  Vue.use(Pagination)

  export default {
    name: 'articleCatalog',
    created(){
      this.$validator.setLocale('zh_CN');
      this.$http.post(this.sys + '/api/articleCatalog/getArticleCatalogTree')
        .then(res => {this.treeData = res.data.data;
          this.$nextTick(() => {this.articleCatalog = this.treeData[0];
            this.checkedKeys(this.articleCatalog.id)})})
    },
    data () {
      return {
        treeData: [],
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        pageData: {},
        articleCatalog: {},
        articleNews:null
      };
    },
    methods: {
      handleNodeClick(data) {
        this.articleCatalog = data;
        var param = {
          newsType: data.id,
          nowPage: 1,
          pageSize: 10
        };
        var querystring = require('querystring');
        this.$http.post(this.sys + '/api/articleNews/page', querystring.stringify(param))
            .then(res => {this.pageData=res.data; this.articleNews=null});
      },
      checkedKeys(id) {
        $('span[data-value='+id+']').parent().click();
      },
      getArticleNews(id) {
        var param = {
          id: id
        };
        var querystring = require('querystring');
        this.$http.post(this.sys + '/api/articleNews/getArticleNews', querystring.stringify(param))
          .then(res => {this.articleNews=res.data.data});
      },
      renderContent(h, { node, data }){
        return (
          <span data-value={data.id}>{node.label}</span>);
      },
      handleCurrentChange(val) {
        var param = {
          newsType: this.articleCatalog.id,
          nowPage: val,
          pageSize: 10
        };
        var querystring = require('querystring');
        this.$http.post(this.sys + '/api/articleNews/page', querystring.stringify(param))
          .then(res => {this.pageData=res.data; this.articleNews=null});
      }
    },
    i18n: { // `i18n` option
      messages: {
        ch: {
          currentLocation: '当前位置',
          articleCatalog: '资讯服务',
          publishTime: '发布时间'
        }
      }
    }
  }
</script>


