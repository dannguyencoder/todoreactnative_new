import React, {Component} from 'react';
import { Text, View, FlatList } from 'react-native';
import TaskItem from "./TaskItem";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.tasks);
        // console.log(this.props.taskData);
        // alert(this.props.tasks);
        // alert(this.props.taskData);
        return (
            <View>
                <Text>Home of Tasks</Text>

                <FlatList
                    data={this.props.taskData}
                    renderItem={({item}) => <TaskItem itemData={item}/>}
                />
            </View>
        );
    }
}

export default Home;