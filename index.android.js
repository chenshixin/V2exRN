/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    View,
    Navigator,
    BackAndroid,
} from 'react-native';

var TopicView = require('./App/View/Topic/TopicView');
var MainScreen = require('./App/View/Main/MainScreen');
var TopicList = require('./App/View/Topic/TopicList');

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', function () {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});


class V2exRN extends Component {

    static routeMapper(route, navigator) {
        _navigator = navigator;
        var result;
        switch (route.name) {
            case 'main':
                result = (<MainScreen navigator={navigator}/>);
                break;
            case 'node':
                result = (<TopicList navigator={navigator} nodeId={route.nodeId} title={route.title}/>);
                break;
            case 'topic':
                result = (
                    <View style={styles.container}>
                        <TopicView navigator={navigator} topic={route.topic} title={route.title}/>
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
                initialRoute={{name: 'main'}}
                configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                renderScene={(route, navigator) => V2exRN.routeMapper(route, navigator)}
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
