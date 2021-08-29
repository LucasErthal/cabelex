import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9EFD1',
    paddingHorizontal: 5,
    paddingVertical: 30,
    alignItems: 'center',
  },

  list: {
    flex: 1,
    marginVertical: 10,
  },

  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#DD922E',
    borderRadius: 8,
    elevation: 4,
    padding: 8,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    fontSize: 24,
    color:'#FFF'
  },
  
  modalBackground: {
    width: '100%', 
    height: '100%', 
    backgroundColor: 'rgba(0,0,0,0.7)', 
    position: 'absolute', 
    top: 0, 
    left: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  modal: {
    height: 200,
    width: '80%',
    backgroundColor: '#FFF',
    elevation: 4,
    borderRadius: 8,
    padding: 8,
    justifyContent: 'space-around'
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

  buttonsContainer: {
    width: '100%',
    height: '30%',
    flexDirection: 'row',
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