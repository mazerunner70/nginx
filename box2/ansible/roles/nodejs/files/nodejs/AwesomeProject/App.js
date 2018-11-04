/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import RouterScreen from './src/screens/router';
import { Provider } from 'react-redux';
import { store } from './src/state/store';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    console.log('started');
    return (
      <Provider store={store}>
          <RouterScreen/>
     </Provider>
    );
  }
}
//<View style={styles.container}>
//<Text style={styles.welcome}>Welcome to React Native!</Text>
//<Text style={styles.instructions}>To get started, edit App.js</Text>
//<Text style={styles.instructions}>{instructions}</Text>
///</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});