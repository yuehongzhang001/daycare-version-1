import request from '@/utils/request.js'

export default{
    get(datePrefix){
        return request({
            url: `/daycare/event/get/${datePrefix}`,
            method: 'get'
        })
    },
    getComingEvent(){
        return request({
            url: `/daycare/event/getComingEvent`,
            method: 'get'
        })
    }

}