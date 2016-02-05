'use strict';

var HOST = "https://www.v2ex.com/api/";

//最热主题
var API_HOT_TOPICS = HOST + "topics/hot.json";
//最新主题
var API_LASEST_TOPICS = HOST + "topics/latest.json";
//节点信息
var API_NODES = HOST + "nodes/show.json";
//用户主页
var API_MEMBER = HOST + "members/show.json";
//主题回复
var API_TOPIC_REPLIES = HOST + 'replies/show.json';

class DataRepository {

    //将对象转化成uri参数形式
    _obj2uri(obj) {
        return Object.keys(obj).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
        }).join('&');
    }

    baseFetch(url, onSucceed, onFailed) {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                onSucceed(responseJson);
            })
            .catch((error) => {
                onFailed(error);
            })
            .done();
    }

    //获取最热主题
    getHotTopics(onSucceed, onFailed) {
        this.baseFetch(API_HOT_TOPICS, onSucceed, onFailed);
    }

    /**
     * 获取评论
     */
    getReplies(topicId, onSucceed, onFailed) {
        this.baseFetch(API_TOPIC_REPLIES + '?topic_id=' + topicId, onSucceed, onFailed);
    }

}

module.exports = DataRepository;
