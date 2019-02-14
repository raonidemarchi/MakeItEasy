import React, { Component } from 'react';
import { ActivityIndicator, View, Text, StatusBar, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import makeItEasyLogo from '../../assets/make_it_easy_logo.png';

class Signin extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      emailFocused: false,
      passwordFocused: false,
      validatingLoginData: false,
    };
  }

  validateLoginData() {
    const { email, password } = this.state;
    this.setState({ validatingLoginData: true });

    fetch('https://apimakeiteasy.iv2.com.br/api/v6/loginRoutes/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        pass: password,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ validatingLoginData: false });

      if (responseJson) {
        if (!responseJson.error && responseJson.data) {
          Alert.alert(responseJson.data.companyName, responseJson.data.hostname);
          return true;
        }

        Alert.alert('Usuário ou senha inválida', 'Os dados informados não foram encontrados na base de dados do Make it Easy.');
      }
    })
    .catch((error) => {
      this.setState({ validatingLoginData: false });
      console.error(error);
    });
  }

  changeState(stateName, value) {
    this.setState({ [stateName]: value })
  }

  render() {
    const { emailFocused, passwordFocused, validatingLoginData } = this.state;
    const selectionColor = '#b39ddb';
    const inputTextColor = '#d3d3d3';
    const inputTextColorActive = '#673AB7';

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
            placeholderTextColor={inputTextColor}
            underlineColorAndroid={emailFocused ? inputTextColorActive : inputTextColor}
            onFocus={() => this.changeState('emailFocused', true)}
            onBlur={() => this.changeState('emailFocused', false)}
            onChangeText={(text) => this.changeState('email', text)}
            onSubmitEditing={() => this.secondTextInput.focus()}
            selectionColor={selectionColor}
            editable={!validatingLoginData}
            autoCapitalize="none"
            returnKeyType="next"
          />

          <TextInput
            ref={(input) => this.secondTextInput = input}
            style={styles.input}
            textContentType="password"
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor={inputTextColor}
            underlineColorAndroid={passwordFocused ? inputTextColorActive : inputTextColor}
            onFocus={() => this.changeState('passwordFocused', true)}
            onBlur={() => this.changeState('passwordFocused', false)}
            onChangeText={(text) => this.changeState('password', text)}
            onSubmitEditing={() => this.validateLoginData()}
            selectionColor={selectionColor}
            editable={!validatingLoginData}
            autoCapitalize="none"
            returnKeyType="go"
            selectTextOnFocus={true}
          />

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={(!validatingLoginData) ? ['#40C4FF', '#673AB7'] : ['#eceff1', '#b0bec5']}
            style={styles.submit}
            elevation={(!validatingLoginData) ? 1 : 0}
          >
            {
              (!validatingLoginData) ? (
                <TouchableOpacity
                  style={styles.submitTouchable}
                  onPress={() => this.validateLoginData()}
                >
                  <Text style={styles.submitText}>
                    Login
                  </Text>
                </TouchableOpacity>
              ) : (
                <ActivityIndicator size="large" color="#616161" />
              )
            }
          </LinearGradient>
        </View>
      </View>
    );
  }
}

export default Signin;
