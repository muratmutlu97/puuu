// Initializing.js
import React from 'react'
import {
  View,
  Text,
  StyleSheet,

} from 'react-native'
import { AsyncStorage } from 'react-native';

import { goToAuth, goHome } from './navigation'
import loginApi from "../functions/api/login"
import login from '../functions/api/login';
import User from '../functions/User'

export default class Initialising extends React.Component {

  async componentDidMount() {
    AsyncStorage.getItem('USER').then((data) => {
      data = JSON.parse(data)
      console.warn('1');

      if (data.user) {
        var tokenJSON = {
          token: data.user.token
        }
        console.warn('2');

        login.checkToken(tokenJSON).then((callback) => {
          var uss={token:data.user.token}
          Object.assign(uss,callback.authorizedData.user)
          User.setCurrentUser(uss);


          goHome()
        }).catch((err) => {
          var loginJSON = {
            username: data.user.username,
            password: data.user.password
          }
          loginApi.login(loginJSON).then((callback) => {
            if (callback.user != null) {
              AsyncStorage.setItem('USER', JSON.stringify(callback))
              console.warn(callback.user);
              
              User.setCurrentUser(callback.user)

              goHome()
            } else {
              goToAuth()
            }
          }).catch((err) => {
            goToAuth()
          })
        })
      } else {
        goToAuth()
      }


    }).catch((err) => {
      goToAuth()

    })

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