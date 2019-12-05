import { Navigation } from 'react-native-navigation';
import mainScreen from '../screens/mainScreen/mainScreen';
import loginScreen from '../screens/loginScreen/loginScreen';
import init from '../navigation/init';
import detailLocation from '../screens/detailLocation'
export function registerScreens() {
    Navigation.registerComponent(`init`, () => init);
    Navigation.registerComponent(`Home`, () => mainScreen);
    Navigation.registerComponent(`loginScreen`, () => loginScreen);
    Navigation.registerComponent(`detailLocation`, () => detailLocation);


}