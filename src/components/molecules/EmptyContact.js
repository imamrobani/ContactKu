import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcInfo } from '../../assets'
import { Colors, Fonts } from '../../consts'

const EmptyContact = () => {
  return (
    <View style={styles.container}>
      <IcInfo />
      <Text style={styles.label}>No data contact</Text>
    </View>
  )
}

export default EmptyContact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.gray
  }
})
