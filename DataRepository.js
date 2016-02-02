'use strict';


//最热主题
var API_HOT_TOPICS = "https://www.v2ex.com/api/topics/hot.json";
//最新主题
var API_LASEST_TOPICS = "https://www.v2ex.com/api/topics/latest.json";
//节点信息
var API_NODES = "https://www.v2ex.com/api/nodes/show.json";
//用户主页
var API_MEMBER = "https://www.v2ex.com/api/members/show.json";

// Singleton pattern
function DataRepository() {
  if (typeof DataRepository.instance === 'object') {
    return DataRepository.instance;
  }
  DataRepository.instance = this;
}

DataRepository.prototype.getHotTopics = function(onSuccess, onFailed) {
  fetch(API_HOT_TOPICS)
    .then((response) => response.json())
    .then((responseJson) => {
      onSuccess(responseJson);
    })
    .catch((error) => {
      onFailed(error);
    })
    .done();
}

module.exports = DataRepository;
