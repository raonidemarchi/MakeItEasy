import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: '5%',
  },

  title: {
    color: '#757575',
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
  },

  url: {
    color: '#333',
    fontFamily: 'Nunito-Bold',
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

  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    lineHeight: 29,
  },

  inner: {
    flex: 1,
  },
});

export default styles;
