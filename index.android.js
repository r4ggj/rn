/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import './ReactotronConfig'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableDemo from './src/pages/ScrollableDemo'
export default class rn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollableDemo/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

AppRegistry.registerComponent('rn', () => rn);
