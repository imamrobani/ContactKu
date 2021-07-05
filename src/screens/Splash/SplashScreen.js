import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>SPLASH SCREEN</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
