'use strict';

import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Navigator, DrawerLayoutAndroid, ScrollView, View, Text } from 'react-native';

import Navigate from './src/utils/Navigate';
import Toolbar from './src/components/Toolbar';
import Navigation from './src/scenes/Navigation';
import Home from './src/scenes/Home';

class BaptismWithTheHolySpiritApp extends Component {

  static childContextTypes = {
    drawer: React.PropTypes.object,
    navigator: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      drawer: null,
      navigator: null
    };
  }

  getChildContext = () => {
    return {
      drawer: this.state.drawer,
      navigator: this.state.navigator
    }
  };

  setDrawer = (drawer) => {
    this.setState({
      drawer
    });
  };

  setNavigator = (navigator) => {
    this.setState({
      navigator: new Navigate(navigator)
    });
  };

  render() {
    const { drawer, navigator } = this.state;
    const navView = React.createElement(Navigation);

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => {
          if (drawer && navigator) {
            return navView;
          }
          return null;
        }}
        ref={(drawer) => { !this.state.drawer ? this.setDrawer(drawer) : null }}
      >
        {drawer &&
        <Navigator
          initialRoute={Navigate.getInitialRoute()}
          configureScene={() => {
            return Navigator.SceneConfigs.FadeAndroid;
          }}
          ref={(navigator) => { !this.state.navigator ? this.setNavigator(navigator) : null }}
          renderScene={(route) => {
            if (this.state.navigator && route.component) {
              return (
                <View
                  style={styles.container}
                  showsVerticalScrollIndicator={false}>
                  <Toolbar onIconPress={drawer.openDrawer} />
                  <route.component title={route.title} path={route.path} {...route.props} />
                </View>
              );
            }
          }}
        />
        }
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

AppRegistry.registerComponent('BaptismWithTheHolySpiritApp', () => BaptismWithTheHolySpiritApp);