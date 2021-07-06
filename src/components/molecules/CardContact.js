import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ProfileDummy } from '../../assets'
import { Colors, Fonts } from '../../consts'
import { Scale } from '../../utils'
import { useNavigation } from '@react-navigation/native'

const CardContact = ({ photo = ProfileDummy, name, age }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailContact')}
    >
      <Image
        source={photo}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Name: {name}</Text>
        <Text style={styles.title}>Age: {age}</Text>
      </View>
    </TouchableOpacity>
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
    marginVertical: 8,
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
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
