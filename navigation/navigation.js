import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'loginScreen',
      children: [
        {
          component: {
            name: 'loginScreen',
            options: {
              layout: {
                orientation: ["portrait"],
              },
              topBar: {
                visible: false,
                height: 0
              },
            }
          }
        }
      ],
    }
  }
})
Navigation.setDefaultOptions({
  topBar: {
    visible: false,
    height: 0
  },

  statusBar: {
    style: 'light',
    drawBehind: false
  },
  layout: {
    orientation: ['portrait'],

  },
  bottomTabs: {
    titleDisplayMode: 'alwaysHide',
    animate: true,


  },

  blurOnUnmount: true,

});
export const openDetailLocationModal = (props) => Navigation.showModal({
  stack: {
    children: [{
      component: {
        name: 'detailLocation',
        passProps: props,

        options: {
          topBar: {
            visible: true,
            animate: false
          },
        },
      },
    }],
  },
});
export const goHome = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      children: [{
        stack: {
          children: [{
            component: {
              name: 'Home',
            }
          }],
          options: {
            bottomTab: {
              selectedIcon: require('../navigation/navigationIcons/camptent.png'),
              testID: '1',
              icon: require('../navigation/navigationIcons/camptent_d.png'),


            },
          }
        }
      },
      {
        component: {
          name: 'Home',
          options: {
            bottomTab: {
              selectedIcon: require('../navigation/navigationIcons/camper.png'),
              icon: require('../navigation/navigationIcons/camper_d.png'),

              testID: '2'
            },
          }
        }
      },
      {
        component: {
          name: 'Home',
          options: {
            bottomTab: {
              icon: require('../navigation/navigationIcons/homepage.png'),
              testID: '3'
            },
          }
        }
      }]
    }
  }
});