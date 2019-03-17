import React, {Component} from 'react';
import { Text, View, FlatList } from 'react-native';
import TaskItem from "./TaskItem";

class UndoneTasks extends Component {

    reverseStateOfTaskAndNavigateToHome = function(id) {

    };

    render() {
        return (
            <View>
                <Text>Undone Tasks</Text>

                <FlatList
                    data={this.props.taskData.tasks}
                    renderItem={({item}) => {
                        if (item.completed === false) {
                            return <TaskItem itemData={item}/>;
                        }
                    }}
                />
            </View>
        );
    }
}

export default UndoneTasks;