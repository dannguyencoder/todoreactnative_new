import React, {Component} from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import TaskItem from "./TaskItem";
import DialogInputAddTask from "./DialogInputAddTask";

class Home extends Component {
    // showDialog = function() {
    //     this.setState({showTheThing: !showTheThing})
    // };

    constructor(props) {
        super(props);
    }

    reverseStateOfTask = function(id) {

    };

    render() {

        // const { navigation } = this.props;
        // const taskData = navigation.getParam('taskData', 'No data');
        // alert(taskData);

        // console.log(this.props.tasks);
        // console.log(this.props.taskData);
        // alert(this.props.tasks);
        alert(this.props.taskData.tasks);
        return (
            <View>
                <Text>Home of Tasks</Text>

                <FlatList
                    data={this.props.taskData.tasks}
                    renderItem={({item}) => <TaskItem itemData={item}/>}
                />

                {/*{ this.state.showTheThing &&*/}
                <DialogInputAddTask/>
                {/*}*/}


                <Button
                    onPress={this.showDialog}
                    title="+"
                    color="#841584"
                    accessibilityLabel="Add more tasks"
                />


            </View>
        );
    }
}

// const styles = StyleSheet.create({
//
// });

export default Home;