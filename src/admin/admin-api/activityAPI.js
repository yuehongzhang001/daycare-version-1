import request from '@/utils/request.js'

export default{
    queryPage(limit,pageNum,condition){

        return request({
            url:`/admin/activity/list/${limit}/${pageNum}`,
            method: 'post',
            data: condition
        })
    },
    
}