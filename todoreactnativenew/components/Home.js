import React, {Component} from 'react';
import { Text, View, FlatList, Button, Modal, ScrollView } from 'react-native';
import TaskItem from "./TaskItem";
import DialogInputAddTask from "./DialogInputAddTask";
import {connect} from 'react-redux';

class Home extends Component {
    // showDialog = function() {
    //     this.setState({showTheThing: !showTheThing})
    // };

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            taskData: [],
        };
    }

    reverseStateOfTask = function(id) {

    };

    componentWillReceiveProps (nextProps) {
        const { list } = nextProps;
        this.setState({ taskData: list });
    }

    showDialog = () => {
        this.setState({ isVisible: true })
    }

    render() {
        const { taskData } = this.state;

        // const { navigation } = this.props;
        // const taskData = navigation.getParam('taskData', 'No data');
        // alert(taskData);

        // console.log(this.props.tasks);
        // console.log(this.props.taskData);
        // alert(this.props.tasks);
        // alert(this.props.taskData.tasks);
        return (
            <View style={{ flex: 1 }}>
                <Text>Home of Tasks</Text>
                <ScrollView>
                    <FlatList
                        data={taskData}
                        renderItem={({item}) => <TaskItem itemData={item}/>}
                    />
                    <Button
                        onPress={this.showDialog}
                        title="+"
                        color="#841584"
                        accessibilityLabel="Add more tasks"
                    />
                </ScrollView>
                <DialogInputAddTask
                    isVisible={this.state.isVisible}
                    onClose={() => this.setState({ isVisible: false }) }
                />
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//
// });
const mapStateToProps = state => {
    console.log("Stateee", state);

    return {
        list: state.taskReducer.listTask
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)