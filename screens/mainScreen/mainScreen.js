import React, { Component } from "react";

import { Keyboard, Text, View, Image, TextInput, Modal, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import { openDetailLocationModal } from "../../navigation/navigation"
import { Divider } from 'react-native-elements';

export default class LoginScreen extends Component {

  state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({ search });
  };
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }
  renderCampLocation() {
    return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => { openDetailLocationModal() }} >
          <View style={{ elevation: 8, height: 160, width: '90%', alignSelf: 'center', marginBottom: 10, marginTop: 15, borderRadius: 15, backgroundColor: 'white', justifyContent: 'flex-start', flexDirection: 'column' }}>

            <View style={{ flexDirection: 'row', height: 85, paddingLeft: 10, alignItems: 'center', justifyContent: 'flex-start' }}>
              <View style={{ height: 60, width: 60, borderRadius: 8, backgroundColor: 'whitesmoke', justifyContent: 'center' }}>
                <Image
                  style={{ height: 60, width: 60, borderRadius: 8, alignSelf: 'center' }}
                  source={require('../../tempimages/kampp.jpg')}
                />
              </View>
              <View style={{ width: 205, marginLeft: 3, marginTop: -15, justifyContent: 'center' }}>
                <Text style={{ width: '70%', paddingLeft: 10, fontWeight: 'bold', fontSize: 14 }}>Akdeniz Camping Köyceğiz Gölü</Text>
              </View>

            </View>

            <Divider style={{ backgroundColor: 'whitesmoke', width: '100%', height: 2 }} />
            <View style={{ flexDirection: 'row', height: 85, alignItems: 'center' }}>
              <View style={{ height: 50, width: '80%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ width: 70, height: 60 }}>
                  <Image
                    style={{ height: 30, width: 30, alignSelf: 'center' }}
                    source={require('./featureIcons/fire.png')}
                  />
                  <Text style={{ alignSelf: 'center', paddingTop: 5, color: 'gray', fontSize: 11 }}>Ateş Yakma</Text>
                </View>

                <View style={{ width: 70, height: 60 }}>

                  <Image
                    style={{ height: 30, width: 30, alignSelf: 'center' }}
                    source={require('./featureIcons/water.png')}
                  />
                  <Text style={{ alignSelf: 'center', paddingTop: 5, color: 'gray', fontSize: 11 }}>Çeşme</Text>

                </View>
                <View style={{ width: 70, height: 60 }}>

                  <Image
                    style={{ height: 30, width: 30, alignSelf: 'center' }}
                    source={require('./featureIcons/socialFacility.png')}
                  />
                  <Text style={{ alignSelf: 'center', paddingTop: 5, color: 'gray', fontSize: 11 }}>Sosyal Tesis</Text>

                </View>

              </View>
            </View>
          </View>

        </TouchableWithoutFeedback>

      </ScrollView>
    )
  }

  render() {
    const { search } = this.state;

    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
      }}>
        {false &&
          <Modal
            transparent={true}
            animationType={'none'}
            visible={true}
            onRequestClose={() => { console.log('close modal') }}>
            <View style={styles.modalBackground}>
              <View style={{ borderRadius: 9999, backgroundColor: 'white', width: 70, height: 70, justifyContent: 'center' }}>
                <Image
                  style={{ height: 50, width: 50, alignSelf: 'center' }}
                  source={require('../../src/gifs/load.gif')}
                ></Image>
              </View>
            </View>
          </Modal>}
        <SearchBar
          placeholder="Type Here..."
          containerStyle={{ backgroundColor: 'white', maxHeight: 50, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15, borderBottomColor: 'white', borderTopColor: 'white', width: '90%', alignSelf: 'center', marginTop: 10 }}
          inputStyle={{ backgroundColor: 'white' }}
          inputContainerStyle={{ backgroundColor: 'white', }}
          onChangeText={this.updateSearch}
          value={search}
        />

        {this.renderCampLocation()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },

});