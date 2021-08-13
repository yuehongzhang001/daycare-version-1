import request from '@/utils/request.js'

export default{
    getActivityAndPics(activity_id){
        console.log("getActivityAndPics")
        return request({
            url:`/daycare/activity/getActivityAndPics/${activity_id}`,
            method: 'get'
        })
    },
    getActivityList(limit){
        return request({
            url:`/daycare/activity/getActivityList/${limit}`,
            method: 'get'
        })
    }
}