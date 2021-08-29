import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginTop: 16,
  },

  infoContainer: {
    width: '100%',
    height: '70%',
    padding: 8
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DD922E',
    textAlign: 'center'
  },

  buttonsContainer: {
    width: '100%',
    height: '30%',
    flexDirection: 'row',
  },

  button: {
    width: '50%',
    height: '100%',
    borderRightColor: 'rgba(0,0,0,0.3)', 
    borderRightWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#DD922E',
    textAlign: 'center'
  },

  modal: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    left: 0,
  },

  textModal: {
    fontSize: 24,
    color:'rgba(0,0,0,0.7)'
  },

  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 4,
    marginTop: 8,
    paddingHorizontal: 8
  },

  error: {
    color: 'red',
    width: '100%'
  },

  buttonModal: {
    width: '50%',
    height: '100%',
    borderRightColor: 'rgba(0,0,0,0.3)', 
    borderRightWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonModalText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#DD922E',
    textAlign: 'center'
  }
});

export default styles;