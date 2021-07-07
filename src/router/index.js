import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import {
  SplashScreen,
  Home,
  ListContact,
  AddContact,
  DetailContact
} from '../screens'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

// const Stack = createStackNavigator()
const Stack = createSharedElementStackNavigator()

const options = {
  gestureEnabled: true,
  ...TransitionPresets.ScaleFromCenterAndroid
}

const optionsiOS = {
  gestureEnabled: true,
  ...TransitionPresets.SlideFromRightIOS
}

const Router = () => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      //   cardStyle: {
      //     backgroundColor: 'white'
      //   }
      // }}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        transitionSpec: {
          open: { animation: 'timing', config: { duration: 400 } },
          close: { animation: 'timing', config: { duration: 400 } }
        },
        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress
            }
          }
        }
      }}
    >
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='ListContact' component={ListContact} />
      <Stack.Screen name='AddContact' component={AddContact} />
      <Stack.Screen
        name='DetailContact'
        component={DetailContact}
        sharedElements={(route, otherRoute, showing) => {
          const { photo, id } = route.params
          return [
            { id: `item.${id}.image`, animation: 'fade' },
            { id: `item.${id}.time`, animation: 'fade' }
          ]
        }}
      />
    </Stack.Navigator>
  )
}

export default Router