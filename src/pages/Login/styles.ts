import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9EFD1',
    paddingHorizontal: 5,
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#DD922E',
    textAlign: 'center'
  },

  inputContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
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

  button: {
    width: '50%',
    borderRadius: 8,
    height: 50,
    backgroundColor: '#DD922E',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginTop: 8
  },

  textButton: {
    fontSize: 24,
    color:'#FFF'
  },

  error: {
    color: 'red',
    width: '100%'
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
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  modalText: {
    fontSize: 24,
    textAlign: 'center'
  }
})

export default styles;