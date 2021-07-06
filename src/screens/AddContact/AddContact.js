import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { Header, TextInput, Gap, Button } from '../../components'
import { useForm } from '../../hooks'
import { createContact } from '../../redux/action'
import Styles from './Styles'

const AddContact = ({ navigation }) => {
  const dispatch = useDispatch()
  const [photo, setPhoto] = useState('')
  const [form, setForm] = useForm({
    firstName: '',
    lastName: '',
    age: '',
    photo: 'https://source.unsplash.com/random/640480'
  })

  const onSave = () => {
    // console.log('form: ', form)
    dispatch(createContact(form, navigation))
  }


  return (
    <View style={Styles.screen}>
      <Header label="Add Contact" onBack={() => navigation.goBack()} />
      <View style={Styles.container}>
        <ScrollView>
          <View style={Styles.photo}>
            <TouchableOpacity >
              <View style={Styles.borderPhoto}>
                {form.photo
                  ? <Image source={{ uri: form.photo }} style={Styles.photoContainer} />
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
            value={form.firstName}
            onChangeText={(value) => setForm('firstName', value)}
          />
          <Gap height={16} />
          <TextInput
            label='Last Name'
            placeholder='Type your last name'
            value={form.lastName}
            onChangeText={(value) => setForm('lastName', value)}
          />
          <Gap height={16} />
          <TextInput
            label='Age'
            placeholder='Type your age'
            value={form.age}
            keyboardType='numeric'
            onChangeText={(value) => setForm('age', value)}
          />
          <Gap height={24} />
          <Button text='Save' onPress={onSave} />
        </ScrollView>
      </View>
    </View>
  )
}

export default AddContact