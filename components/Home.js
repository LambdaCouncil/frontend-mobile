import React, { useState, useEffect } from 'react'
import firebase from "../firebase"
import { Button, View, StyleSheet, Text, TextInput } from 'react-native'

import Icon from './Icon';

function Register(props) {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    useEffect(_ => {
        setTimeout(_ => props.history.push("/home"), 1500)
    }, [])

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
    const handleChangePasswordConfirm = (e) => {
        setPasswordConfirm(e)
        console.log('passwordConfirm', passwordConfirm)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
        <View style={styles.inputContainer}>
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
            <Button color="green" title='Submit' onPress={handleSubmit} />
            <Text>Already wearing the undapants?</Text>
        </View>
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
        padding: 10
    }
})

export default Register