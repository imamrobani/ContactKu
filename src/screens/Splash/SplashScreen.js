import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LogoContact, Logo } from '../../assets'
import * as Animatable from 'react-native-animatable'
import { Colors, Fonts } from '../../consts'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'ListContact' }] })
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
    backgroundColor: Colors.marigold,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.POPPINS_MEDIUM
  }
})

export default SplashScreen