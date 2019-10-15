import React, { useState } from 'react'
import firebase from "../firebase"
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Text } from 'react-native-elements'
import { Link } from 'react-router-native'

import Icon from './Icon'

function Register(props) {

    const [userName, setUserName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [ldsOrg, setLdsOrg] = useState(' ')
    const [focus, setFocus] = useState([false, false, false])

    const userRef = firebase.database().ref('users'),

        handleChangeEmail = text => setEmail(text),

        handleChangePassword = text => setPassword(text),

        handleChangeLdsOrg = text => setLdsOrg(text),

        handleSubmit = _ => firebase
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
                                setUserName(' ')
                                setEmail(' ')
                                setPassword(' ')
                                setLdsOrg(' ')
                            })
                    })
            })
            .catch(err => console.error(err)),

        isFieldValid = type => {
            switch (type) {
                case 'email':
                    return email.length > 1 ? '' : 'Email is required.'
                case 'password':
                    return password.length > 1 ? '' : 'Password is required.'
                default:
                    return ldsOrg.length > 1 ? '' : 'LDS Username is required.'
            }
        }

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
                label="Email"
                labelStyle={{
                    translateY: focus[0] ? 0 : 35,
                    color: focus[0] ? 'black' : 'gray',
                }}
                style={styles.input}
                onChangeText={handleChangeEmail}
                containerStyle={{ marginVertical: 15 }}
                inputStyle={{ marginVertical: 10 }}
                onFocus={() => setFocus([true, false, false])}
                onBlur={() => setFocus([false, false, false])}
                errorMessage={isFieldValid('email')}
            />

            <Input
                label="Password"
                labelStyle={{
                    translateY: focus[1] ? 0 : 35,
                    color: focus[1] ? 'black' : 'gray',
                }}
                style={styles.input}
                onChangeText={handleChangePassword}
                secureTextEntry={true}
                containerStyle={{ marginVertical: 15 }}
                inputStyle={{ marginVertical: 10 }}
                onFocus={() => setFocus([false, true, false])}
                onBlur={() => setFocus([false, false, false])}
                errorMessage={isFieldValid('password')}
            />

            <Input
                label="LDS.org Username"
                labelStyle={{
                    translateY: focus[2] ? 0 : 35,
                    color: focus[2] ? 'black' : 'gray',
                }}
                style={styles.input}
                onChangeText={handleChangeLdsOrg}
                value={ldsOrg}
                containerStyle={{ marginVertical: 15 }}
                inputStyle={{ marginVertical: 10 }}
                onFocus={() => setFocus([false, false, true])}
                onBlur={() => setFocus([false, false, false])}
                errorMessage={isFieldValid()}
            />

            <Text h3 h3Style={{ color: 'green' }} onPress={handleSubmit}>Sign Up</Text>

        </KeyboardAvoidingView>

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
    headerText: {
        padding: 10
    },
    input: {
        width: '50%',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    }
})

export default Register
