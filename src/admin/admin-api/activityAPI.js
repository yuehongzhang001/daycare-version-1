import request from '@/utils/request.js'

export default{
    queryPage(limit,pageNum,condition){

        return request({
            url:`/admin/activity/list/${limit}/${pageNum}`,
            method: 'post',
            data: condition
        })
    },
    deleteById(activityId){
        return request({
            url:`/admin/activity/delete/${activityId}`,
            method: 'delete'
        })
    },
    save(activity){
        return request({
            url:`/admin/activity/save`,
            method: 'post',
            data: activity
        })
    },
    update(activity){
        return request({
            url:`/admin/activity/update`,
            method: 'put',
            data: activity
        })
    },
    discard(activityId){
        return request({
            url:`/admin/activity/discard/${activityId}`,
            method: 'delete'
        })
    },
    getActivity(activityId){
        return request({
            url:`/admin/activity/get/${activityId}`,
            method: 'get'
        })
    },
    
}