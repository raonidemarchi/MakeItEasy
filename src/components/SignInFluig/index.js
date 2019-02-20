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
} from 'react-native';


class SignInFluig extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fluigUrl: 'https://',
      fluigUrlFocused: false,
      validatingFluigUrl: false,
      connectionErrorMessage: false,
    };
  }

  async validateFluigUrl() {
    const { fluigUrl } = this.state;
    let connectionResponse = {};
    let fluigUrlFormated = fluigUrl;

    // loading
    this.setState({ validatingFluigUrl: true });

    if (fluigUrl.substring(0, 7) !== 'http://' && fluigUrl.substring(0, 8) !== 'https://') {
      fluigUrlFormated = `https://${fluigUrl}`;
    }

    if (fluigUrl.substring(-1) === '/') {
      fluigUrlFormated = fluigUrl.slice(0, -1);
    }

    connectionResponse = await checkConnection(fluigUrlFormated);

    // loading completed
    this.setState({ validatingFluigUrl: false });

    if (connectionResponse.status === 200) {
      this.props.navigation.navigate('SignIn', { fluigUrl: fluigUrlFormated });
      return;
    }

    this.setState({ connectionErrorMessage: 'Não encontramos o fluig nesse endereço' });
  }

  changeFluigUrlState(value) {
    this.setState({ fluigUrl: value });
  }

  resetConnectionErrorMessage() {
    this.setState({ connectionErrorMessage: false });
  }

  toggleFocusFluigInput(boolean) {
    this.setState({ fluigUrlFocused: boolean });
  }

  render() {
    const { fluigUrlFocused, validatingFluigUrl, connectionErrorMessage } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} enabled>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <Image style={styles.image} source={makeItEasyLogo} />
        <Text style={styles.title}>Bem vindo ao Make it Easy</Text>
        <Text style={styles.description}>Para começar, informe o endereço do seu fluig.</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoFocus={true}
            defaultValue='https://'
            textContentType="URL"
            placeholder="Endereço do seu fluig"
            placeholderTextColor={styles.inputTextColor.color}
            underlineColorAndroid={!connectionErrorMessage ? (
              fluigUrlFocused ? styles.inputTextColorActive.color : styles.inputTextColor.color
            ) : (
              styles.errorMessage.color
            )}
            onFocus={() => this.toggleFocusFluigInput(true)}
            onBlur={() => this.toggleFocusFluigInput(false)}
            onChangeText={(text) => [this.changeFluigUrlState(text), this.resetConnectionErrorMessage()]}
            onSubmitEditing={() => this.validateFluigUrl()}
            selectionColor={styles.selectionColor.color}
            editable={!validatingFluigUrl}
            autoCapitalize="none"
            returnKeyType="go"
          />

          <Text style={styles.errorMessage}>{connectionErrorMessage}</Text>

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
