import React, { Component } from "react";

import { Keyboard, Text, View, Image, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import { openDetailModal } from "../../navigation/navigation"

export default class LoginScreen extends Component {



  render() {

    return (
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'whitesmoke'

      }}>
        <Image
          style={{ height: '30%', width: '100%', alignSelf: 'center' }}
          source={require('../../tempimages/kampp.jpg')}
        />
        <View style={{width: '100%', height: '100%', backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, top: -17, justifyContent:'flex-start' }}>
          <View style={{ width: '15%', height: '0.7%', backgroundColor: 'rgb(223,225,229)',borderRadius:15 ,alignSelf:'center',marginTop:15 }}>
          </View>
          <View style={{width:'90%',height:'6%',alignSelf:'center',marginTop:10}}>
            <Text style={{fontSize:17,fontWeight:'bold'}}>AKDENİZ CAMPİNG KÖYCEĞİZ GÖLÜ, SULTANİYE KÖYÜ, MUĞLA</Text>
          </View>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({


});
