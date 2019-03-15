import React, {Component} from 'react';
import { Text, View, FlatList } from 'react-native';
import TaskItem from "./TaskItem";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Home of Tasks</Text>

                <FlatList
                    data={this.props.tasks}
                    renderItem={({item}) => <TaskItem itemData={item}/>}
                />
            </View>
        );
    }
}

export default Home;