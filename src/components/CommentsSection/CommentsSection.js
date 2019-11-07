import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import styles from './style';

import AsyncStorage from '@react-native-community/async-storage';



class CommentsSection extends Component {

    componentDidMount() {
        this._updateList();
    }

    async _addTask() {
        const listOfTasks = [...this.state.listOfTasks, this.state.text];

        await AsyncStorage.setItem('listOfTasks',
            JSON.stringify(listOfTasks));

        this._updateList();
    }

    async _updateList() {
        let response = await AsyncStorage.getItem('listOfTasks');
        let listOfTasks = await JSON.parse(response) || [];

        this.setState({
            listOfTasks
        });

        this._changeTextInputValue('');
    }

    render() {
        return (

            <View style={styles.container}>
                <Text>CommentsSection</Text>
            </View>
        );
    }
}
export default CommentsSection;