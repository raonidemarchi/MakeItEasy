import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'flex-end',
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
  },

  description: {
    color: '#757575',
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    marginTop: 10,
    width: '70%',
    textAlign: 'center',
  },

  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 6,
  },

  input: {
    height: 78,
    width: '85%',
    paddingHorizontal: 8,
    fontSize: 16,
  },

  submitContainer: {
    width: '85%',
    alignItems: 'flex-end',
  },

  submit: {
    alignItems: 'flex-end',
    width: 140,
    marginTop: 28,
    borderRadius: 40,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitTouchable: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 48,
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
});

export default styles;
