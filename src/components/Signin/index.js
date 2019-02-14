import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import tryToAuthenticate from '../../api/signin';
import styles from './styles';
import makeItEasyLogo from '../../assets/make_it_easy_logo.png';
import {
  ActivityIndicator,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';


class Signin extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      emailFocused: false,
      passwordFocused: false,
      validateSigninData: false,
    };
  }

  async validateSigninData() {
    const { email, password } = this.state;
    let responseJson = {};

    this.setState({ validateSigninData: true });

    responseJson = await tryToAuthenticate(email, password);

    this.setState({ validateSigninData: false });

    if (responseJson) {
      if (!responseJson.error && responseJson.data) {
        Alert.alert(responseJson.data.companyName, responseJson.data.hostname);
        return true;
      }

      Alert.alert('Usuário ou senha inválida', 'Os dados informados não foram encontrados na base de dados do Make it Easy.');
    }
  }

  changeState(stateName, value) {
    this.setState({ [stateName]: value })
  }

  render() {
    const { emailFocused, passwordFocused, validateSigninData } = this.state;
    const selectionColor = '#b39ddb';
    const inputTextColor = '#bdbdbd';
    const inputTextColorActive = '#673AB7';

    return (
      <KeyboardAvoidingView style={styles.container} enabled>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Image
          style={styles.image}
          source={makeItEasyLogo}
        />

        <Text style={styles.title}>Faça login no Make it Easy</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoFocus={true}
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
            editable={!validateSigninData}
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
            onSubmitEditing={() => this.validateSigninData()}
            selectionColor={selectionColor}
            editable={!validateSigninData}
            autoCapitalize="none"
            returnKeyType="go"
            selectTextOnFocus={true}
          />

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={(!validateSigninData) ? ['#40C4FF', '#673AB7'] : ['#eceff1', '#b0bec5']}
            style={styles.submit}
            elevation={(!validateSigninData) ? 1 : 0}
          >
            {
              (!validateSigninData) ? (
                <TouchableOpacity
                  style={styles.submitTouchable}
                  onPress={() => this.validateSigninData()}
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

        <View style={styles.inner} />
      </KeyboardAvoidingView>
    );
  }
}

export default Signin;
