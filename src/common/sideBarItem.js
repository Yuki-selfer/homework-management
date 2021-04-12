import UserType from "@/common/userType";

let SideBarItem = {};

SideBarItem.items = [
    {
        icon: "el-icon-fa fa-home",
        index: "/student",
        title: "学生首页",
        userType: UserType.student
    },
    {
        icon: "el-icon-fa fa-book",
        index: "/student/homework",
        title: "作业列表",
        userType: UserType.student
    },
    {
        icon: "el-icon-fa fa-check",
        index: "/student/submitted",
        title: "已提交的作业",
        userType: UserType.student
    },
    {
        icon: "el-icon-fa fa-thumbs-up",
        index: "/student/commented",
        title: "老师已点评的作业",
        userType: UserType.student
    },
    {
        icon: "el-icon-fa fa-home",
        index: "/teacher",
        title: "教师首页",
        userType: UserType.teacher
    },
    {
        icon: "el-icon-fa fa-book",
        index: "/teacher/homework",
        title: "作业列表",
        userType: UserType.teacher
    },
    {
        icon: "el-icon-fa fa-check",
        index: "/teacher/submitted",
        title: "学生作业列表",
        userType: UserType.teacher
    },
    {
        icon: "el-icon-fa fa-home",
        index: "/admin",
        title: "管理员首页",
        userType: UserType.admin
    },
    {
        icon: "el-icon-fa fa-book",
        index: "/admin/studentadmin",
        title: "学生信息管理",
        userType: UserType.admin
    },
    {
        icon: "el-icon-fa fa-book",
        index: "/admin/teacheradmin",
        title: "教师信息管理",
        userType: UserType.admin
    }
];

export default SideBarItem;