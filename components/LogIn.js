import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Text } from 'react-native-elements'
import { Link } from 'react-router-native'

import firebase from "../firebase"
import Icon from './Icon'

function Login(props) {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [focus, setFocus] = useState([false, false])

    const handleChangeEmail = text => setEmail(text),

        handleChangePassword = text => setPassword(text),

        handleSubmit = _ => {
            if (isFormValid()) {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(signedInUser => {
                        console.log(signedInUser)
                        setEmail(' ')
                        setPassword(' ')
                    })
                    .catch(err => console.error(err))
            }
        },

        isFormValid = _ => email.length > 1 && password.length > 1,

        isFieldValid = field => {
            if (field) return email.length ? '' : 'Email is required to sign in.'
            else return password.length ? '' : 'Password is required to sign in.'
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

            <Text h2 h2Style={styles.headerText}>Log In</Text>

            <Text h4>Log into your Councils account.</Text>

            <Input
                name="email"
                style={styles.input}
                label='Email'
                labelStyle={{
                    transform: [{ translateY: focus[0] ? 0 : 35 }],
                    color: focus[0] ? 'black' : 'gray',
                }}
                onChangeText={handleChangeEmail}
                containerStyle={{ marginVertical: 15 }}
                inputStyle={{ marginVertical: 10 }}
                onFocus={() => setFocus([true, password.length > 1])}
                onBlur={() => setFocus([email.length > 1, password.length > 1])}
                errorMessage={isFieldValid(true)}
            />

            <Input
                name="password"
                style={styles.input}
                label="Password"
                labelStyle={{
                    transform: [{ translateY: focus[0] ? 0 : 35 }],
                    color: focus[1] ? 'black' : 'gray',
                }}
                onChangeText={handleChangePassword}
                secureTextEntry={true}
                containerStyle={{ marginVertical: 15 }}
                inputStyle={{ marginVertical: 10 }}
                onFocus={() => setFocus([email.length > 1, true])}
                onBlur={() => setFocus([email.length > 1, password.length > 1])}
                errorMessage={isFieldValid()}
            />

            <Text h4 h4Style={{ color: 'green' }} onPress={handleSubmit}>Log In</Text>

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
    },
})

export default Login
