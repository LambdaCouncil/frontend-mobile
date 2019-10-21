import React, {useState} from 'react'

import {KeyboardAvoidingView, StyleSheet} from 'react-native'
import {Text, H1, ListItem, CheckBox, Body, Container, Header, Content, View} from 'native-base'
import {Link, withRouter} from 'react-router-native'
import {connect} from 'react-redux'

import Icon from '../Icon'


function PushNotifications(props) {

  const [checked, setChecked] = useState(false)

  const toggleChecked = () => {
    setChecked(!checked)
    console.log('checked', checked)
  }

  return (


    <View containerAllRoot>

      <Link onPress={() => props.history.goBack()} style={styles.link}>
        <Icon
          name='arrow-back'
          color='green'
          style={styles.backButton}
        />
      </Link>

      <H1>Push Notifications</H1>

      <Container>
        <Header />
        <Content>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>All Activity</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Agendas</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Private Discussions</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Group Discussions</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Assignments</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Files</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Account</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Donations</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    </View>
    // </KeyboardAvoidingView>

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
