import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加token逻辑
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // 处理不同content-type
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data'
    } else {
      config.headers['Content-Type'] = 'application/json'
    }
    
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 统一处理业务状态码
    if (response.data.code !== 200) {
      return Promise.reject(response.data)
    }
    return response.data
  },
  error => {
    // 处理HTTP状态码
    if (error.response?.status === 401) {
      // router.push('/login')
    } else if (error.response?.status === 404) {
      error.message = '接口不存在'
    } else if (error.code === 'ECONNABORTED') {
      error.message = '请求超时'
    }
    return Promise.reject(error)
  }
)

export default service