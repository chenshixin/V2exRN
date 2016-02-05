'use strict';

const HOST = "https://www.v2ex.com/api/";

class DataRepository {

    //最热主题
    static API_HOT_TOPICS = HOST + "topics/hot.json";

    //最新主题
    static API_LATEST_TOPICS = HOST + "topics/latest.json";

    //某节点下的主题
    static API_NODE_TOPICS = HOST + "topics/show.json";

    //用户主页
    static API_MEMBER = HOST + "members/show.json";

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

    /**
     * 获取所有节点信息
     * @param onSucceed
     * @param onFailed
     */
    getAllNodes(onSucceed, onFailed) {
        this.baseFetch(HOST + "nodes/all.json", onSucceed, onFailed);
    }

    /**
     * 获取某主题的评论
     * @param topicId 主题id
     * @param onSucceed
     * @param onFailed
     */
    getReplies(topicId, onSucceed, onFailed) {
        this.baseFetch(HOST + 'replies/show.json?topic_id=' + topicId, onSucceed, onFailed);
    }

}

module.exports = DataRepository;
