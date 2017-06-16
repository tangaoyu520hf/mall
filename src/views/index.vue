<template>
  <div>
    <div class="slideBox clearfix">
      <div class="menuBox clearfix">
        <div class="menuBox-side">
          <ul>
            <li v-for="(value1, key1) in catalogs['0']">
              <a href=""><i class="icons"></i> {{ value1.catalogName }}</a>
              <div class="pop">
                <ul class="view-list">

                  <li class="view-list-li" v-for="(value2, key2) in catalogs[value1.id]">
                    <dl class="view-items">
                      <dt>{{ value2.catalogName }}</dt>
                      <dd v-for="(value3, key3) in catalogs[value2.id]"><a href="#" target="_blank">{{ value3.catalogName }}</a></dd>
                    </dl>
                  </li>

                </ul>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <!--menu end-->
      <v-advert code="advp"></v-advert>
    </div>
    <!--slideBox end-->
    <div class="header-news">
      <div class="w1200 clearfix">
        <h2 class="header-news-title"><i class="icons icon-notice"></i>通知公告：</h2>
        <ul class="txt-news marquee" id="notice">
          <li v-for="n in notice">
            <router-link :to="{ name: 'notice', params: { noticeId: n.noticeId }}"><span class="mr5">{{ n.createTime }}</span>{{ n.noticeTitle }}</router-link>
          </li>
        </ul>
        <router-link :to="{ name: 'articleCatalog'}" class="more-blue">更多>></router-link>
      </div>
    </div>
    <!--header-news end-->
    <div class="tradeArea">
      <div class="w1200 clearfix">
        <div class="tradeArea-left">
          <div class="tradeArea-left-titlebox">
            <a href="shops.html" class="tradeArea-left-title"></a>
            <a href="shops.html" class="more-gray">更多</a>
          </div>
          <div class="companyArea">
            <ul>
              <li class="mr10">
                <div class="imgbox"><img src="../assets/images/company/company1.png"/></div>
                <a href="shops.html" class="openbtn">进入专区</a>
              </li>
              <li class="mr10">
                <div class="imgbox"><img src="../assets/images/company/company2.png"/></div>
                <a href="shops.html" class="openbtn">进入专区</a>
              </li>
              <li class="mr10">
                <div class="imgbox"><img src="../assets/images/company/company3.png"/></div>
                <a href="shops.html" class="openbtn">进入专区</a>
              </li>
              <li class="mr10">
                <div class="imgbox"><img src="../assets/images/company/company4.png"/></div>
                <a href="shops.html" class="openbtn">进入专区</a>
              </li>
              <li class="mr10">
                <div class="imgbox"><img src="../assets/images/company/company1.png"/></div>
                <a href="shops.html" class="openbtn">进入专区</a>
              </li>
              <li class="mr10">
                <div class="imgbox"><img src="../assets/images/company/company2.png"/></div>
                <a href="shops.html" class="openbtn">进入专区</a>
              </li>
            </ul>
          </div>
        </div>
        <!--交易区left end-->
        <div class="tradeArea-right">
          <div class="tradeArea-right-titleBox">
            <a href="#" target="_blank" class="tradeArea-right-title"><i class="icons icon-dynamic"></i>交易动态</a>
            <a href="#" class="more-sgray">更多</a>
          </div>
          <div class="dynamicbox">
            <ul>
              <li>
                <span class="d-time">2016-8-21</span>
                <span class="d-txt mui-ellipsis-2">【求购】湖南***公司成功以385元/吨采购了<em>动力煤 6300大卡</em></span>
                <span class="d-place"><i class="icons icon-place"></i>长沙</span>
              </li>
              <li>
                <span class="d-time">2016-8-21</span>
                <span class="d-txt">【求购】湖南***公司成功以385元/吨采购了<em>动力煤 6300大卡</em></span>
                <span class="d-place"><i class="icons icon-place"></i>山西</span>
              </li>
              <li>
                <span class="d-time">2016-8-21</span>
                <span class="d-txt">【求购】湖南***公司成功以385元/吨采购了<em>动力煤 6300大卡</em></span>
                <span class="d-place"><i class="icons icon-place"></i>长沙</span>
              </li>
              <li>
                <span class="d-time">2016-8-21</span>
                <span class="d-txt">【求购】湖南***公司成功以385元/吨采购了<em>动力煤 6300大卡</em></span>
                <span class="d-place"><i class="icons icon-place"></i>长沙</span>
              </li>
              <li>
                <span class="d-time">2016-8-21</span>
                <span class="d-txt">【求购】湖南***公司成功以385元/吨采购了<em>动力煤 6300大卡</em></span>
                <span class="d-place"><i class="icons icon-place"></i>山西</span>
              </li>
              <li>
                <span class="d-time">2016-8-21</span>
                <span class="d-txt">【求购】湖南***公司成功以385元/吨采购了<em>动力煤 6300大卡</em></span>
                <span class="d-place"><i class="icons icon-place"></i>山西</span>
              </li>
              <li>
                <span class="d-time">2016-8-21</span>
                <span class="d-txt">【求购】湖南***公司成功以385元/吨采购了<em>动力煤 6300大卡</em></span>
                <span class="d-place"><i class="icons icon-place"></i>山西</span>
              </li>
            </ul>
          </div>
        </div>
        <!--交易区right end-->
      </div>
    </div>
    <!--交易区end-->
    <div class="coalContent">
      <div class="w1200 clearfix">
        <div class="coalContent-title">
          <div class="coal-blueleft"><h2>1F</h2></div>
          <div class="coal-middle bluebg">
            <h1><i class="big-icons icon-dlcoal"></i>动力煤专区</h1>
          </div>
          <div class="coal-blueright"></div>
        </div>
        <!--title end-->
        <div class="coalContent-left">
          <div class="coalContent-left-titleBox">
            <a href="supplyHall.html" class="coalContent-left-title font-lblue"><span class="blueline"></span>供应</a>
            <a href="supplyHall.html" class="more-sgray">更多</a>
          </div>
          <table cellpadding="0" cellspacing="0" class="coalContent-table table-bluehover">
            <tr class="lbluebg">
              <th width="18%">品名</th>
              <th width="10%">库存(吨)</th>
              <th width="22%">交割地</th>
              <th width="15%">单价(元/吨)</th>
              <th width="10%">热值</th>
              <th width="10%">全硫分</th>
              <th width="15%">操作</th>
            </tr>
            <tr>
              <td class="font-lblue">籽煤</td>
              <td>50000</td>
              <td>出矿</td>
              <td class="font-lblue">230</td>
              <td>6400</td>
              <td>0.8</td>
              <td><a href="supply-listdetail.html" class="detailbtn-blue">详细</a></td>
            </tr>
            <tr>
              <td class="font-lblue">洗末煤</td>
              <td>50000</td>
              <td>出矿</td>
              <td class="font-lblue">240</td>
              <td>6300</td>
              <td>0.7</td>
              <td><a href="supply-listdetail.html" class="detailbtn-blue">详细</a></td>
            </tr>
            <tr>
              <td class="font-lblue">小块</td>
              <td>50000</td>
              <td>出矿</td>
              <td class="font-lblue">320</td>
              <td>6200</td>
              <td>0.5</td>
              <td><a href="supply-listdetail.html" class="detailbtn-blue">详细</a></td>
            </tr>
            <tr>
              <td class="font-lblue">洗中块</td>
              <td>50000</td>
              <td>出矿</td>
              <td class="font-lblue">300</td>
              <td>6100</td>
              <td>0.5</td>
              <td><a href="supply-listdetail.html" class="detailbtn-blue">详细</a></td>
            </tr>
            <tr>
              <td class="font-lblue">中块</td>
              <td>50000</td>
              <td>出矿</td>
              <td class="font-lblue">155</td>
              <td>4500</td>
              <td>0.4</td>
              <td><a href="supply-listdetail.html" class="detailbtn-blue">详细</a></td>
            </tr>
          </table>
        </div>
        <!--left end-->
        <div class="coalContent-right">
          <div class="coalContent-right-titleBox">
            <a href="buyHall.html" class="coalContent-right-title font-lblue"><span class="blueline"></span>求购</a>
            <a href="buyHall.html" class="more-sgray">更多</a>
          </div>
          <div class="coalContent-right-list clearfix">
            <ul>
              <li>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span class="font-lblue">动力煤</span>
                    <span class="ml28">6000大卡</span>
                  </div>
                </div>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span>10000吨</span>
                    <span class="ml15">沿江港口</span>
                  </div>
                  <div class="fr">
                    <a href="buyHall-detail.html" class="supplybtn btnblue">供货</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span class="font-lblue">动力煤</span>
                    <span class="ml28">4000大卡</span>
                  </div>
                </div>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span>10000吨</span>
                    <span class="ml15">泰安</span>
                  </div>
                  <div class="fr">
                    <a href="buyHall-detail.html" class="supplybtn btnblue">供货</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span class="font-lblue">动力煤</span>
                    <span class="ml28">5500大卡</span>
                  </div>
                </div>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span>20000吨</span>
                    <span class="ml15">日照港</span>
                  </div>
                  <div class="fr">
                    <a href="buyHall-detail.html" class="supplybtn btnblue">供货</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span class="font-lblue">动力煤</span>
                    <span class="ml28">5000大卡</span>
                  </div>
                </div>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span>5000吨</span>
                    <span class="ml15">江阴港</span>
                  </div>
                  <div class="fr">
                    <a href="buyHall-detail.html" class="supplybtn btnblue">供货</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span class="font-lblue">动力煤</span>
                    <span class="ml28">5000大卡</span>
                  </div>
                </div>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span>5000吨</span>
                    <span class="ml15">东营</span>
                  </div>
                  <div class="fr">
                    <a href="buyHall-detail.html" class="supplybtn btnblue">供货</a>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <!--right end-->
      </div>
    </div>
    <!--1F end-->
    <div class="coalContent">
      <div class="w1200 clearfix">
        <div class="coalContent-title">
          <div class="coal-greenleft"><h2>2F</h2></div>
          <div class="coal-middle greenbg">
            <h1 class="pt16"><i class="big-icons icon-wycoal"></i>无烟煤专区</h1>
          </div>
          <div class="coal-greenright"></div>
        </div>
        <!--title end-->
        <div class="coalContent-left">
          <div class="coalContent-left-titleBox">
            <a href="supplyHall.html" class="coalContent-left-title font-lgreen"><span class="greenline"></span>供应</a>
            <a href="supplyHall.html" class="more-sgray">更多</a>
          </div>
          <table cellpadding="0" cellspacing="0" class="coalContent-table table-greenhover">
            <tr class="lgreenbg">
              <th width="18%">品名</th>
              <th width="10%">库存(吨)</th>
              <th width="22%">交割地</th>
              <th width="15%">单价(元/吨)</th>
              <th width="10%">热值</th>
              <th width="10%">全硫分</th>
              <th width="15%">操作</th>
            </tr>
            <tr>
              <td class="font-lgreen">阳泉水洗25块</td>
              <td>20000</td>
              <td>河北</td>
              <td class="font-lgreen">570</td>
              <td>6800</td>
              <td>1.7</td>
              <td><a href="supply-listdetail.html" class="detailbtn-green">详细</a></td>
            </tr>
            <tr>
              <td class="font-lgreen">阳泉水洗38块</td>
              <td>15000</td>
              <td>河北</td>
              <td class="font-lgreen">780</td>
              <td>6800</td>
              <td>0.8</td>
              <td><a href="supply-listdetail.html" class="detailbtn-green">详细</a></td>
            </tr>
            <tr>
              <td class="font-lgreen">面煤</td>
              <td>1000</td>
              <td>淄博</td>
              <td class="font-lgreen">400</td>
              <td>6200</td>
              <td>0.8</td>
              <td><a href="supply-listdetail.html" class="detailbtn-green">详细</a></td>
            </tr>
            <tr>
              <td class="font-lgreen">38块</td>
              <td>10000</td>
              <td>石嘴山</td>
              <td class="font-lgreen">840</td>
              <td>7500</td>
              <td>2</td>
              <td><a href="supply-listdetail.html" class="detailbtn-green">详细</a></td>
            </tr>
            <tr>
              <td class="font-lgreen">13籽</td>
              <td>5000</td>
              <td>泽州县</td>
              <td class="font-lgreen">400</td>
              <td>6500</td>
              <td>0.8</td>
              <td><a href="supply-listdetail.html" class="detailbtn-green">详细</a></td>
            </tr>
          </table>
        </div>
        <!--left end-->
        <div class="coalContent-right">
          <div class="coalContent-right-titleBox">
            <a href="buyHall.html" class="coalContent-right-title font-lgreen"><span class="greenline"></span>求购</a>
            <a href="buyHall.html" class="more-sgray">更多</a>
          </div>
          <div class="coalContent-right-list clearfix">
            <ul>
              <li>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span class="font-lgreen">无烟煤</span>
                    <span class="ml15">6500大卡</span>
                  </div>
                </div>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span>2000吨</span>
                    <span class="ml15">淄博</span>
                  </div>
                  <div class="fr">
                    <a href="buyHall-detail.html" class="supplybtn btngreen">供货</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span class="font-lgreen">无烟煤</span>
                    <span class="ml15">7000大卡</span>
                  </div>
                </div>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span>1000吨</span>
                    <span class="ml15">沂南</span>
                  </div>
                  <div class="fr">
                    <a href="buyHall-detail.html" class="supplybtn btngreen">供货</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span class="font-lgreen">无烟煤</span>
                    <span class="ml15">5800大卡</span>
                  </div>
                </div>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span>2000吨</span>
                    <span class="ml15">天津</span>
                  </div>
                  <div class="fr">
                    <a href="buyHall-detail.html" class="supplybtn btngreen">供货</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span class="font-lgreen">无烟煤</span>
                    <span class="ml15">6500大卡</span>
                  </div>
                </div>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span>2000吨</span>
                    <span class="ml15">泰安</span>
                  </div>
                  <div class="fr">
                    <a href="buyHall-detail.html" class="supplybtn btngreen">供货</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span class="font-lgreen">无烟煤</span>
                    <span class="ml15">7500大卡</span>
                  </div>
                </div>
                <div class="rlist-item clearfix">
                  <div class="fl">
                    <span>1000吨</span>
                    <span class="ml15">江阴港</span>
                  </div>
                  <div class="fr">
                    <a href="buyHall-detail.html" class="supplybtn btngreen">供货</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--right end-->
      </div>
      <!--2F end-->
      <div class="coalContent">
        <div class="w1200 clearfix">
          <div class="coalContent-title">
            <div class="coal-orangeleft"><h2>3F</h2></div>
            <div class="coal-middle orangebg">
              <h1 class="pt10"><i class="big-icons icon-ljcoal"></i>炼焦煤专区</h1>
            </div>
            <div class="coal-orangeright"></div>
          </div>
          <!--title end-->
          <div class="coalContent-left">
            <div class="coalContent-left-titleBox">
              <a href="supplyHall.html" class="coalContent-left-title font-lorange"><span
                class="orangeline"></span>供应</a>
              <a href="supplyHall.html" class="more-sgray">更多</a>
            </div>
            <table cellpadding="0" cellspacing="0" class="coalContent-table table-orangehover">
              <tr class="lorangebg">
                <th width="18%">品名</th>
                <th width="10%">库存(吨)</th>
                <th width="22%">交割地</th>
                <th width="15%">单价(元/吨)</th>
                <th width="10%">G值</th>
                <th width="10%">Y值</th>
                <th width="15%">操作</th>
              </tr>
              <tr>
                <td class="font-lorange">焦煤</td>
                <td>50000</td>
                <td>柳林县</td>
                <td class="font-lorange">530</td>
                <td>85</td>
                <td>13</td>
                <td><a href="supply-listdetail.html" class="detailbtn-orange">详细</a></td>
              </tr>
              <tr>
                <td class="font-lorange">精煤</td>
                <td>20000</td>
                <td>甘其毛都口岸</td>
                <td class="font-lorange">460</td>
                <td>85</td>
                <td>18</td>
                <td><a href="supply-listdetail.html" class="detailbtn-orange">详细</a></td>
              </tr>
              <tr>
                <td class="font-lorange">主焦煤</td>
                <td>10000</td>
                <td>介休</td>
                <td class="font-lorange">545</td>
                <td>85</td>
                <td>18</td>
                <td><a href="supply-listdetail.html" class="detailbtn-orange">详细</a></td>
              </tr>
              <tr>
                <td class="font-lorange">焦煤</td>
                <td>10000</td>
                <td>石嘴山</td>
                <td class="font-lorange">840</td>
                <td>7500</td>
                <td>2</td>
                <td><a href="supply-listdetail.html" class="detailbtn-orange">详细</a></td>
              </tr>
              <tr>
                <td class="font-lorange">13籽</td>
                <td>5000</td>
                <td>柳林县</td>
                <td class="font-lorange">430</td>
                <td>89</td>
                <td>16</td>
                <td><a href="supply-listdetail.html" class="detailbtn-orange">详细</a></td>
              </tr>
            </table>
          </div>
          <!--left end-->
          <div class="coalContent-right">
            <div class="coalContent-right-titleBox">
              <a href="buyHall.html" class="coalContent-right-title font-lorange"><span class="orangeline"></span>求购</a>
              <a href="buyHall.html" class="more-sgray">更多</a>
            </div>
            <div class="coalContent-right-list clearfix">
              <ul>
                <li>
                  <div class="rlist-item clearfix">
                    <div class="fl">
                      <span class="font-lorange">炼焦煤</span>
                      <span class="ml15">G值50</span>
                      <span class="ml15">Y值13</span>
                    </div>
                  </div>
                  <div class="rlist-item clearfix">
                    <div class="fl">
                      <span>5000吨</span>
                      <span class="ml15">唐山</span>
                    </div>
                    <div class="fr">
                      <a href="buyHall-detail.html" class="supplybtn btnorange">供货</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="rlist-item clearfix">
                    <div class="fl">
                      <span class="font-lorange">炼焦煤</span>
                      <span class="ml15">G值80</span>
                      <span class="ml15">Y值16</span>
                    </div>
                  </div>
                  <div class="rlist-item clearfix">
                    <div class="fl">
                      <span>3000吨</span>
                      <span class="ml15">邯郸</span>
                    </div>
                    <div class="fr">
                      <a href="buyHall-detail.html" class="supplybtn btnorange">供货</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="rlist-item clearfix">
                    <div class="fl">
                      <span class="font-lorange">炼焦煤</span>
                      <span class="ml15">G值80</span>
                      <span class="ml15">Y值16</span>
                    </div>
                  </div>
                  <div class="rlist-item clearfix">
                    <div class="fl">
                      <span>500吨</span>
                      <span class="ml15">镇海</span>
                    </div>
                    <div class="fr">
                      <a href="buyHall-detail.html" class="supplybtn btnorange">供货</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="rlist-item clearfix">
                    <div class="fl">
                      <span class="font-lorange">炼焦煤</span>
                      <span class="ml15">G值80</span>
                      <span class="ml15">Y值16</span>
                    </div>
                  </div>
                  <div class="rlist-item clearfix">
                    <div class="fl">
                      <span>500吨</span>
                      <span class="ml15">镇海</span>
                    </div>
                    <div class="fr">
                      <a href="buyHall-detail.html" class="supplybtn btnorange">供货</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="rlist-item clearfix">
                    <div class="fl">
                      <span class="font-lorange">炼焦煤</span>
                      <span class="ml15">G值80</span>
                      <span class="ml15">Y值16</span>
                    </div>
                  </div>
                  <div class="rlist-item clearfix">
                    <div class="fl">
                      <span>500吨</span>
                      <span class="ml15">镇海</span>
                    </div>
                    <div class="fr">
                      <a href="buyHall-detail.html" class="supplybtn btnorange">供货</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--right end-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'static/js/jquery.marquee.min';
  import vAdvert from '@/views/advert/advert.vue'
//  var api={
//      calalogs:'http://localhost:8800/catalog/queryById'
//  };

  export default {
    name: 'index',
    components:{vAdvert},
    created(){
      /*banner*/
      this.loadData();
    },
    methods: {
      loadData(){
        this.$http.post(this.pro+'/api/catalog/menu')
          .then(res => {
            this.catalogs=res.data.data
          })
        this.$http.post(this.sys+'/api/index/notice')
          .then(res => {
            this.notice=res.data.data
            this.$nextTick(()=>{
              $('#notice').marquee({
                yScroll: 'bottom'
              });
            });
          })
      }
    },
    data () {
      return {
        catalogs: [],
        notice:[]
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
