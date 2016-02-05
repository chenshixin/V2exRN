'use strict';

//热门主题

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

var DataRepository = require('../../Util/DataRepository');
var TopicItem = require('./TopicItem');
var LoadingView = require('../Common/LoadingView');
var repository = new DataRepository();

var TopicList = React.createClass({

    getInitialState: function () {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            isRefreshing: true,
        };
    },

    componentDidMount: function () {
        this.fetchData();
    },

    fetchData: function () {
        repository.getHotTopics((responseJson)=> {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseJson),
                loaded: true,
                isRefreshing: false,
            });
        }, (error) => {
            console.log(error);
        });
    },

    render: function () {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        } else {
            return this.renderListView();
        }
    },

    //loading界面
    renderLoadingView: function () {
        return (
            <LoadingView />
        );
    },

    renderListView: function () {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderTopic}
                style={styles.listView}
            />
        );
    },

    renderTopic: function (topic) {
        return (
            <TopicItem
                topic={topic}
                onSelect={() => {
                this.selectTopic(topic);
              }}/>
        );
    },

    selectTopic: function (topic) {
        this.props.navigator.push({
            title: topic.title,
            name: 'topic',
            topic: topic,
        });
    },

});

const styles = StyleSheet.create({
    listView: {
        flex: 1,
    }
});

module.exports = TopicList;
