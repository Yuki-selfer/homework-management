import * as axios from "@/common/myAxios";

export const updateStudentHomework = studentHomework => axios.put("/teacher/submitted/", studentHomework);

export const getStudentHomework = studentHomeworkId => axios.pureGet("/teacher/submitted/" + studentHomeworkId);

export const getPageCount = (homeworkId, homeworkTitle, studentId, studentName) =>
    axios.get("/teacher/submitted/page/count", {
        homeworkId: homeworkId,
        homeworkTitle: homeworkTitle,
        studentId: studentId,
        studentName: studentName
    });

export const getPage = (index, homeworkId, homeworkTitle, studentId, studentName) =>
    axios.get("/teacher/submitted/page/" + index, {
        homeworkId: homeworkId,
        homeworkTitle: homeworkTitle,
        studentId: studentId,
        studentName: studentName
    });

export const pageSize = 7;