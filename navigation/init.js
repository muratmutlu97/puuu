// Initializing.js
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  
} from 'react-native'

import { goToAuth, goHome } from './navigation'


export default class Initialising extends React.Component {
  async componentDidMount() {
    try {
    
      if (true) {
        goToAuth()
      } else {
      }
    } catch (err) {
      console.log('error: ', err)
      goToAuth()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})