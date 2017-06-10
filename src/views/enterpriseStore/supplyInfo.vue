<template>
  <div class="bg-f0 pb20">
    <div class="header">
      <div class="w1200 clearfix">
        <div class="shopInfo">
          <div class="shop-logo"><img src="../../assets/images/company//company_photo.png"></div>
          <div class="companyInfo">
            <h2> 陕西正通煤业有限责任公司
              <div class="icon-bank-zx" title="支持中信银行资金账户预付款"></div>
            </h2>
            <p class="qualifications-list">
              <span><i class="icons icon-yyzz"></i>企业营业执照</span>
              <span><i class="icons icon-zzjgdmz"></i>组织机构代码证</span>
              <span><i class="icons icon-swdjz"></i>税务登记证</span>
            </p>
          </div>
        </div>

        <div class="zl-nav">
          <input id="navVal" style="display: none;" value="index">
          <ul id="top-nav">
            <li id="index" class="current"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016111100004&amp;">供应信息</a></li>
            <li id="info"><a href="/webshop/enterpriseStore/enterpriseInfoPg.do?merchantId=SJ2016111100004&amp;">企业简介</a></li>
            <li id="orderComments"><a href="/webshop/enterpriseStore/gotoOrderCommentsPg.do?merchantId=SJ2016111100004&amp;">评论</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="shopsresources">
      <div class="w1200 clearfix">

        <div class="searchbox">
          <input style="display: none" id="merchantId" value="SJ2016111100004">
          <ul>
            <li>
              <span>分类：</span>
              <select class="txtsel" id="catalog" onchange="selectSonCatalog(this);">
                <option value="">全部</option>
                <option value="DLCOAL">动力煤</option>
                <option value="WYCOAL">无烟煤</option>
                <option value="LJCOAL">炼焦煤</option>
                <option value="FLD2017012200001">水煤浆</option>
                <option value="FLD2017041400001">水泥熟料</option>
              </select>

              <select class="txtsel-son" id="catalogSon">
              </select>

            </li>
            <li>
              <span>交割地：</span>
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
              <li class="" id="channelLi">通道交易</li>
              <li id="quoteLi" class="current">挂牌交易</li>
              <li id="biddingLi" class="">竞价交易</li>
              <li id="directLi" class="">定向交易</li>
            </ul>
            <div class="panes clearfix">

              <div class="pane" style="display: none;">
                <div class="shops-list" id="channelBody"><div class="list-item" style="height:320px"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;大块</h2><p>窗口价：<span>540</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 6300kcal/kg</p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/channelPg/detail.do?id=TDGP20170602007&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">查看详情</a></div> </div><div class="list-item" style="height:320px"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;末煤</h2><p>窗口价：<span>510</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 5800kcal/kg</p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/channelPg/detail.do?id=TDGP20170602006&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">查看详情</a></div> </div><div class="list-item" style="height:320px"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;精末</h2><p>窗口价：<span>550</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 6300kcal/kg</p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/channelPg/detail.do?id=TDGP20170602005&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">查看详情</a></div> </div><div class="list-item" style="height:320px"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;末煤52</h2><p>窗口价：<span>410</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 5200kcal/kg</p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/channelPg/detail.do?id=TDGP20170602004&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">查看详情</a></div> </div><div class="list-item" style="height:320px"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;中块</h2><p>窗口价：<span>560</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 6300kcal/kg</p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/channelPg/detail.do?id=TDGP20170602003&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">查看详情</a></div> </div><div class="list-item" style="height:320px"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;小块</h2><p>窗口价：<span>560</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 6300kcal/kg</p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/channelPg/detail.do?id=TDGP20170602002&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">查看详情</a></div> </div><div class="list-item" style="height:320px"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;（火车）末煤</h2><p>窗口价：<span>540</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 5800kcal/kg</p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/channelPg/detail.do?id=TDGP20170602001&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">查看详情</a></div> </div></div>
                <div class="pagination-pagesbox">
                  <div class="pagination-pages" id="channelPageDiv"><div class="fy-bg2"><div class="fy-btn2"><a href="javascript:void(0);" onclick="query('channelPageDiv',$('#goPageNumchannelPageDiv:last').val());">GO</a></div><div class="fy-input2"><input type="text" id="goPageNumchannelPageDiv" onkeyup="if(event.keyCode==13){query('channelPageDiv',$('#goPageNumchannelPageDiv:last').val());}"></div><div class="fy-list2"><div class="pagination-pages-new"><a href="javascript:void(0);"> &lt; </a><a class="page_current" href="javascript:void(0);" onclick="query('channelPageDiv',1)">1</a><a href="javascript:void(0);"> &gt; </a></div></div></div></div>
                </div>
              </div>

              <div class="pane" style="display: block;">
                <div class="queryInfo-box">
                  <dl class="b-radius">
                    <dt>排序</dt>
                    <dd class="dis-down" id="createTime_sort" >创建时间<i class="icons icon-down"></i></dd>
                    <dd id="sellCount_sort" >销售<i class="icons icon-down"></i></dd>
                    <dd id="price_sort">价格<i class="icons icon-down"></i></dd>
                  </dl>
                </div>
                <!--排序end-->
                <div class="shops-list" id="quoteBody"><div class="list-item"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;（火车）末煤</h2><p><span>540</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 5800kcal/kg</p><p><span class="font-gray">全硫份：</span>0.4 </p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">剩余吨数：</span><span class="font-blue">1000000</span>吨</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201705150008&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">立即购买</a></div> </div><div class="list-item"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;中块</h2><p><span>560</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 6300kcal/kg</p><p><span class="font-gray">全硫份：</span>0.4 </p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">剩余吨数：</span><span class="font-blue">1000000</span>吨</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201705150007&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">立即购买</a></div> </div><div class="list-item"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;末煤52</h2><p><span>410</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 5200kcal/kg</p><p><span class="font-gray">全硫份：</span>0.6 </p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">剩余吨数：</span><span class="font-blue">979500</span>吨</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201705150006&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">立即购买</a></div> </div><div class="list-item"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;小块</h2><p><span>560</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 6300kcal/kg</p><p><span class="font-gray">全硫份：</span>0.4 </p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">剩余吨数：</span><span class="font-blue">1000000</span>吨</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201705150005&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">立即购买</a></div> </div><div class="list-item"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;精末</h2><p><span>550</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 6300kcal/kg</p><p><span class="font-gray">全硫份：</span>0.4 </p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">剩余吨数：</span><span class="font-blue">1000000</span>吨</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201705150004&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">立即购买</a></div> </div><div class="list-item"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;大块</h2><p><span>540</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 6300kcal/kg</p><p><span class="font-gray">全硫份：</span>0.4 </p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">剩余吨数：</span><span class="font-blue">1000000</span>吨</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201705150003&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">立即购买</a></div> </div><div class="list-item"><div class="list-typenme">  <h2 style="position: relative;"> 动力煤&nbsp;&nbsp;末煤</h2><p><span>510</span>元/吨</p> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 5800kcal/kg</p><p><span class="font-gray">全硫份：</span>0.4 </p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西省 咸阳市 长武县</p> <p><span class="font-gray">剩余吨数：</span><span class="font-blue">1000000</span>吨</p> <p><span class="font-gray">支付方式：</span><span class="font-blue">现汇+承兑</span></p></div><div class="btn-box"><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201705150002&amp;merchantId=SJ2016111100004&amp;" class="btn-buy">立即购买</a></div> </div></div>
                <!--list end-->
                <div class="pagination-pagesbox">
                  <div class="pagination-pages" id="quotePageDiv"><div class="fy-bg2"><div class="fy-btn2"><a href="javascript:void(0);" onclick="query('quotePageDiv',$('#goPageNumquotePageDiv:last').val());">GO</a></div><div class="fy-input2"><input type="text" id="goPageNumquotePageDiv" onkeyup="if(event.keyCode==13){query('quotePageDiv',$('#goPageNumquotePageDiv:last').val());}"></div><div class="fy-list2"><div class="pagination-pages-new"><a href="javascript:void(0);"> &lt; </a><a class="page_current" href="javascript:void(0);" onclick="query('quotePageDiv',1)">1</a><a href="javascript:void(0);"> &gt; </a></div></div></div></div>
                </div>
                <!--分页end-->
              </div>
              <!--挂牌交易end-->


              <div class="pane" style="display: none;">
                <div class="tradecontent" id="biddingBody"></div>
                <div class="pagination-pagesbox">
                  <div class="pagination-pages" id="biddingPageDiv"><div class="fy-bg2"><div class="fy-btn2"><a href="javascript:void(0);" onclick="query('biddingPageDiv',$('#goPageNumbiddingPageDiv:last').val());">GO</a></div><div class="fy-input2"><input type="text" id="goPageNumbiddingPageDiv" onkeyup="if(event.keyCode==13){query('biddingPageDiv',$('#goPageNumbiddingPageDiv:last').val());}"></div><div class="fy-list2"><div class="pagination-pages-new"><a href="javascript:void(0);"> &lt; </a><a href="javascript:void(0);" onclick="query('biddingPageDiv',2)"> &gt; </a></div></div></div></div>
                </div>
                <!--分页end-->
              </div>
              <!--竞价交易end-->


              <div class="pane" style="display: none;">

                <div class="shops-list" id="directBody"><div class="list-item" style="height: 240px;"><div class="list-typenme">  <h2> 动力煤</h2> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 6300kcal/kg</p><p><span class="font-gray">全硫份：</span>0.40 </p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西 咸阳 长武县</p></div> </div><div class="list-item" style="height: 240px;"><div class="list-typenme">  <h2> 动力煤</h2> </div><div class="list-data"> <p><span class="font-gray">热值：</span> 5800kcal/kg</p><p><span class="font-gray">全硫份：</span>0.40 </p> <p><span class="font-gray">产地：</span>陕西省</p> <p><span class="font-gray">交货地：</span>陕西 咸阳 长武县</p></div> </div></div>
                <!--list end-->
                <div class="pagination-pagesbox">
                  <div class="pagination-pages" id="directPageDiv"><div class="fy-bg2"><div class="fy-btn2"><a href="javascript:void(0);" onclick="query('directPageDiv',$('#goPageNumdirectPageDiv:last').val());">GO</a></div><div class="fy-input2"><input type="text" id="goPageNumdirectPageDiv" onkeyup="if(event.keyCode==13){query('directPageDiv',$('#goPageNumdirectPageDiv:last').val());}"></div><div class="fy-list2"><div class="pagination-pages-new"><a href="javascript:void(0);"> &lt; </a><a class="page_current" href="javascript:void(0);" onclick="query('directPageDiv',1)">1</a><a href="javascript:void(0);"> &gt; </a></div></div></div></div>
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


