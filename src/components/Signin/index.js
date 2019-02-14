import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import tryToAuthenticate from '../../api/signIn';
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
  Alert,
  AsyncStorage,
} from 'react-native';


class SignIn extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      emailFocused: false,
      passwordFocused: false,
      validatingSignInData: false,
    };
  }

  async validateSignInData() {
    let responseJson = {};
    const { email, password } = this.state;

    this.setState({ validatingSignInData: true });

    responseJson = await tryToAuthenticate(email, password);

    this.setState({ validatingSignInData: false });

    if (responseJson) {
      if (!responseJson.error && responseJson.data) {
        // this._storeUserData(responseJson.data);
        return;
      }

      Alert.alert('Usuário ou senha inválida', 'Os dados informados não foram encontrados na base do Make it Easy.');
    }
  }

  // async _storeUserData(userData) {
  //   // try {
  //   //   await AsyncStorage.setItem('userToken', userData.token);
  //   // } catch(error) {
  //   //   Alert.alert('Erro ao salvar dados de login', error);
  //   // }

  //   // companyName: "Grupo iv2"
  //   // email: "raonidemarchi@gmail.com"
  //   // hostname: "devfluiglocal-iv2-com-br"
  //   // token: "R3J1cG8gaXYyZGV2Zmx1aWdsb2NhbC5pdjIuY29tLmJy"
  //   // version: "1.1.5"
  //   // _id: "5c5dcf60c1a50d089ef08903"
  // }

  changeState(stateName, value) {
    this.setState({ [stateName]: value });
  }

  render() {
    const { emailFocused, passwordFocused, validatingSignInData } = this.state;
    const selectionColor = '#b39ddb';
    const inputTextColor = '#bdbdbd';
    const inputTextColorActive = '#673AB7';

    return (
      <KeyboardAvoidingView style={styles.container} enabled>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Image style={styles.image} source={makeItEasyLogo} />

        <Text style={styles.title}>Só mais um passo...</Text>

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
            editable={!validatingSignInData}
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
            onSubmitEditing={() => this.validateSignInData()}
            selectionColor={selectionColor}
            editable={!validatingSignInData}
            autoCapitalize="none"
            returnKeyType="go"
            selectTextOnFocus={true}
          />

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={(!validatingSignInData) ? ['#40C4FF', '#673AB7'] : ['#eceff1', '#b0bec5']}
            style={styles.submit}
            elevation={(!validatingSignInData) ? 1 : 0}
          >
            {
              (!validatingSignInData) ? (
                <TouchableOpacity 
                  style={styles.submitTouchable}
                  onPress={() => this.validateSignInData()}
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

export default SignIn;
