'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    WebView,
    ListView,
} from 'react-native';

var DataRepository = require('../../Util/DataRepository');
var LoadingView = require('../Common/LoadingView');
var ReplyItem = require('./ReplyItem');
var repository = new DataRepository();

var ReplyList = React.createClass({

    getInitialState: function () {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    },

    componentDidMount: function () {
        this.fetchData();
    },

    fetchData: function () {
        repository.getReplies(this.props.topicId, (responseJson)=> {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseJson),
            });
        }, (error) => {
            console.log(error);
        })
    },

    render: function () {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderReply}
                style={styles.listView}
            />
        )
    },

    renderReply: function (reply) {
        return (
            <ReplyItem reply={reply}/>
        )
    }

});

const styles = StyleSheet.create({
    listView: {
        flex: 1,
    }
});

module.exports = ReplyList;
