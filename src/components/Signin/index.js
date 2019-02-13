import React, { Component } from 'react';
import { View, Text, StatusBar, TextInput, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import makeItEasyLogo from '../../assets/make_it_easy_logo.png';

class Signin extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isfocused: false
    };
  }

  render() {
    const { isfocused } = this.state;

    return (
      <View style={styles.view}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Image
          style={styles.image}
          source={makeItEasyLogo}
        />
        
        <Text style={styles.title}>Fazer login</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoComplete="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Seu email corporativo"
            placeholderTextColor="#d3d3d3"
            underlineColorAndroid={isfocused ? '#673AB7' : '#d3d3d3'}
            selectionColor="#fff"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            textContentType="password"
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#d3d3d3"
            underlineColorAndroid={isfocused ? '#673AB7' : '#d3d3d3'}
            selectionColor="#673AB7"
            autoCapitalize="none"
          />

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#40C4FF', '#673AB7']}
            style={styles.submit}
            elevation={1}
          >
            <Text style={styles.submitText}>
              Login
            </Text>
          </LinearGradient>
        </View>

      </View>
    );
  }
}

export default Signin;
