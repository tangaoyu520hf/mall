<template>
  <div class="mc-right-box">
    <div class="=&quot;mc-ad-tab&quot;">
      <div class="mc-tabList">
        <ul class="mc-tabList-ul">
          <li class=""><a class="mc-cur" href="javascripy:void(0);">个人信息</a></li>
        </ul>
      </div>
      <div id="mc-con">
        <div class="mc-gpxq-div mc-ad-box"> <span class="mc-right-span">账号名称：</span>
          <input type="hidden" name="accountId" value="9b9b0876bdb44e0ea1cf7e851282f20e">
          <div class="mc-ad-div">Maijia3</div>
        </div>
        <div class="mc-gpxq-div mc-ad-box"> <span class="mc-right-span">真实姓名：</span>
          <input class="mc-input mc-input-5 mc-ad-input" name="" id="realName" value="000" type="text">
          <p style="display:none" class="mc-ts-c">错误信息提示</p>
        </div>
        <div class="mc-gpxq-div mc-ad-box"> <span class="mc-right-span">手机号码：</span>
          <div class="mc-ad-div">133****7325</div>
        </div>
        <div class="mc-gpxq-div mc-ad-box"> <span class="mc-right-span">账号邮箱：</span>
          <div class="mc-ad-div">****4@cc.com &nbsp;&nbsp;


            <em><font color="red">未激活</font></em></div>
        </div>
        <div class="mc-gpxq-div mc-ad-box"> <span class="mc-right-span">公司名称：</span>
          <div class="mc-ad-div">内蒙古伊泰集团有限公司</div>
        </div>
        <div class="mc-gpxq-div mc-ad-box"> <span class="mc-right-span">账号角色：</span>

          <div class="mc-ad-div">买家管理员&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

        </div>
        <div style="clear:both" class="mc-ad-an"><a href="javascript:void(0);" onclick="updataAccount();">保存</a></div>
        <div style="clear:both; border: 0px solid #e7e7e7;background-color: #ffffff;" class="mc-ad-sm">
          <table class="mc-personal-table" cellspacing="0" cellpadding="0" style="border-collapse: collapse;width: 100%;">
            <tbody><tr>
              <td class="mc-personal-td">手机号绑定</td>
              <td class="mc-personal-td" id="secAuthTel2">133****7325</td>
              <td class="mc-personal-td"><a class="mc-personal-a" href="javascript:void(0);" onclick="openProduct()">修改</a></td>
            </tr>
            <tr>
              <td class="mc-personal-td">邮箱绑定</td>
              <td class="mc-personal-td">享受平台邮箱服务 ****4@cc.com</td>
              <td id="binding-email" class="mc-personal-td">
                <a class="mc-personal-a" href="javascript:void(0);">
                  激活
                </a>
              </td>
            </tr>
            <tr class="mc-tr-last">
              <td class="mc-personal-td">登录密码</td>
              <td class="mc-personal-td">定期更换密码让您的账户更安全。</td>
              <td class="mc-personal-td"><a class="mc-personal-a" href="javascript:void(0);" onclick="openProduct2()">修改</a></td>
            </tr>
            </tbody></table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*import '@/styles/login.css';*/
  import Vue from 'vue'
  import { Button, Select } from 'element-ui'
  Vue.use(Button)
  Vue.use(Select)
  export default {
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../../styles/mc_new_css.css';
  table tr th, table tr td {
    text-align: center;
    word-wrap: break-word;
    overflow: hidden;
    word-break: break-all;
    font-size: 12px;
    color: #333333;
    padding: 12px 2px;
  }
  tr {
    border: 1px solid #edf0f2;
  }
</style>
