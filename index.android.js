'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator, View, StatusBar } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

import FathersPromise from './content/FathersPromise';

class BaptismWithTheHolySpiritApp extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="#1976D2"
          barStyle="light-content" />

        <Toolbar
          title="The Fathers Promise" />

        <FathersPromise />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: 'grey',
    height: 40,
  },
});

AppRegistry.registerComponent('BaptismWithTheHolySpiritApp', () => BaptismWithTheHolySpiritApp);