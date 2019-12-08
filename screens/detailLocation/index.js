import React, { Component } from "react";

import { Keyboard, Text, View, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Navigation } from 'react-native-navigation'

import { openDetailModal } from "../../navigation/navigation"
import metrics from "../../functions/metrics";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export default class DetailScreen extends Component {



  render() {

    return (
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'whitesmoke'
      }}>
        <ScrollView style={{ width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT }}>
          <View style={{ width: metrics.DEVICE_WIDTH, height: metrics.NAVIGATIONBAR_HEIGHT, position: 'absolute', backgroundColor: 'gray', opacity: .6, zIndex: 2 }}>
            <TouchableOpacity onPress={() => {Navigation.dismissAllModals()}} style={{ width: 50, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons name="ios-arrow-back" color="#ffff" size={35} />
            </TouchableOpacity>
          </View>
          <Image
            style={{ height: metrics.DEVICE_HEIGHT * 0.4, width: metrics.DEVICE_WIDTH, alignSelf: 'center', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
            source={require('../../tempimages/kampp.jpg')}

          />
          <View style={{ width: '100%', height: '100%', backgroundColor: 'whitesmoke', justifyContent: 'flex-start' }}>

            <View style={{ width: metrics.DEVICE_WIDTH * 0.9, height: metrics.DEVICE_HEIGHT * 0.15, alignSelf: 'center', marginTop: 10 }}>
              <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 19, fontWeight: 'bold' }}>Akdeniz Camping</Text>
              <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 15, color: 'gray' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu</Text>

            </View>

            <View style={{ width: metrics.DEVICE_WIDTH * 0.95, height: metrics.DEVICE_HEIGHT * 0.25, alignSelf: 'center', marginTop: 25, backgroundColor: 'white', borderRadius: 12, elevation: 0.5 }}>

            </View>
            <View style={{ width: metrics.DEVICE_WIDTH * 0.95, height: metrics.DEVICE_HEIGHT * 0.25, alignSelf: 'center', marginTop: 25, backgroundColor: 'white', borderRadius: 12, elevation: 0.5 }}>

            </View>
            <View style={{ width: metrics.DEVICE_WIDTH * 0.95, height: metrics.DEVICE_HEIGHT * 0.25, alignSelf: 'center', marginTop: 25, backgroundColor: 'white', borderRadius: 12, elevation: 0.5 }}>

            </View>


          </View>

        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create({


});
