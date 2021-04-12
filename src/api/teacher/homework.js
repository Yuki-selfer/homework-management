import * as axios from "@/common/myAxios";

export const addHomework = homework => axios.post("/teacher/homework", homework);

export const deleteHomework = homeworkId => axios.pureDelete("/teacher/homework/" + homeworkId);

export const updateHomework = homework => axios.put("/teacher/homework", homework);

export const getHomework = homeworkId => axios.get("/teacher/homework/" + homeworkId);

export const getPage = (index, homeworkId, homeworkTitle) =>
    axios.get("/teacher/homework/page/" + index, {
        homeworkId: homeworkId,
        homeworkTitle: homeworkTitle,
    });

export const getPageCount = (homeworkId, homeworkTitle) =>
    axios.get("/teacher/homework/page/count", {
        homeworkId: homeworkId,
        homeworkTitle: homeworkTitle,
    });

export const pageSize = 7;