import * as axios from "@/common/myAxios";

// 
// let homeworkId=1

export const getStudentHomework = homeworkId => axios.get("/student/commented/" + 1);

export const getPageCount = (homeworkId, homeworkTitle) =>
    axios.get("/student/commented/page/count", {
        homeworkId: homeworkId,
        homeworkTitle: homeworkTitle
    });

export const getPage = (index, homeworkId, homeworkTitle) =>
    axios.get("/student/commented/page/" + index, {
        homeworkId: homeworkId,
        homeworkTitle: homeworkTitle
    });

export const pageSize = 7;