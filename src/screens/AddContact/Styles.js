import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../consts'

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 26
  },
  photo: {
    alignItems: 'center',
    marginVertical: 16
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: Colors.blueyGrey,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addPhoto: {
    fontFamily: Fonts.POPPINS_LIGHT,
    color: Colors.blueyGrey,
    textAlign: 'center'
  }
})

export default Styles