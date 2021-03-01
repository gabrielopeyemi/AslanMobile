import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MainStyle from '../assets/css/main';

export default function StartScreen(props: any) {
  const NextPage = () => {
    console.log('NextPage')
  }
  return (
    <View style={MainStyle.main}>
      <Image style={MainStyle.Image} source={require('../assets/Images/undraw_logistics.png')} />
      <View style={MainStyle.mainTwo}>
        <Text style={MainStyle.headerOne}>Easily send your goods</Text>
      </View>
      <View style={MainStyle.Footer}>
        <View style={MainStyle.StartButton}>
          <View style={MainStyle.Login}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{alignItems: 'center'}}>
              <Text style={MainStyle.ButtonTextBlack}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={MainStyle.Register}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Register')} style={{alignItems: 'center'}}>
              <Text style={MainStyle.ButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
