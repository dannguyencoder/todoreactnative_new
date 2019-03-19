import React, {Component} from 'react';
import Navigation from './Navigation';
import {View, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";

class HomeContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const MNavigation = createAppContainer(Navigation);

        return (
            <MNavigation/>

        );
    }
}

export default HomeContainer;