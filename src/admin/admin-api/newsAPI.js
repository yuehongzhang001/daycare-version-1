import request from '@/utils/request.js'

export default{
    queryPage(limit,pageNum,condition){

        return request({
            url:`/admin/news/list/${limit}/${pageNum}`,
            method: 'post',
            data: condition
        })
    },
    deleteById(newsId){
        return request({
            url:`/admin/news/delete/${newsId}`,
            method: 'delete'
        })
    },

    save(newsVo){
        return request({
            url:`/admin/news/save`,
            method: 'post',
            data: newsVo
        })
    },
    update(newsVo){
        return request({
            url:`/admin/news/update`,
            method: 'put',
            data: newsVo
        })
    },
    getNewsVo(newsId){
        return request({
            url:`/admin/news/get/${newsId}`,
            method: 'get',
        })
    },
    deletePicture(url){
        return request({
            url:`/tools/oss/delete`,
            method: 'delete',
            params: {url}
        })
    },
    getNewsPictureUrls(newsId){
        return request({
            url:`/admin/news/getNewsPictureUrls/${newsId}`,
            method: 'get'
        })
    },
    batchDeleteByUrls(urlList){
        return request({
            url:`/tools/oss/batchDeleteByUrls`,
            method: 'delete',
            data:urlList
        })
    }


    


}