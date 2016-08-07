import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default (props) => {
  console.log(props)
  return (
    <ScrollView>
      <Text>PROFILE</Text>
      <Text onPress={Actions.home}>go home you're drunk</Text>
      <Text onPress={Actions.editProfile}>EDIT</Text>
    </ScrollView>
  )
}
