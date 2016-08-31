'use strict';

import React, { Component } from 'react';
import { AppRegistry, StatusBar, StyleSheet, View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import FathersPromise from './src/content/FathersPromise';


class BaptismWithTheHolySpiritApp extends Component {
  render() {
    return (
      <View
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor='#1976D2' />
        <Toolbar title='The Fathers Promise' />
        <FathersPromise />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

AppRegistry.registerComponent('BaptismWithTheHolySpiritApp', () => BaptismWithTheHolySpiritApp);