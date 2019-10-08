import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

import styles from './style';
import MenuImage from '../../../src/components/MenuImage/MenuImage';


class SearchScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Search',
        headerLeft: (
            <MenuImage
                onPress={() => {
                    navigation.openDrawer();
                }}
            />
        )
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View style={styles.container}>
                <Text>Search</Text>
                <Button title="Go To Home Screen"
                    onPress={() => navigation.navigate('Home')} />
            </View>
        );
    }
}
export default SearchScreen;
