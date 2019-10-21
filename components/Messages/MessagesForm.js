import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Container, Content, Item, View } from 'native-base'
import { Text } from 'react-native'
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
                <Item>
                    <Input
                        name='message'
                        onChange={handleChange}
                        value={message}
                        label={<Button icon={'add'} />}
                        labelPosition='left'
                    // className={
                    //             errors.some(error => error.includes("message"))
                    //                 ? 'error'
                    //                 : ''
                    //         }
                    //      placeholder='Write your message'
                    />
                </Item>
                <Button>
                    <Text>Add Reply</Text>
                </Button>
                <Button>
                    <Text>Upload Media</Text>
                </Button>
            </Form>

        </View>
    );
};

export default MessageForm;