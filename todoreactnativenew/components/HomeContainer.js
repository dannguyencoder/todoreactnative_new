import React, {Component} from 'react';
import Navigation from './Navigation';
import {View, Text} from 'react-native';

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    taskName: "Task test 1",
                    taskDesc: "Task 1 description",
                    completed: false
                },
                {
                    taskName: "Task test 1",
                    taskDesc: "Task 1 description",
                    completed: false
                },
                {
                    taskName: "Task test 1",
                    taskDesc: "Task 1 description",
                    completed: false
                }
            ]
        }
    }

    render() {

        return (
            <View>
                {/*<Text>{this.state.tasks.toString()}</Text>*/}
                <Navigation taskData={this.state.tasks}/>
            </View>

        );
    }
}

export default HomeContainer;