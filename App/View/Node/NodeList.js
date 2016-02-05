/**
 * Created by chenshixin on 16/2/5.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    ToolbarAndroid,
    View,
    ListView,
} from 'react-native';


var DataRepository = require('../../Util/DataRepository');
var LoadingView = require('../Common/LoadingView');
var NodeItem = require('./NodeItem');
var repository = new DataRepository();

var NodeList = React.createClass({

    getInitialState: function () {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            isRefreshing: true,
        };
    },

    componentDidMount: function () {
        this.fetchData();
    },

    fetchData: function () {
        repository.getAllNodes((responseJson)=> {
            var items = this.createGroup(responseJson, 3);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items),
                loaded: true,
                isRefreshing: false,
            });
        }, (error) => {
            console.log(error);
        });
    },

    render: function () {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        } else {
            return this.renderListView();
        }
    },

    //loading界面
    renderLoadingView: function () {
        return (
            <LoadingView />
        );
    },

    renderListView: function () {
        return (
            <ListView
                initialListSize={30}
                dataSource={this.state.dataSource}
                renderRow={this.renderLine}
                style={styles.listView}
            />
        );
    },

    renderLine: function (group) {
        var self = this;
        var items = group.map(function (node) {
            return self.renderNode(node);
        });
        return (
            <View style={styles.itemLine}>
                {items}
            </View>
        );
    },

    renderNode: function (node) {
        return (
            <NodeItem key={node.id}
                      node={node}
                      onSelect={() => this.selectNode(node)}
            />
        );
    },

    selectNode: function (node) {
        this.props.navigator.push({
            title: node.name,
            name: 'node',
            nodeId: node.id,
        });
    },

    createGroup: function (items, itemsPerRow) {
        var group = [];
        var itemGroups = [];

        items.forEach(function (item) {
            if (group.length === itemsPerRow) {
                itemGroups.push(group);
                group = [item];
            } else {
                group.push(item);
            }
        });

        if (group.length > 0) {
            itemGroups.push(group);
        }

        return itemGroups;
    },
});

const styles = StyleSheet.create({
    listView: {
        flex: 1,
    },
    itemLine: {
        flexDirection: 'row',
    }
});

module.exports = NodeList;