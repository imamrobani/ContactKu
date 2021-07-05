import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import Router from './router'
import 'react-native-gesture-handler'
// import { StatusBar, SafeAreaView } from 'react-native'
// import { Colors } from './const'
// import { Loading } from './components'
// import { Provider, useSelector } from 'react-redux'
// import store from './redux/store'
import FlashMessage from 'react-native-flash-message'
enableScreens()

const MainApp = () => {

  // const { isLoadingGlobal } = useSelector(state => state.globalReducer)

  return (
    <NavigationContainer>
      {/* <SafeAreaView style={{ backgroundColor: Colors.purple500 }} /> */}
      {/* <StatusBar barStyle="light-content" backgroundColor={Colors.purple500} /> */}
      <Router />
      <FlashMessage position="top" />
      {/* {isLoadingGlobal && <Loading />} */}
    </NavigationContainer>
  )
}

const App = () => {
  return (
    // <Provider store={store}>
    <MainApp />
    // </Provider>
  )
}

export default App