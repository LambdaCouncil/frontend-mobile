import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Container, Content, Item, View, Footer } from 'native-base'
import { Text, StyleSheet } from 'react-native'
import firebase from '../../firebase'


const MessageForm = ({ messagesRef, currentChannel, currentUser }) => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [messagesLoading, setMessagesLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [channel, setChannel] = useState(currentChannel);
    const [user, setUser] = useState(currentUser);
    const [errors, setErrors] = useState([]);


    const handleChange = (e) => {
        setMessage(e.target.value)
    };

    const createMessage = () => {
        return {
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            user: {
                id: user.uid,
                name: user.displayName,
                avatar: user.photoURL
            },
            content: message
        };
    };


    const sendMessage = () => {
        if (message) {
            setLoading(true);
            messagesRef
                .child(channel.id)
                .push()
                .set(createMessage())
                .then(() => {
                    setLoading(false);
                    setMessage('');
                    setErrors([]);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                    setErrors((errors => errors.concat(err)));
                })
        } else {
            setErrors((errors => errors.concat({ message: 'Add a message' })));
        }
    };


    return (

        <View>
            <Form>
                <View>
                    <Item >
                        <Input
                            style={style.input}
                            name='message'
                            onChange={handleChange}
                            value={message}
                            placeholder='Write your message'
                        />
                    </Item>
                </View>
                <View style={style.screen}>
                    <Button transparent style={style.button1} onPress={() => console.log('@')}>
                        <Text style={style.text}>@</Text>
                    </Button>
                    <Button transparent style={style.button2} onPress={() => console.log('Message Sent')}>
                        <Text style={style.text}> Send Message</Text>
                    </Button>
                </View>
            </Form>
        </View>

    );
};

const style = StyleSheet.create({
    screen: {
        flexDirection: 'row'
    },
    button1: {
        width: '50%',
        justifyContent: 'center'

    },
    button2: {
        width: '50%',
        justifyContent: 'center'

    },
    text: {
        color: '#288365'
    },

    input: {
        borderWidth: 0.5,
        borderColor: 'black'
    }

})

export default MessageForm;