import request from '@/utils/request.js'

export default{
    getBanner(){
        return request({
            url:`/admin/banner/get`,
            method: 'get'
        })
    },
    delete(url){
        return request({
            url:`/tools/oss/delete`,
            method: 'delete',
            params: {url}
        })
    },
    update(banner){
        return request({
            url:`/admin/banner/update`,
            method: 'put',
            data: banner
        })
    },
}