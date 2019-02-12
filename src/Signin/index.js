import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import styles from './styles';

class Signin extends Component {
  render() {
    return (
      <View style={styles.view}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Text style={styles.title}>Signin</Text>
      </View>
    );
  }
}

export default Signin;
