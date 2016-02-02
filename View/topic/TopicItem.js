'use strict';

//单个主题

var React = require('react-native');

var DividerLine = require('../DividerLine');

//时间插件
var moment = require('moment');
var esLocale = require('moment/locale/zh-cn');
moment.locale('zh-cn');

var {
	StyleSheet,
	View,
	Text,
	Component,
	Image,
} = React;

class TopicItem extends Component {
  render() {
  	var topic = this.props.topic;
  	var thumbnail = "http:" + topic.member.avatar_normal;
  	var title = topic.title;
		if (title.length > 20) {
			title = title.substring(0, 20) + '...';
		}
  	var replies = topic.replies;
  	var nodeName = topic.node.name;
  	var time = topic.last_modified * 1000;
		time = moment(time).fromNow();
    return (
      <View style={styles.container}>
       <Image
       		source={{uri: thumbnail}}
       		style={styles.thumbnail} >
       </Image>
			 <View style={styles.rightContainer} >
			 	<View style={styles.rightLine}>
					<Text style={styles.topicTitle}>{title}</Text>
					<Text style={styles.replies}>{replies}回复</Text>
				</View>
				<View style={styles.rightLine}>
					<Text style={styles.nodeName}>{nodeName}</Text>
					<Text style={styles.modifiedTime}>{time}</Text>
				</View>
			 </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		flexDirection: 'row',
    backgroundColor: '#FFFFFF',
		borderRadius: 4,
		padding: 12,
		marginLeft: 12,
		marginTop:12,
		marginRight: 12,
  },
  thumbnail: {
  	width: 60,
    height: 60,
		marginLeft: 12,
  },
	rightContainer: {
		flex: 1,
		marginLeft: 12,
		height: 60,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	rightLine: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	topicTitle: {
		flex:1,
		fontWeight: 'bold',
		fontSize: 14,
	},
	replies: {
		width:50,
		marginLeft: 12,
	},
	nodeName: {
		fontSize: 12,
	},
	modifiedTime: {
		fontSize: 12,
	}
});

module.exports = TopicItem;
