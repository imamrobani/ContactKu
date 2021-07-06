import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import { Colors, Fonts } from '../../consts'

const TextInput = ({ label, placeholder, ...restProps }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.blueyGrey}
        {...restProps}
      />
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.black
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 8,
    padding: 10,
    color: Colors.black
  }
})
