import request from '@/utils/request.js'

export default{
    login(loginForm){

        return request({
            url:`/login`,
            method: 'post',
            data: loginForm
        })
    },
    
    checkin(){
        return request({
            url:`/admin/checkin`,
            method: 'get',
        })
    },
}