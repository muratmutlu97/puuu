import React, { Component } from "react";

import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { goHome } from "../../navigation/navigation"
import loginApi from "../../functions/api/login"
import { AsyncStorage } from 'react-native';
import User from '../../functions/User'
export default class LoginScreen extends Component {
  username = null
  password = null

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

    if (this.username && this.password) {


      var loginJSON = {
        username: this.username,
        password: this.password
      }
      console.warn(loginJSON);

      loginApi.login(loginJSON).then((callback) => {
        if (callback.user != null) {
          AsyncStorage.setItem('USER', JSON.stringify(callback))
          User.setCurrentUser(callback.user)
          goHome()
        } else if (callback.message) {
          Alert.alert('Hata', json.message, [
            { text: 'Tamam' }
          ])
        }
      }).catch((err) => {
        console.warn(err);
        alert('HATALI GİRİŞ')
      })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>puu!</Text>
              <TextInput onChangeText={text => this.username = text} placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput onChangeText={text => this.password = text} placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.onLoginPress()}
                title="Login"
              />

            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,

  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 5,
  },

}
);
