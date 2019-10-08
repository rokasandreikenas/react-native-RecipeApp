import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import AppContainer from './AppNavigation/AppNavigation';

import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';


/*import HomeScreen from './screens/navbarscreens/HomeScreen';
import SearchScreen from './screens/navbarscreens/SearchScreen';
import MyFavouritesScreen from './screens/navbarscreens/MyFavouritesScreen';

const AppStackNavigator = createStackNavigator({
  Login: { screen: SearchScreen },
  Home: { screen: HomeScreen }

})


const DrawerNavigator = createDrawerNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchScreen },
  MyFavourites: { screen: MyFavouritesScreen }

});

/*const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      tabBarIcon: <Icon size={24} name="md-home" style={{ color: "white" }} />
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      title: "Search",
      tabBarIcon: <Icon size={24} name="md-search" style={{ color: "white" }} />
    }
  },
  MyFavourites: {
    screen: MyFavouritesScreen,
    navigationOptions: {
      title: "MyFavourites",
      tabBarLabel: <Text>My Favourites</Text>,

      tabBarIcon: <Icon size={24} name="md-heart" style={{ color: "white" }} />
    }
  }
},

  {
    initialRouteName: "Home",
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    shifting: 'true',
    barStyle: {
      backgroundColor: '#694fad'
    }
  }
);*/

//const AppContainer = createAppContainer(DrawerNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  }
})  