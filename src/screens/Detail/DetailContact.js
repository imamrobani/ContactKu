import React, { useState } from 'react'
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { Header, Button, TextInput, Gap, DeleteModal } from '../../components'
import { useForm } from '../../hooks'
import { deleteContact, editContact } from '../../redux/action'
import Styles from './Styles'


const DetailContact = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const [isDelete, setIsDelete] = useState(false)
  const [photo, setPhoto] = useState('')
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
            <TouchableOpacity >
              <View style={Styles.borderPhoto}>
                {/* {photo
                  ? <Image source={photo} style={Styles.photoContainer} />
                  : (
                    <View style={Styles.photoContainer}>
                      <Text style={Styles.addPhoto}>Add Photo</Text>
                    </View>
                  )} */}
                <Image source={{ uri: form.photo }} style={Styles.photoContainer} />
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