import Vue from 'vue';
import VueRouter from 'vue-router';
import Container from "@/views/Container";
import Login from '@/views/Login';
import Register from "@/views/Register";
import Home from "@/views/Home";
import StudentHomework from "@/views/student/StudentHomework";
import StudentSubmitted from "@/views/student/StudentSubmitted";
import TeacherHomework from "@/views/teacher/TeacherHomework";
import TeacherSubmitted from "@/views/teacher/TeacherSubmitted";
import StudentCommented from "@/views/student/StudentCommented";
import StudentAdmin from "@/views/admin/StudentAdmin";
import TeacherAdmin from "@/views/admin/TeacherAdmin";
import AdminHome from "@/views/admin/Admin";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "container",
        component: Container,
        children: [
            {
                path: "/student",
                name: "student-home",
                component: Home
            },
            {
                path: "/student/homework",
                name: "student-homework",
                component: StudentHomework
            },
            {
                path: "/student/submitted",
                name: "student-submitted",
                component: StudentSubmitted
            },
            {
                path: "/student/commented",
                name: "student-commented",
                component: StudentCommented
            },
            {
                path: "/teacher",
                name: "teacher-home",
                component: Home
            },
            {
                path: "/teacher/homework",
                name: "teacher-homework",
                component: TeacherHomework
            },
            {
                path: "/teacher/submitted",
                name: "teacher-submitted",
                component: TeacherSubmitted
            },
            {
                path: "/admin",
                name: "admin-home",
                component: AdminHome
            },
            {
                path: "/admin/studentadmin",
                name: "admin-studentadmin",
                component: StudentAdmin
            },
            {
                path: "/admin/teacheradmin",
                name: "admin-teacheradmin",
                component: TeacherAdmin
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: Register
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;