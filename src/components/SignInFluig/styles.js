import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: '5%',
  },

  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },

  title: {
    color: '#333',
    fontSize: 24,
    fontFamily: 'Nunito-Regular',
    marginTop: 24,
    width: '90%',
  },

  description: {
    color: '#757575',
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    marginTop: 10,
    width: '90%',
    textAlign: 'center',
  },

  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 6,
  },

  input: {
    width: '100%',
    height: 78,
    paddingHorizontal: 8,
    fontSize: 16,
  },

  submitContainer: {
    alignSelf: 'flex-end',
  },

  submit: {
    alignItems: 'flex-end',
    width: 140,
    marginTop: 18,
    borderRadius: 40,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    width: '100%',
  },

  submitText: {
    fontSize: 22,
    fontFamily: 'Nunito-SemiBold',
    color: '#fff',
    lineHeight: 29,
  },

  inner: {
    flex: 1,
  },

  errorMessage: {
    color: '#f44336',
    alignSelf: 'flex-start',
    marginLeft: 4,
    fontFamily: 'Nunito-Bold',
  },

  inputTextColor: {
    color: '#bdbdbd',
  },

  inputTextColorActive: {
    color: '#673ab7',
  },

  selectionColor: {
    color: '#b39ddb',
  }
});

export default styles;
