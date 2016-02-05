/**
 * Created by chenshixin on 16/2/5.
 */
'use strict';

import React, {
    Component,
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

var DateUtil = require('../../Util/DateUtil');

class NodeItem extends Component {
    render() {
        var node = this.props.node;
        var time = DateUtil.formatterToFromNow(node.created);
        return (
            <TouchableHighlight onPress={this.props.onSelect}
                                style={styles.container}
                                underlayColor={'#d2f5ff'}>
                <View>
                    <Text style={styles.name}>{node.name}</Text>
                    <Text style={styles.title_alternative}>{node.title_alternative}</Text>
                    <Text style={styles.modifiedTime}>{time}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        padding: 12,
        marginLeft: 6,
        marginTop: 6,
        marginBottom: 6,
        marginRight: 6,
    },
    name: {
        flex: 1,
        height: 20,
        fontWeight: 'bold',
        fontSize: 14,
    },
    title_alternative: {
        flex: 1,
        height: 50,
        fontSize: 12,
        alignItems: 'center',
    },
    modifiedTime: {
        fontSize: 12,
    }
});

module.exports = NodeItem;
