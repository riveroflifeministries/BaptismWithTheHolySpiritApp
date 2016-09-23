'use strict';

import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS, StyleSheet } from 'react-native';

import FathersPromise from './src/content/FathersPromise';

class TheFathersPromise extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'The Father\'s Promise',
          component: FathersPromise,
        }} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('TheFathersPromise', () => TheFathersPromise);