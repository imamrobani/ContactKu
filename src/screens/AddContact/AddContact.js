import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Header, TextInput, Gap, Button } from '../../components'
import Styles from './Styles'

const AddContact = ({ navigation }) => {
  const [photo, setPhoto] = useState('')

  return (
    <View style={Styles.screen}>
      <Header label="Add Contact" onBack={() => navigation.goBack()} />
      <View style={Styles.container}>
        <ScrollView>
          <View style={Styles.photo}>
            <TouchableOpacity >
              <View style={Styles.borderPhoto}>
                {photo
                  ? <Image source={photo} style={Styles.photoContainer} />
                  : (
                    <View style={Styles.photoContainer}>
                      <Text style={Styles.addPhoto}>Add Photo</Text>
                    </View>
                  )}

              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label='First Name'
            placeholder='Type your first name'
          // value={form.name}
          // onChangeText={(value) => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInput
            label='Last Name'
            placeholder='Type your last name'
          // value={form.name}
          // onChangeText={(value) => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInput
            label='Age'
            placeholder='Type your age'
          // value={form.name}
          // onChangeText={(value) => setForm('name', value)}
          />
          <Gap height={24} />
          <Button text='Save' />
        </ScrollView>
      </View>
    </View>
  )
}

export default AddContact