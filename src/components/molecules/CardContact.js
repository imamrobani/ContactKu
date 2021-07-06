import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ProfileDummy } from '../../assets'
import { Colors, Fonts } from '../../consts'
import { Scale } from '../../utils'

const CardContact = ({ photo = ProfileDummy, name, age }) => {
  return (
    <View style={styles.container}>
      <Image
        source={photo}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Name: {name}</Text>
        <Text style={styles.title}>Age: {age}</Text>
      </View>
    </View>
  )
}

export default CardContact

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    marginVertical: 8
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12
  },
  content: {
    flex: 1
  },
  title: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.black,
    fontSize: Scale(12)
  },
})
