import Config from "@/common/config";
import axios from "axios";
import ElementUI from "element-ui";

export const vueInstance = {
    instance: null,
    store: null
};

const axiosInstance = axios.create({
    baseURL: Config.serverUrl,
    timeout: 30000,
    withCredentials: true
});

let runningRequest = 0;

function addRequestCount() {
    runningRequest++;
    if (runningRequest > 0 && vueInstance.store != null) {
        vueInstance.store.state.loading = true;
    }
}

function subtractRequestCount() {
    runningRequest--;
    if (runningRequest <= 0 && vueInstance.store != null) {
        vueInstance.store.state.loading = false;
    }
}

function innerMessage(type, message) {
    ElementUI.Message({
        showClose: true,
        duration: 2000,
        message: message,
        type: type
    });
}

axiosInstance.interceptors.response.use(
    response => {
        let data = response.data.data;
        subtractRequestCount();
        return data;
    },
    error => {
        let code = error.response.data.code;
        let message = error.response.data.message;
        let data = error.response.data.data;
        subtractRequestCount();

        switch (code) {
            case -1: {
                innerMessage("info", "需要登陆");
                setTimeout(() => (window.location.href = "/login"), 250);
                return Promise.reject(new Error("NOT_LOGGED_IN"));
            }

            case 1: {
                innerMessage("error", "错误: " + message);
                return Promise.reject(new Error("FAIL"));
            }

            case 2: {
                innerMessage("info", "您不是此角色");
                setTimeout(() => (window.location.href = "/login"), 250);
                return Promise.reject(new Error("ROLE_ERROR"));
            }

            case 3: {
                let errorMessage = "请求参数错误";
                if (data.length > 0) {
                    errorMessage = "参数错误: " + data[0].message;
                }
                innerMessage("error", errorMessage);
                return Promise.reject(new Error("INVALID_PARAMETER"));
            }

            case 4: {
                innerMessage("error", "内部服务器错误");
                return Promise.reject(new Error("INTERNAL_SERVER_ERROR"));
            }
        }

        if (typeof error.response === "undefined") {
            innerMessage("error", "与后端服务器通信失败");
            vueInstance.instance.$router.push({name: "login"});
        } else if (error.response.status >= 400) {
            innerMessage("error", "HTTP错误: " + error.response.status);
        }

        return Promise.reject(error);
    }
)

const dataHandle = response => {
    return response;
};

const innerGet = function () {
    addRequestCount();
    return axiosInstance.get.apply(this, arguments).then(dataHandle);
};

const innerPost = function () {
    addRequestCount();
    return axiosInstance.post.apply(this, arguments).then(dataHandle);
};

const innerDelete = function () {
    addRequestCount();
    return axiosInstance.delete.apply(this, arguments).then(dataHandle);
};

const innerPut = function () {
    addRequestCount();
    return axiosInstance.put.apply(this, arguments).then(dataHandle);
};

export const pureGet = function (url) {
    return innerGet(url);
};

export const pureDelete = function (url) {
    return innerDelete(url);
};

export const get = function (url, params) {
    return innerGet(url, {
        params: params
    });
};

export const post = function (url, data) {
    return innerPost(url, data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
};

export const del = function (url, params) {
    return innerDelete(url, {
        params: params
    });
};

export const put = function (url, data) {
    return innerPut(url, data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
};