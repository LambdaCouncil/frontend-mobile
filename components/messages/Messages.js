// Dependencies
import React, { useState, useEffect } from 'react'
import { View, Content, Footer, Header, List, ListItem, Container, Text, Col } from 'native-base'
import { Link, withRouter } from 'react-router-native'
import { StyleSheet } from 'react-native'

// Components
import MessagesHeader from "./MessageHeader"
import MessageForm from "./MessagesForm"
import Message from "./Message"
import variables from '../../native-base-theme/variables/commonColor'
import firebase from '../../firebase'
import Icon from '../Icon'


const Messages = (props, { currentChannel, currentUser }) => {

  const messagesRef = firebase.database().ref('messages')
  const [channel, setChannel] = useState(currentChannel)
  const [user, setUser] = useState(currentUser)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [messagesLoading, setMessagesLoading] = useState(true)
  const [numUniqueUsers, setNumUniqueUsers] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  // The Barndon Constant
  // 2019 Colorized
  const [barndon, setBarndon] = useState(false)

  useEffect(() => {
    if (!barndon && (channel && user)) {
      addMessageListener(channel.id)
    }
  }, [messages.length])


  const addMessageListener = channelId => {
    let loadedMessages = []
    messagesRef.child(channelId).on('child_added', async snap => {
      await loadedMessages.push(snap.val())
      // messages.length > 0 &&
      setMessages(loadedMessages)
      // console.log('loadedMessages', loadedMessages)
      // console.log('messages', messages)
      setMessagesLoading(false)
    })
    countUsers(loadedMessages)
  }

  const handleSearchChange = e => {
    setSearchTerm(e.target.value)
    setSearchLoading(true)
  }

  const handleSearchMessages = () => {
    const channelMessages = [...messages]
    const regex = new RegExp(searchTerm, 'gi')
    const searchResults = channelMessages.reduce((acc, message) => {
      if (message.content && message.content.match(regex)) {
        acc.push(message)
      }
      return acc
    }, [])
    setSearchResults(searchResults)
  }

  const countUsers = (messages) => {
    const uniqueUsers = messages.reduce((acc, message) => {
      if (!acc.includes(message.user.name)) {
        acc.push(message.user.name)
      }
      return acc
    }, [])
    const plural = uniqueUsers.length > 1 || uniqueUsers.length === 0
    const numUniqueUsers = `${uniqueUsers.length} user${plural ? 's' : ''}`
    setNumUniqueUsers(numUniqueUsers)
  }

  const displayMessages = messages => {
    messages.length > 0 && messages.map(message => (
      <Message
        key={message.timeStamp}
        message={message}
        user={user}
      />
    ))
  }

  const displayChannelName = channel => channel ? `#${channel.name}` : ''

  return (
    <Container contentContainerStyle={style.screen}>

      <Link onPress={() => props.history.goBack()} style={styles.link}>
        <Icon
          name='arrow-back'
          color={variables.councils.text.greal}
          style={styles.backButton}
        />
      </Link>

      <Header>
        <Text>Header</Text>
        {/* <MessagesHeader
          channelName={displayChannelName(channel)}
          numOfUsers={numUniqueUsers}
          handleSearchChange={handleSearchChange}
        /> */}
      </Header>



      {/* 
          List is similar in appearance to the Discussions section in the Style Guide. 
          Alternatively, we could use Card for each message.
          see: (Zeplin: 06 Discussions - 1)
        */}
      <Content>
        <View>

          {/* <List className='messages'>
          {displayMessages(messages)}
          {messages.map(message => (
            <ListItem>
              <Message message={message}
                user={message.user}
                key={message.timeStamp} />
            </ListItem>
          ))}
        </List> */}

        </View>
      </Content>
      {/* 
          MessageForm doesn't exist in the app, instead there is a + button 
          on the right side of the header which opens an ActionSheet
          see: (Zeplin: 06 Discussions - 1, 06 Discussions - 2) 
        */}


      <View>
        <MessageForm
          messagesRef={messagesRef} currentChannel={currentChannel} currentUser={currentUser}
        />
      </View>
    </Container>
  )
}

const styles = {
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
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    height: '100%',
  },
  footer: {
    flexDirection: 'row'
  }
})

export default withRouter(Messages)
