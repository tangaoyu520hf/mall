<template>
<!--供应大厅-->
  <div class="bg-f0 pb20">
    <!--条件筛选开始-->
    <div class="search-querybox">
      <div class="w1200 clearfix">
        <div class="search-query">
          <div class="querytitle"><i class="icons icon-query"></i>条件筛选</div>
          <div class="togglebox">
            <span style="display:block" class="hide">收起筛选<i class="icons icon-tup"></i></span>
            <span style="display:none" class="show">展开筛选<i class="icons icon-tdown"></i></span>
          </div>

        </div>
        <!--title end-->
        <div class="searchlist-box" id="supplySearch-div">
          <dl class="selector-list">
            <dt class="selector-title">煤种</dt>
            <dd class="selector-txt">
              <ul class="coal-type" data-key="coalVariety" data-key-1="catalogCode">
                <li><a href="javascript:;" class="choose-on choose-all">不限</a></li>
                <li><a href="javascript:;" data-val="57e398ad732875083ba605fe">动力煤</a>
                </li>
                <li><a href="javascript:;" data-val="57e398ea732875083ba605ff">无烟煤</a>
                </li>
                <li><a href="javascript:;" data-val="57e398ff732875083ba60600">炼焦煤</a>
                </li>
              </ul>
            </dd>
          </dl>
          <dl class="selector-list">
            <dt class="selector-title">产地</dt>
            <dd class="selector-txt clearfix">
              <ul class="place-type" data-key="place">
                <li><a href="javascript:;" class="choose-on choose-all">不限</a></li>
                <li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="内蒙古">内蒙古</a>
                </li>

                <li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="山东">山东</a>
                </li>

                <li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="山西">山西</a>
                </li>

                <li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="陕西">陕西</a>
                </li>

                <li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="甘肃">甘肃</a>
                </li>

                <li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="河南">河南</a>
                </li>


              </ul>
            </dd>
          </dl>

          <dl class="selector-list">
            <dt class="selector-title">交割地</dt>
            <dd class="selector-txt clearfix">
              <ul class="place-type" data-key="deliveryAddress">
                <li><a href="javascript:;" class="choose-on choose-all">不限</a></li>
                <li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="内蒙古">内蒙古</a>
                </li>

                <li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="山东">山东</a>
                </li>

                <li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="山西">山西</a>
                </li>

                <li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="陕西">陕西</a>
                </li>

                <li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="甘肃">甘肃</a>
                </li>

                <li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="河南">河南</a>
                </li>

              </ul>
            </dd>
          </dl>
          <dl class="selector-list">
            <dt class="selector-title">低位发热量(Qnet)</dt>
            <dd class="selector-txt clearfix">
              <ul class="target-type" data-key="lowCalorificFloorValue" data-key-1="lowCalorificUpperValue">
                <li><a href="javascript:;" class="choose-on choose-all">不限</a></li>
                <li><a href="javascript:;" data-val="1500" data-val-1="3500">
                  1500
                  -
                  3500

                </a></li>
                <li><a href="javascript:;" data-val="3500" data-val-1="4500">
                  3500
                  -
                  4500

                </a></li>
                <li><a href="javascript:;" data-val="4500" data-val-1="5000">
                  4500
                  -
                  5000

                </a></li>
                <li><a href="javascript:;" data-val="5000" data-val-1="6500">
                  5000
                  -
                  6500

                </a></li>
                <li><a href="javascript:;" data-val="6500" data-val-1="">
                  6500
                  以上
                </a></li>
              </ul>
            </dd>
          </dl>
          <!--低位发热量(Qnet)end-->
          <dl class="selector-list">
            <dt class="selector-title">全硫份(St)</dt>
            <dd class="selector-txt clearfix">
              <ul class="target-type" data-key="baseSulfurFloor" data-key-1="baseSulfurUpper">
                <li><a href="javascript:;" class="choose-on choose-all">不限</a></li>
                <li><a href="javascript:;" data-val="0" data-val-1="0.5">
                  0
                  -
                  0.5

                </a></li>
                <li><a href="javascript:;" data-val="0.5" data-val-1="1">
                  0.5
                  -
                  1

                </a></li>
                <li><a href="javascript:;" data-val="1" data-val-1="">
                  1
                  以上
                </a></li>
              </ul>
            </dd>
          </dl>
          <!--全硫份(St)end-->
          <dl class="selector-list">
            <dt class="selector-title">挥发份(V)</dt>
            <dd class="selector-txt clearfix">
              <ul class="target-type" data-key="baseVolatileFloor" data-key-1="baseVolatileUpper">
                <li><a href="javascript:;" class="choose-on choose-all">不限</a>
                </li>
                <li><a href="javascript:;" data-val="0" data-val-1="10">
                  0
                  -
                  10

                </a></li>
                <li><a href="javascript:;" data-val="10" data-val-1="20">
                  10
                  -
                  20

                </a></li>
                <li><a href="javascript:;" data-val="20" data-val-1="">
                  20
                  以上
                </a></li>
              </ul>
            </dd>
          </dl>
          <!--挥发份(V)end-->
          <dl class="selector-list">
            <dt class="selector-title">全水份(Mt)</dt>
            <dd class="selector-txt clearfix">
              <ul class="target-type" data-key="fullWaterFloor" data-key-1="fullWaterUpper">
                <li><a href="javascript:;" class="choose-on choose-all">不限</a></li>
                <li><a href="javascript:;" data-val="0" data-val-1="10">
                  0
                  -
                  10

                </a></li>
                <li><a href="javascript:;" data-val="10" data-val-1="20">
                  10
                  -
                  20

                </a></li>
                <li><a href="javascript:;" data-val="20" data-val-1="30">
                  20
                  -
                  30

                </a></li>
                <li><a href="javascript:;" data-val="30" data-val-1="">
                  30
                  以上
                </a></li>
              </ul>
            </dd>
          </dl>
        </div>



      </div>
      <!-- 更多条件 start -->
      <div class="search-more">
        <!-- 更多条件 end -->
      </div>
    </div>
    <!--条件筛选结束-->
    <!--资源开始-->
    <div class="supplyResources">
      <div class="w1200 clearfix">
        <div class="tabbox">
          <div class="tabPanel">
            <ul class="tab-ul">
              <li class="current" id="quoteLi">挂牌交易</li>
              <li id="channelLi" class="">通道交易</li>
              <li id="biddingLi" class="">竞价交易</li>
              <li id="directLi" class="">定向交易</li>
              <li id="sellShops" class="">企业专区</li>

            </ul>
            <div class="panes clearfix">    <div class="pane" style="display: block;">
              <div class="queryInfo-box">
                <dl class="b-radius">
                  <dt>排序</dt>
                  <dd id="createTime_sort" class="dis-down">创建时间<i class="icons icon-down"></i></dd>
                  <dd id="sellCount_sort" class="">销售<i class="icons icon-down"></i></dd>
                  <dd id="price_sort" class="">价格<i class="icons icon-down"></i></dd>
                </dl>
              </div>
              <div class="deal-table">
                <table cellpadding="0" cellspacing="0">
                  <thead>
                  <tr>
                    <th width="10%">煤种</th>
                    <th width="13%">品名</th>
                    <th width="16%">供货公司</th>
                    <th width="10%">热值(Kcal)</th>
                    <th width="13%">交货地</th>
                    <th width="10%">库存（吨）</th>
                    <th width="10%">价格（元/吨）</th>
                    <th width="8%">有效期</th>
                    <th width="10%">操作</th>
                  </tr>
                  </thead>
                  <tbody id="quoteBody"><tr><td style="position: relative;">动力煤</td><td>贸易商001动力煤001</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016121500006">贸易商001</a></td><td>3333</td><td>上海 上海市 黄浦区</td><td>12</td><td>1</td><td>2017-06-10</td><td><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201705250001&amp;merchantId=SJ2016121500006&amp;" class="detailbtn-green">详细</a></td></tr><tr><td style="position: relative;">动力煤</td><td>110</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2017021500002">高帅测试用企业</a></td><td>2000</td><td>山东省 淄博市 淄川区</td><td>9986</td><td>0.1</td><td>2021-04-03</td><td><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201703220001&amp;merchantId=SJ2017021500002&amp;" class="detailbtn-green">详细</a></td></tr><tr><td style="position: relative;">炼焦煤</td><td>测试炼焦煤</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016121500005">卖家004</a></td><td>4444</td><td>山西省 大同市 矿区</td><td>4422</td><td>1</td><td>2018-03-21</td><td><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201703210001&amp;merchantId=SJ2016121500005&amp;" class="detailbtn-green">详细</a></td></tr><tr><td style="position: relative;">动力煤</td><td>块1</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016112100004">淄博买炭公司</a></td><td>6300</td><td>安徽 马鞍山 花山区 电厂</td><td>199608</td><td>0.85</td><td>2017-12-31</td><td><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201612280001&amp;merchantId=SJ2016112100004&amp;" class="detailbtn-green">详细</a></td></tr><tr><td style="position: relative;">动力煤</td><td>娄底动力煤</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016120700003">娄底煤炭贸易有限责任公司</a></td><td>3000</td><td>湖南 娄底 双峰县</td><td>59000</td><td>1000</td><td>2017-12-22</td><td><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201612070001&amp;merchantId=SJ2016120700003&amp;" class="detailbtn-green">详细</a></td></tr></tbody>
                </table>
              </div>
              <!--table end-->
              <div class="pagination-pagesbox">
                <div class="pagination-pages" id="pageDiv"><div class="fy-bg2"><div class="fy-btn2"><a href="javascript:void(0);" onclick="query('pageDiv',$('#goPageNumpageDiv:last').val());">GO</a></div><div class="fy-input2"><input type="text" id="goPageNumpageDiv" onkeyup="if(event.keyCode==13){query('pageDiv',$('#goPageNumpageDiv:last').val());}"></div><div class="fy-list2"><div class="pagination-pages-new"><a href="javascript:void(0);"> &lt; </a><a class="page_current" href="javascript:void(0);" onclick="query('pageDiv',1)">1</a><a href="javascript:void(0);"> &gt; </a></div></div></div></div>
              </div>
              <!--分页end-->
            </div>


              <!--排序end-->


              <!--挂牌交易end-->
              <!--交易通道start-->
              <div class="pane" style="display: none;">
                <div class="deal-table">
                  <table cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                      <th width="12%">煤种</th>
                      <th width="13%">品名</th>
                      <th width="20%">供货公司</th>
                      <th width="10%">热值(Kcal)</th>
                      <th width="15%">交割地</th>
                      <th width="15%">窗口价格（元/吨）</th>
                      <th width="15%">操作</th>
                    </tr>
                    </thead>
                    <tbody id="channelBody"><tr><td>动力煤</td><td>小块</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016122200008">测试用生产企业苏振浩</a></td><td>3400</td><td>山东省 淄博市 淄川区</td><td>0.01</td><td><a href="/webshop/channelPg/detail.do?id=TDGP20170513005&amp;merchantId=SJ2016122200008" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>38快</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2017021500002">高帅测试用企业</a></td><td>3455</td><td>北京 北京市 东城区</td><td>0.1</td><td><a href="/webshop/channelPg/detail.do?id=TDGP20170513004&amp;merchantId=SJ2017021500002" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>110</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2017021500002">高帅测试用企业</a></td><td>2000</td><td>山东省 济宁市 市中区</td><td>0.1</td><td><a href="/webshop/channelPg/detail.do?id=TDGP20170513003&amp;merchantId=SJ2017021500002" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>000</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016122200004">科祥贸易有限公司</a></td><td>3400</td><td>山东省 淄博市 淄川区</td><td>0.1</td><td><a href="/webshop/channelPg/detail.do?id=TDGP20170513002&amp;merchantId=SJ2016122200004" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>38块</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016122200004">科祥贸易有限公司</a></td><td>5400</td><td>山东省 淄博市 淄川区</td><td>0.1</td><td><a href="/webshop/channelPg/detail.do?id=TDGP20170513001&amp;merchantId=SJ2016122200004" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>贸易商002测试煤</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016122200003">贸易商002</a></td><td>2333</td><td>辽宁省</td><td>180</td><td><a href="/webshop/channelPg/detail.do?id=TDGP20170508005&amp;merchantId=SJ2016122200003" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>wuyanmei888</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2017042700001">lina64</a></td><td>2500</td><td>内蒙古自治区</td><td>190</td><td><a href="/webshop/channelPg/detail.do?id=TDGP20170508004&amp;merchantId=SJ2017042700001" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>donglimei3333</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2017042700001">lina64</a></td><td>2500</td><td>内蒙古自治区</td><td>130</td><td><a href="/webshop/channelPg/detail.do?id=TDGP20170508003&amp;merchantId=SJ2017042700001" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>湖北动力煤</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016121500006">贸易商001</a></td><td>2345</td><td>北京 北京市 东城区</td><td>1</td><td><a href="/webshop/channelPg/detail.do?id=TDGP20170508001&amp;merchantId=SJ2016121500006" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>无烟煤3838</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016120400001">lina60</a></td><td>7000</td><td>内蒙古自治区</td><td>160</td><td><a href="/webshop/channelPg/detail.do?id=TDGP20170505010&amp;merchantId=SJ2016120400001" class="detailbtn-green">详细</a></td></tr></tbody>
                  </table>
                </div>
                <div class="pagination-pagesbox">
                  <div class="pagination-pages" id="channelPageDiv"><div class="fy-bg2"><div class="fy-btn2"><a href="javascript:void(0);" onclick="query('channelPageDiv',$('#goPageNumchannelPageDiv:last').val());">GO</a></div><div class="fy-input2"><input type="text" id="goPageNumchannelPageDiv" onkeyup="if(event.keyCode==13){query('channelPageDiv',$('#goPageNumchannelPageDiv:last').val());}"></div><div class="fy-list2"><div class="pagination-pages-new"><a href="javascript:void(0);"> &lt; </a><a class="page_current" href="javascript:void(0);" onclick="query('channelPageDiv',1)">1</a><a href="javascript:void(0);" onclick="query('channelPageDiv',2)">2</a><a href="javascript:void(0);" onclick="query('channelPageDiv',3)">3</a><a href="javascript:void(0);" onclick="query('channelPageDiv',4)">4</a><a href="javascript:void(0);" onclick="query('channelPageDiv',5)">5</a><a href="javascript:void(0);" onclick="query('channelPageDiv',6)">6</a><a href="javascript:void(0);" onclick="query('channelPageDiv',2)"> &gt; </a></div></div></div></div>
                </div>
              </div>
              <!--交易通道end-->
              <div class="pane" style="display: none;">
                <div class="deal-table">
                  <table cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                      <th width="10%">煤种</th>
                      <th width="13%">品名</th>
                      <th width="16%">供货公司</th>
                      <th width="10%">热值(Kcal)</th>
                      <th width="13%">交割地</th>
                      <th width="10%">供应量(吨)</th>
                      <th width="10%">当前价（元/吨）</th>
                      <th width="8%">状态</th>
                      <th width="10%">操作</th>
                    </tr>
                    </thead>
                    <tbody id="biddingBody"><tr><td>动力煤</td><td>动力煤55555</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016120400001">lina60</a></td><td>7500</td><td>北京 东城区</td><td>100</td><td>1.16</td><td class="font-orange">竞价中</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201701050003&amp;merchantId=SJ2016120400001&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>末煤</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016111500004">陕西长武亭南煤业有限责任公司</a></td><td>5800</td><td>陕西 咸阳 长武县</td><td>100</td><td>1</td><td class="font-orange">竞价中</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201611220004&amp;merchantId=SJ2016111500004&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>炼焦煤</td><td>20161123</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016112300002">武汉拓福软件公司</a></td><td>5000</td><td>内蒙古 呼和浩特 新城区</td><td>1</td><td>1</td><td class="font-orange">竞价中</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201611240006&amp;merchantId=SJ2016112300002&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>炼焦煤</td><td>炼焦煤7878</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016113000002">lina57</a></td><td>2100</td><td>辽宁 沈阳 和平区</td><td>100</td><td>2</td><td class="font-orange">竞价中</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201612010004&amp;merchantId=SJ2016113000002&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>炼焦煤</td><td>炼焦煤260</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016120400001">lina60</a></td><td>2600</td><td>北京 东城区 是电风扇的</td><td>190</td><td>6</td><td class="font-orange">竞价中</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201612050003&amp;merchantId=SJ2016120400001&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>无烟煤2</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110700005">平安测试零三八六零</a></td><td>2000</td><td>吉林 长春 南关区</td><td>1000</td><td>1</td><td class="font-gray">竞价结束</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201611070002&amp;merchantId=SJ2016110700005&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>无烟煤5</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110700005">平安测试零三八六零</a></td><td>2200</td><td>上海 虹口区</td><td>150</td><td>1</td><td class="font-gray">竞价结束</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201611070001&amp;merchantId=SJ2016110700005&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>动力煤11</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110700005">平安测试零三八六零</a></td><td>2100</td><td>上海 普陀区</td><td>160</td><td>1</td><td class="font-gray">竞价结束</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201611070003&amp;merchantId=SJ2016110700005&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>无烟煤88</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110700005">平安测试零三八六零</a></td><td>2100</td><td>黑龙江 哈尔滨 道里区</td><td>130</td><td>1</td><td class="font-gray">竞价结束</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201611080003&amp;merchantId=SJ2016110700005&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>长沙二号末</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110800002">湖南能源利用有限责任公司</a></td><td>2000</td><td>湖南 长沙 芙蓉区</td><td>1000</td><td>1</td><td class="font-gray">竞价结束</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201611080004&amp;merchantId=SJ2016110800002&amp;" class="detailbtn-green">详细</a></td></tr></tbody>

                  </table>
                </div>
                <!--table end-->
                <div class="pagination-pagesbox">
                  <div class="pagination-pages" id="biddingPageDiv"><div class="fy-bg2"><div class="fy-btn2"><a href="javascript:void(0);" onclick="query('biddingPageDiv',$('#goPageNumbiddingPageDiv:last').val());">GO</a></div><div class="fy-input2"><input type="text" id="goPageNumbiddingPageDiv" onkeyup="if(event.keyCode==13){query('biddingPageDiv',$('#goPageNumbiddingPageDiv:last').val());}"></div><div class="fy-list2"><div class="pagination-pages-new"><a href="javascript:void(0);"> &lt; </a><a class="page_current" href="javascript:void(0);" onclick="query('biddingPageDiv',1)">1</a><a href="javascript:void(0);" onclick="query('biddingPageDiv',2)">2</a><a href="javascript:void(0);" onclick="query('biddingPageDiv',3)">3</a><a href="javascript:void(0);" onclick="query('biddingPageDiv',4)">4</a><a href="javascript:void(0);" onclick="query('biddingPageDiv',5)">5</a><a href="javascript:void(0);" onclick="query('biddingPageDiv',6)">6</a><a href="javascript:void(0);" onclick="query('biddingPageDiv',7)">7</a><a href="javascript:void(0);" onclick="query('biddingPageDiv',8)">8</a><a href="javascript:void(0);" onclick="query('biddingPageDiv',9)">9</a><a disabled="disabled" href="javascript:void(0);">...</a><a href="javascript:void(0);" onclick="query('biddingPageDiv',2)"> &gt; </a></div></div></div></div>
                </div>
                <!--分页end-->
              </div>
              <!--竞价交易end-->
              <div class="pane" style="display: none;">

                <div class="deal-table">
                  <table cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                      <th width="15%">煤种</th>
                      <th width="18%">品名</th>
                      <th width="22%">供货公司</th>
                      <th width="13%">热值(Kcal)</th>
                      <th width="19%">硫份</th>
                      <th width="16%">挥发分</th>
                    </tr>
                    </thead>
                    <tbody id="directBody"><tr><td>动力煤</td><td>动力煤</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2017042700001">lina64</a></td><td>7400</td><td>8.00</td><td>18</td></tr><tr><td>动力煤</td><td>贸易商002动力煤001</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016122200003">贸易商002</a></td><td>5555</td><td>5.00</td><td>5</td></tr><tr><td>动力煤</td><td>110</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2017021500002">高帅测试用企业</a></td><td>2000</td><td>9.00</td><td>33</td></tr><tr><td>动力煤</td><td>110</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2017021500002">高帅测试用企业</a></td><td>2000</td><td>9.00</td><td>33</td></tr><tr><td>炼焦煤</td><td>炼焦煤260</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016120400001">lina60</a></td><td>2600</td><td>9.00</td><td>13</td></tr><tr><td>炼焦煤</td><td>测试炼焦煤</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016121500005">卖家004</a></td><td>4444</td><td>4.00</td><td>4</td></tr><tr><td>炼焦煤</td><td>测试炼焦煤</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016121500005">卖家004</a></td><td>4444</td><td>4.00</td><td>4</td></tr><tr><td>动力煤</td><td>donglimei</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016120400001">lina60</a></td><td>2500</td><td>9.00</td><td>14</td></tr><tr><td>无烟煤</td><td>11111</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016121500006">贸易商001</a></td><td>3333</td><td>1.00</td><td>1</td></tr><tr><td>无烟煤</td><td>无烟煤009</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110700005">平安测试零三八六零</a></td><td>2000</td><td>5.00</td><td>13</td></tr></tbody>

                  </table>
                </div>
                <!--table end-->
                <div class="pagination-pagesbox">
                  <div class="pagination-pages" id="directPageDiv"><div class="fy-bg2"><div class="fy-btn2"><a href="javascript:void(0);" onclick="query('directPageDiv',$('#goPageNumdirectPageDiv:last').val());">GO</a></div><div class="fy-input2"><input type="text" id="goPageNumdirectPageDiv" onkeyup="if(event.keyCode==13){query('directPageDiv',$('#goPageNumdirectPageDiv:last').val());}"></div><div class="fy-list2"><div class="pagination-pages-new"><a href="javascript:void(0);"> &lt; </a><a class="page_current" href="javascript:void(0);" onclick="query('directPageDiv',1)">1</a><a href="javascript:void(0);" onclick="query('directPageDiv',2)">2</a><a href="javascript:void(0);" onclick="query('directPageDiv',3)">3</a><a href="javascript:void(0);" onclick="query('directPageDiv',4)">4</a><a href="javascript:void(0);" onclick="query('directPageDiv',5)">5</a><a href="javascript:void(0);" onclick="query('directPageDiv',6)">6</a><a href="javascript:void(0);" onclick="query('directPageDiv',7)">7</a><a href="javascript:void(0);" onclick="query('directPageDiv',8)">8</a><a href="javascript:void(0);" onclick="query('directPageDiv',9)">9</a><a disabled="disabled" href="javascript:void(0);">...</a><a href="javascript:void(0);" onclick="query('directPageDiv',2)"> &gt; </a></div></div></div></div>
                </div>
                <!--分页end-->
              </div>






              <!--分页end-->
              <div class="pane mall-company" style="display: none;">
                <div class="w1200 clearfix">
                  <div id="sellerShopsArea" class="mall-companylist">
                    <ul class="">

                      <li class="mr10">
                        <table class="imgbox" cellpadding="0" cellspacing="0">
                          <tbody>
                          <tr>
                            <td>

                              <img src="/staticSource/mc_img/company_photo.png">

                            </td>
                            <td valign="middle">

                              山东煤炭贸易公司
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div class="producetxt">
                          <p style="padding:0px;"><i class="icons icon-blockplace"></i>所在地：四水厂</p>
                          <p style="padding:0px;"><i class="icons icon-product"></i>主营产品：煤炭</p>
                        </div>
                        <a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110400002&amp;" class="openbtn">进入专区</a>
                      </li>

                      <li class="mr10">
                        <table class="imgbox" cellpadding="0" cellspacing="0">
                          <tbody>
                          <tr>
                            <td>

                              <img src="/staticSource/mc_img/company_photo.png">

                            </td>
                            <td valign="middle">

                              济南煤炭贸易有限公司
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div class="producetxt">
                          <p style="padding:0px;"><i class="icons icon-blockplace"></i>所在地：济南</p>
                          <p style="padding:0px;"><i class="icons icon-product"></i>主营产品：煤炭</p>
                        </div>
                        <a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110400004&amp;" class="openbtn">进入专区</a>
                      </li>

                      <li class="mr10">
                        <table class="imgbox" cellpadding="0" cellspacing="0">
                          <tbody>
                          <tr>
                            <td>

                              <img src="/staticSource/mc_img/company_photo.png">

                            </td>
                            <td valign="middle">

                              淄博煤炭贸易公司
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div class="producetxt">
                          <p style="padding:0px;"><i class="icons icon-blockplace"></i>所在地：淄博</p>
                          <p style="padding:0px;"><i class="icons icon-product"></i>主营产品：煤炭</p>
                        </div>
                        <a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110400005&amp;" class="openbtn">进入专区</a>
                      </li>

                      <li>
                        <table class="imgbox" cellpadding="0" cellspacing="0">
                          <tbody>
                          <tr>
                            <td>

                              <img src="/staticSource/mc_img/company_photo.png">

                            </td>
                            <td valign="middle">

                              山东煤炭运销公司
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div class="producetxt">
                          <p style="padding:0px;"><i class="icons icon-blockplace"></i>所在地：山东</p>
                          <p style="padding:0px;"><i class="icons icon-product"></i>主营产品：煤炭</p>
                        </div>
                        <a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110400006&amp;" class="openbtn">进入专区</a>
                      </li>

                      <li class="mr10">
                        <table class="imgbox" cellpadding="0" cellspacing="0">
                          <tbody>
                          <tr>
                            <td>

                              <img src="/staticSource/mc_img/company_photo.png">

                            </td>
                            <td valign="middle">

                              <img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2" style="width: auto;height: auto;margin-right: 0px">

                              徐双公司
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div class="producetxt">
                          <p style="padding:0px;"><i class="icons icon-blockplace"></i>所在地：淄博南定</p>
                          <p style="padding:0px;"><i class="icons icon-product"></i>主营产品：动力煤</p>
                        </div>
                        <a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110500001&amp;" class="openbtn">进入专区</a>
                      </li>

                      <li class="mr10">
                        <table class="imgbox" cellpadding="0" cellspacing="0">
                          <tbody>
                          <tr>
                            <td>

                              <img src="/staticSource/mc_img/company_photo.png">

                            </td>
                            <td valign="middle">

                              <img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2" style="width: auto;height: auto;margin-right: 0px">

                              齐鲁云商苏振浩
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div class="producetxt">
                          <p style="padding:0px;"><i class="icons icon-blockplace"></i>所在地：山东淄博</p>
                          <p style="padding:0px;"><i class="icons icon-product"></i>主营产品：煤炭</p>
                        </div>
                        <a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110500004&amp;" class="openbtn">进入专区</a>
                      </li>

                      <li class="mr10">
                        <table class="imgbox" cellpadding="0" cellspacing="0">
                          <tbody>
                          <tr>
                            <td>

                              <img src="/image/COMPANY_LOG/2016/11/201611071545331520.png">

                            </td>
                            <td valign="middle">

                              湖南煤炭贸易有限责任公司
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div class="producetxt">
                          <p style="padding:0px;"><i class="icons icon-blockplace"></i>所在地：湖南</p>
                          <p style="padding:0px;"><i class="icons icon-product"></i>主营产品：煤炭</p>
                        </div>
                        <a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110700001&amp;" class="openbtn">进入专区</a>
                      </li>

                      <li>
                        <table class="imgbox" cellpadding="0" cellspacing="0">
                          <tbody>
                          <tr>
                            <td>

                              <img src="/staticSource/mc_img/company_photo.png">

                            </td>
                            <td valign="middle">

                              <img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2" style="width: auto;height: auto;margin-right: 0px">

                              三诺医药
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div class="producetxt">
                          <p style="padding:0px;"><i class="icons icon-blockplace"></i>所在地：湖南长沙</p>
                          <p style="padding:0px;"><i class="icons icon-product"></i>主营产品：药品</p>
                        </div>
                        <a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110700002&amp;" class="openbtn">进入专区</a>
                      </li>

                    </ul>
                  </div>
                  <div id="companyPageDiv" class="mc-page">
                    <div class="fy-bg-new" data-page="1" data-pagesize="8" data-dttplid="companyTemplate" data-selectcallback="loadPageData">
                      <div class="fy-list-new">
                        <div class="pagination-pages-new">
                          <a href="javascript:;" class="prev" onclick="pageSelect(this)">&lt;</a>


                          <a href="javascript:;" class="page_current" onclick="pageSelect(this)">1</a>



                          <a href="javascript:;" onclick="pageSelect(this)">2</a>



                          <a href="javascript:;" onclick="pageSelect(this)">3</a>



                          <a href="javascript:;" onclick="pageSelect(this)">4</a>



                          <a href="javascript:;" onclick="pageSelect(this)">5</a>



                          <a href="javascript:;" onclick="pageSelect(this)">6</a>



                          <a href="javascript:;" onclick="pageSelect(this)">7</a>



                          <a href="javascript:;" onclick="pageSelect(this)">8</a>



                          <a href="javascript:;" onclick="pageSelect(this)">9</a>



                          <a href="javascript:;" onclick="pageSelect(this)">10</a>



                          <a disabled="">...</a>



























                          <a href="javascript:;" onclick="pageSelect(this)">20</a>


                          <a href="javascript:;" class="next" onclick="pageSelect(this)">&gt;</a>
                        </div>
                      </div>
                      <div class="fy-input-new">
                        <input type="text" name="goToPage" onkeyup="checkInputPageNum(this);">
                      </div>
                      <div class="fy-btn-new">
                        <a href="javascript:;" onclick="gotoPage(this);">GO</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <!--tab切换-->

    </div>
  </div>
    <!--资源开始-->
  </div>

</template>

<script>
  export default {
    name: 'mall',
    created(){
      this.$nextTick(() => {

        this.registerShowOrHideSearchEvent(); // 收起/展开筛选条件
        $('.tabPanel ul.tab-ul li').click(function () {
          $(this).addClass('current').siblings().removeClass('current');
          $('.panes>div:eq(' + $(this).index() + ')').show().siblings().hide();
        });

        $('#createTime_sort,#sellCount_sort,#price_sort').click(function () {
          $(this).siblings().removeClass('dis-down').removeClass('dis-up');
          if ($(this).hasClass('dis-down')) {
            $(this).removeClass('dis-down').addClass('dis-up');
            $(this).find('i').removeClass('icon-down').addClass('icon-up');
          } else {
            $(this).removeClass('dis-up').addClass('dis-down');
            $(this).find('i').removeClass('icon-up').addClass('icon-down');
          }
          //supplyQuery.pagingQuery($(this), quoteDealsQryUrl, 'quoteBody', 'pageDiv');
        });

        // 供应大厅条件选择查询
        $('dd.selector-txt >ul>li:not(.showmore)>a', 'div#supplySearch-div').click(function () {
          $('div.lz-search div.search-input input').val('');
          // $(this).addClass('choose-on').parent().siblings().removeClass('choose-on');
          // $(this).siblings().removeClass('choose-on').addClass('choose-on');
          $(this).parent().parent('ul').find('li>a').each(function () {
            $(this).removeClass('choose-on');
          });
          $(this).addClass('choose-on');
         // var tabId = $('div.tabbox div.tabPanel ul.tab-ul li.current').attr('id');
//            if (tabId == 'biddingLi') {
//              supplyQuery.pagingQuery($(this), biddingDealsQryUrl, 'biddingBody', 'biddingPageDiv');
//            }else if('directLi' == tabId){
//              // pageQueryDirect();
//              supplyQuery.pagingQuery($(this),directDealsQryUrl, 'directBody', 'directPageDiv');
//            } else {
//              // 挂牌查询
//              supplyQuery.pagingQuery($(this), quoteDealsQryUrl, 'quoteBody', 'pageDiv');
//            }
        });
      });
    },
    data () {
      return {
      }
    },
    methods:{
      registerShowOrHideSearchEvent(){
        //收起筛选
        $('.togglebox .show').on('click', function () {
          $('.searchlist-box').show();
          $(this).hide();
          $('.togglebox .hide').show();
        })
        $('.togglebox .hide').on('click', function () {
          $('.searchlist-box').hide();
          $(this).hide();
          $('.togglebox .show').show();
        })
      }
    }
  }
</script>

