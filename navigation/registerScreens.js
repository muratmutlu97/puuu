import { Navigation } from 'react-native-navigation';
import mainScreen from '../screens/mainScreen';
import loginScreen from '../screens/loginScreen';
import init from '../navigation/init';
import detailLocation from '../screens/detailLocation'
import communityScreen from '../screens/communityScreen'
import addLocation from '../screens/addLocation'

export function registerScreens() {
    Navigation.registerComponent(`init`, () => init);
    Navigation.registerComponent(`Home`, () => mainScreen);
    Navigation.registerComponent(`loginScreen`, () => loginScreen);
    Navigation.registerComponent(`detailLocation`, () => detailLocation);
    Navigation.registerComponent(`communityScreen`, () => communityScreen);
    Navigation.registerComponent(`addLocation`, () => addLocation);



}