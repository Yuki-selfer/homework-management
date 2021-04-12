import * as axios from "@/common/myAxios";
export const getAllUser = () => axios.post("/administrator/manage/allUser");

export const deleteUser = (userId, userType) => axios.post("/administrator/manage/deleteUser",{
    userId:userId,
    userType:userType

});

