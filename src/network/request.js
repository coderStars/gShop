import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


export default function request(config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
  })

  instance.interceptors.request.use(config => {
    NProgress.start();
    return config
  })

  instance.interceptors.response.use(response => {
    NProgress.done();
    return response.data
  }, err => {
    NProgress.done();
    alert(err.message || '未知错误！！')
    return new Promise(() => {})
  })

  return instance(config)
}