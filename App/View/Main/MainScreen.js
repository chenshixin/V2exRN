'use strict';

import React, {
    Component,
    StyleSheet,
    ViewPagerAndroid,
    ToolbarAndroid,
    View,
} from 'react-native';

import { Tab, TabLayout } from 'react-native-android-tablayout';

var TopicList = require('../Topic/TopicList');
var NodeList = require('../Node/NodeList');
const TAB_NAMES = ["热门主题", "最新主题", "节点"];

var MainScreen = React.createClass({

    getInitialState: function () {
        return {
            pagePosition: 0,
            title: 'V2ex'
        }
    },

    render: function () {
        return (
            <View style={styles.main}>
                <ToolbarAndroid
                    title={this.state.title}
                    titleColor="#FFFFFF"
                    style={styles.toolbar}/>
                <View>
                    <TabLayout
                        style={styles.tabLayout}
                        selectedTabIndicatorColor="#FF4081"
                        selectedTab={this.state.pagePosition}
                        onTabSelected={this.setPagePosition}>
                        <Tab name={TAB_NAMES[0]} textColor="#FFFFFF"/>
                        <Tab name={TAB_NAMES[1]} textColor="#FFFFFF"/>
                        <Tab name={TAB_NAMES[2]} textColor="#FFFFFF"/>
                    </TabLayout>
                </View>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    ref={viewPager => { this.viewPager = viewPager; }}
                    onPageSelected={this.setPagePosition}>
                    <View style={styles.container}>
                        <TopicList navigator={this.props.navigator} nodeId={'hot'}/>
                    </View>
                    <View style={styles.container}>
                        <TopicList navigator={this.props.navigator} nodeId={'latest'}/>
                    </View>
                    <View style={styles.container}>
                        <NodeList navigator={this.props.navigator}/>
                    </View>
                </ViewPagerAndroid>
            </View>
        );
    },

    setPagePosition(e:Event) {
        const pagePosition = e.nativeEvent.position;
        this.setState({pagePosition});
        this.viewPager.setPage(pagePosition);
        this.setState({title: TAB_NAMES[pagePosition]});
    }


});

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column'
    },
    toolbar: {
        backgroundColor: '#3F51b5',
        height: 56,
    },
    tabLayout: {
        height: 40,
        backgroundColor: '#3F51B5',
    },
    viewPager: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F7F7F7',
    }
});

module.exports = MainScreen;
