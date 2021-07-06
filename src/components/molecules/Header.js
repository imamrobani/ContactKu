import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcBack } from '../../assets'
import { Colors, Fonts } from '../../consts'
import { Scale } from '../../utils'
import { Gap } from '../atoms'

const Header = ({ onBack, label, icon, onPress }) => {
  return (
    <View style={styles.container}>
      {onBack &&
        <View>
          <TouchableOpacity onPress={onBack}>
            <IcBack />
          </TouchableOpacity>
          <Gap width={55} />
        </View>
      }
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        {icon}
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    height: Scale(64),
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  backContainer: {
    marginLeft: 8
  },
  label: {
    flex: 1,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    fontSize: 20,
    color: Colors.black,
    marginLeft: 16,
    marginTop: 2
  }
})
