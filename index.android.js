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
  View
} from 'react-native';

var TopicList = require('./View/topic/TopicList');

class V2exRN extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopicList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    paddingBottom: 20,
    paddingTop: 10,
  }
});

AppRegistry.registerComponent('V2exRN', () => V2exRN);
