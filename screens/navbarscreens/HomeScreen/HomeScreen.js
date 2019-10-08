import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView
} from "react-native";

import styles from './style';
import MenuImage from '../../../src/components/MenuImage/MenuImage';

/*import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SoupScreen from '../foodscreens/SoupScreen';
import SaladScreen from '../foodscreens/SaladScreen';
import MealScreen from '../foodscreens/MealScreen';
import SweetScreen from '../foodscreens/SweetScreen';

const FoodStackNavigator = createStackNavigator({
    Soaps: { screen: SoupScreen },
    Salads: { screen: SaladScreen },
    Meal: { screen: MealScreen },
    Sweets: { screen: SweetScreen },

})

const AppContainer = createAppContainer(FoodStackNavigator);*/



export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
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
                <Text>Home</Text>
            </View>
        );
    }
}
