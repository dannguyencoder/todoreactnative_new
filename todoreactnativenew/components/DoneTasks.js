import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import TaskItem from "./TaskItem";

class DoneTasks extends Component {
    render() {
        return (
            <View>
                <Text>Done Tasks</Text>

                <FlatList
                    data={this.props.taskData}
                    renderItem={({item}) => {
                        if (item.completed === true) {
                            return <TaskItem itemData={item}/>;
                        }
                    }}
                />
            </View>
        );
    }
}

export default DoneTasks;