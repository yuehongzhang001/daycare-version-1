import axios from 'axios'
import cookie from 'js-cookie'
import {Message} from 'element-ui'

const service = axios.create({
    baseURL: 'http://15.222.62.243:9000',
    timeout: 20000
})

service.interceptors.request.use(config=>{
    //get token from cookie
    if(cookie.get('token')){
        //put token in request header
        config.headers['token'] = cookie.get('token')
        // console.log("interceptors: ",cookie)
    }
    return config
}, error=>{
    return Promise.reject(error)
})
// response 拦截器
service.interceptors.response.use(
    response => {
      /**
       * code为非20000是抛错 可结合自己业务进行修改
       */
      const res = response.data
      // debugger
      if (res.code !== 20000) {
        Message({
          message: res.message,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject('error')
      } else {
        return response
      }
    },
    error => {
      console.log('err' + error) // for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )


export default service