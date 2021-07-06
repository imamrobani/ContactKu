import React, { useState } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Header, Button, TextInput, Gap } from '../../components'
import { Colors } from '../../consts'
import Styles from './Styles'


const DetailContact = ({ navigation }) => {
  const [photo, setPhoto] = useState('')

  return (
    <View style={Styles.screen}>
      <Header
        label="Detail Contact"
        onBack={() => navigation.goBack()}
        icon={
          <View style={Styles.buttonHeader}>
            <Button text="Update" />
          </View>
        }
      />
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
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={Styles.deleteText}>Delete Contact</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export default DetailContact