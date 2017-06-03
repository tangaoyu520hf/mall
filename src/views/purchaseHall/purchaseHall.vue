<template>
<!--求购大厅-->
  <div class="bg-f0 pb20">
    <div class="shopsresources">
      <div class="w1200 clearfix">
        <div class="searchbox">
          <ul>
            <li>
              <span>煤种：</span>
              <select class="txtsel" id="catalog">
                <option value="">全部</option>
                <option value="DLCOAL">动力煤</option>
                <option value="WYCOAL">无烟煤</option>
                <option value="LJCOAL">炼焦煤</option>
              </select>
            </li>
            <li>
              <span>提货地：</span>
              <input class="ipt-sum b-radius" placeholder="提货地" type="text" name="deliveryAddress" id="deliveryAddress">
            </li>
            <li>
              <span>热值：</span>
              <select class="txtsel" id="lowCalorificValue">
                <option value="">全部</option>
                <option value="1500-3500">
                  1500
                  -
                  3500

                </option>
                <option value="3500-4500">
                  3500
                  -
                  4500

                </option>
                <option value="4500-5000">
                  4500
                  -
                  5000

                </option>
                <option value="5000-6500">
                  5000
                  -
                  6500

                </option>
                <option value="6500-">
                  6500
                  以上
                </option>
              </select>
            </li>
            <li>
              <span>硫份：</span>
              <select class="txtsel" id="baseSulfur">
                <option value="">全部</option>
                <option value="0-0.5">
                  0
                  -
                  0.5

                </option>
                <option value="0.5-1">
                  0.5
                  -
                  1

                </option>
                <option value="1-">
                  1
                  以上
                </option>
              </select>
            </li>
            <li>
              <span>水份：</span>
              <select class="txtsel" id="fullWater">
                <option value="">全部</option>
                <option value="0-10">
                  0
                  -
                  10

                </option>
                <option value="10-20">
                  10
                  -
                  20

                </option>
                <option value="20-30">
                  20
                  -
                  30

                </option>
                <option value="30-">
                  30
                  以上
                </option>
              </select>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="searchData();" class="search-sbtn b-radius ml15"><i class="icons icon-ssearch"></i>查询</a>
            </li>
          </ul>
        </div>
        <!--search区 end-->
        <div class="tabbox">
          <div class="tabPanel">
            <ul class="tab-ul">
              <li class="" id="wanBuyLi">求购交易</li>
              <li id="tenderLi" class="current">招标交易</li>
            </ul>
            <div class="panes clearfix"><div class="buycontent" id="wantBuyBody" style="display: none;"><div class="buycontent-item">  <h3 class="buyitem-title clearfix"><a href="#" class="fl">天津 天津市 和平区求购3333大卡无烟煤</a><span class="public-time">发布时间：2017-05-25 11:24:23</span>  </h3><div class="item-left"> <table cellpadding="0" cellspacing="0"> <tbody><tr>  <td width="50%">价格：<span class="font-bigorange">1</span>元/吨</td><td width="50%">需求量（吨）：<span class="font-bigorange">3323</span>吨</td> </tr><tr>  <td width="50%">公司：贸易商001</td>  <td width="50%">交货日期：2017-05-25 至 2017-05-31</td> </tr></tbody></table></div><div class="btn-supplybox"> <a href="/webshop/purchaseHall/purchaseDetailPg.do?wantBuyId=7151bba8ca5b4dad9105567b20d01a46" class="btn-state bluebg b-radius">我要供货</a></div></div></div>
              <!--list end-->
              <div class="pagination-pagesbox" style="display: none;">
                <div class="pagination-pages" id="wantBuyPaginationDiv"><div class="fy-bg2"><div class="fy-btn2"><a href="javascript:void(0);" onclick="query('wantBuyPaginationDiv',$('#goPageNumwantBuyPaginationDiv:last').val());">GO</a></div><div class="fy-input2"><input type="text" id="goPageNumwantBuyPaginationDiv" onkeyup="if(event.keyCode==13){query('wantBuyPaginationDiv',$('#goPageNumwantBuyPaginationDiv:last').val());}"></div><div class="fy-list2"><div class="pagination-pages-new"><a href="javascript:void(0);"> &lt; </a><a class="page_current" href="javascript:void(0);" onclick="query('wantBuyPaginationDiv',1)">1</a><a href="javascript:void(0);"> &gt; </a></div></div></div></div>
              </div>
              <!--分页end-->
              <div class="pane" style="display: block;">
                <div class="deal-table">
                  <table cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                      <th width="10%">煤种</th>
                      <th width="13%">品名</th>
                      <th width="16%">招标方</th>
                      <th width="10%">热值(Kcal)</th>
                      <th width="13%">交货地</th>
                      <th width="10%">需求量(吨)</th>
                      <th width="10%">状态</th>
                      <th width="10%">操作</th>
                    </tr>
                    </thead>
                    <tbody id="tenderBody"><tr><td>动力煤</td><td>买家003动力煤</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2">买家003</td><td>3333</td><td>吉林省 延边朝鲜族自治州 延吉市</td><td>888</td><td>流拍</td><td><a href="/webshop/purchaseHall/tenderDetailPg.do?tenderNo=ZBD201703310002&amp;merchantId=SJ2016121500004&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>测试无烟煤</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2">买家003</td><td>3333</td><td>吉林省 吉林市 昌邑区</td><td>250</td><td>流拍</td><td><a href="/webshop/purchaseHall/tenderDetailPg.do?tenderNo=ZBD201703310001&amp;merchantId=SJ2016121500004&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>434</td><td>李贤哲买家测试有限公司</td><td>4134</td><td>山东省 淄博市 淄川区</td><td>1</td><td>流拍</td><td><a href="/webshop/purchaseHall/tenderDetailPg.do?tenderNo=ZBD201703220112&amp;merchantId=SJ2016122200009&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>434</td><td>李贤哲买家测试有限公司</td><td>4134</td><td>山东省 淄博市 淄川区</td><td>1</td><td>流拍</td><td><a href="/webshop/purchaseHall/tenderDetailPg.do?tenderNo=ZBD201703220113&amp;merchantId=SJ2016122200009&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>434</td><td>李贤哲买家测试有限公司</td><td>4134</td><td>山东省 淄博市 淄川区</td><td>1</td><td>流拍</td><td><a href="/webshop/purchaseHall/tenderDetailPg.do?tenderNo=ZBD201703220002&amp;merchantId=SJ2016122200009&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>434</td><td>李贤哲买家测试有限公司</td><td>4134</td><td>山东省 淄博市 淄川区</td><td>11</td><td>流拍</td><td><a href="/webshop/purchaseHall/tenderDetailPg.do?tenderNo=ZBD201703220001&amp;merchantId=SJ2016122200009&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>贸易商001动力煤</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2">贸易商001</td><td>3333</td><td>内蒙古自治区 巴彦淖尔市 乌拉特中旗</td><td>232</td><td>流拍</td><td><a href="/webshop/purchaseHall/tenderDetailPg.do?tenderNo=ZBD201703210001&amp;merchantId=SJ2016121500006&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>混煤</td><td>测试吴孟遥</td><td>5000</td><td>河南省 平顶山市 新华区</td><td>30</td><td>流拍</td><td><a href="/webshop/purchaseHall/tenderDetailPg.do?tenderNo=ZBD201703080006&amp;merchantId=SJ2016122200010&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>434</td><td>李贤哲买家测试有限公司</td><td>4134</td><td>河北省 秦皇岛市 海港区</td><td>10</td><td>已完成</td><td><a href="/webshop/purchaseHall/tenderDetailPg.do?tenderNo=ZBD201703080005&amp;merchantId=SJ2016122200009&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>混煤</td><td>测试吴孟遥</td><td>5000</td><td>上海 上海市 黄浦区</td><td>1</td><td>已完成</td><td><a href="/webshop/purchaseHall/tenderDetailPg.do?tenderNo=ZBD201703080004&amp;merchantId=SJ2016122200010&amp;" class="detailbtn-green">详细</a></td></tr></tbody>


                  </table>
                </div>
                <!--table end-->
                <div class="pagination-pagesbox">
                  <div class="pagination-pages" id="tenderPaginationDiv"><div class="fy-bg2"><div class="fy-btn2"><a href="javascript:void(0);" onclick="query('tenderPaginationDiv',$('#goPageNumtenderPaginationDiv:last').val());">GO</a></div><div class="fy-input2"><input type="text" id="goPageNumtenderPaginationDiv" onkeyup="if(event.keyCode==13){query('tenderPaginationDiv',$('#goPageNumtenderPaginationDiv:last').val());}"></div><div class="fy-list2"><div class="pagination-pages-new"><a href="javascript:void(0);"> &lt; </a><a class="page_current" href="javascript:void(0);" onclick="query('tenderPaginationDiv',1)">1</a><a href="javascript:void(0);" onclick="query('tenderPaginationDiv',2)">2</a><a href="javascript:void(0);" onclick="query('tenderPaginationDiv',3)">3</a><a href="javascript:void(0);" onclick="query('tenderPaginationDiv',4)">4</a><a href="javascript:void(0);" onclick="query('tenderPaginationDiv',5)">5</a><a href="javascript:void(0);" onclick="query('tenderPaginationDiv',6)">6</a><a href="javascript:void(0);" onclick="query('tenderPaginationDiv',7)">7</a><a href="javascript:void(0);" onclick="query('tenderPaginationDiv',8)">8</a><a href="javascript:void(0);" onclick="query('tenderPaginationDiv',9)">9</a><a disabled="disabled" href="javascript:void(0);">...</a><a href="javascript:void(0);" onclick="query('tenderPaginationDiv',2)"> &gt; </a></div></div></div></div>
                </div>
                <!--分页end-->
              </div>
              <!--挂牌交易end-->
            </div>
          </div>
        </div>
        <!--tab切换-->
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'mall',
    created(){
      this.$nextTick(() => {

        $('.tabPanel ul.tab-ul li').click(function () {
          $(this).addClass('current').siblings().removeClass('current');
          $('.panes>div:eq(' + $(this).index() + ')').show().siblings().hide();
        });
      });
    },
    data () {
      return {
      }
    },
    methods:{
    }
  }
</script>

