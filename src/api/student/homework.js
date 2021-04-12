import * as axios from "@/common/myAxios";

export const submitHomework = studentHomework => axios.post("/student/homework/", studentHomework);

export const getHomework = homeworkId => axios.get("/student/homework/" + homeworkId);

export const getPageCount = (homeworkId, homeworkTitle) => axios.get("/student/homework/page/count", {
    homeworkId: homeworkId,
    homeworkTitle: homeworkTitle
});

export const getPage = (index, homeworkId, homeworkTitle) => axios.get("/student/homework/page/" + index,
//  {
//     // homeworkId: homeworkId,
//     // homeworkTitle: homeworkTitle
// }
);

export const pageSize = 7;




