import React, { Component } from "react";

import {
  Text, View, Image, TouchableOpacity, Animated, StyleSheet, ScrollView
} from 'react-native';
import { Navigation } from 'react-native-navigation'

import metrics from "../../functions/metrics";
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';

import User from '../../functions/User'

export default class DetailScreen extends Component {
  constructor(props) {
    super()
    this.state = {
      detailJson: {},
      images:[{url:'f',desc:'adasd'},{url:'f',desc:'adasd'},{url:'f',desc:'adasd'},]
    };
    this.moveAnimation = new Animated.ValueXY({ x: metrics.DEVICE_WIDTH * 0.5 - 25, y: metrics.DEVICE_HEIGHT + 10 })
    setTimeout(() => {
      this.buttonTopAnimation()
    }, 450);
  }
  renderCarouselItem = ({ item, index }) => {
    return (
         <View style={{height: metrics.DEVICE_HEIGHT*0.35, width: metrics.DEVICE_WIDTH*0.45,elevation:20}}>
           <Image
            style={{ height: metrics.DEVICE_HEIGHT*0.35, width: metrics.DEVICE_WIDTH*0.45, alignSelf: 'center', borderRadius:15 }}
            source={require('../../tempimages/kampp.jpg')}

          />
         </View>
    );
  }
  componentDidMount() {
    fetch(`${metrics.URL}/getCampLocation/${this.props._id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authorization': User.getCurrentUser().token
      }

    }).then(response => response.json())
      .then(data => {

        this.setState({ detailJson: data })

      }).catch((err) => {
        console.warn(err);

      })
  }
  buttonTopAnimation() {
    Animated.spring(this.moveAnimation, {
      toValue: { x: metrics.DEVICE_WIDTH * 0.5 - 25, y: metrics.DEVICE_HEIGHT - 80 },
    }).start()
  }
  buttonBottomAnimation() {
    Animated.spring(this.moveAnimation, {
      toValue: { x: metrics.DEVICE_WIDTH * 0.5 - 25, y: metrics.DEVICE_HEIGHT + 10 },
    }).start()
  }



  render() {

    return (
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'whitesmoke'
      }}>
        <Animated.View
          style={[styles.button, this.moveAnimation.getLayout()]}>
          <TouchableOpacity onPress={() => {
            console.warn('Press Button');

          }}>
            <Image
              style={{ height: 60, width: 60, alignSelf: 'center', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
              source={require('../../src/icons/bonfire.png')}
            />
          </TouchableOpacity>

        </Animated.View>


        <ScrollView onScrollBeginDrag={(e) => {
          var currentOffset = e.nativeEvent.contentOffset.y;
          if (currentOffset > this.offset) {
            this.buttonTopAnimation()
          } else {
            this.buttonBottomAnimation()
          }
          this.offset = currentOffset;
        }} style={{ width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT }}>
          <View style={{ width: metrics.DEVICE_WIDTH, height: metrics.NAVIGATIONBAR_HEIGHT, position: 'absolute', backgroundColor: 'gray', opacity: .6, zIndex: 2 }}>
            <TouchableOpacity onPress={() => { Navigation.dismissAllModals() }} style={{ width: 50, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Ionicons name="ios-arrow-back" color="#ffff" size={35} />
            </TouchableOpacity>
          </View>
          <Image
            style={{ height: metrics.DEVICE_HEIGHT * 0.4, width: metrics.DEVICE_WIDTH, alignSelf: 'center', borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}
            source={require('../../tempimages/kampp.jpg')}

          />
          <View style={{ width: metrics.DEVICE_WIDTH * 0.4, height: metrics.DEVICE_HEIGHT * 0.1, alignSelf: 'flex-end', flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end' }}>
            <View style={{ height: 55, flexDirection: 'column' }}>
              <MaterialCommunityIcons style={{ alignSelf: 'center' }} name="weather-sunny" size={28} />
              <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 12 }}>35°C</Text>
            </View>
            <View style={{ paddingLeft: 10, height: 55, flexDirection: 'column', marginRight: 25 }}>
              <MaterialCommunityIcons style={{ alignSelf: 'center' }} name="weather-windy" size={28} />
              <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 12 }}>10 km/h</Text>
            </View>
          </View>

          <View style={{ width: '100%', height: '100%', backgroundColor: 'whitesmoke', justifyContent: 'flex-start' }}>

            <View style={{ width: metrics.DEVICE_WIDTH * 0.9, height: metrics.DEVICE_HEIGHT * 0.15, alignSelf: 'center', marginTop: 10 }}>
              <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 19, fontWeight: 'bold' }}>{this.state.detailJson.name}</Text>
              <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 15, color: 'gray' }}>{this.state.detailJson.address}</Text>

            </View>

             
            <View style={{ width: metrics.DEVICE_WIDTH * 0.95, height: metrics.DEVICE_HEIGHT*0.35, alignSelf: 'center', marginTop: 25,  elevation: 0.5 }}>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.images}
                renderItem={this.renderCarouselItem}
                sliderWidth={metrics.DEVICE_WIDTH}
                itemHeight={metrics.DEVICE_HEIGHT*0.35}
                itemWidth={metrics.DEVICE_WIDTH * 0.5}
              />
            </View>
            <View style={{ width: metrics.DEVICE_WIDTH * 0.95, height: metrics.DEVICE_HEIGHT * 0.25, alignSelf: 'center', marginTop: 25, backgroundColor: 'white', borderRadius: 12, elevation: 0.5 }}>

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

  button: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    zIndex: 89,
    width: 60,
    height: 60,

  }
});
