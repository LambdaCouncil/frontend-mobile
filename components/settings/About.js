import React, {useState} from 'react'
import firebase from "../../firebase"
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native'
import {Input, Text, Label, Item, H1, H3} from 'native-base'
import {Link} from 'react-router-native'
import {connect} from 'react-redux'

import Icon from '../Icon'
import {signUpDisplayName} from '../../actions'

function About(props) {


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

      <View>
        <H1>Councils v.1.0</H1>
        <H3>Terms of Use</H3>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc tellus, convallis pharetra
          condimentum eu, sodales eget magna. Maecenas auctor eget diam ac efficitur. Praesent et rhoncus erat, eu
          consequat.</Text>
        <H3>Privacy Policy</H3>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nunc tellus, convallis pharetra
          condimentum eu, sodales eget magna. Maecenas auctor eget diam ac efficitur. Praesent et rhoncus erat, eu
          consequat.</Text>
        <H3>Contect</H3>
        <Text>Email: info@councils.io</Text>
        <Text>Web: councils.io</Text>
      </View>


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
  backButton: {
    fontSize: 50
  },
  inputItem: {
    marginVertical: 10
  }
});


export default About;