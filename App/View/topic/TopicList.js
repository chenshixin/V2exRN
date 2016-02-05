'use strict';

//主题列表
import React, {
    Component,
    StyleSheet,
    Text,
    View,
    ListView,
    ToolbarAndroid,
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
        var url;
        if (this.props.nodeId === 'hot') {
            url = DataRepository.API_HOT_TOPICS;
        } else if (this.props.nodeId === 'latest') {
            url = DataRepository.API_LATEST_TOPICS;
        } else {
            url = `${ DataRepository.API_NODE_TOPICS }?node_id=${ this.props.nodeId }`;
        }
        this.fetchData(url);
    },

    fetchData: function (url) {
        repository.baseFetch(url, (responseJson)=> {
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
            var isNotAlone = this.props.nodeId === 'hot' || this.props.nodeId === 'latest';
            if (isNotAlone) {
                return this.renderListView();
            } else {
                return (
                    <View style={styles.topicContainer}>
                        <ToolbarAndroid
                            title={this.props.title}
                            titleColor="#FFFFFF"
                            style={styles.toolbar}/>
                        {this.renderListView()}
                    </View>
                );
            }

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
        )
    },

    selectTopic: function (topic) {
        this.props.navigator.push({
            title: topic.title,
            name: 'topic',
            topic: topic,
        });
    }

});

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#3F51b5',
        height: 56,
    },
    topicContainer: {
        flex: 1,
    },
    listView: {
        flex: 1,
    }
});

module.exports = TopicList;
