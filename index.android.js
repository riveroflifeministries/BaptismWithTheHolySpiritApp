'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';
import TaskDescriptionAndroid from 'react-native-android-taskdescription';
import StatusBarAndroid from 'react-native-android-statusbar';

import FathersPromise from './src/content/FathersPromise';


const uiTheme = {
  palette: {
    primaryColor: COLOR.red500,
  },
  toolbar: {
    container: {
      height: 56,
    },
  },
};



class TheFathersPromise extends Component {
  render() {
    StatusBarAndroid.setHexColor(COLOR.red700);

    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          <TaskDescriptionAndroid backgroundColor={COLOR.red600} />
          <Toolbar centerElement="The Father's Promise" />

          <FathersPromise />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

AppRegistry.registerComponent('TheFathersPromise', () => TheFathersPromise);