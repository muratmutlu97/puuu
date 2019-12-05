

import { Navigation } from "react-native-navigation";
import {registerScreens} from "./navigation/registerScreens"
registerScreens()
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "init",
        options: {
          layout: {
              orientation: ["portrait"],
          },
         
      }
      }
    }
  });
});
