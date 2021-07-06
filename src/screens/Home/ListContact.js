import React, { useEffect } from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IcHomeOn } from '../../assets'
import { Header, CardContact, AddButton, EmptyContact } from '../../components'
import { getContact } from '../../redux/action/contact'
import Styles from './Styles'

const DATA = []

const ListContact = ({ navigation }) => {
  const dispatch = useDispatch()

  const { contact } = useSelector(state => state.contactReducer)

  useEffect(() => {
    dispatch(getContact())
  }, [])

  return (
    <View style={Styles.screen}>
      <Header label="List Contact" />
      <View style={Styles.listContainer}>
        <FlatList
          data={contact}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <CardContact
                data={item}
              // name={item.firstName + ' ' + item.lastName}
              // age={item.age}
              // photo={{ uri: item.photo }}
              />
            )
          }}
          ListEmptyComponent={
            <View style={{ height: Dimensions.get('window').height }}>
              <EmptyContact />
            </View>
          }
        />
      </View>
      <View style={Styles.buttonContainer}>
        <AddButton onPress={() => navigation.navigate('AddContact')} />
      </View>
    </View>
  )
}

export default ListContact