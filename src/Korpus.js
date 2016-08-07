import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  Platform
} from 'react-native'

import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux'

import HomeScene from './scenes/home'
import AboutScene from './scenes/about'
import ProfileScene from './scenes/profile'

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null
  }
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64
    style.marginBottom = computedProps.hideTabBar ? 0 : 50
  }
  return style
}

StatusBar.setBarStyle('light-content')

const navigationBarStyle = {
  backgroundColor: '#3498db'
}

const titleStyle = {
  color: 'white',
  fontWeight: 'bold'
}

export default () => {
  return (
    <Router getSceneStyle={getSceneStyle} navigationBarStyle={navigationBarStyle} titleStyle={titleStyle}>
      <Scene key='root' hideNavBar={false} hideTabBar={true}>
        <Scene key='home' component={HomeScene} title='Home' type={ActionConst.RESET} initial={true} />
        <Scene key='about' component={AboutScene} title='About' backTitle='Home' />
        <Scene key='profile' component={ProfileScene} title='Profile' rightTitle='Edit' onRight={()=>Actions.editProfile()}>
          <Scene key='viewProfile' />
          <Scene key='editProfile' editMode
            rightTitle='Save' onRight={()=>Actions.saveProfile()}
            leftTitle='Cancel' onLeft={()=>Actions.viewProfile()} />
          <Scene key='saveProfile' save />
        </Scene>
      </Scene>
    </Router>
  )
}
