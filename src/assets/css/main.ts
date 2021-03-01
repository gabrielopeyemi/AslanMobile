import { Row } from 'native-base';
import { Button } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MainStyle = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  mainLogin: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  Auth: { 
    marginTop: 50,
    paddingLeft: windowWidth * 0.1,
  },
  form: {
    width: windowWidth * 0.8
  },
  mainTwo: {
    flex: 1,
    alignItems: 'center',
    width: windowWidth * 0.8,
    // justifyContent: 'center'
  },
  Image: {
    width: windowWidth * 0.8,
    height: 200,
    marginTop: 100,
    marginBottom: 60,
  },
  Footer: {
    bottom: 20,
    position: 'absolute'
  },
  Button: {
    backgroundColor: '#000',
    width: windowWidth * 0.8,
    alignItems: 'center',
    borderRadius: 10
  },
  ButtonText: {
    fontSize: 15,
    color: '#fff',
    padding: 10,
    fontWeight: 'bold'
  },
  ButtonTextBlack: {
    fontSize: 15,
    color: '#000',
    padding: 10,
    fontWeight: 'bold'
  },
  StartButton: {
    backgroundColor: '#000',
    width: windowWidth * 0.8,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10
  },
  Login: {
    backgroundColor: '#fff',
    width: windowWidth * 0.4,
    borderRadius: 10
  },
  Register: {
    backgroundColor: '#000',
    width: windowWidth * 0.4,
    borderRadius: 10
  },
  headerOne: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default MainStyle;