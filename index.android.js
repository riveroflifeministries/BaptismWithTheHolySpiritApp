'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import { Toolbar } from 'react-native-material-ui';
import TaskDescriptionAndroid from 'react-native-android-taskdescription';
import StatusBarAndroid from 'react-native-android-statusbar';

import FathersPromise from './src/content/FathersPromise';


class TheFathersPromise extends Component {
  render() {
    StatusBarAndroid.setHexColor('#1976D2');

    return (
      <View
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <TaskDescriptionAndroid backgroundColor='#1E88E5' />
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

AppRegistry.registerComponent('TheFathersPromise', () => TheFathersPromise);