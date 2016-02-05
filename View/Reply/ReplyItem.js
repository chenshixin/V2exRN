'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

var DividerLine = require('../DividerLine');
var DateUtil = require('../util/DateUtil');

var ReplyItem = React.createClass({

    render: function () {
        var reply = this.props.reply;
        var avatar = "http:" + reply.member.avatar_mini;
        var username = reply.member.username;
        var time = DateUtil.formatterToFromNow(reply.last_modified);
        var content = reply.content;
        return (
            <View style={styles.container}>
                <DividerLine />
                <View style={styles.replyContainer}>
                    <Image
                        source={{uri: avatar}}
                        style={styles.thumbnail}>
                    </Image>
                    <View style={styles.rightContainer}>
                        <View style={styles.rightLineUser}>
                            <Text style={styles.username}>{username}</Text>
                            <Text style={styles.time}>{time}</Text>
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={styles.contentText}>{content}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    },

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    replyContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    thumbnail: {
        width: 30,
        height: 30,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
    },
    rightLineUser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 12,
        marginLeft: 8,
        color: '#BDBDBD',
    },
    contentContainer: {
        flex: 1,
        marginTop: 5,
    },
    contentText: {
        flex: 1,

    },
});

module.exports = ReplyItem;
