import React, { Component } from "react";

import { Keyboard, Text, View, Image, TextInput, Modal, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar, Divider } from 'react-native-elements';
import { openDetailLocationModal } from "../../navigation/navigation"
import User from '../../functions/User'
import metrics from '../../functions/metrics';
import { tsMethodSignature } from "@babel/types";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class LoginScreen extends Component {
  state = {
    search: '',
    campLocations: [],
    isFetching: false
  };
  searchText=''
  skip = 0
  updateSearch = search => {
    this.searchText=search
    this.setState({search })
    this.skip = 0
    this.setState({campLocations: []})
    this.getCampLocation()

  };
  getCampLocation() {

    fetch(`${metrics.URL}/getCampLocation/?paging[skip]=${this.skip}&paging[limit]=${3}&search=${this.searchText}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authorization': User.getCurrentUser().token
      }

    }).then(response => response.json())
      .then(data => {

        var temp = []

        if (this.skip == 0) {
          temp = []
        } else {
          temp=this.state.campLocations;

        }
        temp.push.apply(temp, data)
        this.setState({ campLocations: temp })
      }).catch((err) => {
        console.warn(err);
      }).finally(() => {
        this.setState({ isFetching: false })

      })
  }
  componentDidMount() {
    this.getCampLocation()

  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }
  renderCampLocation(props, name, address, ImageURI) {
    return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => { openDetailLocationModal(props) }} >
          <View style={{ elevation: 2, height: 160, width: '98%', alignSelf: 'center', marginBottom: 2, borderRadius: 15, backgroundColor: 'white', justifyContent: 'flex-start', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', height: 85, paddingLeft: 10, alignItems: 'center', justifyContent: 'flex-start' }}>
              <View style={{ height: 60, width: 60, borderRadius: 8, backgroundColor: 'whitesmoke', justifyContent: 'center' }}>
                <Image
                  style={{ height: 60, width: 60, alignSelf: 'center', borderRadius: 8 }}
                  source={{ uri: metrics.URL + '/' + ImageURI }}

                />
              </View>
              <View style={{ width: 205, marginLeft: 3, marginTop: -10, justifyContent: 'center' }}>
                <Text style={{ width: '80%', paddingLeft: 10, fontWeight: 'bold', fontSize: 14 }}>{name}</Text>
                <Text numberOfLines={1} style={{ color: 'gray', width: '100%', paddingLeft: 10, fontSize: 12 }}>{address}</Text>

              </View>


            </View>

            <Divider style={{ backgroundColor: 'whitesmoke', width: '100%', height: 2 }} />
            <View style={{ flexDirection: 'row', height: 85, alignItems: 'center' }}>
              <View style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'row' }}>

              </View>
            </View>
          </View>

        </TouchableWithoutFeedback>

      </ScrollView>
    )
  }

  render() {

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
          placeholder="Ara : Kamp yeri, il, ilçe"
          containerStyle={{ backgroundColor: 'white', elevation: 11 }}
          inputContainerStyle={{ backgroundColor: 'whitesmoke' }}
          onChangeText={this.updateSearch}
          value={this.state.search}
        />

        <FlatList
          data={this.state.campLocations}
          renderItem={({ item }) => this.renderCampLocation({ _id: item._id }, item.name, item.address, item.ImageURI)}
          keyExtractor={item => item.id}
          refreshing={this.state.isFetching}
          onRefresh={() => {
            this.setState({ isFetching: true })
            this.skip = 0, this.setState({ campLocations: [] }), this.getCampLocation()
          }
          }
          onEndReached={() => {
            
            this.skip += 3;
            this.getCampLocation()
          }}

        />
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