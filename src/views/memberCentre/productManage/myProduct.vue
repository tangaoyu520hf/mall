<template>
  <div>
    <div class="mc-right-content-box">
      <ul class="mc-right-ul">
        <el-form :inline="true" :model='searchData' class="demo-form-inline">
          <el-form-item :label="$t('product.productCode')">
            <el-input :placeholder="$t('product.productCode')" icon="search" v-model='searchData.productCode'></el-input>
          </el-form-item>
          <el-form-item :label="$t('product.place')">
            <el-select v-model="searchData.coalVariety" filterable :placeholder="$t('common.pleaseChoose')">
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="search" @click="onSearch">{{$t("button.query")}}</el-button>
          </el-form-item>
        </el-form>
      </ul>
      <ul style="border:none;" class="mc-right-ul">
        <li style="border:none;" class="mc-right-ul-li">
          <div class="mc-right-ul-li-div-table">
            <el-table border style="width: 100%" align='center'
                      :data='data'>
              <el-table-column
                fixed
                align="center"
                :label="$t('product.productCode')"
                prop="productCode" width="220">
              </el-table-column>

              <el-table-column
                align="center"
                :label='$t("product.catalogName")'
                prop="catalogName" width="200">
              </el-table-column>

              <el-table-column
                align="center"
                :label='$t("product.productName")'
                prop="productName" width="200">
              </el-table-column>

              <el-table-column
                align="center"
                :label='$t("product.status")'
                prop="productStatus" width="80">
              </el-table-column>

              <el-table-column align="center" fixed="right" :label='$t("common.operate")'>
                <template scope='scope'>
                  <el-button type="info" icon='view' size="mini" @click='onSelect(scope.row)'></el-button>
                  <el-button type="info" icon='edit' size="mini" @click='onEdit(scope.row)'></el-button>
                  <el-button type="danger" icon='delete' size="mini" @click='onDelete(scope.row.id)'></el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </li>
      </ul>
      <el-row>
        <el-col :span="6" :offset="10" >
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="paginations.currentPage"
            :page-sizes="paginations.pageSizes"
            :page-size="paginations.pageSize"
            :layout="paginations.layout"
            :total="paginations.total">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  /*import '@/styles/login.css';*/
  import Vue from 'vue'
  import { Button, Select, Pagination,Table,TableColumn,Row,Col,Option,Input,Form,FormItem} from 'element-ui'
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
  export default {
    created(){
      this.getDataList();
    },
    data () {
      return {
        data: [],
        searchData:{
          coalVariety:null,
          productCode:null
        },
        //需要给分页组件传的信息
        paginations: {
          currentPage: 1,
          total: 0,
          pageSize: 12,
          pageSizes: [3, 9, 12, 24],
          layout: 'total, sizes, prev, pager, next, jumper'
        },
      }
    },
    methods:{
      onSearch(){
        this.getDataList();
      },
      handleSizeChange(val) {
        this.paginations.pageSize = val;
        this.getDataList();
      },
      handleCurrentChange(val) {
        this.paginations.currentPage = val;
        this.getDataList();
      },
      onEdit(row){
        this.$router.push({ path: 'updateProduct/'+row.id})
      },
      onSelect(row){
        this.$router.push({ path: 'productDetail/'+row.id})
      },
      onDelete(id){
        let ids = [];
        if(id){
          ids.push(id);
        }
        this.$confirm(this.$t('common.confirmDelete'), this.$t('common.prompt'), {
          confirmButtonText: this.$t('common.confirm'),
          cancelButtonText: this.$t('common.cancel'),
          type: 'warning'
        }).then(() => {
          this.$http.post(this.moudules.product+'/myProduct/deletes',ids)
            .then(() => {
              this.$message(this.$t('common.operateSuccess'));
              this.getDataList();
            })
        });
      },
      /**
       * 获取列表数据
       */
      getDataList(){
        let data = {
          current: this.paginations.currentPage,
          size: this.paginations.pageSize,
          ...this.searchData
        };
        this.$http.get(this.moudules.product+'/myProduct/page',{params:data}).then(response=> {
          this.data = response.data.data.records;
          this.paginations.total = response.data.data.total;
        });
      },
    },
    i18n: { // `i18n` option
      messages: {
        ch: {
          product:{
            productCode:'编号',
            place:'产地',
            productName:'品名',
            catalogName:'分类',
            status:'状态',
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
