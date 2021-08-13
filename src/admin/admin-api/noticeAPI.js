import request from '@/utils/request.js'

export default{
    get(){
        return request({
            url: `/admin/notice/get`,
            method: 'get'
        })
    },
    update(noticeVo){
        return request({
            url: `/admin/notice/update`,
            method: 'put',
            data:noticeVo
        })
    },
    

}