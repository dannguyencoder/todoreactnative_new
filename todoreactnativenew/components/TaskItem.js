import React, {Component} from 'react';
import {View, Text, Button, TouchableWithoutFeedback} from 'react-native';

class TaskItem extends Component {
    reverseStateAndNavigateToHome = function () {
        const id = this.props.itemData.id;
        this.props.reverseStateOfTaskAndNavigateToHome(id);
    };

    render() {


        return (
            <View>
                {/* <TouchableWithoutFeedback onClick={this.showDetail}> */}
                    <Text>{this.props.itemData.taskName}</Text>
                    <Text>{this.props.itemData.taskDesc}</Text>
                    <Text>Status: {this.props.itemData.completed && this.props.itemData.completed.toString()}</Text>
                {/* </TouchableWithoutFeedback> */}


                <Button
                        onPress={this.reverseStateAndNavigateToHome}
                        title={this.props.itemData.completed ? "Undone This" : "Done this"}
                        color="#841584"
                        accessibilityLabel={this.props.itemData.completed ? "Undone This" : "Done this"}
                />



            </View>
        );
    }
}

export default TaskItem;