<template>
  <div class="bg-f0 pb20">
    <div class="shopsresources">
      <div class="w1200 clearfix">
        <div class="placebox">
          <i class="icons icon-currentplace"></i>当前位置：
          <a href="/webshop/supplyHall/supplyHallPg.do">供应大厅&gt;</a>
          <span>资源详情</span>
        </div>
        <!--当前位置end-->
        <div class="resourcebox">
          <div class="resourcebox-left">
            <div class="resourcebox-tit">
              <input id="authenType" type="text" value="null" style="display: none;">
              <input id="noAuthenFlag" type="text" value="null" style="display: none;">
              <input id="noBankFlag" type="text" value="null" style="display: none;">
              <input id="noPwdFlag" type="text" value="null" style="display: none;">
              <h2>
                <div>
                  内蒙古自治区 鄂尔多斯市 东胜区 内蒙古双欣矿业有限公司  内蒙古自治区 挂牌 4400大卡 动力煤</div></h2>
              <span class="fl"><i class="icons icon-jgplace"></i>交割地：内蒙古自治区 鄂尔多斯市 东胜区 内蒙古双欣矿业有限公司</span>
              <span class="fr public-time"> 发布时间：2017-05-31</span>
            </div>
            <!--title end-->
            <div class="waveline"></div>
            <div class="resourceInfo">
              <div class="resourceInfo-item w33">
                <p class="r-total"><span id="supplyQuantity">1000000</span></p>
                <p class="dis-info">剩余吨数(吨)</p>
              </div>
              <!--剩余吨数end-->
              <div class="resourceInfo-item w33">
                <p class="r-total"><span>2017-12-31</span></p>
                <p class="dis-info">有效期限</p>
              </div>
              <!--有效期限end-->
              <div class="resourceInfo-item w33">
                <p class="r-total"><span class="font-bigorange" id="order_price">205</span></p>
                <p class="dis-info">价格(元/吨)</p>
              </div>
              <!--价格end-->
            </div>
            <!--resourceInfo end-->
            <div class="info-txt">
              <p>产地：内蒙古自治区</p>
              <p>品名：一三块</p>
              <p>交货方式：场地自提</p>
              <p>付款方式：现汇+承兑</p>
            </div>
            <div class="tradersInfo">
              <div class="tradersInfo-left"><img src="../../assets/images/trader-w.png"></div>
              <div class="tradersInfo-right">
                <p>专属交易员： 李贤哲  </p>
                <p>联系方式： 18553333393</p>
              </div>
            </div>
          </div>
          <!--left end-->
          <div class="resourcebox-right">
            <h2 class="resourcebox-right-tit clearfix"><i class="icons icon-buy"></i><span>我要购买</span></h2>
            <div class="resourcebox-right-ipt">
              <input type="text" id="minimumPurchase" value="1" style="display: none;">
              <p>采购数量：<input type="text" class="ipt-sum b-radius" id="pay_number" oninput="changeProtal(this);" onchange="sumProtal();" onkeyup="value=value.replace(/[^\d.]/g,'');
                        if(value.indexOf('.')!=-1){value=value.substr(0,(value.indexOf('.')+3)); };
                        if(value>1000000){value=1000000; changeProtal(this)};" placeholder="最低采购量1吨"><span>吨</span></p>
              <p>总货款：<span class="b-block" id="order_ptotal">0.00</span>元</p>
              <div class="btn-order">
                <a href="confirmOrder"  class="confrim_order">立即下单</a>
              </div>
            </div>
          </div>
          <!--right end-->
        </div>
        <div class="shopsInfo">
          <div class="companyInfo">
            <input type="text" id="merchant_name" value=" 内蒙古双欣矿业有限公司" style="display: none;">

            <h2 class="mb5">
              <img src="../../assets/images/bq-mall.png" id="mall_flag">
              内蒙古双欣矿业有限公司
              <div class="icon-bank-zx" title="支持中信银行资金账户预付款"></div>

              <a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016122700005&amp;" class="btn-look b-radius">进店看看</a>
            </h2>
            <p class="qualifications-list">

              <span><i class="icons icon-shxydmz"></i>社会信用代码证</span>
            </p>
          </div>
        </div>

        <div class="tabbox">
          <div class="tabPanel">
            <ul class="tab-ul">
              <li class="">产品详情</li>
              <li class="current">评论</li>
              <!--<li>竞价交易（12）</li>-->
            </ul>
            <div class="panes clearfix">
              <div class="pane" style="display: none;">
                <div class="detailcontent clearfix">
                  <div class="detail-list">
                    <h1 class="detail-list-tit">产品信息</h1>
                    <table cellpadding="0" cellspacing="0" class="detail-table">
                      <tbody><tr>
                        <td width="9%" class="text-right">煤种：</td>
                        <td width="21%">动力煤</td>
                        <td width="9%" class="text-right">编号：</td>
                        <td width="26%">GPD201705310007</td>
                        <td width="9%" class="text-right">产地：</td>
                        <td width="26%">内蒙古自治区</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">品名：</td>
                        <td width="21%" id="product_name">一三块</td>
                        <td width="9%" class="text-right">供应数量：</td>
                        <td colspan="3">1000000</td>
                      </tr>
                      </tbody></table>
                  </div>
                  <!--list1 end-->
                  <div class="detail-list">
                    <h1 class="detail-list-tit">交易信息</h1>
                    <table cellpadding="0" cellspacing="0" class="detail-table">
                      <tbody><tr>
                        <td width="9%" class="text-right">最低购买量：</td>
                        <td width="21%">1</td>
                        <td width="9%" class="text-right">检验机构：</td>
                        <td width="26%">内部自检为准</td>
                        <td width="9%" class="text-right">交货方式：</td>
                        <td width="26%" id="delivery_type">场地自提</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">交割日期：</td>
                        <td width="21%">2017-05-31至2017-12-31</td>
                        <td width="9%" class="text-right">交割地：</td>
                        <td width="26%" id="delivery_address">内蒙古自治区 鄂尔多斯市 东胜区 内蒙古双欣矿业有限公司</td>
                        <td width="9%" class="text-right">是否提供运输：</td>
                        <td width="26%">否</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">付款方式：</td>
                        <td width="21%" id="paymentWay">现汇+承兑</td>
                        <td width="9%" class="text-right">结算方式：</td>
                        <td width="26%" colspan="3">一票结算</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">备注：</td>
                        <td width="21%" colspan="5">  </td>
                      </tr>
                      </tbody></table>
                  </div>
                  <!--list2 end-->
                  <div class="detail-list">
                    <h1 class="detail-list-tit">产品指标</h1>
                    <table cellpadding="0" cellspacing="0" class="detail-table">
                      <tbody><tr>
                        <td width="9%" class="text-right">热值：</td>
                        <td width="21%">4400kcal/kg</td>
                        <td width="9%" class="text-right">收到基挥发分：</td>
                        <td width="26%">34%</td>
                        <td width="9%" class="text-right">空干基硫分：</td>
                        <td width="26%"> ----%</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">内水份：</td>
                        <td width="21%">----%</td>
                        <td width="9%" class="text-right">灰份：</td>
                        <td width="26%">7.5%</td>
                        <td width="9%" class="text-right">G值：</td>
                        <td width="26%"> ----</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">灰熔点：</td>
                        <td width="21%">----℃</td>
                        <td width="9%" class="text-right">Y值：</td>
                        <td width="26%">----mm</td>
                        <td width="9%" class="text-right">固定碳：</td>
                        <td width="26%"> ----%</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">焦渣特征：</td>
                        <td width="21%">----%</td>
                        <td width="9%" class="text-right">哈氏可磨：</td>
                        <td width="26%">----</td>
                        <td width="9%" class="text-right">颗粒度：</td>
                        <td width="26%"> ----</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">热稳定性：</td>
                        <td width="21%">----%</td>
                        <td width="9%" class="text-right">磷（P）：</td>
                        <td width="26%">----%</td>
                        <td width="9%" class="text-right">空干基挥发分：</td>
                        <td width="26%"> ----%</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">收到基硫分：</td>
                        <td width="21%">0.3%</td>
                        <td width="9%" class="text-right">全水份：</td>
                        <td width="26%">28%</td>
                        <td width="9%" class="text-right">干燥基硫份：</td>
                        <td width="26%">----%</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">干燥基灰分：</td>
                        <td width="26%">----%</td>
                        <td width="12%" class="text-right">干燥无灰基挥发分：</td>
                        <td width="26%">----%</td>
                        <td width="12%" class="text-right">收到基低位发热量：</td>
                        <td width="26%">----kcal/kg</td>
                      </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>

              <div class="pane" style="display: block;"></div>



            </div>
          </div>
          <!--tab end-->
        </div>

        <form id="order_form" style="display: none;" action="/webshop/supplyHall/confirmOrderPg.do" method="post">
          <input type="hidden" name="orderType" id="orderType" value="">
          <input type="hidden" name="orderSource" id="orderSource" value="">
          <input type="hidden" name="orderNum" id="orderNum" value="">
          <input type="hidden" name="ptotal" id="ptotal" value="">
          <input type="hidden" name="sellMerchantId" id="sellMerchantId" value="">
        </form>



      </div>
      <!--商城资源end-->
    </div>
    <div class="cp-com" style="width: 1200px;margin: 0 auto;display:block;">
      <input type="hidden" id="merchantId" value="SJ2016122700005">
      <div class="w1200 clearfix" id="pageDIV"><div class="cp-com">


        <div class="cp-com-tab">

          <a class="active" href="javascript:void(0);" id="all" onclick="pageQuery('all')">全部<span class="mc-nanber">(0)</span></a>
          <a class="" href="javascript:void(0);" id="one" onclick="pageQuery('one','5')">好评<span class="mc-nanber">(0)</span></a>
          <a class="" href="javascript:void(0);" id="two" onclick="pageQuery('two','2,3,4')">中评<span class="mc-nanber">(0)</span></a>
          <a class="" href="javascript:void(0);" id="three" onclick="pageQuery('three','0,1')">差评<span class="mc-nanber">(0)</span></a>


        </div>

      </div></div>
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


