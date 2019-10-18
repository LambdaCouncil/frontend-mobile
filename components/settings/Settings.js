import React, {useState} from 'react'

import {KeyboardAvoidingView, StyleSheet} from 'react-native'
import {Input, Text, Label, Item, H1, H3 } from 'native-base'
import {Link} from 'react-router-native'
import {connect} from 'react-redux'

import Icon from '../Icon'
import {signUpDisplayName} from '../../actions'

function Settings(props) {

  return (

    <KeyboardAvoidingView
      style={styles.inputContainer}
      behavior='padding'
    >

      <Link to='/' style={styles.link}>
        <Icon
          name='arrow-back'
          color='green'
          style={styles.backButton}
        />
      </Link>

      <H1>Settings</H1>

      <Link to='/editprofile'>
        <H3>Edit Profile</H3>
      </Link>
      <Link to='/notifications'>
        <H3>Push Notifications</H3>
      </Link>
      <Link to='/feedback'>
        <H3>Submit Feedback</H3>
      </Link>
      <Link to='/rate'>
        <H3>Rate Councils</H3>
      </Link>
      <Link to='/about'>
        <H3>About</H3>
      </Link>


    </KeyboardAvoidingView>

  )
}


const styles = StyleSheet.create({
  inputContainer: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  link: {
    position: 'absolute',
    top: 25,
    left: 5,
    width: '100%',
    height: 50
  },
  backButton: {
    fontSize: 50
  },
  inputItem: {
    marginVertical: 10
  }
});


export default Settings;
