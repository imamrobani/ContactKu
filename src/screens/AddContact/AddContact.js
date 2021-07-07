import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { Header, TextInput, Gap, Button } from '../../components'
import { useForm } from '../../hooks'
import { createContact } from '../../redux/action'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import Styles from './Styles'
import { showMessage } from '../../utils'

const AddContact = ({ navigation }) => {
  const dispatch = useDispatch()
  const [form, setForm] = useForm({
    firstName: '',
    lastName: '',
    age: '',
    photo: ''
  })

  const onSave = () => {
    // console.log('form: ', form)
    dispatch(createContact(form, navigation))
  }

  const onGallery = () => {
    launchImageLibrary({
      quality: 1,
      maxWidth: 640,
      maxHeight: 480,
      includeBase64: true
    }, res => {
      // console.log('res: ', res)
      // console.log('resURI: ', res.assets[0])
      if (res.didCancel || res.errorCode) {
        showMessage(`you didn't choose a photo`)
      } else {
        const base64 = `data:image/jpg;base64,${res.assets[0].base64}`
        setForm('photo', base64)
      }
    })
  }

  return (
    <View style={Styles.screen}>
      <Header label="Add Contact" onBack={() => navigation.goBack()} />
      <View style={Styles.container}>
        <ScrollView>
          <View style={Styles.photo}>
            <TouchableOpacity onPress={onGallery}>
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