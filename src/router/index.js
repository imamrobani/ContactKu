import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  SplashScreen,
  Home
} from '../screens'
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

const Stack = createStackNavigator()
// const Stack = createSharedElementStackNavigator()
// const Tab = createBottomTabNavigator()

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
      screenOptions={{
        headerShown: false,
        // cardStyle: {
        //   backgroundColor: 'white'
        // }
      }}
    >
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default Router