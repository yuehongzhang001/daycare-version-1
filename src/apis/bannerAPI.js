import request from '@/utils/request.js'

export default{
    getBanner(){
    
        return request({
            url:`/daycare/banner/get`,
            method: 'get'
        })
    },
    

}