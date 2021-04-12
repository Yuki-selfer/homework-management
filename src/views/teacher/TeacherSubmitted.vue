<template>
    <div class="teacher-submitted-wrap">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-fa fa-check"></i> 学生作业列表
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="container">
            <div class="query-form">
                <el-row :gutter="20">
                    <el-col :offset="9" :span="3">
                        <el-input @keyup.enter.native="query" onkeyup="value=value.replace(/[^\d]/g,'')"
                                  placeholder="作业编号" v-model="queryForm.homeworkId"/>
                    </el-col>
                    <el-col :span="3">
                        <el-input @keyup.enter.native="query" placeholder="作业标题" v-model="queryForm.homeworkTitle"/>
                    </el-col>
                    <el-col :span="3">
                        <el-input @keyup.enter.native="query" onkeyup="value=value.replace(/[^\d]/g,'')"
                                  placeholder="学生学号" v-model="queryForm.studentId"/>
                    </el-col>
                    <el-col :span="3">
                        <el-input @keyup.enter.native="query" placeholder="学生姓名" v-model="queryForm.studentName"/>
                    </el-col>
                    <el-col :span="3">
                        <el-button @click="query" icon="el-icon-search" type="primary">搜索</el-button>
                    </el-col>
                </el-row>
            </div>

            <div>
                <p></p>
            </div>

            <el-row justify="center" type="flex">
                <el-pagination
                        :current-page.sync="pageIndex"
                        :page-size="pageSize"
                        :total="pageSize * pageCount"
                        @current-change="getPage"
                        background
                        layout="prev, pager, next"
                >
                </el-pagination>
            </el-row>

            <div>
                <p></p>
            </div>

            <div class="table">
                <el-table :data="tableData" stripe>
                    <el-table-column label="学生作业编号" prop="studentHomeworkId"/>
                    <el-table-column label="作业编号" prop="homeworkId"/>
                    <el-table-column label="作业标题" prop="homeworkTitle"/>
                    <el-table-column label="作业内容" prop="homeworkContent"/>
                    <el-table-column label="学生学号" prop="studentId"/>
                    <el-table-column label="学生姓名" prop="studentName"/>
                    <el-table-column label="提交的标题" prop="title"/>
                    <el-table-column label="提交的内容" prop="content"/>
                    <el-table-column label="评语" prop="teacherComment"/>
                    <el-table-column align="center" label="操作" width="200px">
                        <template slot-scope="scope">
                            <el-button @click="editSubmittedStudentHomework(scope.row.studentHomeworkId)" size="mini"
                                       type="success">点评
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

            <el-dialog :visible.sync="editing" title="编辑" width="50%">
                <el-form :model="entityForm" label-width="96px" ref="form">
                    <el-form-item label="学生作业编号">
                        <el-input disabled type="number" v-model="entityForm.studentHomeworkId"></el-input>
                    </el-form-item>
                    <el-form-item label="作业编号">
                        <el-input disabled type="number" v-model="entityForm.homeworkId"></el-input>
                    </el-form-item>
                    <el-form-item label="作业标题">
                        <el-input disabled type="text" v-model="entityForm.homeworkTitle"></el-input>
                    </el-form-item>
                    <el-form-item label="作业内容">
                        <el-input disabled type="textarea" v-model="entityForm.homeworkContent"></el-input>
                    </el-form-item>
                    <el-form-item label="学生学号">
                        <el-input disabled type="number" v-model="entityForm.studentId"></el-input>
                    </el-form-item>
                    <el-form-item label="学生姓名">
                        <el-input disabled type="text" v-model="entityForm.studentName"></el-input>
                    </el-form-item>
                    <el-form-item label="提交的标题">
                        <el-input disabled type="text" v-model="entityForm.title"></el-input>
                    </el-form-item>
                    <el-form-item label="提交的内容">
                        <el-input disabled type="textarea" v-model="entityForm.content"></el-input>
                    </el-form-item>
                    <el-form-item label="评语">
                        <el-input type="textarea" v-model="entityForm.teacherComment"></el-input>
                    </el-form-item>
                </el-form>
                <span class="dialog-footer" slot="footer">
                    <el-button @click="save" type="primary">确 定</el-button>
                    <el-button @click="editing = false">取 消</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import * as submittedApi from "@/api/teacher/submitted";

    export default {
        name: "TeacherSubmitted",
        data() {
            return {
                queryForm: {
                    homeworkId: "",
                    homeworkTitle: "",
                    studentId: "",
                    studentName: ""
                },
                entityForm: {},
                tableData: [],
                pageSize: submittedApi.pageSize,
                pageCount: 1,
                pageIndex: 1,
                editing: false
            };
        },
        methods: {
            query() {
                submittedApi.getPageCount(this.queryForm.homeworkId, this.queryForm.homeworkTitle, this.queryForm.studentId, this.queryForm.studentName).then(res => {
                    this.pageCount = res;
                    this.pageIndex = 1;
                    this.getPage(1);
                });
            },
            getPage(pageIndex) {
                submittedApi.getPage(pageIndex, this.queryForm.homeworkId, this.queryForm.homeworkTitle, this.queryForm.studentId, this.queryForm.studentName).then(res => {
                    this.tableData = res;
                });
            },
            editSubmittedStudentHomework(studentHomeworkId) {
                submittedApi.getStudentHomework(studentHomeworkId).then(res => {
                    this.entityForm = res;
                    this.editing = true;
                });
            },
            save() {
                submittedApi.updateStudentHomework(this.entityForm).then(() => {
                    this.$message.success("点评成功");
                    this.getPage(this.pageIndex);
                    this.editing = false;
                });
            }
        },
        created() {
            this.query();
        }
    }
</script>

<style scoped>

</style>