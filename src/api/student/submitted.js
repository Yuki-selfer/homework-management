import * as axios from "@/common/myAxios";

export const updateStudentHomework = studentHomework => axios.put("/student/submitted", studentHomework);

export const getStudentHomework = homeworkId => axios.get("/student/submitted/" + homeworkId);

export const getPageCount = (homeworkId, homeworkTitle) =>
    axios.get("/student/submitted/page/count", {
        homeworkId: homeworkId,
        homeworkTitle: homeworkTitle
    });

export const getPage = (index, homeworkId, homeworkTitle) =>
    axios.get("/student/submitted/page/" +index, {
        homeworkId:homeworkId,
        homeworkTitle: homeworkTitle
    });

export const pageSize = 7;