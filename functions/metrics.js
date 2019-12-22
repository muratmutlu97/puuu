import { Dimensions, Platform } from 'react-native'

const IS_ANDROID = Platform.OS === 'android'
const { height, width } = Dimensions.get('window')
const MUrllocal = "http://192.168.1.102:3000"
const heroku = "https://hidden-chamber-89060.herokuapp.com"
export default {
  ANDROID_STATUSBAR: 24,
  DEVICE_HEIGHT: IS_ANDROID ? height - 24 : height,
  DEVICE_WIDTH: width,
  NAVIGATIONBAR_HEIGHT: 52,
  URL:heroku
}
