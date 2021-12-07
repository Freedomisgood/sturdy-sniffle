import axios from "axios"

// 创建axios实例
const requests = axios.create({
  baseURL: "http://127.0.0.1:5501/api/v1", // api的base_url
  timeout: 5000 // 请求超时时间
})

export default requests
