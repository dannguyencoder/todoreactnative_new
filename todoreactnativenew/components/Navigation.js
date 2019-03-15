import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from "./Home";
import DoneTasks from "./DoneTasks";
import UndoneTasks from "./UndoneTasks";
import * as Alert from "react-native";

class HomeScreen extends React.Component {
    render() {
        console.log(this.props.taskData);
        return (
            <Home tasks={this.props.taskData}/>
        );
    }
}

class DoneScreen extends React.Component {
    render() {
        return (
            <DoneTasks tasks={this.props.taskData}/>
        );
    }
}

class UndoneScreen extends React.Component {
    render() {
        return (
            <UndoneTasks tasks={this.props.taskData}/>
        );
    }
}

const Navigation = createBottomTabNavigator({
    Undone: { screen: UndoneScreen },
    Home: { screen: HomeScreen },
    Done: { screen: DoneScreen }

});

export default createAppContainer(Navigation);