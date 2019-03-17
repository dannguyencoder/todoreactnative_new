import React, {Component} from 'react';
import {Button, TextInput, View} from "react-native";

class DialogInputAddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: 'Useless taskName',
            taskDesc: 'Useless taskDesc'
        };
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({taskName})}
                    value={this.state.text}
                />

                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({taskDesc})}
                    value={this.state.text}
                />

                <Button
                    title="Add Task"
                    color="#841584"
                    accessibilityLabel="Add more tasks"
                />
            </View>
        );
    }
}

export default DialogInputAddTask;