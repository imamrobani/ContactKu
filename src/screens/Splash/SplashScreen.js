import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LogoContact } from '../../assets'
import * as Animatable from 'react-native-animatable'
// import { Fonts } from '../../consts'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
    }, 2500);
  }, [navigation])

  return (
    <View style={styles.container} >
      <Animatable.View
        style={styles.container}
        useNativeDriver
        animation={'bounceIn'}
        delay={500}
        duration={1500}
      >
        <LogoContact />
        <View style={{ height: 8 }} />
        <Text style={styles.title}>ContactKu</Text>
      </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: '#020202',
    // fontFamily: Fonts.POPPINS_MEDIUM
  }
})

export default SplashScreen