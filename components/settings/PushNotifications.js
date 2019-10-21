import React, { useState } from 'react'

import { KeyboardAvoidingView, StyleSheet, CheckBox } from 'react-native'
import { Input, Text, Label, Item, H1, H3 } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { connect } from 'react-redux'

import Icon from '../Icon'
import { signUpDisplayName } from '../../actions'

function PushNotifications(props) {

  const [checked, setChecked] = useState(false)

  const toggleChecked = () => {
    setChecked(!checked)
    console.log('checked', checked)
  }

  return (

    <KeyboardAvoidingView
      style={styles.inputContainer}
      behavior='padding'
    >

      <Link onPress={() => props.history.goBack()} style={styles.link}>
        <Icon
          name='arrow-back'
          color='green'
          style={styles.backButton}
        />
      </Link>

      <H1>Push Notifications</H1>

      <CheckBox
        center
        title='All Activity'
        checked={checked}
        onIconPress={toggleChecked}
      />
      <CheckBox
        center
        title='Agendas'
        checked={checked}
        onIconPress={toggleChecked}
      />
      <CheckBox
        center
        title='Private Discussions'
        checked={checked}
        onIconPress={toggleChecked}
      />
      <CheckBox
        center
        title='Group Discussions'
        checked={checked}
        onIconPress={toggleChecked}
      />
      <CheckBox
        center
        title='Assignments'
        checked={checked}
        onIconPress={toggleChecked}
      />
      <CheckBox
        center
        title='Files'
        checked={checked}
        onIconPress={toggleChecked}
      />
      <CheckBox
        center
        title='Account'
        checked={checked}
        onIconPress={toggleChecked}
      />
      <CheckBox
        center
        title='Donations'
        checked={checked}
        onIconPress={toggleChecked}
      />



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
})


export default withRouter(PushNotifications)
