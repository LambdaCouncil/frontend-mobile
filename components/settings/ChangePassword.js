import React, { useState } from 'react'
import firebase from "../../firebase"
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Text, Label, Item, H1, H3 } from 'native-base'
import { Link } from 'react-router-native'
import { connect } from 'react-redux'

import Icon from '../Icon'
import { signUpDisplayName } from '../../actions'

function ChangePassword(props) {

  const [oldPassword, setOldPassword] = useState(' ')
  const [newPassword, setNewPassword] = useState(' ')
  const [confirmNewPassword, setConfirmNewPassword] = useState(' ')

  const userRef = firebase.database().ref('users');

  const handleOldPassword = text => setOldPassword(text);

  const handleNewPassword = text => setNewPassword(text);

  const handlePasswordConfirm = text => setConfirmNewPassword(text);

  const changePassword = _ => console.log('Password Changed')

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

      <H1>Change Password</H1>

      <Item floatingLabel style={styles.inputItem}>
        <Label>Old Password</Label>
        <Input
          onChangeText={handleOldPassword}
          secureTextEntry={true}
        />
      </Item>

      <Item floatingLabel style={styles.inputItem}>
        <Label>New Password</Label>
        <Input
          onChangeText={handleNewPassword}
          secureTextEntry={true}
        />
      </Item>

      <Item floatingLabel style={styles.inputItem}>
        <Label>Confirm New Password</Label>
        <Input
          onChangeText={handlePasswordConfirm}
          secureTextEntry={true}
        />
      </Item>

      <Link to='/editprofile'>
        <H3>Save</H3>
      </Link>

      <Link to='/home'>
        <H3>Cancel</H3>
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


export default ChangePassword;
