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

  inner: {
    flex: 1
  },
});

export default styles;
