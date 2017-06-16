<template>
  <div>
    <!--选择分类 start-->
    <el-row v-if="!isNext">
      <el-col :span="6" :offset="3">
        <el-cascader
          expand-trigger="hover"
          :options="catalogTree"
          :placeholder="$t('placeholder.newTip')"
          @change="handleChange">
        </el-cascader>
      </el-col>
      <el-col :span="6">
        <el-button icon="check" type="primary" @click="nextStep">{{$t('button.nextMsg')}}</el-button>
      </el-col>
    </el-row>
    <!--选择分类 end-->
    <!--商品基本信息 start-->
    <div v-else>
      <el-form :inline="true" :model="formData" ref="formData" label-width="100px" class="demo-dynamic">
        <!--商品基本字段-->
        <el-form-item
          prop="productName"
          :label="$t('product.productName.label')"
          :rules="[
            { required: true, message: $t('product.productName.rules.requireMsg'), trigger: 'blur' },
            { min: 2, max: 60, message: $t('product.commonRules.lenghtMsg',[2,60]), trigger: 'blur' }
          ]"
        >
          <el-input v-model="formData.productName"></el-input>
        </el-form-item>

        <el-form-item
          prop="place"
          :label="$t('product.place.label')"
          :rules="[
            { required: true, message: $t('product.place.rules.requireMsg'), trigger: 'change' },
          ]"
        >
          <el-select v-model="formData.place" filterable :placeholder="$t('placeholder.pleaseChoosePlace')">
            <el-option  :key="index" v-for="(item, index) in areaList" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <!--商品自定义指标-->
        <template v-for="(item, index) in formData.productIndexList">
          <el-form-item
            v-if="item.valueType=='FIXED'"
            :label="item.indexName"
            :key="item.id"
            :prop="'productIndexList.' + index + '.indexValue'"
            :rules="returnRules(item)"
          >
            <el-input v-if="item.dataType=='FIGURE'" v-model.number="item.indexValue"></el-input>
            <el-input v-else v-model="item.indexValue"></el-input>
          </el-form-item>
          <template v-else>
            <el-form-item
              :label="item.indexName"
              :key="item.id+'upperLimitValue'"
              :prop="'productIndexList.' + index + '.upperLimitValue'"
              :rules="returnRules(item)"
            >
              <el-input :style="{width:'50px'}" v-if="item.dataType=='FIGURE'"
                        v-model.number="item.upperLimitValue"></el-input>
              <el-input :style="{width:'50px'}" v-else v-model="item.upperLimitValue"></el-input>
            </el-form-item>
            <el-form-item
              :key="item.id+'floorLimitValue'"
              :prop="'productIndexList.' + index + '.floorLimitValue'"
              :rules="returnRules(item)"
            >
              <el-input :style="{width:'50px'}" v-if="item.dataType=='FIGURE'"
                        v-model.number="item.floorLimitValue"></el-input>
              <el-input :style="{width:'50px'}" v-else v-model="item.floorLimitValue"></el-input>
            </el-form-item>
          </template>
        </template>

        <umeditor v-model="formData.productDetail"></umeditor>

        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">提交</el-button>
        </el-form-item>
      </el-form>


    </div>
    <!--商品基本信息 end-->
  </div>
</template>

<script>
  /*import '@/styles/login.css';*/
  import validate from '@/core/validate/custom'
  import umeditor from '@/components/umeditor/umeditor.vue'
  import Vue from 'vue'
  import {
    Button,
    Select,
    Pagination,
    Table,
    TableColumn,
    Row,
    Col,
    Option,
    Input,
    Form,
    FormItem,
    Cascader
  } from 'element-ui'
  Vue.use(Button)
  Vue.use(Select)
  Vue.use(Pagination)
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Option)
  Vue.use(Input)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Cascader)
  export default {
    created(){
      this.getDataList();
    },
    components:{umeditor},
    data () {
      return {
        formData: {
          catalogId: null,
          productIndexList: [],
          productName: '',
          place:'',
          formData:''
        },
        catalogTree: [],
        areaList:[],
        isNext: false,
      }
    },
    methods: {
      /**
       * 下一步
       */
      nextStep(){
        if (!this.formData.catalogId) {
          this.$message.error(this.$t('placeholder.newTip'));
          return;
        }
        this.getAreaDataList();
        this.getProductDynamicIndex().then(()=>{
          this.isNext = true;
        });
      },
      /**
       * 获取列表数据
       */
      getDataList(){
        this.$http.get(this.moudules.product + '/catalog/treeProductCatalog').then(response => {
          this.catalogTree = response.data.data;
        });
      },
      /**
       * 获取省级区域
       */
      getAreaDataList(){
        this.$http.get(this.moudules.system + '/api/area/list',{params:{pcode:'0'}}).then(response => {
          this.areaList = response.data.data;
        });
      },
      getProductDynamicIndex(){
        return new Promise((resolve, reject) => {
          this.$http.get(this.moudules.product + '/product/getTypeAndIndexByCatalogId', {params: {catalogId: this.formData.catalogId}}).then(response => {
            response.data.data.forEach(obj => {
              obj.indexId = obj.id;
              delete obj.id;
              delete obj.createId;
              delete obj.createTime;
              resolve();
            });
            this.formData.productIndexList = response.data.data;
          }).catch(error=>{
            reject(error);
          });
        })
      },
      handleChange(value) {
        this.formData.catalogId = value[value.length - 1];
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post(this.moudules.product+'/addProduct/add', this.formData).then(() => {
              this.$router.push('/productManage/myProduct');
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      returnRules(item) {
        let rules = [];
        if (item.isMust == 'Y') {
          rules.push({required: true, message: '不能为空'})
        }
        if (item.dataType == 'FIGURE') {
          rules.push({ validator: validate.checkNumber })
        }
        return rules;
      }
    },
    i18n: { // `i18n` option
      messages: {
        ch: {
          placeholder: {
            newTip: '请选择要新增的商品分类',
            pleaseChoosePlace:'请选择产地'
          },
          button: {
            nextMsg: '下一步'
          },
          product: {
            productName: {
              label: '商品名称',
              rules: {
                requireMsg: '请输入商品名称',
              },
            },
            place: {
              label: '产地',
              rules: {
                requireMsg: '请选择产地',
              },
            },
            commonRules: {
              lenghtMsg: '长度在 {0} 到 {1} 个字符'
            }
          },
        }
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
