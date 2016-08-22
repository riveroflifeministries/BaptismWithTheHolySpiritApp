'use strict';

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';


export default class FathersPromise extends Component {
  render() {
    return (
      <ScrollView
        style={styles.body}>
        <Text style={styles.title}>
          1. Jesus, the Baptizer in the Holy Spirit
        </Text>

        <Text style={styles.text}>
          John the Baptist said two things about Jesus:
        </Text>
        <Text style={styles.text}>
          <Text style={styles.red}>The next day, he saw Jesus coming to him, and said, "Behold, the Lamb of God who takes away the sin of the world!"</Text> (John 1:29)
        </Text>
        <Text style={styles.text}>
          <Text style={styles.red}>"I indeed baptize you in water for repentance, but he who comes after me is mightier than I, whose shoes I am not worthy to carry. He will baptize you in the Holy Spirit and with fire."</Text> (Matthew 3:11)
        </Text>
        <Text style={styles.text}>
          We need to know Jesus in both these ways. If you are saved, you know Jesus as the Lamb of God who has taken your sin away and you will go to heaven when you die, but you also need to know Jesus as the Baptizer in the Holy Spirit.
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    margin: 20,
  },

  title: {
    fontSize: 18,

    marginBottom: 10,
  },

  text: {
    fontSize: 14,

    marginBottom: 10,
  },

  red: {
    color: 'red',
  },
});