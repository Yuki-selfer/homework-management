import {post, pureGet} from "@/common/myAxios";

export const login = (userId, password, userType) => post("/user/login", {
    userId: userId,
    password: password,
    userType: userType
});

export const register = (userId, username, password, userType) => post("/user/register", {
    userId: userId,
    username: username,
    password: password,
    userType: userType
})

export const getLoginStatus = () => pureGet("/user/login/status");

export const logout = () => pureGet("/user/logout");