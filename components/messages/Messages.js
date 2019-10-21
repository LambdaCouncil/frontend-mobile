// Dependencies
import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { View, Content, Footer, Header, List, ListItem, Container, Text, Col } from 'native-base'

// Components
import MessagesHeader from "./MessageHeader"
import MessageForm from "./MessagesForm"
import Message from "./Message"
import firebase from '../../firebase'


const Messages = ({ currentChannel, currentUser }) => {

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
    <Container padder contentContainerStyle={style.screen}>

      <Header>
        <Text>Header</Text>
        {/* <MessagesHeader
          channelName={displayChannelName(channel)}
          numOfUsers={numUniqueUsers}
          handleSearchChange={handleSearchChange}
        /> */}
      </Header>

      <Content>
     


      {/* 
          List is similar in appearance to the Discussions section in the Style Guide. 
          Alternatively, we could use Card for each message.
          see: (Zeplin: 06 Discussions - 1)
        */}

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

      {/* 
          MessageForm doesn't exist in the app, instead there is a + button 
          on the right side of the header which opens an ActionSheet
          see: (Zeplin: 06 Discussions - 1, 06 Discussions - 2) 
        */}

        </Content>
       
      <Footer style={style.footer}> 
        <Text>Footer</Text>     
        <MessageForm
          messagesRef={messagesRef} currentChannel={currentChannel} currentUser={currentUser}
        />    
      </Footer>

    </Container>
  )
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

export default Messages