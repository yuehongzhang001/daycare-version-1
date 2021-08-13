import request from '@/utils/request.js'

export default{
    save(pic){

        return request({
            url:`/admin/picture/save`,
            method: 'post',
            data: pic
        })
    },
    getPicList(activityId){
        return request({
            url:`/admin/picture/list/${activityId}`,
            method: 'get',
        })
    },
    
    delete(picId){
        return request({
            url:`/admin/picture/delete/${picId}`,
            method: 'delete',
        })
    },
    update(picture){
        return request({
            url:`/admin/picture/update`,
            method: 'post',
            data:picture
        })
    },
    /**
     * oss method, batchDelete files on oss
     * @param {*} picId 
     * @returns 
     */
     deletePicOnOss(url){
        return request({
            url:`/tools/oss/delete`,
            method: 'delete',
            params: {url}
        })
    },
    batchDelete(list){
        return request({
            url:`/tools/oss/batchDelete`,
            method: 'delete',
            data:list
        })
    },
    
}