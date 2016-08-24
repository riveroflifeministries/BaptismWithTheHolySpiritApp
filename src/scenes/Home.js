'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, Image, IntentAndroid } from 'react-native';

import AppStore from '../stores/AppStore';

export default class Home extends Component {

  static contextTypes = {
    navigator: PropTypes.object.isRequired
  };

  render() {
    const { navigator } = this.context;
    const theme = AppStore.getState().theme;

    return (
      <View>
       <Text>yolo</Text>
      </View>
    );
  }

}
