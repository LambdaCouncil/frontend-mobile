import React, { useState } from 'react'
import firebase from "../firebase"
import { Button, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Input, Text } from 'react-native-elements'
import { Link } from 'react-router-native'

import Icon from './Icon'

function Register(props) {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ldsOrg, setLdsOrg] = useState('')

    const userRef = firebase.database().ref('users')

    const handleChangeEmail = text => setEmail(text)

    const handleChangePassword = text => setPassword(text)

    const handleChangeLdsOrg = text => setLdsOrg(text)

    const handleSubmit = _ => firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(createdUser => {
            console.log('createdUser', createdUser)
            createdUser.user.updateProfile({ displayName: userName })
                .then(_ => {
                    userRef.child(createdUser.user.uid).set({
                        name: createdUser.displayName
                    })
                        .then(_ => {
                            setUserName('')
                            setEmail('')
                            setPassword('')
                            setLdsOrg('')
                        })
                })
        })
        .catch(err => console.log(err))

    return (

        <KeyboardAvoidingView
            style={styles.inputContainer}
            behavior='padding'
        >

            <Text h2>Sign Up</Text>

            <Text h4>Create Councils account.</Text>

            <Input
                placeholder="Email"
                style={styles.input}
                onChangeText={handleChangeEmail}
                value={email}
            />

            <Input
                placeholder="Password"
                style={styles.input}
                onChangeText={handleChangePassword}
                value={password}
                type="password"
                secureTextEntry={true}
            />

            <Input
                placeholder="LDS.org Username"
                style={styles.input}
                onChangeText={handleChangeLdsOrg}
                value={ldsOrg}
            />

            <Text h3 h3Style={{ color: 'green' }} onPress={handleSubmit}>Sign Up</Text>

            <Text>Already wearing da undapants?</Text>

            <View>
                <Link to='/' color='blue'>
                    <Text>Log in</Text>
                </Link>
            </View>

        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    input: {
        width: '50%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        padding: 10,
    }
})

export default Register
