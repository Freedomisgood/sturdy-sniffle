import axios from "axios"

// 创建axios实例
const requests = axios.create({
    // baseURL: "http://devops4.sucsoft.com:30383/api/v1", // api的base_url
    baseURL: "http://192.168.31.172:5501/api/v1",
    timeout: 5000 // 请求超时时间
})


requests.URLs = {
    generate: requests.defaults.baseURL + "/generate",
    options: requests.defaults.baseURL + "/options",
}

export default requests
