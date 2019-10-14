import React, { useState } from 'react'
import firebase from "../firebase"
import { Button, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { Input } from 'react-native-elements'
import { Link } from 'react-router-native'

import Icon from './Icon'

function Register(props) {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const userRef = firebase.database().ref('users')

    const handleChangeUser = text => setUserName(text)

    const handleChangeEmail = text => setEmail(text)

    const handleChangePassword = text => setPassword(text)

    const handleChangePasswordConfirm = text => setPasswordConfirm(text)

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
                            setPasswordConfirm('')
                        })
                })
        })
        .catch(err => console.log(err))

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

            <Input
                name="username"
                placeholder="Username"
                style={styles.input}
                onChangeText={handleChangeUser}
                value={userName}
                type="text"
            />

            <Input
                name="email"
                placeholder="Email"
                style={styles.input}
                onChangeText={handleChangeEmail}
                value={email}
                type="text"
            />

            <Input
                name="password"
                placeholder="Password"
                style={styles.input}
                onChangeText={handleChangePassword}
                value={password}
                type="password"
            />

            <Input
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
