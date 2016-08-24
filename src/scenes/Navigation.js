import React, { Component, PropTypes } from 'react';

import { View, Text } from 'react-native';

export default class Navigation extends Component {

  static contextTypes = {
    drawer: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      route: null
    }
  }

  changeScene = (path, name) => {
    const { drawer, navigator } = this.context;

    this.setState({
      route: path
    });
    navigator.to(path, name);
    drawer.closeDrawer();
  };

  render() {
    const { route } = this.state;

    return (
      <View>
        <Text style={{color: 'black'}}>yolo</Text>
      </View>
    );
  }
}

const styles = {
};