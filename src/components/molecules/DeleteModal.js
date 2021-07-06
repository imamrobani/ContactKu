import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../../consts'
import { Button, Gap } from '../atoms'
import Modal from 'react-native-modal'

const DeleteModal = ({ title, label, isVisible, setIsVisible, onDelete }) => {

  const onClose = () => setIsVisible(false)

  return (
    <View>
      <Modal
        isVisible={isVisible}
        onSwipeComplete={onClose}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        useNativeDriverForBackdrop
        swipeDirection={['down']}
        style={styles.view}>
        <View style={styles.content}>
          <View style={styles.indicator} />
          <Text style={styles.title}>{title}</Text>
          <Gap height={12} />
          <Text style={styles.text}>{label}</Text>
          <Gap height={12} />
          <View style={styles.row}>
            <View style={{ width: 150 }}>
              <Button
                text="Cancel"
                color={Colors.gray300}
                onPress={onClose}
              />
            </View>
            <View style={{ width: 150 }}>
              <Button
                text="Delete"
                color={Colors.fadedRed}
                textColor={Colors.white}
                onPress={onDelete}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default DeleteModal

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  indicator: {
    backgroundColor: Colors.gray200,
    width: 32,
    height: 4,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 12
  },
  content: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMIBOLD,
    color: Colors.black
  },
  text: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 14
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 8
  },
})
