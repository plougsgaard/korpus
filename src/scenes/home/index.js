import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Button, Card, Avatar } from 'react-native-material-design'

import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme
} from 'react-native-material-kit'

import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'

import theme from '../../common/theme'

const FlatButton = MKButton.coloredFlatButton()
  .withText('About')
  .build()

const ColoredFab = MKButton.coloredFab()
  .withStyle(theme.fab)
  .withText('PLUS')
  .build()

const WelcomeCard = () => (
  <View style={theme.cardStyle}>
    <Image
      source={require('../../../img/berries.jpg')}
      style={theme.cardImageStyle}>
    </Image>
    <Text style={{
    ...theme.cardTitleStyle,
    color: 'white'
    }}>Welcome</Text>
    <View style={{ padding : 15 }}>
      <Text style={[theme.cardContentStyle, { padding: 0 }]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
      </Text>
    </View>
    <View style={theme.cardMenuStyle}><Text>X</Text></View>
    <View style={theme.cardActionStyle}>
      <FlatButton />
    </View>
  </View>
)

export default () => {
  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <View style={theme.cardContainer}>
        <WelcomeCard />
      </View>
      <View style={theme.cardContainer}>
        <WelcomeCard />
      </View>
      <Text onPress={Actions.profile}>Link: Profile</Text>
      <Text onPress={Actions.about}>Link: About</Text>
    </ScrollView>
    <ActionButton buttonColor="rgba(231,76,60,1)">
      <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
        <Icon name="md-create" style={theme.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
        <Icon name="md-notifications-off" style={theme.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
        <Icon name="md-done-all" style={theme.actionButtonIcon} />
      </ActionButton.Item>
    </ActionButton>
    </View>
  )
}
