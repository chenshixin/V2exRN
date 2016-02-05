/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Navigator,

    BackAndroid,
} from 'react-native';

var TopicList = require('./App/View/topic/TopicList');
var TopicView = require('./App/View/topic/TopicView');

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', function () {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
})


class V2exRN extends Component {

    routeMapper(route, navigator) {
        _navigator = navigator;
        var result;
        switch (route.name) {
            case 'topicList':
                result = (
                    <View style={styles.container}>
                        <TopicList navigator={navigator}/>
                    </View>
                );
                break;
            case 'topic':
                result = (
                    <View style={styles.container}>
                        <TopicView navigator={navigator} topic={route.topic}/>
                    </View>
                );
                break;
            default:
                break;
        }
        return result;
    }

    render() {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{name: 'topicList'}}
                configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                renderScene={(route, navigator) => this.routeMapper(route, navigator)}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F7F7F7',
    }
});

AppRegistry.registerComponent('V2exRN', () => V2exRN);
