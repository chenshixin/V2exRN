'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    ToolbarAndroid,
} from 'react-native';

var LoadingView = require('../Common/LoadingView');
var ReplyList = require('../Reply/ReplyList');
var HTMLText = require('../../Util/HTMLText');
var DividerLine = require('../Common/DividerLine');
var DateUtil = require('../../Util/DateUtil');


var TopicView = React.createClass({

    render: function () {
        var topic = this.props.topic;
        var authorAvatarUri = "http:" + topic.member.avatar_mini;
        var time = DateUtil.formatterToFromNow(topic.last_modified);
        return (
            <ScrollView style={styles.container}>
                <ToolbarAndroid
                    title={this.props.title}
                    titleColor="#FFFFFF"
                    style={styles.toolbar}/>
                <View style={styles.topView}>
                    <View style={styles.topicInfo}>
                        <Image source={{uri: authorAvatarUri}}
                               style={styles.thumbnail}/>
                        <View style={styles.topicInfoCenter}>
                            <View style={styles.topicInfoCenterLine}>
                                <Text style={styles.topUsername}>
                                    {topic.member.username}
                                </Text>
                                <Text style={styles.topNodeInfo}>
                                    > {topic.node.title}
                                </Text>
                            </View>
                            <View style={styles.topicInfoCenterLine}>
                                <Text style={styles.topTime}>
                                    {time}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.topicInfoRepliesCount}>
                            <Text >
                                {topic.replies}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.title}>
                        {topic.title}
                    </Text>
                    <Text style={styles.content}>
                        <HTMLText
                            html={topic.content_rendered}/>
                    </Text>
                </View>
                <DividerLine />
                <ReplyList topicId={topic.id}/>
            </ScrollView>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    topicInfo: {
        flex: 1,
        flexDirection: 'row',
    },
    thumbnail: {
        height: 40,
        width: 40,
    },
    topicInfoCenterLine: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    topicInfoCenter: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        marginLeft: 5,
    },
    topicInfoRepliesCount: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    topView: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    topTime: {
        fontSize: 12,
        color: '#BDBDBD',
    },
    topUsername: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    topNodeInfo: {
        color: '388E3C',
        marginLeft: 10,
    },
    contentWrapper: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    content: {
        marginTop: 10,
        fontSize: 14,
    },
    toolbar: {
        backgroundColor: '#3F51b5',
        height: 56,
    },
});

module.exports = TopicView;
