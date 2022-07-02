import axios from 'axios';
import Qs from "qs"
const timeout = 30000;
const csrfToken = 'YXBpOnBhc3N3b3Jk';

// 支持跨域请求
axios.defaults.withCredentials = true

// 拦截request,设置全局请求为ajax请求
axios.interceptors.request.use((config) => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config
})

function validResult(response) {
    return new Promise((resolve, reject) => {
        return response.then(res => {
            if (res.status == 200) {
                resolve(res.data);
            } else {
                reject({
                    code: res.status,
                    msg: res.statusText,
                    data: res.data
                });
            }
        });
    })
}

function addRandom(url) {
    if (!url || url.length <= 0) {
        return url;
    }

    let randNum = Math.random();
    if (url.indexOf('?') !== -1) {
        url += '&_r=' + randNum;
    } else {
        url += '?_r=' + randNum;
    }

    return url;
}

/**
 *
 * @param method 请求类型
 * @param url 请求url
 * @param params 请求参数
 * @param header 请求头
 * @param option 自定义option
 * @returns {Promise<never>|Promise<unknown>}
 */
export function request(method, url, params, header, option) {
    // token
    if (window._token) {
        params = Object.assign({}, params, {'_token': window._token});
    }
    // 随机数
    url = addRandom(url);

    if (method.toLowerCase() === 'get') {
        return validResult(get(url, params, header, option));
    } else if (method.toLowerCase() === 'post') {
        return validResult(post(url, params, header, option));
    }

    // new Error("不支持该请求类型: " + method)
    let err = {
        retcode: -1,
        msg: "不支持该请求类型: " + method,
        data: [],
    };
    return Promise.reject(err);
}

export function get(url, params, header, option) {
    let options = Object.assign({}, {timeout: timeout, 'X-CSRF-TOKEN': csrfToken}, option);
    if (header) {
        options.header = Object.assign({}, options, header);
    }
    if (params) {
        options.params = Object.assign({}, params);
    }

    return axios.get(url, options);
}

export function post(url, params, header, option) {
    let options = Object.assign({}, {timeout: timeout, 'X-CSRF-TOKEN': csrfToken}, option);
    if (header) {
        options.headers = Object.assign({}, options, header);
    }
    if (params) {
        options.data = Object.assign({}, params);
    }
    options.url = url;
    options.method = "post";
    options.async = options.async || true
    options.transformRequest = [
        (data, headers) => {
            // Do whatever you want to transform the data
            return Qs.stringify(params);
        }
    ];

    return axios(options);
}
