import request from '@/utils/request.js'

export default{
    get(datePrefix){
        return request({
            url: `/daycare/event/get/${datePrefix}`,
            method: 'get'
        })
    },
    delete(eventId){
        return request({
            url: `/admin/event/delete/${eventId}`,
            method: 'delete'
        })
    },
    updateCalendarEvent(event){
        return request({
            url: `/admin/event/update`,
            method: 'put',
            data: event
        })
    },
    getEventByDate(dateStr){
        return request({
            url: `/admin/event/getEventByDate/${dateStr}`,
            method: 'get'
        })
    },
    saveEvent(event){
        return request({
            url: `/admin/event/saveEvent`,
            method: 'post',
            data: event
        })
    },
}