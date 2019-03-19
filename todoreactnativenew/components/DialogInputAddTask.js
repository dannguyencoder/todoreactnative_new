import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Button, TextInput, View, Modal} from "react-native";
import {createTask} from '../action/taskAction'

class DialogInputAddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: 'Useless taskName',
            taskDesc: 'Useless taskDesc'
        };
    }

    addTask = () => {
        console.log("FFSFSF");

        const {taskName, taskDesc} = this.state;
        this.props.createTask({taskName, taskDesc});
        this.props.onClose && this.props.onClose();
    };

    render() {
        const {
            isVisible
        } = this.props;
        return (
                <Modal
                    transparent
                    visible={isVisible}
                >
                <View
                    style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ width: '90%', padding: 10, backgroundColor: 'white', borderRadius: 5 }}>
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(textTaskName) => this.setState({taskName: textTaskName})}
                            value={this.state.text}
                        />

                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(textTaskDesc) => this.setState({taskDesc: textTaskDesc})}
                            value={this.state.text}
                        />

                        <Button
                            title="Add Task"
                            color="#841584"
                            onPress={this.addTask}
                            accessibilityLabel="Add more tasks"
                        />
                    </View>

                </View>
                </Modal>

        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (data) => { dispatch(createTask(data)) },
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(DialogInputAddTask)

