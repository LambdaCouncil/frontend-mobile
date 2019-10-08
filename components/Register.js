import React, { useState, useEffect } from 'react'
import firebase from "../firebase"
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Link } from 'react-router-native'

import { useHistory } from "react-router-native"

import Icon from './Icon';

function Register(props) {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    let history = useHistory();

    // useEffect(_ => {
    //     setTimeout(_ => history.push("/home"), 1500)
    // }, [])

    const handleChangeUser = (e) => {
        setUserName(e)
        console.log('userName', userName)
    }
    const handleChangeEmail = (e) => {
        setEmail(e)
        console.log('Email', email)
    }
    const handleChangePassword = (e) => {
        setPassword(e)
        console.log('password', password)
    }

    const handleChangePasswordConfirm = event => setPasswordConfirm(event)

    const handleSubmit = event => {
        event.preventDefault()
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(createdUser => {
                console.log('createdUser', createdUser)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (

        <KeyboardAvoidingView
            style={styles.inputContainer}
            behavior='padding'
        >

            <Icon
                name="beer"
                color="green"
                size={25}
            />

            <Text style={styles.headerText}>Register for LDSlack</Text>

            <TextInput
                name="username"
                placeholder="Username"
                style={styles.input}
                onChangeText={handleChangeUser}
                value={userName}
                type="text"
            />

            <TextInput
                name="email"
                placeholder="Email"
                style={styles.input}
                onChangeText={handleChangeEmail}
                value={email}
                type="text"
            />

            <TextInput
                name="password"
                placeholder="Password"
                style={styles.input}
                onChangeText={handleChangePassword}
                value={password}
                type="password"
            />

            <TextInput
                name="passwordConfirm"
                placeholder="Confirm Password"
                style={styles.input}
                onChangeText={handleChangePasswordConfirm}
                value={passwordConfirm}
                type="password"
            />

            <Button
                color="green"
                title='Submit'
                onPress={handleSubmit}
            />

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
