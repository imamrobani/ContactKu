import React from 'react'
import { View, FlatList } from 'react-native'
import { Header, CardContact, Gap } from '../../components'
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
  }
]

const ListContact = () => {
  return (
    <View style={Styles.screen}>
      <Header label="List Contact" onBack={() => console.log('back')} />
      <Gap height={16} />
      <FlatList
        data={DATA}
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
  )
}

export default ListContact