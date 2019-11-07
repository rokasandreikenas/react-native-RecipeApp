import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import AppContainer from './AppNavigation/AppNavigation';

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