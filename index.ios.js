'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, NavigatorIOS } from 'react-native';

import FathersPromise from './content/FathersPromise';

class BaptismWithTheHolySpiritApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'The Fathers Promise',
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

AppRegistry.registerComponent('BaptismWithTheHolySpiritApp', () => BaptismWithTheHolySpiritApp);