import React, { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Header, CardContact, AddButton } from '../../components'
import { getContact } from '../../redux/action/contact'
import Styles from './Styles'

const DATA = [
  {
    id: 1,
    firstName: "Imam",
    lastName: "Robani",
    age: 25,
    photo: 'https://source.unsplash.com/random/1024x500'
  },
  {
    id: 2,
    firstName: "Imam",
    lastName: "Robani",
    age: 25,
    photo: 'https://source.unsplash.com/random/1024x500'
  },
  {
    id: 3,
    firstName: "Imam",
    lastName: "Robani",
    age: 25,
    photo: 'https://source.unsplash.com/random/1024x500'
  },
]

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
                name={item.firstName + ' ' + item.lastName}
                age={item.age}
                photo={{ uri: item.photo }}
              />
            )
          }}
        />
      </View>
      <View style={Styles.buttonContainer}>
        <AddButton onPress={() => navigation.navigate('AddContact')} />
      </View>
    </View>
  )
}

export default ListContact