import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import styles from './style';

class SaladScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (

            <View style={styles.container}>
                <Text>Soap</Text>
            </View>
        );
    }
}
export default SaladScreen;