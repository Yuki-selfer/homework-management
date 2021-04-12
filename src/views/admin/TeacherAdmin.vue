<template>

<div class="wrapper">
<el-table
    :data="tableData"
    style="width: 100%">
 

       <el-table-column
      label="姓名"
     >
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.userName }}</span>
      </template>
    </el-table-column>
       <el-table-column
      label="学号"
     >
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.userId }}</span>
      </template>
    </el-table-column>
         <el-table-column
      label="发布作业数"
     >
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.userType }}</span>
      </template>
    </el-table-column>
    

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">新增</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
  
</template>

<script>

 import {getAllUser, deleteUser} from "@/api/admin/alluser";
  export default {
        name: "TeacherAdmin",
    data() {
      return {
        tableData: []
      }
    },
    created:function(){
getAllUser().then(res => {
  //数据封装过 唉 { code data  message}

                 if(res.length) this.tableData=res.filter((item)=>{return item.userType==2})
                          
                        }, (reject)=>{
                                         console.log("reject", reject);
                        });
    },
    methods: {
        handleEdit(index, row) {
        console.log(index, row);
          this.$router.push({name: "register"});
      },
      handleDelete(index, row) {
        console.log(index, row);
        deleteUser(row.userId, row.userType ).then((res)=>{
this.$message.success(res);
        })
        getAllUser().then(res => {
  //数据封装过 唉 { code data  message}

                 if(res.length) this.tableData=res.filter((item)=>{return item.userType==2})
                          
                        }, (reject)=>{
                                         console.log("reject", reject);
                        });
      }
    }
  }
</script>
<style >
.wrapper{
  /* background-color: ; */
  width: 95%;
  padding: 16px;
  margin: 16px;

}
</style>