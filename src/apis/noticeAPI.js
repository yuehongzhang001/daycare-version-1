import request from '@/utils/request.js'

export default{
    get(){
        return request({
            url: `/daycare/notice/getNoticeContent`,
            method: 'get'
        })
    },

}