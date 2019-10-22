import React, { useState } from 'react'

import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Text, H1, ListItem, CheckBox, Body, Container, Header, Content, View } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { connect } from 'react-redux'

import Icon from '../Icon'


function PushNotifications(props) {

  const [checked, setChecked] = useState({
    all: false,
    agendas: false,
    private: false,
    group: false,
    assignments: false,
    files: false,
    account: false,
    donations: false
  })

  const allCheck = _ => {

    if (!checked.all) {
      setChecked({
        all: true,
        agendas: true,
        private: true,
        group: true,
        assignments: true,
        files: true,
        account: true,
        donations: true
      })
    } else {
      setChecked({
        all: false,
        agendas: false,
        private: false,
        group: false,
        assignments: false,
        files: false,
        account: false,
        donations: false
      })
    }

  }

  return (

    <View containerAllRoot>

      {/*<Link onPress={() => props.history.goBack()} style={styles.link}>*/}
      {/*  <Icon*/}
      {/*    name='arrow-back'*/}
      {/*    color='green'*/}
      {/*    style={styles.backButton}*/}
      {/*  />*/}
      {/*</Link>*/}

      <H1>Push Notifications</H1>

      <Container>
        <Header />
        <Content>
          <ListItem>

            <CheckBox
              checked={checked.all}
              onPress={() => {
                setChecked({ all: !checked.all })
                allCheck()
              }}
            />
            <Body>
              <Text>All Activity</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.agendas}
              onPress={() => setChecked({ ...checked, agendas: !checked.agendas })}
            />
            <Body>
              <Text>Agendas</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.private}
              onPress={() => setChecked({ ...checked, private: !checked.private })}
            />
            <Body>
              <Text>Private Discussions</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.group}
              onPress={() => setChecked({ ...checked, group: !checked.group })}
            />
            <Body>
              <Text>Group Discussions</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.assignments}
              onPress={() => setChecked({ ...checked, assignments: !checked.assignments })}
            />
            <Body>
              <Text>Assignments</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.files}
              onPress={() => setChecked({ ...checked, files: !checked.files })}
            />
            <Body>
              <Text>Files</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.account}
              onPress={() => setChecked({ ...checked, account: !checked.account })}
            />
            <Body>
              <Text>Account</Text>
            </Body>
          </ListItem>

          <ListItem>
            <CheckBox
              checked={checked.donations}
              onPress={() => setChecked({ ...checked, donations: !checked.donations })}
            />
            <Body>
              <Text>Donations</Text>
            </Body>
          </ListItem>

        </Content>
      </Container>
      <Link onPress={() => props.history.goBack()}>
        <Icon
          name='arrow-back'
          color='green'
          style={styles.backButton}
        />
      </Link>
    </View>

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
  header: {
    marginTop: 20
  }
})


export default withRouter(PushNotifications)
