import React, { Component } from "react";

import { Keyboard, Text, View, Image, TextInput, Modal, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar, Divider } from 'react-native-elements';
import { openDetailLocationModal } from "../../navigation/navigation"
import User from '../../functions/User'
import metrics from '../../functions/metrics';
import { tsMethodSignature } from "@babel/types";

export default class LoginScreen extends Component {

  state = {
    search: '',
    campLocations:[],
    isFetching:false
  };
  skip=0
  updateSearch = search => {
    this.setState({ search });
  };
  getCampLocation() {
    this.setState({isFetching:true})
    fetch(`${metrics.URL}/getCampLocation/?paging[skip]=${this.skip}&paging[limit]=${3}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authorization': User.getCurrentUser().token
      }

    }).then(response => response.json())
    .then(data => {
      
      var temp =this.state.campLocations
      temp.push.apply(temp,data)
      this.setState({campLocations:temp})
    }).catch((err)=>{
      console.warn(err);
      
    }).finally(()=>{
      this.setState({isFetching:false})

    })
  }
  componentDidMount() {
    this.getCampLocation()

  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }
  renderCampLocation(props,name,address) {
    return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => { openDetailLocationModal(props) }} >
          <View style={{ elevation: 8, height: 160, width: '90%', alignSelf: 'center', marginBottom: 10, marginTop: 15, borderRadius: 15, backgroundColor: 'white', justifyContent: 'flex-start', flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', height: 85, paddingLeft: 10, alignItems: 'center', justifyContent: 'flex-start' }}>
              <View style={{ height: 60, width: 60, borderRadius: 8, backgroundColor: 'whitesmoke', justifyContent: 'center' }}>
                <Image
                  style={{ height: 60, width: 60, borderRadius: 8, alignSelf: 'center' }}
                  source={require('../../tempimages/kampp.jpg')}
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
                <View style={{ width: 30, height: 30 }}>
                  <Image
                    style={{ height: 20, width: 20, alignSelf: 'center' }}
                    source={require('./featureIcons/fire.png')}
                  />
                </View>

                <View style={{ width: 30, height: 30 }}>

                  <Image
                    style={{ height: 20, width: 20, alignSelf: 'center' }}
                    source={require('./featureIcons/water.png')}
                  />

                </View>
                <View style={{ width: 30, height: 30 }}>

                  <Image
                    style={{ height: 20, width: 20, alignSelf: 'center' }}
                    source={require('./featureIcons/socialFacility.png')}
                  />

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
        <FlatList
          data={this.state.campLocations}
          renderItem={({ item }) => this.renderCampLocation({_id:item._id},item.name,item.address)}
          keyExtractor={item => item.id}
          refreshing={this.state.isFetching}
          onRefresh={()=> {  this.skip=0,this.setState({campLocations:[]}) ,this.getCampLocation() }
        }
          onEndReached={()=>{
            this.skip+=3;
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