import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import DoneTasks from "./DoneTasks";
import UndoneTasks from "./UndoneTasks";
import Home from "./Home";

var state = {
    tasks: [
        {
            id: 1,
            taskName: "Task test 1 undone",
            taskDesc: "Task 1 description",
            completed: false
        },
        {
            id: 2,
            taskName: "Task test 2 undone",
            taskDesc: "Task 2 description",
            completed: false
        },
        {
            id: 3,
            taskName: "Task test 3 undone",
            taskDesc: "Task 4 description",
            completed: false
        },
        {
            id: 4,
            taskName: "Task test 4 done",
            taskDesc: "Task 4 description",
            completed: true
        },
        {
            id: 5,
            taskName: "Task test 5 done",
            taskDesc: "Task 5 description",
            completed: true
        },
        {
            id: 6,
            taskName: "Task test 6 done",
            taskDesc: "Task 6 description",
            completed: true
        }
    ]
};

class HomeScreen extends React.Component {
    render() {
        return (
            <Home taskData={state}/>
        );
    }
}

class DoneScreen extends React.Component {
    render() {
        return (
            <DoneTasks taskData={state}/>
        );
    }
}

class UndoneScreen extends React.Component {
    render() {
        return (
            <UndoneTasks taskData={state}/>
        );
    }
}

var reverseStateOfTask = function () {

}

const Navigation = createBottomTabNavigator(
    {
        Done: DoneScreen,
        Home: HomeScreen,
        Undone: UndoneScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default Navigation;