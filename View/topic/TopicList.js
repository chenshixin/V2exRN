'use strict';

//热门主题

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

var DataRepository = require('../../DataRepository');
var TopicItem = require('./TopicItem');
var LoadingView = require('../LoadingView');
var repository = new DataRepository();

class TopicList extends Component {

   constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }),
    loaded: false,
    isRefreshing: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    repository.getHotTopics((responseJson)=>{
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson),
          loaded: true,
          isRefreshing: false,
        });
    }, (error) => {
      console.log(error);
    })
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    } else {
      return (
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderTopic}
            style={styles.listView}
          />
      );
    }
  }

  //loading界面
  renderLoadingView() {
    return (
      <LoadingView />
    );
  }

  //主题界面
  renderTopic(topic) {
    return <TopicItem topic={topic} />
  }

}

const styles = StyleSheet.create({
  listView: {
    flex: 1
  }
});

module.exports = TopicList;
