import React, { useState } from 'react'
import firebase from "../firebase"
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
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

            <Link to='/' style={styles.link}>
                <Icon
                    name='arrow-back'
                    color='green'
                    style={styles.backButton}
                />
            </Link>

            <Text h2 h2Style={styles.headerText}>Sign Up</Text>

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
        height: '100%',
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        marginTop: '50%',
        padding: 10
    },
    link: {
        width: '100%',
        height: 50
    },
    backButton: {
        position: 'absolute',
        top: 25,
        left: 5,
        fontSize: 50
    }
})

export default Register
