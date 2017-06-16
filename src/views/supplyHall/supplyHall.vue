<template>
<!--供应大厅-->
  <div class="bg-f0 pb20">
    <!--条件筛选开始-->
    <div class="search-querybox">
      <div class="w1200 clearfix">
        <div class="search-query">
          <div class="querytitle"><i class="icons icon-query"></i>条件筛选</div>
        </div>
         <div id="J_selector" class="selector clearfix">
           <input id="count_flag" type="hidden">
            <!--<div id="J_selectorPrice" class="J_selectorLine s-line"><div class="sl-wrap"><div class="sl-key"><span title="价格">价格：</span></div><div class="sl-value"><div class="sl-v-list"><ul class=""><li><a href="/list.html?sub=13321&amp;ev=exprice%5FM99L199&amp;JL=3_价格_99-199" title="99-199">99-199</a></li><li><a href="/list.html?sub=13321&amp;ev=exprice%5FM200L399&amp;JL=3_价格_200-399" title="200-399">200-399</a></li><li><a href="/list.html?sub=13321&amp;ev=exprice%5FM400L599&amp;JL=3_价格_400-599" title="400-599">400-599</a></li><li><a href="/list.html?sub=13321&amp;ev=exprice%5FM600L999&amp;JL=3_价格_600-999" title="600-999">600-999</a></li><li><a href="/list.html?sub=13321&amp;ev=exprice%5FM1000&amp;JL=3_价格_1000以上" title="1000以上">1000以上</a></li></ul><div class="sl-price"><input class="input-txt" id="priceMin" title="最低价" maxlength="6" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"><em>- </em><input class="input-txt" id="priceMax" title="最高价" maxlength="8" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"><a class="btn btn-default" id="priceBtn">确定</a></div></div></div></div></div>&lt;!&ndash;其他扩展属性&ndash;&gt;-->
            <div class="J_selectorLine s-line J_selectorFold"><div class="sl-wrap"><div class="sl-key"><span title="商品种类">商品种类：</span></div><div class="sl-value"><div class="sl-v-list"><ul class="J_valueList"><li><a title="短裤" href="/list.html?sub=13321&amp;ev=33333333%5F11991&amp;JL=3_商品种类_短裤" rel="nofollow"><i></i>短裤</a></li><li><a title="休闲裤" href="/list.html?sub=13321&amp;ev=33333333%5F9717&amp;JL=3_商品种类_休闲裤" rel="nofollow"><i></i>休闲裤</a></li><li><a title="衬衫" href="/list.html?sub=13321&amp;ev=33333333%5F1354&amp;JL=3_商品种类_衬衫" rel="nofollow"><i></i>衬衫</a></li><li><a title="仿皮皮衣" href="/list.html?sub=13321&amp;ev=33333333%5F11998&amp;JL=3_商品种类_仿皮皮衣" rel="nofollow"><i></i>仿皮皮衣</a></li><li><a title="马甲" href="/list.html?sub=13321&amp;ev=33333333%5F9714&amp;JL=3_商品种类_马甲" rel="nofollow"><i></i>马甲</a></li><li><a title="打底衫" href="/list.html?sub=13321&amp;ev=33333333%5F11985&amp;JL=3_商品种类_打底衫" rel="nofollow"><i></i>打底衫</a></li><li><a title="T恤" href="/list.html?sub=13321&amp;ev=33333333%5F1355&amp;JL=3_商品种类_T恤" rel="nofollow"><i></i>T恤</a></li><li><a title="打底裤" href="/list.html?sub=13321&amp;ev=33333333%5F9716&amp;JL=3_商品种类_打底裤" rel="nofollow"><i></i>打底裤</a></li><li><a title="礼服" href="/list.html?sub=13321&amp;ev=33333333%5F11996&amp;JL=3_商品种类_礼服" rel="nofollow"><i></i>礼服</a></li><li><a title="真皮皮衣" href="/list.html?sub=13321&amp;ev=33333333%5F9707&amp;JL=3_商品种类_真皮皮衣" rel="nofollow"><i></i>真皮皮衣</a></li><li><a title="羊绒衫" href="/list.html?sub=13321&amp;ev=33333333%5F11989&amp;JL=3_商品种类_羊绒衫" rel="nofollow"><i></i>羊绒衫</a></li><li><a title="吊带/背心" href="/list.html?sub=13321&amp;ev=33333333%5F11988&amp;JL=3_商品种类_吊带/背心" rel="nofollow"><i></i>吊带/背心</a></li><li><a title="羊毛衫" href="/list.html?sub=13321&amp;ev=33333333%5F11999&amp;JL=3_商品种类_羊毛衫" rel="nofollow"><i></i>羊毛衫</a></li><li><a title="卫衣" href="/list.html?sub=13321&amp;ev=33333333%5F9710&amp;JL=3_商品种类_卫衣" rel="nofollow"><i></i>卫衣</a></li><li><a title="短外套" href="/list.html?sub=13321&amp;ev=33333333%5F9712&amp;JL=3_商品种类_短外套" rel="nofollow"><i></i>短外套</a></li><li><a title="羽绒服" href="/list.html?sub=13321&amp;ev=33333333%5F3983&amp;JL=3_商品种类_羽绒服" rel="nofollow"><i></i>羽绒服</a></li><li><a title="旗袍/唐装" href="/list.html?sub=13321&amp;ev=33333333%5F11986&amp;JL=3_商品种类_旗袍/唐装" rel="nofollow"><i></i>旗袍/唐装</a></li><li><a title="牛仔裤" href="/list.html?sub=13321&amp;ev=33333333%5F9715&amp;JL=3_商品种类_牛仔裤" rel="nofollow"><i></i>牛仔裤</a></li><li><a title="毛呢大衣" href="/list.html?sub=13321&amp;ev=33333333%5F9706&amp;JL=3_商品种类_毛呢大衣" rel="nofollow"><i></i>毛呢大衣</a></li><li><a title="针织衫" href="/list.html?sub=13321&amp;ev=33333333%5F1356&amp;JL=3_商品种类_针织衫" rel="nofollow"><i></i>针织衫</a></li><li><a title="雪纺衫" href="/list.html?sub=13321&amp;ev=33333333%5F9713&amp;JL=3_商品种类_雪纺衫" rel="nofollow"><i></i>雪纺衫</a></li><li><a title="半身裙" href="/list.html?sub=13321&amp;ev=33333333%5F9720&amp;JL=3_商品种类_半身裙" rel="nofollow"><i></i>半身裙</a></li><li><a title="中老年女装" href="/list.html?sub=13321&amp;ev=33333333%5F9721&amp;JL=3_商品种类_中老年女装" rel="nofollow"><i></i>中老年女装</a></li><li><a title="设计师/潮牌" href="/list.html?sub=13321&amp;ev=33333333%5F12000&amp;JL=3_商品种类_设计师/潮牌" rel="nofollow"><i></i>设计师/潮牌</a></li><li><a title="连衣裙" href="/list.html?sub=13321&amp;ev=33333333%5F9719&amp;JL=3_商品种类_连衣裙" rel="nofollow"><i></i>连衣裙</a></li><li><a title="风衣" href="/list.html?sub=13321&amp;ev=33333333%5F9708&amp;JL=3_商品种类_风衣" rel="nofollow"><i></i>风衣</a></li><li><a title="小西装" href="/list.html?sub=13321&amp;ev=33333333%5F9711&amp;JL=3_商品种类_小西装" rel="nofollow"><i></i>小西装</a></li><li><a title="正装裤" href="/list.html?sub=13321&amp;ev=33333333%5F9718&amp;JL=3_商品种类_正装裤" rel="nofollow"><i></i>正装裤</a></li></ul></div><div class="sl-btns"><a class="btn btn-primary J_btnsConfirm disabled" href="javascript:;">确定</a><a class="btn btn-default J_btnsCancel" href="javascript:;">取消</a></div></div><div class="sl-ext"><a class="sl-e-more J_extMore" href="javascript:;" style="visibility: visible;">更多<i></i></a> </div></div></div>
            <div class="J_selectorLine s-line J_selectorFold"><div class="sl-wrap"><div class="sl-key"><span title="上市时间">上市时间：</span></div><div class="sl-value"><div class="sl-v-list"><ul class="J_valueList"><li><a title="2017冬季" href="/list.html?sub=13321&amp;ev=3883%5F91554&amp;JL=3_上市时间_2017冬季" rel="nofollow"><i></i>2017冬季</a></li><li><a title="2017春季" href="/list.html?sub=13321&amp;ev=3883%5F91551&amp;JL=3_上市时间_2017春季" rel="nofollow"><i></i>2017春季</a></li><li><a title="2017秋季" href="/list.html?sub=13321&amp;ev=3883%5F91553&amp;JL=3_上市时间_2017秋季" rel="nofollow"><i></i>2017秋季</a></li><li><a title="2017夏季" href="/list.html?sub=13321&amp;ev=3883%5F91552&amp;JL=3_上市时间_2017夏季" rel="nofollow"><i></i>2017夏季</a></li><li><a title="2016秋季" href="/list.html?sub=13321&amp;ev=3883%5F81668&amp;JL=3_上市时间_2016秋季" rel="nofollow"><i></i>2016秋季</a></li><li><a title="2016冬季" href="/list.html?sub=13321&amp;ev=3883%5F81669&amp;JL=3_上市时间_2016冬季" rel="nofollow"><i></i>2016冬季</a></li><li><a title="2016夏季" href="/list.html?sub=13321&amp;ev=3883%5F81667&amp;JL=3_上市时间_2016夏季" rel="nofollow"><i></i>2016夏季</a></li><li><a title="2016春季" href="/list.html?sub=13321&amp;ev=3883%5F81176&amp;JL=3_上市时间_2016春季" rel="nofollow"><i></i>2016春季</a></li><li><a title="2015夏季" href="/list.html?sub=13321&amp;ev=3883%5F78026&amp;JL=3_上市时间_2015夏季" rel="nofollow"><i></i>2015夏季</a></li><li><a title="2015春季" href="/list.html?sub=13321&amp;ev=3883%5F77334&amp;JL=3_上市时间_2015春季" rel="nofollow"><i></i>2015春季</a></li><li><a title="2015冬季" href="/list.html?sub=13321&amp;ev=3883%5F79817&amp;JL=3_上市时间_2015冬季" rel="nofollow"><i></i>2015冬季</a></li><li><a title="2015秋季" href="/list.html?sub=13321&amp;ev=3883%5F79816&amp;JL=3_上市时间_2015秋季" rel="nofollow"><i></i>2015秋季</a></li><li><a title="往季" href="/list.html?sub=13321&amp;ev=3883%5F79668&amp;JL=3_上市时间_往季" rel="nofollow"><i></i>往季</a></li></ul></div><div class="sl-btns"><a class="btn btn-primary J_btnsConfirm disabled" href="javascript:;">确定</a><a class="btn btn-default J_btnsCancel" href="javascript:;">取消</a></div></div><div class="sl-ext"><a class="sl-e-more J_extMore" href="javascript:;" style="visibility: visible;">更多<i></i></a> </div></div></div>
            <div class="J_selectorLine s-line J_selectorFold"><div class="sl-wrap"><div class="sl-key"><span title="类型">类型：</span></div><div class="sl-value"><div class="sl-v-list"><ul class="J_valueList"><li><a title="毛呢大衣" href="/list.html?sub=13321&amp;ev=3184%5F75640&amp;JL=3_类型_毛呢大衣" rel="nofollow"><i></i>毛呢大衣</a></li><li><a title="卫衣" href="/list.html?sub=13321&amp;ev=3184%5F37166&amp;JL=3_类型_卫衣" rel="nofollow"><i></i>卫衣</a></li><li><a title="仿皮皮衣" href="/list.html?sub=13321&amp;ev=3184%5F81953&amp;JL=3_类型_仿皮皮衣" rel="nofollow"><i></i>仿皮皮衣</a></li><li><a title="T恤" href="/list.html?sub=13321&amp;ev=3184%5F36814&amp;JL=3_类型_T恤" rel="nofollow"><i></i>T恤</a></li><li><a title="旗袍/唐装" href="/list.html?sub=13321&amp;ev=3184%5F81966&amp;JL=3_类型_旗袍/唐装" rel="nofollow"><i></i>旗袍/唐装</a></li><li><a title="牛仔裤" href="/list.html?sub=13321&amp;ev=3184%5F75610&amp;JL=3_类型_牛仔裤" rel="nofollow"><i></i>牛仔裤</a></li><li><a title="短裤" href="/list.html?sub=13321&amp;ev=3184%5F75615&amp;JL=3_类型_短裤" rel="nofollow"><i></i>短裤</a></li><li><a title="衬衫" href="/list.html?sub=13321&amp;ev=3184%5F75616&amp;JL=3_类型_衬衫" rel="nofollow"><i></i>衬衫</a></li><li><a title="针织衫" href="/list.html?sub=13321&amp;ev=3184%5F36815&amp;JL=3_类型_针织衫" rel="nofollow"><i></i>针织衫</a></li><li><a title="礼服" href="/list.html?sub=13321&amp;ev=3184%5F62590&amp;JL=3_类型_礼服" rel="nofollow"><i></i>礼服</a></li><li><a title="雪纺衫" href="/list.html?sub=13321&amp;ev=3184%5F75501&amp;JL=3_类型_雪纺衫" rel="nofollow"><i></i>雪纺衫</a></li><li><a title="正装裤" href="/list.html?sub=13321&amp;ev=3184%5F81963&amp;JL=3_类型_正装裤" rel="nofollow"><i></i>正装裤</a></li><li><a title="夹克" href="/list.html?sub=13321&amp;ev=3184%5F37163&amp;JL=3_类型_夹克" rel="nofollow"><i></i>夹克</a></li><li><a title="休闲裤" href="/list.html?sub=13321&amp;ev=3184%5F75611&amp;JL=3_类型_休闲裤" rel="nofollow"><i></i>休闲裤</a></li><li><a title="羊绒衫" href="/list.html?sub=13321&amp;ev=3184%5F81951&amp;JL=3_类型_羊绒衫" rel="nofollow"><i></i>羊绒衫</a></li><li><a title="打底衫" href="/list.html?sub=13321&amp;ev=3184%5F18023&amp;JL=3_类型_打底衫" rel="nofollow"><i></i>打底衫</a></li><li><a title="风衣" href="/list.html?sub=13321&amp;ev=3184%5F37164&amp;JL=3_类型_风衣" rel="nofollow"><i></i>风衣</a></li><li><a title="小西装" href="/list.html?sub=13321&amp;ev=3184%5F75500&amp;JL=3_类型_小西装" rel="nofollow"><i></i>小西装</a></li><li><a title="羽绒服" href="/list.html?sub=13321&amp;ev=3184%5F37171&amp;JL=3_类型_羽绒服" rel="nofollow"><i></i>羽绒服</a></li><li><a title="吊带/背心" href="/list.html?sub=13321&amp;ev=3184%5F76284&amp;JL=3_类型_吊带/背心" rel="nofollow"><i></i>吊带/背心</a></li><li><a title="真皮皮衣" href="/list.html?sub=13321&amp;ev=3184%5F81955&amp;JL=3_类型_真皮皮衣" rel="nofollow"><i></i>真皮皮衣</a></li><li><a title="中老年女装" href="/list.html?sub=13321&amp;ev=3184%5F81965&amp;JL=3_类型_中老年女装" rel="nofollow"><i></i>中老年女装</a></li><li><a title="连衣裙" href="/list.html?sub=13321&amp;ev=3184%5F75502&amp;JL=3_类型_连衣裙" rel="nofollow"><i></i>连衣裙</a></li><li><a title="打底裤" href="/list.html?sub=13321&amp;ev=3184%5F61685&amp;JL=3_类型_打底裤" rel="nofollow"><i></i>打底裤</a></li><li><a title="棒球衫" href="/list.html?sub=13321&amp;ev=3184%5F86775&amp;JL=3_类型_棒球衫" rel="nofollow"><i></i>棒球衫</a></li><li><a title="棉马甲" href="/list.html?sub=13321&amp;ev=3184%5F62575&amp;JL=3_类型_棉马甲" rel="nofollow"><i></i>棉马甲</a></li><li><a title="牛仔外套" href="/list.html?sub=13321&amp;ev=3184%5F86776&amp;JL=3_类型_牛仔外套" rel="nofollow"><i></i>牛仔外套</a></li><li><a title="西装马甲" href="/list.html?sub=13321&amp;ev=3184%5F86785&amp;JL=3_类型_西装马甲" rel="nofollow"><i></i>西装马甲</a></li></ul></div><div class="sl-btns"><a class="btn btn-primary J_btnsConfirm disabled" href="javascript:;">确定</a><a class="btn btn-default J_btnsCancel" href="javascript:;">取消</a></div></div><div class="sl-ext"><a class="sl-e-more J_extMore" href="javascript:;" style="visibility: visible;">更多<i></i></a> </div></div></div>
            <div class="J_selectorLine s-line J_selectorFold"><div class="sl-wrap"><div class="sl-key"><span title="袖长">袖长：</span></div><div class="sl-value"><div class="sl-v-list"><ul class="J_valueList"><li><a title="长袖" href="/list.html?sub=13321&amp;ev=3499%5F13404&amp;JL=3_袖长_长袖" rel="nofollow"><i></i>长袖</a></li><li><a title="短袖" href="/list.html?sub=13321&amp;ev=3499%5F75490&amp;JL=3_袖长_短袖" rel="nofollow"><i></i>短袖</a></li><li><a title="中袖" href="/list.html?sub=13321&amp;ev=3499%5F18163&amp;JL=3_袖长_中袖" rel="nofollow"><i></i>中袖</a></li><li><a title="七分袖" href="/list.html?sub=13321&amp;ev=3499%5F75491&amp;JL=3_袖长_七分袖" rel="nofollow"><i></i>七分袖</a></li><li><a title="五分袖" href="/list.html?sub=13321&amp;ev=3499%5F80722&amp;JL=3_袖长_五分袖" rel="nofollow"><i></i>五分袖</a></li><li><a title="九分袖" href="/list.html?sub=13321&amp;ev=3499%5F75492&amp;JL=3_袖长_九分袖" rel="nofollow"><i></i>九分袖</a></li><li><a title="无袖" href="/list.html?sub=13321&amp;ev=3499%5F13405&amp;JL=3_袖长_无袖" rel="nofollow"><i></i>无袖</a></li></ul></div><div class="sl-btns"><a class="btn btn-primary J_btnsConfirm disabled" href="javascript:;">确定</a><a class="btn btn-default J_btnsCancel" href="javascript:;">取消</a></div></div><div class="sl-ext"><a class="sl-e-more J_extMore" href="javascript:;" style="visibility: visible;">更多<i></i></a> </div></div></div>
            <div class="J_selectorLine s-line J_selectorFold hide"><div class="sl-wrap"><div class="sl-key"><span title="裙长">裙长：</span></div><div class="sl-value"><div class="sl-v-list"><ul class="J_valueList"><li><a href="/list.html?sub=13321&amp;ev=2880_35606&amp;JL=3_裙长_短裙" title="短裙" rel="nofollow"><i></i>短裙</a></li><li><a href="/list.html?sub=13321&amp;ev=2880_35607&amp;JL=3_裙长_中裙" title="中裙" rel="nofollow"><i></i>中裙</a></li><li><a href="/list.html?sub=13321&amp;ev=2880_35608&amp;JL=3_裙长_中长裙" title="中长裙" rel="nofollow"><i></i>中长裙</a></li><li><a href="/list.html?sub=13321&amp;ev=2880_35609&amp;JL=3_裙长_长裙" title="长裙" rel="nofollow"><i></i>长裙</a></li></ul></div><div class="sl-btns"><a class="btn btn-primary J_btnsConfirm disabled" href="javascript:;">确定</a><a class="btn btn-default J_btnsCancel" href="javascript:;"> 取消</a></div></div><div class="sl-ext"> <a class="sl-e-more J_extMore" href="javascript:;" style="visibility: visible;">更多<i></i></a>   </div></div></div>
            <div class="J_selectorLine s-line J_selectorFold hide"><div class="sl-wrap"><div class="sl-key"><span title="版型">版型：</span></div><div class="sl-value"><div class="sl-v-list"><ul class="J_valueList"><li><a href="/list.html?sub=13321&amp;ev=3298_75407&amp;JL=3_版型_直筒型" title="直筒型" rel="nofollow"><i></i>直筒型</a></li><li><a href="/list.html?sub=13321&amp;ev=3298_75408&amp;JL=3_版型_宽松型" title="宽松型" rel="nofollow"><i></i>宽松型</a></li><li><a href="/list.html?sub=13321&amp;ev=3298_75406&amp;JL=3_版型_修身型" title="修身型" rel="nofollow"><i></i>修身型</a></li><li><a href="/list.html?sub=13321&amp;ev=3298_36786&amp;JL=3_版型_斗篷型" title="斗篷型" rel="nofollow"><i></i>斗篷型</a></li></ul></div><div class="sl-btns"><a class="btn btn-primary J_btnsConfirm disabled" href="javascript:;">确定</a><a class="btn btn-default J_btnsCancel" href="javascript:;"> 取消</a></div></div><div class="sl-ext"> <a class="sl-e-more J_extMore" href="javascript:;" style="visibility: visible;">更多<i></i></a>   </div></div></div>
            <div class="J_selectorLine s-line J_selectorFold hide"><div class="sl-wrap"><div class="sl-key"><span title="流行元素">流行元素：</span></div><div class="sl-value"><div class="sl-v-list"><ul class="J_valueList"><li><a href="/list.html?sub=13321&amp;ev=1977_37178&amp;JL=3_流行元素_印花" title="印花" rel="nofollow"><i></i>印花</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_76519&amp;JL=3_流行元素_简约" title="简约" rel="nofollow"><i></i>简约</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_12547&amp;JL=3_流行元素_腰带" title="腰带" rel="nofollow"><i></i>腰带</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75510&amp;JL=3_流行元素_平纹" title="平纹" rel="nofollow"><i></i>平纹</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75511&amp;JL=3_流行元素_罗纹" title="罗纹" rel="nofollow"><i></i>罗纹</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75388&amp;JL=3_流行元素_拼接色" title="拼接色" rel="nofollow"><i></i>拼接色</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75448&amp;JL=3_流行元素_链条" title="链条" rel="nofollow"><i></i>链条</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_37181&amp;JL=3_流行元素_水洗" title="水洗" rel="nofollow"><i></i>水洗</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_35307&amp;JL=3_流行元素_条纹" title="条纹" rel="nofollow"><i></i>条纹</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75385&amp;JL=3_流行元素_图案" title="图案" rel="nofollow"><i></i>图案</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_35116&amp;JL=3_流行元素_格子" title="格子" rel="nofollow"><i></i>格子</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_86793&amp;JL=3_流行元素_磨白" title="磨白" rel="nofollow"><i></i>磨白</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75568&amp;JL=3_流行元素_荷叶边" title="荷叶边" rel="nofollow"><i></i>荷叶边</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_76582&amp;JL=3_流行元素_绣花" title="绣花" rel="nofollow"><i></i>绣花</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75569&amp;JL=3_流行元素_褶皱" title="褶皱" rel="nofollow"><i></i>褶皱</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75404&amp;JL=3_流行元素_露肩" title="露肩" rel="nofollow"><i></i>露肩</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75567&amp;JL=3_流行元素_花边" title="花边" rel="nofollow"><i></i>花边</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_35196&amp;JL=3_流行元素_刺绣" title="刺绣" rel="nofollow"><i></i>刺绣</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_68253&amp;JL=3_流行元素_镂空" title="镂空" rel="nofollow"><i></i>镂空</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75513&amp;JL=3_流行元素_格纹" title="格纹" rel="nofollow"><i></i>格纹</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75570&amp;JL=3_流行元素_纱网" title="纱网" rel="nofollow"><i></i>纱网</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75403&amp;JL=3_流行元素_拉链装饰" title="拉链装饰" rel="nofollow"><i></i>拉链装饰</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75409&amp;JL=3_流行元素_波点" title="波点" rel="nofollow"><i></i>波点</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75449&amp;JL=3_流行元素_铆钉" title="铆钉" rel="nofollow"><i></i>铆钉</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75389&amp;JL=3_流行元素_撞色" title="撞色" rel="nofollow"><i></i>撞色</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75459&amp;JL=3_流行元素_钩花" title="钩花" rel="nofollow"><i></i>钩花</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75552&amp;JL=3_流行元素_动物纹" title="动物纹" rel="nofollow"><i></i>动物纹</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_76249&amp;JL=3_流行元素_花朵" title="花朵" rel="nofollow"><i></i>花朵</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_76386&amp;JL=3_流行元素_蝴蝶结" title="蝴蝶结" rel="nofollow"><i></i>蝴蝶结</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75577&amp;JL=3_流行元素_豹纹" title="豹纹" rel="nofollow"><i></i>豹纹</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75461&amp;JL=3_流行元素_水钻" title="水钻" rel="nofollow"><i></i>水钻</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_34705&amp;JL=3_流行元素_流苏" title="流苏" rel="nofollow"><i></i>流苏</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_76304&amp;JL=3_流行元素_卡通" title="卡通" rel="nofollow"><i></i>卡通</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_33256&amp;JL=3_流行元素_渐变" title="渐变" rel="nofollow"><i></i>渐变</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75445&amp;JL=3_流行元素_拼接" title="拼接" rel="nofollow"><i></i>拼接</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75446&amp;JL=3_流行元素_镶钻" title="镶钻" rel="nofollow"><i></i>镶钻</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75447&amp;JL=3_流行元素_金属装饰" title="金属装饰" rel="nofollow"><i></i>金属装饰</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75458&amp;JL=3_流行元素_亮片" title="亮片" rel="nofollow"><i></i>亮片</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_69163&amp;JL=3_流行元素_钉珠" title="钉珠" rel="nofollow"><i></i>钉珠</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_80984&amp;JL=3_流行元素_带帽" title="带帽" rel="nofollow"><i></i>带帽</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_80707&amp;JL=3_流行元素_亮丝" title="亮丝" rel="nofollow"><i></i>亮丝</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_76409&amp;JL=3_流行元素_破洞" title="破洞" rel="nofollow"><i></i>破洞</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_80786&amp;JL=3_流行元素_手工磨破" title="手工磨破" rel="nofollow"><i></i>手工磨破</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_36266&amp;JL=3_流行元素_扎染" title="扎染" rel="nofollow"><i></i>扎染</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_80709&amp;JL=3_流行元素_扎花" title="扎花" rel="nofollow"><i></i>扎花</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_80710&amp;JL=3_流行元素_抽褶" title="抽褶" rel="nofollow"><i></i>抽褶</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_76533&amp;JL=3_流行元素_系带" title="系带" rel="nofollow"><i></i>系带</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_80787&amp;JL=3_流行元素_勾花镂空" title="勾花镂空" rel="nofollow"><i></i>勾花镂空</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_80708&amp;JL=3_流行元素_口袋" title="口袋" rel="nofollow"><i></i>口袋</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_69162&amp;JL=3_流行元素_不对称" title="不对称" rel="nofollow"><i></i>不对称</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_80711&amp;JL=3_流行元素_明线装饰" title="明线装饰" rel="nofollow"><i></i>明线装饰</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_80714&amp;JL=3_流行元素_立体装饰" title="立体装饰" rel="nofollow"><i></i>立体装饰</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_80713&amp;JL=3_流行元素_燕尾" title="燕尾" rel="nofollow"><i></i>燕尾</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_18218&amp;JL=3_流行元素_绑带" title="绑带" rel="nofollow"><i></i>绑带</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75454&amp;JL=3_流行元素_做旧" title="做旧" rel="nofollow"><i></i>做旧</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_86803&amp;JL=3_流行元素_廓形" title="廓形" rel="nofollow"><i></i>廓形</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_80716&amp;JL=3_流行元素_贴布" title="贴布" rel="nofollow"><i></i>贴布</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_77447&amp;JL=3_流行元素_纽扣" title="纽扣" rel="nofollow"><i></i>纽扣</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_14669&amp;JL=3_流行元素_背带" title="背带" rel="nofollow"><i></i>背带</a></li><li><a href="/list.html?sub=13321&amp;ev=1977_75439&amp;JL=3_流行元素_露背" title="露背" rel="nofollow"><i></i>露背</a></li></ul></div><div class="sl-btns"><a class="btn btn-primary J_btnsConfirm disabled" href="javascript:;">确定</a><a class="btn btn-default J_btnsCancel" href="javascript:;"> 取消</a></div></div><div class="sl-ext"> <a class="sl-e-more J_extMore" href="javascript:;" style="visibility: visible;">更多<i></i></a>  </div></div></div>
            <div class="J_selectorLine s-line J_selectorFold hide"><div class="sl-wrap"><div class="sl-key"><span title="领型">领型：</span></div><div class="sl-value"><div class="sl-v-list"><ul class="J_valueList"><li><a href="/list.html?sub=13321&amp;ev=1988_75583&amp;JL=3_领型_立领" title="立领" rel="nofollow"><i></i>立领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_39524&amp;JL=3_领型_翻领" title="翻领" rel="nofollow"><i></i>翻领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75399&amp;JL=3_领型_娃娃领" title="娃娃领" rel="nofollow"><i></i>娃娃领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_33245&amp;JL=3_领型_圆领" title="圆领" rel="nofollow"><i></i>圆领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75416&amp;JL=3_领型_V领" title="V领" rel="nofollow"><i></i>V领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75397&amp;JL=3_领型_围巾领" title="围巾领" rel="nofollow"><i></i>围巾领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_80937&amp;JL=3_领型_驳领" title="驳领" rel="nofollow"><i></i>驳领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75398&amp;JL=3_领型_POLO领" title="POLO领" rel="nofollow"><i></i>POLO领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75575&amp;JL=3_领型_方领" title="方领" rel="nofollow"><i></i>方领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75394&amp;JL=3_领型_半开领" title="半开领" rel="nofollow"><i></i>半开领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75393&amp;JL=3_领型_荷叶领" title="荷叶领" rel="nofollow"><i></i>荷叶领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75395&amp;JL=3_领型_双层领" title="双层领" rel="nofollow"><i></i>双层领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75574&amp;JL=3_领型_西装领" title="西装领" rel="nofollow"><i></i>西装领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_36444&amp;JL=3_领型_连帽/帽领" title="连帽/帽领" rel="nofollow"><i></i>连帽/帽领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75417&amp;JL=3_领型_高领" title="高领" rel="nofollow"><i></i>高领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75420&amp;JL=3_领型_可脱卸帽" title="可脱卸帽" rel="nofollow"><i></i>可脱卸帽</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_80718&amp;JL=3_领型_海军领" title="海军领" rel="nofollow"><i></i>海军领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_69350&amp;JL=3_领型_一字领" title="一字领" rel="nofollow"><i></i>一字领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_75419&amp;JL=3_领型_连帽" title="连帽" rel="nofollow"><i></i>连帽</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_68150&amp;JL=3_领型_半高领" title="半高领" rel="nofollow"><i></i>半高领</a></li><li><a href="/list.html?sub=13321&amp;ev=1988_80863&amp;JL=3_领型_斜领" title="斜领" rel="nofollow"><i></i>斜领</a></li></ul></div><div class="sl-btns"><a class="btn btn-primary J_btnsConfirm disabled" href="javascript:;">确定</a><a class="btn btn-default J_btnsCancel" href="javascript:;"> 取消</a></div></div><div class="sl-ext"> <a class="sl-e-more J_extMore" href="javascript:;" style="visibility: visible;">更多<i></i></a>  </div></div></div>
            <div class="J_selectorLine s-line J_selectorFold hide"><div class="sl-wrap"><div class="sl-key"><span title="尺码">尺码：</span></div><div class="sl-value"><div class="sl-v-list"><ul class="J_valueList"><li><a href="/list.html?sub=13321&amp;ev=3495_35497&amp;JL=3_尺码_XS" title="XS" rel="nofollow"><i></i>XS</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_35498&amp;JL=3_尺码_S" title="S" rel="nofollow"><i></i>S</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_8338&amp;JL=3_尺码_M" title="M" rel="nofollow"><i></i>M</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_8339&amp;JL=3_尺码_L" title="L" rel="nofollow"><i></i>L</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_70666&amp;JL=3_尺码_XL" title="XL" rel="nofollow"><i></i>XL</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_68295&amp;JL=3_尺码_XXL" title="XXL" rel="nofollow"><i></i>XXL</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_68674&amp;JL=3_尺码_均码" title="均码" rel="nofollow"><i></i>均码</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_75488&amp;JL=3_尺码_150" title="150" rel="nofollow"><i></i>150</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_75489&amp;JL=3_尺码_155" title="155" rel="nofollow"><i></i>155</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_75483&amp;JL=3_尺码_160" title="160" rel="nofollow"><i></i>160</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_75484&amp;JL=3_尺码_165" title="165" rel="nofollow"><i></i>165</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_75485&amp;JL=3_尺码_170" title="170" rel="nofollow"><i></i>170</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_75486&amp;JL=3_尺码_175" title="175" rel="nofollow"><i></i>175</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_75487&amp;JL=3_尺码_180" title="180" rel="nofollow"><i></i>180</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_77491&amp;JL=3_尺码_25" title="25" rel="nofollow"><i></i>25</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_77492&amp;JL=3_尺码_26" title="26" rel="nofollow"><i></i>26</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_77493&amp;JL=3_尺码_27" title="27" rel="nofollow"><i></i>27</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_69920&amp;JL=3_尺码_28" title="28" rel="nofollow"><i></i>28</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_77166&amp;JL=3_尺码_30" title="30" rel="nofollow"><i></i>30</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_69924&amp;JL=3_尺码_32" title="32" rel="nofollow"><i></i>32</a></li><li><a href="/list.html?sub=13321&amp;ev=3495_77494&amp;JL=3_尺码_31" title="31" rel="nofollow"><i></i>31</a></li></ul></div><div class="sl-btns"><a class="btn btn-primary J_btnsConfirm disabled" href="javascript:;">确定</a><a class="btn btn-default J_btnsCancel" href="javascript:;"> 取消</a></div></div><div class="sl-ext"> <a class="sl-e-more J_extMore" href="javascript:;" style="visibility: visible;">更多<i></i></a>  </div></div></div>
            <div class="J_selectorLine s-line J_selectorFold hide"><div class="sl-wrap"><div class="sl-key"><span title="袖型">袖型：</span></div><div class="sl-value"><div class="sl-v-list"><ul class="J_valueList"><li><a href="/list.html?sub=13321&amp;ev=2213_81123&amp;JL=3_袖型_包肩袖" title="包肩袖" rel="nofollow"><i></i>包肩袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_75499&amp;JL=3_袖型_灯笼袖" title="灯笼袖" rel="nofollow"><i></i>灯笼袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_75495&amp;JL=3_袖型_蝙蝠袖" title="蝙蝠袖" rel="nofollow"><i></i>蝙蝠袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_75494&amp;JL=3_袖型_喇叭袖" title="喇叭袖" rel="nofollow"><i></i>喇叭袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_75493&amp;JL=3_袖型_泡泡袖" title="泡泡袖" rel="nofollow"><i></i>泡泡袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_75496&amp;JL=3_袖型_衬衫袖" title="衬衫袖" rel="nofollow"><i></i>衬衫袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_75498&amp;JL=3_袖型_公主袖" title="公主袖" rel="nofollow"><i></i>公主袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_75497&amp;JL=3_袖型_插肩袖" title="插肩袖" rel="nofollow"><i></i>插肩袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_80720&amp;JL=3_袖型_花瓣袖" title="花瓣袖" rel="nofollow"><i></i>花瓣袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_80724&amp;JL=3_袖型_牛角袖" title="牛角袖" rel="nofollow"><i></i>牛角袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_80721&amp;JL=3_袖型_飞飞袖" title="飞飞袖" rel="nofollow"><i></i>飞飞袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_80719&amp;JL=3_袖型_荷叶袖" title="荷叶袖" rel="nofollow"><i></i>荷叶袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_80725&amp;JL=3_袖型_包袖" title="包袖" rel="nofollow"><i></i>包袖</a></li><li><a href="/list.html?sub=13321&amp;ev=2213_89184&amp;JL=3_袖型_常规袖" title="常规袖" rel="nofollow"><i></i>常规袖</a></li></ul></div><div class="sl-btns"><a class="btn btn-primary J_btnsConfirm disabled" href="javascript:;">确定</a><a class="btn btn-default J_btnsCancel" href="javascript:;"> 取消</a></div></div><div class="sl-ext"> <a class="sl-e-more J_extMore" href="javascript:;" style="visibility: visible;">更多<i></i></a>  </div></div></div>
           <div class="s-more" id="J_selectorMore"><span class="sm-wrap" data-more="商品种类、香型、手部分类 等">更多选项（ 商品种类、香型、手部分类 等）<i></i></span></div>
         </div>
      </div>
    </div>



    <!--<div class="search-querybox">-->
      <!--<div class="w1200 clearfix">-->
        <!--<div class="search-query">-->
          <!--<div class="querytitle"><i class="icons icon-query"></i>条件筛选</div>-->
          <!--<div class="togglebox">-->
            <!--<span style="display:block" class="hide">收起筛选<i class="icons icon-tup"></i></span>-->
            <!--<span style="display:none" class="show">展开筛选<i class="icons icon-tdown"></i></span>-->
          <!--</div>-->

        <!--</div>-->
        <!--&lt;!&ndash;title end&ndash;&gt;-->
        <!--<div class="searchlist-box" id="supplySearch-div">-->
          <!--<dl class="selector-list">-->
            <!--<dt class="selector-title">煤种</dt>-->
            <!--<dd class="selector-txt">-->
              <!--<ul class="coal-type" data-key="coalVariety" data-key-1="catalogCode">-->
                <!--<li><a href="javascript:;" class="choose-on choose-all">不限</a></li>-->
                <!--<li><a href="javascript:;" data-val="57e398ad732875083ba605fe">动力煤</a>-->
                <!--</li>-->
                <!--<li><a href="javascript:;" data-val="57e398ea732875083ba605ff">无烟煤</a>-->
                <!--</li>-->
                <!--<li><a href="javascript:;" data-val="57e398ff732875083ba60600">炼焦煤</a>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</dd>-->
          <!--</dl>-->
          <!--<dl class="selector-list">-->
            <!--<dt class="selector-title">产地</dt>-->
            <!--<dd class="selector-txt clearfix">-->
              <!--<ul class="place-type" data-key="place">-->
                <!--<li><a href="javascript:;" class="choose-on choose-all">不限</a></li>-->
                <!--<li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="内蒙古">内蒙古</a>-->
                <!--</li>-->

                <!--<li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="山东">山东</a>-->
                <!--</li>-->

                <!--<li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="山西">山西</a>-->
                <!--</li>-->

                <!--<li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="陕西">陕西</a>-->
                <!--</li>-->

                <!--<li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="甘肃">甘肃</a>-->
                <!--</li>-->

                <!--<li data-showalways="yes" style="display:block"><a href="javascript:void(0);" data-val="河南">河南</a>-->
                <!--</li>-->


              <!--</ul>-->
            <!--</dd>-->
          <!--</dl>-->

          <!--<dl class="selector-list">-->
            <!--<dt class="selector-title">交割地</dt>-->
            <!--<dd class="selector-txt clearfix">-->
              <!--<ul class="place-type" data-key="deliveryAddress">-->
                <!--<li><a href="javascript:;" class="choose-on choose-all">不限</a></li>-->
                <!--<li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="内蒙古">内蒙古</a>-->
                <!--</li>-->

                <!--<li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="山东">山东</a>-->
                <!--</li>-->

                <!--<li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="山西">山西</a>-->
                <!--</li>-->

                <!--<li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="陕西">陕西</a>-->
                <!--</li>-->

                <!--<li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="甘肃">甘肃</a>-->
                <!--</li>-->

                <!--<li data-showalways="yes" style="display:block"><a href="javascript:;" data-val="河南">河南</a>-->
                <!--</li>-->

              <!--</ul>-->
            <!--</dd>-->
          <!--</dl>-->
          <!--<dl class="selector-list">-->
            <!--<dt class="selector-title">低位发热量(Qnet)</dt>-->
            <!--<dd class="selector-txt clearfix">-->
              <!--<ul class="target-type" data-key="lowCalorificFloorValue" data-key-1="lowCalorificUpperValue">-->
                <!--<li><a href="javascript:;" class="choose-on choose-all">不限</a></li>-->
                <!--<li><a href="javascript:;" data-val="1500" data-val-1="3500">-->
                  <!--1500-->
                  <!-- - -->
                  <!--3500-->

                <!--</a></li>-->
                <!--<li><a href="javascript:;" data-val="3500" data-val-1="4500">-->
                  <!--3500-->
                  <!-- - -->
                  <!--4500-->

                <!--</a></li>-->
                <!--<li><a href="javascript:;" data-val="4500" data-val-1="5000">-->
                  <!--4500-->
                  <!-- - -->
                  <!--5000-->

                <!--</a></li>-->
                <!--<li><a href="javascript:;" data-val="5000" data-val-1="6500">-->
                  <!--5000-->
                  <!-- - -->
                  <!--6500-->

                <!--</a></li>-->
                <!--<li><a href="javascript:;" data-val="6500" data-val-1="">-->
                  <!--6500-->
                  <!--以上-->
                <!--</a></li>-->
              <!--</ul>-->
            <!--</dd>-->
          <!--</dl>-->
          <!--&lt;!&ndash;低位发热量(Qnet)end&ndash;&gt;-->
          <!--<dl class="selector-list">-->
            <!--<dt class="selector-title">全硫份(St)</dt>-->
            <!--<dd class="selector-txt clearfix">-->
              <!--<ul class="target-type" data-key="baseSulfurFloor" data-key-1="baseSulfurUpper">-->
                <!--<li><a href="javascript:;" class="choose-on choose-all">不限</a></li>-->
                <!--<li><a href="javascript:;" data-val="0" data-val-1="0.5">-->
                  <!--0-->
                  <!-- - -->
                  <!--0.5-->

                <!--</a></li>-->
                <!--<li><a href="javascript:;" data-val="0.5" data-val-1="1">-->
                  <!--0.5-->
                  <!-- - -->
                  <!--1-->

                <!--</a></li>-->
                <!--<li><a href="javascript:;" data-val="1" data-val-1="">-->
                  <!--1-->
                  <!--以上-->
                <!--</a></li>-->
              <!--</ul>-->
            <!--</dd>-->
          <!--</dl>-->
          <!--&lt;!&ndash;全硫份(St)end&ndash;&gt;-->
          <!--<dl class="selector-list">-->
            <!--<dt class="selector-title">挥发份(V)</dt>-->
            <!--<dd class="selector-txt clearfix">-->
              <!--<ul class="target-type" data-key="baseVolatileFloor" data-key-1="baseVolatileUpper">-->
                <!--<li><a href="javascript:;" class="choose-on choose-all">不限</a>-->
                <!--</li>-->
                <!--<li><a href="javascript:;" data-val="0" data-val-1="10">-->
                  <!--0-->
                  <!-- - -->
                  <!--10-->

                <!--</a></li>-->
                <!--<li><a href="javascript:;" data-val="10" data-val-1="20">-->
                  <!--10-->
                  <!-- - -->
                  <!--20-->

                <!--</a></li>-->
                <!--<li><a href="javascript:;" data-val="20" data-val-1="">-->
                  <!--20-->
                  <!--以上-->
                <!--</a></li>-->
              <!--</ul>-->
            <!--</dd>-->
          <!--</dl>-->
          <!--&lt;!&ndash;挥发份(V)end&ndash;&gt;-->
          <!--<dl class="selector-list">-->
            <!--<dt class="selector-title">全水份(Mt)</dt>-->
            <!--<dd class="selector-txt clearfix">-->
              <!--<ul class="target-type" data-key="fullWaterFloor" data-key-1="fullWaterUpper">-->
                <!--<li><a href="javascript:;" class="choose-on choose-all">不限</a></li>-->
                <!--<li><a href="javascript:;" data-val="0" data-val-1="10">-->
                  <!--0-->
                  <!-- - -->
                  <!--10-->

                <!--</a></li>-->
                <!--<li><a href="javascript:;" data-val="10" data-val-1="20">-->
                  <!--10-->
                  <!-- - -->
                  <!--20-->

                <!--</a></li>-->
                <!--<li><a href="javascript:;" data-val="20" data-val-1="30">-->
                  <!--20-->
                  <!-- - -->
                  <!--30-->

                <!--</a></li>-->
                <!--<li><a href="javascript:;" data-val="30" data-val-1="">-->
                  <!--30-->
                  <!--以上-->
                <!--</a></li>-->
              <!--</ul>-->
            <!--</dd>-->
          <!--</dl>-->
        <!--</div>-->



      <!--</div>-->
      <!--&lt;!&ndash; 更多条件 start &ndash;&gt;-->
      <!--<div class="search-more">-->
        <!--&lt;!&ndash; 更多条件 end &ndash;&gt;-->
      <!--</div>-->
    <!--</div>-->
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
                  <tbody id="quoteBody"><tr><td style="position: relative;">动力煤</td><td>贸易商001动力煤001</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016121500006">贸易商001</a></td><td>3333</td><td>上海 上海市 黄浦区</td><td>12</td><td>1</td><td>2017-06-10</td><td><a href="quoteDetail" class="detailbtn-green">详细</a></td></tr><tr><td style="position: relative;">动力煤</td><td>110</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2017021500002">高帅测试用企业</a></td><td>2000</td><td>山东省 淄博市 淄川区</td><td>9986</td><td>0.1</td><td>2021-04-03</td><td><a href="quoteDetail" class="detailbtn-green">详细</a></td></tr><tr><td style="position: relative;">炼焦煤</td><td>测试炼焦煤</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016121500005">卖家004</a></td><td>4444</td><td>山西省 大同市 矿区</td><td>4422</td><td>1</td><td>2018-03-21</td><td><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201703210001&amp;merchantId=SJ2016121500005&amp;" class="detailbtn-green">详细</a></td></tr><tr><td style="position: relative;">动力煤</td><td>块1</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016112100004">淄博买炭公司</a></td><td>6300</td><td>安徽 马鞍山 花山区 电厂</td><td>199608</td><td>0.85</td><td>2017-12-31</td><td><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201612280001&amp;merchantId=SJ2016112100004&amp;" class="detailbtn-green">详细</a></td></tr><tr><td style="position: relative;">动力煤</td><td>娄底动力煤</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016120700003">娄底煤炭贸易有限责任公司</a></td><td>3000</td><td>湖南 娄底 双峰县</td><td>59000</td><td>1000</td><td>2017-12-22</td><td><a href="/webshop/supplyHall/quoteDetailPg.do?quoteNo=GPD201612070001&amp;merchantId=SJ2016120700003&amp;" class="detailbtn-green">详细</a></td></tr></tbody>
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
                    <tbody id="biddingBody"><tr><td>动力煤</td><td>动力煤55555</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016120400001">lina60</a></td><td>7500</td><td>北京 东城区</td><td>100</td><td>1.16</td><td class="font-orange">竞价中</td><td><a href="biddingDetail" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>末煤</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016111500004">陕西长武亭南煤业有限责任公司</a></td><td>5800</td><td>陕西 咸阳 长武县</td><td>100</td><td>1</td><td class="font-orange">竞价中</td><td><a href="biddingDetail" class="detailbtn-green">详细</a></td></tr><tr><td>炼焦煤</td><td>20161123</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016112300002">武汉拓福软件公司</a></td><td>5000</td><td>内蒙古 呼和浩特 新城区</td><td>1</td><td>1</td><td class="font-orange">竞价中</td><td><a href="biddingDetail" class="detailbtn-green">详细</a></td></tr><tr><td>炼焦煤</td><td>炼焦煤7878</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016113000002">lina57</a></td><td>2100</td><td>辽宁 沈阳 和平区</td><td>100</td><td>2</td><td class="font-orange">竞价中</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201612010004&amp;merchantId=SJ2016113000002&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>炼焦煤</td><td>炼焦煤260</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016120400001">lina60</a></td><td>2600</td><td>北京 东城区 是电风扇的</td><td>190</td><td>6</td><td class="font-orange">竞价中</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201612050003&amp;merchantId=SJ2016120400001&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>无烟煤2</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110700005">平安测试零三八六零</a></td><td>2000</td><td>吉林 长春 南关区</td><td>1000</td><td>1</td><td class="font-gray">竞价结束</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201611070002&amp;merchantId=SJ2016110700005&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>无烟煤5</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110700005">平安测试零三八六零</a></td><td>2200</td><td>上海 虹口区</td><td>150</td><td>1</td><td class="font-gray">竞价结束</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201611070001&amp;merchantId=SJ2016110700005&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>动力煤</td><td>动力煤11</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110700005">平安测试零三八六零</a></td><td>2100</td><td>上海 普陀区</td><td>160</td><td>1</td><td class="font-gray">竞价结束</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201611070003&amp;merchantId=SJ2016110700005&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>无烟煤88</td><td><img src="/staticSource/css/webshop/images/bq-mall.png" class="mr2"><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110700005">平安测试零三八六零</a></td><td>2100</td><td>黑龙江 哈尔滨 道里区</td><td>130</td><td>1</td><td class="font-gray">竞价结束</td><td><a href="/webshop/supplyHall/biddingDetailPg.do?biddingCode=JJD201611080003&amp;merchantId=SJ2016110700005&amp;" class="detailbtn-green">详细</a></td></tr><tr><td>无烟煤</td><td>长沙二号末</td><td><a href="/webshop/enterpriseStore/supplyInfoPg.do?merchantId=SJ2016110800002">湖南能源利用有限责任公司</a></td><td>2000</td><td>湖南 长沙 芙蓉区</td><td>1000</td><td>1</td><td class="font-gray">竞价结束</td><td><a href="biddingDetail" class="detailbtn-green">详细</a></td></tr></tbody>

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
<style scoped>
  @import '../../styles/selector.css';
  @import '../../styles/list.css';
</style>
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

        $('.sl-e-more').click(function () {
          var that = $(this);
          if(!that.hasClass('opened')){
            that.addClass('opened');
            that.parent().parent().addClass('extend');
            that.text('收起').append('<i></i>');
          }else{
            that.parent().parent().removeClass('extend');
            that.removeClass('opened');
            that.text('更多').append('<i></i>');
          }
        });
        $('#J_selectorMore .sm-wrap').click(function () {
          var that = $(this);
          if(!that.hasClass('opened')){
            that.addClass('opened');
            $('.J_selectorLine.hide').css('display','block');
            that.text('收起').append('<i></i>');
            //第一次加载的时候判断是否显示更多
            if( $('#count_flag').val() == '1'){
              $('.J_selectorLine.hide .sl-wrap').each(function () {
                var that = $(this);
                var ul = that.find('ul');
                var extMore = that.find('a.J_extMore');
                var width = ul.css('width').split('px')[0];
                if(width > 0 && width<900){
                  extMore.css('visibility','hidden');
                }
              });
              $('#count_flag').val('');
            }
          }else{
            that.removeClass('opened');
            $('.J_selectorLine.hide').css('display','none');
            that.text('更多选项（'+that.data('more')+'）').append('<i></i>');
          }
        });
        $('.J_selectorLine .sl-wrap').each(function () {
          var that = $(this);
          var ul = that.find('ul');
          var extMore = that.find('a.J_extMore');
          var width = ul.css('width').split('px')[0];
          if(width > 0 && width<900){
            extMore.css('visibility','hidden');
          }
          $('#count_flag').val('1');
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

