'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import { Toolbar } from 'react-native-material-ui';
import { color } from 'react-native-material-design-styles';
import TaskDescriptionAndroid from 'react-native-android-taskdescription';
import StatusBarAndroid from 'react-native-android-statusbar';

import FathersPromise from './src/content/FathersPromise';


class TheFathersPromise extends Component {
  render() {
    StatusBarAndroid.setHexColor(color.paperRed700.color);

    return (
      <View
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <TaskDescriptionAndroid backgroundColor={color.paperRed600.color} />
        <Toolbar primary={'paperRed'} title="The Father's Promise" />
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