import request from '@/utils/request.js'

export default{
    getNews(news_id){
        return request({
            url: `/daycare/news/getNews/${news_id}`,
            method: 'get'
        })
    },
    getNewsList(num){
        return request({
            url: `/daycare/news/getNewsList/${num}`,
            method: 'get'
        })
    }
}