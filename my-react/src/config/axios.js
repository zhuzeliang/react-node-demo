import axios from 'axios';

// 超时时间
axios.defaults.timeout = 5000


// 拦截请求
axios.interceptors.request.use(function(config) {
    let token = localStorage.getItem("token");
    if (token) {
        config.headers["x-access-token"] = token
    }
    return config
}, function(error) {
    return Promise.reject(error);
})

// 拦截相应

axios.interceptors.response.use(function(config) {
    return config
}, function(error) {

    return Promise.reject(error);
});