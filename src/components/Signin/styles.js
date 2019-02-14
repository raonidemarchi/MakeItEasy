import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },

  title: {
    color: '#333',
    fontSize: 30,
    fontFamily: 'Nunito-SemiBold',
  },

  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  input: {
    height: 82,
    width: '85%',
    paddingHorizontal: 8,
    fontSize: 20,
    backgroundColor: "#fff",
  },

  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    marginTop: 28,
    borderRadius: 40,
    height: 62,
  },

  submitTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    height: 62,
  },

  submitText: {
    fontSize: 22,
    fontFamily: 'Nunito-SemiBold',
    color: '#fff',
  },
});

export default styles;
