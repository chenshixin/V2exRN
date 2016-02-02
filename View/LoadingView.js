'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//加载中View
class LoadingView extends Component {

	render() {
    return (
  		<View style={styles.container}>
          <Text>
            正在加载...
          </Text>
       </View>
     );
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = LoadingView;
