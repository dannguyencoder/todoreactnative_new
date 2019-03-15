import React, {Component} from 'react';
import {View, Text} from 'react-native';

class TaskItem extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.itemData.taskName}</Text>
                <Text>{this.props.itemData.taskDesc}</Text>
                <Text>Status: {this.props.itemData.completed.toString()}</Text>
            </View>
        );
    }
}

export default TaskItem;