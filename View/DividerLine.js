'use strict';

//单个主题

var React = require('react-native');

var {
	StyleSheet,
	View,
	Component,
} = React;

class TopicItem extends Component {

  render() {
    return(
      <View style={styles.line} />
    );
  }

}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    backgroundColor: '#D8D8D8',
		height: 1
  },
});

module.exports = TopicItem;
