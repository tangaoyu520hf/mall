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
              <h2>北京 东城区  山西省  5900大卡 动力煤</h2>
              <p class="sub-tit">
                <span class="fl ml28">竞价编号：JJD201612240001</span>
                <span class="fr public-time"> 发布时间：2016-12-24</span>
              </p>
            </div>
            <!--title end-->
            <div class="waveline"></div>
            <div class="resourceInfo">
              <div class="resourceInfo-item w26">
                <p class="r-total"><span>10.11</span></p>
                <p class="dis-info">总销售量(吨)</p>
              </div>
              <!--总销售量end-->
              <div class="resourceInfo-item w40">
                <p class="r-total"><span>2016-12-24 至 2016-12-31 </span></p>
                <p class="dis-info">交割日期</p>
              </div>
              <!--交割日期end-->
              <div class="resourceInfo-item w33">
                <a href="/staticSource/齐鲁云商物资交易有限公司 煤炭竞价销售交易规则.doc" class="notice-download">
                  <p class="r-img"><i class="icons icon-bignotice"></i></p>
                  <p class="dis-info">点击下载竞价公告</p>
                </a>
              </div>
              <!--点击下载竞价公告end-->
            </div>
            <!--resourceInfo end-->
            <div class="info-txt">
              <p>产地：山西省</p>
              <p>品名：混煤</p>
              <p>交货方式：到岸舱底</p>
              <p>付款方式：现汇</p>
            </div>
            <div class="tradersInfo">
              <div class="tradersInfo-left"><img src="../../assets/images/trader-w.png"></div>
              <div class="tradersInfo-right">
                <p>专属交易员： 吴洋  </p>
                <p>联系方式： 18653337012</p>
              </div>
            </div>
          </div>
          <!--left end-->
          <div class="resourcebox-right">
            <div class="icons icon-endtime"></div>
            <div class="resourcebox-info">
              <ul>
                <li>报名截止：<span class="b-block" id="registrationEndTime">已截止</span></li>
                <li>距结束：<span id="clock1" class="ml15" style="font-size: 20px; font-family: &quot;Microsoft JhengHei&quot;, &quot;Century gothic&quot;, Arial; color: rgb(0, 0, 0); font-weight: 400;"><span class="time-bg" id="day">00</span><span id="ch0"><span class="stime">天</span></span><span class="time-bg" id="hour">00</span><span id="ch1"><span class="stime">时</span></span><span class="time-bg" id="minute">00</span><span id="ch2"><span class="stime">分</span></span><span class="time-bg" id="second">00</span><span class="stime">秒</span></span></li>
                <li>当前价：<span class="font-bigorange" id="nowPrice">0.06</span>元/吨</li>
              </ul>
            </div>
            <div class="resourcebox-right-info">
              <input id="login_user" type="text" value="null" style="display: none;">
              <input id="login_user_merchantid" type="text" value="null" style="display: none;">
              <input id="user_bidding" type="text" value="null" style="display: none;">
              <input id="first_offer_num" type="text" value="null" style="display: none;">
              <input id="first_offer" type="text" value="null" style="display: none;">
              <input id="second_offer" type="text" value="null" style="display: none;">
              <input id="margin_amount" type="text" value="0.01" style="display: none;">
              <input id="sell_merchant" type="text" value="SJ2016110900004" style="display: none;">
              <input id="biddingCode" type="text" value="JJD201612240001" style="display: none;">

              <input id="registLeftFlag" type="text" value="0" style="display: none;">
              <input id="registFlag" type="text" value="0" style="display: none;">
              <input id="firstOfferFlag" type="text" value="0" style="display: none;">
              <input id="secondOfferFlag" type="text" value="0" style="display: none;">
              <input id="firstOfferLeftFlag" type="text" value="0" style="display: none;">
              <input id="secondOfferLeftFlag" type="text" value="0" style="display: none;">
              <input id="authenType" type="text" value="null" style="display: none;">
              <input id="noAuthenFlag" type="text" value="null" style="display: none;">
              <input id="noBankFlag" type="text" value="null" style="display: none;">
              <input id="noPwdFlag" type="text" value="null" style="display: none;">
              <input id="failedMsg" type="text" value="null" style="display: none;">
              <input id="nowDate" type="text" value="1496651141825" style="display: none;">

              <input id="registStartCountDown" type="text" value="-14080232" style="display: none;">
              <input id="registEndCountDown" type="text" value="-14080112" style="display: none;">
              <input id="firstStartCountDown" type="text" value="-14080052" style="display: none;">
              <input id="firstEndCountDown" type="text" value="-14079932" style="display: none;">
              <input id="secondStartCountDown" type="text" value="-14079872" style="display: none;">
              <input id="secondEndCountDown" type="text" value="-14079812" style="display: none;">
              <input id="minNumber" type="text" value="0.89" style="display: none;">


              <div class="business-info">
                           <span class="radiusbg">
                                 <p class="business-sum">1</p>
                                 <p>家参与</p>
                           </span>
                <p class="enrolbox">竞价结束</p>


              </div>
              <div class="btn-enrol">


                <a href="#" style="background: #7d7d7d;">竞价结束</a>

              </div>
            </div>
          </div>
          <!--right end-->
          <!--资源信息end-->
        </div>


        <div class="bid-process"></div>
        <!--竞价流程end-->
        <div class="shopsInfo">
          <div class="companyInfo">
            <input type="text" id="merchant_name" value=" 元氏县豪林商贸有限公司" style="display: none;">

            <h2 class="mb5">
              元氏县豪林商贸有限公司
              <div class="icon-bank-zx" title="支持中信银行资金账户预付款"></div>

              <a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110900004&amp;" class="btn-look b-radius">进店看看</a>
            </h2>
            <p class="qualifications-list">

              <span><i class="icons icon-shxydmz"></i>社会信用代码证</span>
            </p>
          </div>
        </div>

        <div class="tabbox">
          <div class="tabPanel">
            <ul class="tab-ul">
              <li class="current">竞价规则</li>
              <li>竞价详情</li>
              <li id="firstRecord">一次竞买记录</li>
              <li id="secondRecord">二次竞买记录</li>
              <li id="merchant_comments">评论</li>
            </ul>
            <div class="panes clearfix">
              <div class="pane" style="display:block;">
                <div class="detailcontent clearfix">
                  <!--list1 end-->
                  <div class="detail-list">
                    <h1 class="detail-list-tit">竞价规则说明</h1>
                    <div class="did-txt">
                      <h1 class="companyProfile-tit">齐鲁云商物资交易有限公司</h1>
                      <p>
                      </p><p> 煤炭竞价销售交易规则</p>
                      <p> 第一章  总  则</p><br>
                      <p> 第一条 为了规范煤炭竞价销售行为，维护竞价销售秩序，保护竞价销售活动各方当事人的合法权益，根据《中华人民共和国合同法》、《中华人民共和国公司法》、《中华人民共和国拍卖法》等国家法律法规，参照中华人民共和国国家标准《大宗商品电子交易规范》（GB/T 18769-2003）制定本交易规则。</p>
                      <p> 第二条 本规则适用于通过齐鲁云商电子交易平台进行的竞价销售活动，各方当事人应自觉遵守。</p>
                      <p> 第三条 竞价销售交易是指卖方交易会员向交易平台提出申请，将拟出卖商品的详细资料提交给交易平台，确定竞价销售交易的具体时间，通过交易平台预先公告后，买方在竞价基础价格上自主加价报价，在约定竞价销售交易时间内，无人继续加价或交易时间结束，以最高买价成交，交易中心电子交易系统生成不可撤销电子交易合同的交易方式。</p>
                      <p>  第四条 煤炭竞价销售活动应当遵守有关法律、行政法规，遵循公开、公平、公正、诚实信用的原则。</p>
                      <p>第二章  标的</p><br>
                      <p>第五条 竞价销售交易标的物是卖方会员所有或依法拥有处分权的，按本规则自主确定商品品级、数量、交货地点、交货周期和起拍价的煤炭资源。</p>
                      <p> 第六条 竞价销售合约单笔数量最大为10万吨，最小为1千吨。</p>
                      <p>（1）单笔数量在3万吨以下（不含3万吨）的合约，交易会员至少提前三个工作日提交竞价销售申请资料，交易平台至少提前两个工作日通过交易平台网站发布竞价销售公告。
                        （2）单笔数量在3万吨及以上的合约，交易会员至少提前四个工作日提交竞价销售申请资料，交易平台至少提前三个工作日通过网站发布竞价销售公告。</p>
                      <p> 第七条 拍卖交易时间为每周一至周五（国家法定节假日除外）上午9:30-11:30，下午13:00-16:00，交易平台认为必要时，可以增加、调整交易时间或暂停交易。</p>
                      <p>第八条 交易会员每次竞价的最小变动单位为1元/吨，竞价幅度为1元/吨的整数倍，交易平台有权进行调整并提前发出公告。</p>
                      <p> 第三章  交易信息申报</p><br>
                      <p>第九条 参与竞价销售交易的卖方交易会员需按交易平台制定的统一格式提供预售商品信息，主要包括商品的数量、质量及瑕疵、产地、交割地、拟交易时间、起拍价等基础资料。</p>
                      <p>第十条 《申请竞价》格式以交易平台竞价申请添加商品页面表单所填信息为准。</p>
                      <p> 第十一条 交易平台在收到交易会员提供的申请资料后1个工作日内完成审核，确定具体上市交易时间，并通知交易会员确认，确认后不得再提出修改或撤销。
                      </p><p>第四章  商品质量</p><br>
                      <p>第十二条 竞价销售商品必须符合中华人民共和国国家标准规定的要求。商品的计量按照《中华人民共和国计量法》执行，商品的质量以双方签订合同所约定的质检机构出具的化验结果为准。</p>
                      <p>第五章  交易流程</p><br>
                      <p>第十三条 竞价销售交易流程：</p>
                      <p>（1）卖方会员填写《竞价申请》填写表单，平台通过网站发布交易公告；
                        （2）交易双方根据交易需要，向交易平台转入交易资金；
                        （3）买方会员登陆交易系统进行交易，交易成功后，平台冻结会员保证金，并函告交易双方；
                        （4）交易双方签署购销合同，买方向交易平台支付货款，双方进入实物交割；
                        （5）交割完成后，卖方向买方开具税票；
                        （6）根据交易双方反馈的信息，交易平台确认无违约出现，将结算货款转付至卖方账户，并释放买方会员交易保证金；
                        （7）交易结束。</p>
                      <p> 第六章  实物交割</p><br>
                      <p>第十四条 实物交割是指竞价销售交易结束后，交易双方依据交易平台所制订的规则和程序，履行该商品买卖合约，实现标的物所有权转移的行为。</p>
                      <p>第十五条 交割方式、交割商品质量、交割商品数量按实际签订煤炭购销合同约定执行。</p>
                      <p>第七章  交易资金</p><br>
                      <p>第十六条 本规则所称的交易资金，是指会员交存到交易中心指定的第三方客户备付金账户的资金，用于交易保证金。</p>
                      <p>第十七条 交易保证金。网上交易实施交易保证金制度，交易保证金为固定金额保证金，固定保证金按交易平台文件通知标准执行。网上成交后，交易系统自动冻结交易保证金。</p>
                      <p>第八章 违约处理</p><br>
                      <p>第十八条 具有下列行为之一的，交易会员构成违约：</p>
                      <p>（1）按照竞价销售交易约定，某一方原因导致煤炭购销合同未签订的；
                        （2）合同已签订，买方未向交易平台支付预付货款；
                        （3）买卖双方未按约定进行实物交割；
                        （4）交割商品存在数量、质量纠纷。</p>
                      <p> 第十九条 交易双方在履约过程中发生纠纷时，可自行协商解决，协商不成，可向交易平台申请调解。争议双方经平台调解，达成协议的，由交易中心监督协议的履行；若在争议发生后30日内，争议双方协商不成或交易平台调解无效的，可进行法律程序处理。</p>
                      <p>第二十条 除不可抗力，交易双方任何一方不遵守约定，交易中心有权将违约方的违约金（保证金）划转给守约方。</p>
                      <p>第二十一条 交易会员违反交易平台有关规定，恶意扰乱交易秩序，依《山东齐鲁云商物资交易有限公司交易会员管理规则》有关规定执行。</p>
                      <p>第九章 免责声明</p><br>
                      <p>第二十二条  在竞价销售交易过程中，如遇自然灾害、电信运营商、金融机构等不可预见的原因，造成交易中断，本场竞价销售无效。</p>
                      <p>第二十三条 本规则最终解释权归山东齐鲁云商物资交易有限公司。</p>
                      <p>第二十四条 本规则自颁布之日起实施。</p>



                      <p></p>
                    </div>
                  </div>
                  <!--list2 end-->
                </div>
              </div>
              <!--竞买规则end-->
              <div class="pane">
                <div class="detailcontent clearfix">
                  <div class="detail-list">
                    <h1 class="detail-list-tit">产品信息</h1>
                    <table cellpadding="0" cellspacing="0" class="detail-table">
                      <tbody><tr>
                        <td width="9%" class="text-right">煤种：</td>
                        <td width="21%">动力煤</td>
                        <td width="9%" class="text-right">编号：</td>
                        <td width="26%">JJD201612240001</td>
                        <td width="9%" class="text-right">产地：</td>
                        <td width="26%">山西省</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">品名：</td>
                        <td width="21%">混煤</td>
                        <td width="9%" class="text-right">供应数量：</td>
                        <td colspan="3">10.11吨</td>
                      </tr>
                      </tbody></table>
                  </div>
                  <!--list1 end-->
                  <div class="detail-list">
                    <h1 class="detail-list-tit">交易信息</h1>
                    <table cellpadding="0" cellspacing="0" class="detail-table">
                      <tbody><tr>
                        <td width="9%" class="text-right">最低购买量：</td>
                        <td width="21%">0.89吨</td>
                        <td width="9%" class="text-right">检验机构：</td>
                        <td width="26%">111111</td>
                        <td width="9%" class="text-right">交货方式：</td>
                        <td width="26%">到岸舱底</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">交割日期：</td>
                        <td width="21%">2016-12-24至2016-12-31</td>
                        <td width="9%" class="text-right">交割地：</td>
                        <td width="26%">北京 东城区</td>
                        <td width="9%" class="text-right">是否提供运输：</td>
                        <td width="26%">否</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">付款方式：</td>
                        <td width="21%" id="paymentWay">现汇</td>
                        <td width="9%" class="text-right">结算方式：</td>
                        <td width="26%" colspan="3">一票结算</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">备注：</td>
                        <td width="21%" colspan="5">111  </td>
                      </tr>
                      </tbody></table>
                  </div>
                  <!--list2 end-->
                  <div class="detail-list">
                    <h1 class="detail-list-tit">产品指标</h1>
                    <table cellpadding="0" cellspacing="0" class="detail-table">
                      <tbody><tr>
                        <td width="9%" class="text-right">热值：</td>
                        <td width="21%">5900kcal/kg</td>
                        <td width="9%" class="text-right">收到基挥发分：</td>
                        <td width="26%">25%</td>
                        <td width="9%" class="text-right">空干基硫分：</td>
                        <td width="26%"> ----%</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">内水份：</td>
                        <td width="21%">----%</td>
                        <td width="9%" class="text-right">灰份：</td>
                        <td width="26%">13%</td>
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
                        <td width="26%"> 混煤</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">热稳定性：</td>
                        <td width="21%">----</td>
                        <td width="9%" class="text-right">磷（P）：</td>
                        <td width="26%">----%</td>
                        <td width="9%" class="text-right">空干基挥发分：</td>
                        <td width="26%"> ----%</td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">收到基硫分：</td>
                        <td width="21%">0.8%</td>
                        <td width="9%" class="text-right">全水份：</td>
                        <td width="26%">13%</td>
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
                  <!--list3 end-->
                  <div class="detail-list">
                    <h1 class="detail-list-tit">竞价时间</h1>
                    <table cellpadding="0" cellspacing="0" class="detail-table">
                      <tbody><tr>
                        <td width="9%" class="text-right">报名时间：</td>
                        <td colspan="5">2016-12-24 17:15:09   至   2016-12-24 17:17:09 </td>
                      </tr>
                      <tr>
                        <td width="9%" class="text-right">一次竞价时间：</td>
                        <td colspan="5">2016-12-24 17:18:09   至   2016-12-24 17:20:09</td>

                      </tr>
                      <tr>
                        <td width="9%" class="text-right">二次竞价时间：</td>
                        <td colspan="5">2016-12-24 17:21:09   至   2016-12-24 17:22:09</td>
                      </tr>
                      </tbody></table>
                  </div>
                  <!--list4 end-->

                </div>
              </div>
              <!--竞价详情 end-->
              <div id="div_pane_firstRecord" class="pane">
                <div class="detailcontent clearfix">

                  <div class="bid-box">
                    <div class="bid-img"><span>一次竞价</span></div>
                    <div class="bid-table">
                      <table cellpadding="0" cellspacing="0">
                        <tbody><tr>
                          <th width="28%">竞买号</th>
                          <th width="20%">价格(元) </th>
                          <th width="20%">数量(吨) </th>
                          <th width="32%">时间</th>
                        </tr>
                        </tbody><tbody id="firstBiddingBody"></tbody>
                      </table>
                      <div class="pagination-pagesbox">
                        <div class="pagination-pages" id="firstPageDiv">

                        </div>
                      </div>
                      <!--分页end-->
                    </div>
                  </div>
                  <!--一次竞价end-->
                </div>
              </div>
              <!--竞买记录end-->

              <div id="div_pane_secondRecord" class="pane">
                <div class="detailcontent clearfix">
                  <div class="bid-box">
                    <div class="bid-img"><span>二次竞价</span></div>
                    <div class="bid-table">
                      <table cellpadding="0" cellspacing="0">
                        <tbody><tr>
                          <th width="28%">竞买号</th>
                          <th width="20%">价格(元) </th>
                          <th width="20%">数量(吨) </th>
                          <th width="32%">时间</th>
                        </tr>
                        </tbody><tbody id="secondBiddingBody"></tbody>

                      </table>
                      <div class="pagination-pagesbox">
                        <div class="pagination-pages" id="secondPageDiv">
                        </div>
                      </div>
                      <!--分页end-->
                    </div>
                  </div>
                  <!--二次竞价end-->
                </div>
              </div>

              <div class="pane" style="width: 0px;height: 0px;"></div>
              <form id="advance_form" style="display: none;" action="/memberCenter/payAdvanceDeposit/gotoPayAdvanceDeposit.do" method="post">
                <input type="hidden" name="buyShopCode" id="buyShopCode" value="">
                <input type="hidden" name="sellShopCode" id="sellShopCode" value="">
                <input type="hidden" name="transactionCode" id="transactionCode" value="">
                <input type="hidden" name="marginAmount" id="marginAmount" value="">
                <input type="hidden" name="bizCode" id="bizCode" value="">
              </form>






            </div>
          </div>
          <!--tab end-->
        </div>

        <!--店铺信息end-->

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


