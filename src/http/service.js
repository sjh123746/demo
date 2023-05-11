import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'

function errorTips(err) {
  Message({
    message: err.message || '请求失败',
    type: 'error',
    duration: 3000,
  })
}
/*************************** 全局默认配置 ************************************/
// // post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// // 请求超时时间
// axios.defaults.timeout = 5000
// // 允许携带cookie
// axios.defaults.withCredentials = true
// // 完整url = base url + request url
// axios.defaults.baseURL = process.env.VUE_APP_BASE_API

/*************************** 实例默认配置 （多服务可创建多个实例）************************************/
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: process.env.NODE_ENV === 'production' ? './' : '/', // 如果前端和后端服务在同服务器环境下可这样配置
  timeout: 5000,
  withCredentials: true,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
  },
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // 可在此配置 loading 加载动画

    const token = store.state.user.token
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    // 可在此配置 loading 加载结束

    const res = response.data
    if (res.code !== 0) {
      errorTips(res)
      if (res.code === 401 || res.code === 403 || res.code === 404) {
        MessageBox.confirm('登录超时，请重新登录', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误'
          break
        case 401: {
          error.message = '未授权，请登录'
          const router = this.$router
          router.replace({
            path: 'login',
            query: {
              redirect: router.currentRoute.path,
            },
          })
          break
        }
        case 403:
          error.message = '没有权限，拒绝访问'
          break
        case 404:
          error.message = `请求地址出错`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
    }
    errorTips(error)
    return Promise.reject(error)
  }
)

export default service
