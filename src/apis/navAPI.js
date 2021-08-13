import request from '@/utils/request.js'

export default{
    getNav(submenLimit){
        return request({
            url:`/daycare/nav/get/${submenLimit}`,
            method: 'get'
        })
    }
}