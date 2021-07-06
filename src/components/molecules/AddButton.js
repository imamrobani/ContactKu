import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IcPlus } from '../../assets'
import { Colors } from '../../consts'

const ButtonAdd = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
    >
      <IcPlus />
    </TouchableOpacity>
  )
}

export default ButtonAdd

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    backgroundColor: Colors.marigold,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  }
})
