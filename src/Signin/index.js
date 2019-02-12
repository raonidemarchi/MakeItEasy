import React, { Component } from 'react';
import { View, Text, StatusBar, TextInput } from 'react-native';
import styles from './styles';

class Signin extends Component {
  render() {
    return (
      <View style={styles.view}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Text style={styles.title}>Fazer login</Text>

        <TextInput
          style={styles.input}
          placeholder="Seu email corporativo"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
        />
      </View>
    );
  }
}

export default Signin;
