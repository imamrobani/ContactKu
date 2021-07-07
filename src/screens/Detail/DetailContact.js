import React, { useState } from 'react'
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { useDispatch } from 'react-redux'
import { Header, Button, TextInput, Gap, DeleteModal } from '../../components'
import { useForm } from '../../hooks'
import { deleteContact, editContact } from '../../redux/action'
import { showMessage } from '../../utils'
import { SharedElement } from 'react-navigation-shared-element'
import Styles from './Styles'

const DetailContact = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const [isDelete, setIsDelete] = useState(false)
  const [form, setForm] = useForm({
    firstName: route.params.firstName,
    lastName: route.params.lastName,
    age: route.params.age,
    photo: route.params.photo
  })

  const onUpdate = () => {
    const params = {
      id: route.params.id,
      form
    }
    // console.log('params: ', params)
    dispatch(editContact(params, navigation))
  }

  const onDelete = () => {
    setIsDelete(true)
  }

  const onDeleteContact = () => {
    setIsDelete(false)
    setTimeout(() => {
      dispatch(deleteContact(route.params.id, navigation))
    }, 500);
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
      <Header
        label="Detail Contact"
        onBack={() => navigation.goBack()}
        icon={
          <View style={Styles.buttonHeader}>
            <Button text="Update" onPress={onUpdate} />
          </View>
        }
      />
      <View style={Styles.container}>
        <ScrollView>
          <View style={Styles.photo}>
            <SharedElement id={`item.${route.params.id}.image`}>
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
            </SharedElement>
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
            value={form.age.toString()}
            keyboardType='numeric'
            onChangeText={(value) => setForm('age', value)}
          />
          <Gap height={24} />
          <TouchableOpacity activeOpacity={0.7} onPress={onDelete}>
            <Text style={Styles.deleteText}>Delete Contact</Text>
          </TouchableOpacity>
        </ScrollView>
        <DeleteModal
          title="Delete Contact"
          label="Are you sure want to delete this contact"
          isVisible={isDelete}
          setIsVisible={setIsDelete}
          onDelete={onDeleteContact}
        />
      </View>
    </View>
  )
}

export default DetailContact