import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import checkConnection from '../../api/FluigServices';
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


class SignInFluig extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fluigAddress: '',
      fluigAddressFocused: false,
      validatingFluigUrl: false,
    };
  }

  async validateFluigUrl() {
    let connectionSucceeds = {};
    const { fluigAddress } = this.state;

    this.setState({ validatingFluigUrl: true });

    connectionSucceeds = await checkConnection(fluigAddress);

    this.setState({ validatingFluigUrl: false });

    if (connectionSucceeds) {
      this.props.navigation.navigate('SignIn');
      return;
    }

    Alert.alert('não foi')
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
    const { fluigAddressFocused, validatingFluigUrl } = this.state;
    const selectionColor = '#b39ddb';
    const inputTextColor = '#bdbdbd';
    const inputTextColorActive = '#673AB7';

    return (
      <KeyboardAvoidingView style={styles.container} enabled>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Image style={styles.image} source={makeItEasyLogo} />

        <Text style={styles.title}>Bem vindo ao Make it Easy</Text>
        <Text style={styles.description}>Para começar, vamos conectar com seu fluig.</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoFocus={true}
            textContentType="URL"
            placeholder="Endereço do seu fluig"
            placeholderTextColor={inputTextColor}
            underlineColorAndroid={fluigAddressFocused ? inputTextColorActive : inputTextColor}
            onFocus={() => this.changeState('fluigAddressFocused', true)}
            onBlur={() => this.changeState('fluigAddressFocused', false)}
            onChangeText={(text) => this.changeState('fluigAddress', text)}
            onSubmitEditing={() => this.validateFluigUrl()}
            selectionColor={selectionColor}
            editable={!validatingFluigUrl}
            autoCapitalize="none"
            returnKeyType="go"
          />

          <View style={styles.submitContainer}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={(!validatingFluigUrl) ? ['#40C4FF', '#673AB7'] : ['#eceff1', '#b0bec5']}
              style={styles.submit}
              elevation={(!validatingFluigUrl) ? 1 : 0}
            >
              {
                (!validatingFluigUrl) ? (
                  <TouchableOpacity 
                    style={styles.submitTouchable}
                    onPress={() => this.validateFluigUrl()}
                  >
                    <Text style={styles.submitText}>
                      Avançar
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <ActivityIndicator size="large" color="#616161" />
                )
              }
            </LinearGradient>
          </View>
        </View>

        <View style={styles.inner} />
      </KeyboardAvoidingView>
    );
  }
}

export default SignInFluig;
