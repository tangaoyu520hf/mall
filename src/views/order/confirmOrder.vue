<template>
  <div class="bg-f0 pb20">
    <div class="shopsresources">
      <div class="w1200 clearfix">
        <div class="placebox">
          <i class="icons icon-currentplace"></i>当前位置：
          <a href="/webshop/supplyHall/supplyHallPg.do">供应大厅&gt;</a>
          <a href="javaScript:window.history.go(-1);">资源详情&gt;</a>
          <span>确认订单</span>
        </div>
        <input type="text" id="productName" value="贸易商001动力煤001" style="display: none;">
        <input type="text" id="quantity" value="12" style="display: none;">
        <input type="text" id="price" value="1" style="display: none;">
        <input type="text" id="orderSource" value="GPD201705250001" style="display: none;">
        <input type="text" id="protal" value="12.00" style="display: none;">
        <input type="text" id="merchantId" value="SJ2016121500006" style="display: none;">
        <input type="text" id="productCode" value="SPD2017032900001" style="display: none;">
        <input type="text" id="merchantName" value="贸易商001" style="display: none;">
        <input type="text" id="orderType" value="1" style="display: none;">
        <input type="text" id="paymentWay" value="SPOTANDACCEPTANCE" style="display: none;">

        <!--当前位置end-->
        <div class="orderInfobox">
          <h1 class="orderInfobox-tit">确认订单</h1>
          <div class="orderInfo-detail">
            <table cellpadding="0" cellspacing="0">
              <tbody><tr>
                <th width="45%">商品信息</th>
                <th width="15%">单价（元/吨）</th>
                <th width="15%">数量（吨）</th>
                <th width="25%">小计（元）</th>
              </tr>
              <tr>
                <td colspan="4">
                  <h3 class="shops-name">
                    <img src="../../assets/images/bq-mall.png">
                    店铺：<a href="javascript:void(0);">贸易商001</a></h3>
                  <div class="waveline"></div>
                  <table cellpadding="0" cellspacing="0" class="orderInfo-detail-table">
                    <tbody><tr>
                      <td width="45%" class="text-left">
                        <p class="order-name"><a href="javascript:void(0);">贸易商001动力煤001</a></p>
                        <p class="order-subname">品名：贸易商001动力煤001</p>
                        <p class="order-place">交割地：上海 上海市 黄浦区</p>
                        <p class="delivery-mode">提货方式：<span style="color: #000;">港口平仓</span></p>
                      </td>
                      <td width="15%">￥1</td>
                      <td width="15%">12</td>
                      <td width="25%" class="font-orange">￥12.00</td>
                    </tr>
                    </tbody></table>
                  <!--订单详情信息-->
                </td>
              </tr>
              </tbody></table>
            <div class="footer-sum">
              <i class="icons icon-leftshadow"></i>
              <i class="icons icon-rightshadow"></i>
              <p>合计：<span>￥12.00</span></p>
            </div>
            <!--底部合计end-->
          </div>
          <div class="btn-submit">
            <a href="javascript:void(0);" id="submit_order" class="b-radius">提交订单</a>
          </div>
          <!--btn end-->
        </div>
        <!--orderInfo end-->
      </div>
    </div>
  </div>
</template>



