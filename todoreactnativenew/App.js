import React, {Component} from 'react';
import HomeContainer from "./components/HomeContainer";
import {View, Text} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import taskReducer from './reducer/index'

const store = createStore(taskReducer);
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HomeContainer/>
            </Provider>

        )
    }
}

export default App;
