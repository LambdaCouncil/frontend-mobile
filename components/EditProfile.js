import React, {useState} from 'react'
import firebase from "../firebase"
import {KeyboardAvoidingView, StyleSheet} from 'react-native'
import {Input, Text, Label, Item, H1, H3} from 'native-base'
import {Link} from 'react-router-native'
import {connect} from 'react-redux'

import Icon from './Icon'
import {signUpDisplayName} from '../actions'

function EditProfile(props) {

  const [firstName, setFirstName] = useState(' ')
  const [lastName, setLastName] = useState(' ')
  const [calling, setCalling] = useState(' ')
  const [email, setEmail] = useState(' ')
  const [phone, setPhone] = useState(' ')

  const userRef = firebase.database().ref('users');

  const handleFirstName = text => setFirstName(text);

  const handleLastName = text => setLastName(text);

  const handleChangeCalling = text => setCalling(text);

  const handleChangeEmail = text => setEmail(text);

  const handleChangePhone = text => setPhone(text);

  const handleSubmit = () => {
    console.log('Info updated')
  };

  const changePassword = () => {
    console.log('Password Changed')};

  const deleteAccount = () => {
    console.log('Account Deleted')};

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

      <H1>Edit Profile</H1>

      <Text>Upload Photo</Text>


      <Item floatingLabel style={styles.inputItem}>
        <Label>First Name</Label>
        <Input onChangeText={handleFirstName}/>
      </Item>

      <Item floatingLabel style={styles.inputItem}>
        <Label>Last Name</Label>
        <Input onChangeText={handleLastName}/>
      </Item>

      <Item floatingLabel style={styles.inputItem}>
        <Label>Calling</Label>
        <Input onChangeText={handleChangeCalling}/>
      </Item>

      <Item floatingLabel style={styles.inputItem}>
        <Label>Email</Label>
        <Input
          onChangeText={handleChangeEmail}
        />
      </Item>

      <Item floatingLabel style={styles.inputItem}>
        <Label>Phone</Label>
        <Input
          onChangeText={handleChangePhone}
        />
      </Item>

      <Link to='/changepassword'>
        <H3>Change Password</H3>
      </Link>
      <H3 onPress={deleteAccount}>Delete Account</H3>
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


export default EditProfile;
