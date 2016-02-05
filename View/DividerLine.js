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
        return (
            <View style={styles.line}/>
        );
    }

}

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#D8D8D8',
        height: 0.5
    },
});

module.exports = TopicItem;
