// 用户模块
import request from '@/http/service.js'

export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data,
  })
}

export function getInfo(params) {
  return request({
    url: '/api/user/info',
    method: 'get',
    params,
  })
}

export function logout(data) {
  return request({
    url: '/api/user/logout',
    method: 'post',
    data,
  })
}