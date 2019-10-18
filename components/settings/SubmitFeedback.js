import React, {useState} from 'react'
import firebase from "../../firebase"
import {KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native'
import {Input, Text, Label, Item, H1, H3} from 'native-base'
import {Link} from 'react-router-native'
import {connect} from 'react-redux'

import Icon from '../Icon'
import {signUpDisplayName} from '../../actions'

function SubmitFeedback(props) {

  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    console.log(feedback)
  };

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

      <H1>Submit Feedback</H1>

      <H3>What Can We Improve?</H3>
      <View>
        <TextInput
          // style={styles.textInput}
          editable
          maxLength={500}
        />
      </View>

      <Link to='/settings'>
        <H3>Submit</H3>
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
  },
  textInput: {
    textAlign: 'left'
  }
});


export default SubmitFeedback;
