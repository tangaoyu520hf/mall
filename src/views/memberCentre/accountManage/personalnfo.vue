<template>
  <div>
    <div id="mc-con">
      <div class="mc-gpxq-div mc-ad-box"><span class="mc-right-span">账号名称：</span>
        <div class="mc-ad-div">{{$store.getters.getUserInfo.loginName}}</div>
      </div>
      <div class="mc-gpxq-div mc-ad-box"><span class="mc-right-span">真实姓名：</span>
        <input class="mc-input mc-input-5 mc-ad-input" name="" v-model="realName"  type="text">
      </div>
      <div class="mc-gpxq-div mc-ad-box"><span class="mc-right-span">手机号码：</span>
        <div class="mc-ad-div">{{phone}}</div>
      </div>
      <div class="mc-gpxq-div mc-ad-box"><span class="mc-right-span">账号邮箱：</span>
        <div class="mc-ad-div">{{email}} &nbsp;&nbsp;
          <em v-if="!$store.getters.getUserInfo.emailStatus"><font color="red">未激活</font></em>
        </div>
      </div>
<!--      <div class="mc-gpxq-div mc-ad-box"><span class="mc-right-span">公司名称：</span>
        <div class="mc-ad-div">内蒙古伊泰集团有限公司</div>
      </div>
      <div class="mc-gpxq-div mc-ad-box"><span class="mc-right-span">账号角色：</span>

        <div class="mc-ad-div">买家管理员&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

      </div>-->
      <div style="clear:both" class="mc-ad-an"><a href="javascript:void(0);" @click="updateUserRealName">保存</a></div>
      <div style="clear:both; border: 0px solid #e7e7e7;background-color: #ffffff;" class="mc-ad-sm">
        <table class="mc-personal-table" cellspacing="0" cellpadding="0" style="border-collapse: collapse;width: 100%;">
          <tbody>
          <tr>
            <td class="mc-personal-td">手机号绑定</td>
            <td class="mc-personal-td" id="secAuthTel2">133****7325</td>
            <td class="mc-personal-td"><a class="mc-personal-a" href="javascript:void(0);"
                                          @click="openDialog('phone','修改绑定手机号')">修改</a></td>
          </tr>
          <tr>
            <td class="mc-personal-td">邮箱绑定</td>
            <td class="mc-personal-td">享受平台邮箱服务 ****4@cc.com</td>
            <td id="binding-email" class="mc-personal-td">
              <a class="mc-personal-a" href="javascript:void(0);" @click="openDialog('email','激活邮箱')">
                激活
              </a>
            </td>
          </tr>
          <tr class="mc-tr-last">
            <td class="mc-personal-td">登录密码</td>
            <td class="mc-personal-td">定期更换密码让您的账户更安全。</td>
            <td class="mc-personal-td"><a class="mc-personal-a" href="javascript:void(0);"
                                          @click="openDialog('editPassword','修改密码')">修改</a></td>

          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <el-dialog :title="this.dialogAttr.title" :visible.sync="dialogFormVisible">
      <template v-if="this.dialogAttr.type==='phone'">
        <el-form :inline="true" :model="form">
          <el-form-item label="手机号码" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-button type="text">获取验证码</el-button>

          <el-form-item label="验证码" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          手机改绑功能尚未完成
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" :disabled="!dialogFormVisible" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </template>

      <template v-else-if="this.dialogAttr.type==='email'">
        <el-form ref="ruleForm" :rules="rules.email" :inline="true" :model="form">
          <el-form-item prop="email" label="邮箱地址" :label-width="formLabelWidth">
            <el-input v-model="form.email" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="activationEamil">确 定</el-button>
        </div>
      </template>

      <template v-else-if="this.dialogAttr.type==='editPassword'">
        <el-form ref="ruleForm" :rules="rules.password" :inline="true" :model="form.password">
          <el-form-item label="旧密码" prop="oldPassword" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.password.oldPassword" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="新密码"  prop="newPassword" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.password.newPassword" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.password.confirmPassword" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" :disabled="!dialogFormVisible" @click="updateUserPassword">确 定</el-button>
        </div>
      </template>

    </el-dialog>
  </div>
</template>

<script>
  import Vue from 'vue'
  import util from '@/core/util'
  import {mapMutations} from 'vuex';
  import custom from '@/core/validate/custom'
  import {
    Dialog,
    Button,
    Form,
    FormItem,
    Input,
  } from 'element-ui'
  Vue.use(Dialog)
  Vue.use(Button)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Input)
  export default {
    created(){
    },
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if(!custom.complexityPwd(value)){
            callback(new Error('密码要求包含大小写字母及数字组合！'));
          }
          if (this.form.password.newPassword !== '') {
            this.$refs.ruleForm.validateField('confirmPassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        dialogFormVisible:false,
        realName:this.$store.getters.getUserInfo.realName,
        dialogAttr:{
          type:'',
          title:'',
        },
        rules:{
          phone:{

          },
          email:{
            email:[{ required: true, message: '请输入密码', trigger: 'blur' }],
          },
          password:{
            oldPassword:[{ required: true, message: '请输入密码', trigger: 'blur' }],
            newPassword: [
              { validator: validatePass, trigger: 'blur' }
            ],
            confirmPassword: [
              { validator: validatePass2, trigger: 'blur' }
            ],
          },
        },
        form: {
          name: '',
          email:this.$store.getters.getUserInfo.email,
          password:{
            oldPassword:'',
            newPassword:'',
            confirmPassword: '',
          }
        },
        formLabelWidth: '120px'
      }
    },
    computed: {
      phone(){
        return util.phoneHide(this.$store.getters.getUserInfo.phone)
      },
      email(){
        return util.emailHide(this.$store.getters.getUserInfo.email)
      }
    },
    methods:{
      ...mapMutations([
        'setUserInfoDetail'
      ]),
      /**
       * 用户信息 待用
       */
      getUserInfo(){
        this.$http.get(this.moudules.system+'/user/infoAndPermission').then(response=> {
          alert(response);
        });
      },
      /**
       * 更新用户真实信息
       */
      updateUserRealName(){
        this.$http.post(this.moudules.system+'/user/updateUserRealName',$.param({realName:this.realName})).then((res) => {
          if(res.data.respCode=='200'){
            this.setUserInfoDetail({realName:this.realName})
            this.$message({
              message: '保存成功',
              type: 'success'
            });
          }
        });
      },
      /**
       * 修改用户密码
       */
      updateUserPassword(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false
            this.$http.post(this.moudules.system+'/user/updatePassword',$.param(this.form.password)).then((res) => {
              if(res.data.respCode=='200'){
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
              }else{
                this.$message.error('修改失败，请重试');
              }
            });
          }
        });
      },
      /**
       * 激活邮箱
       */
      activationEamil(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false
            this.$http.post(this.moudules.system+'/user/sendActivationEmail',$.param({email:this.form.email})).then((res) => {
              if(res.data.respCode=='200'){
                this.$message({
                  message: '邮件已发送',
                  type: 'success'
                });
              }else{
                this.$message.error('邮件发送失败，请重试');
              }
            });
          }
        });
      },
      openDialog(type,title){
        if(this.$refs.ruleForm){
          this.$refs.ruleForm.resetFields();
        }
        this.dialogFormVisible = true
        this.dialogAttr.title = title;
        this.dialogAttr.type = type
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
