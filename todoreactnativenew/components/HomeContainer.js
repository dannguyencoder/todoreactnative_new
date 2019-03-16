import React, {Component} from 'react';
import Navigation from './Navigation';
import {View, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";

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
        const Navigation = createAppContainer(Navigation);

        return (

            <Navigation taskData={this.state.tasks}/>


        );
    }
}

export default HomeContainer;