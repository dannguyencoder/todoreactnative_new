import React, {Component} from 'react';
import { Text, View, FlatList } from 'react-native';
import TaskItem from "./TaskItem";

class UndoneTasks extends Component {
    render() {
        return (
            <View>
                <Text>Undone Tasks</Text>

                <FlatList
                    data={this.props.tasks}
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