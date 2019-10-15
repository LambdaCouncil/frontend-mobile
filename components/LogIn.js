import React, { useState } from 'react'
import { Button, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Input, Text } from 'react-native-elements'
import { Link } from 'react-router-native'

import firebase from "../firebase"

import Icon from './Icon'

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)

    const handleChangeEmail = text => setEmail(text)

    const handleChangePassword = text => setPassword(text)

    const handleSubmit = _ => {
        if (isFormValid(email, password)) {
            setErrors([])
            setLoading(true)
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(signedInUser => {
                    console.log(signedInUser)
                    setEmail('')
                    setPassword('')
                })
                .catch(err => {
                    console.log(err)
                    setErrors((errors => errors.concat(err)))
                    setLoading(false)
                })
        }
    }

    const isFormValid = _ => email && password

    const handleInputError = (errors, inputName) => errors.some(error =>
        error.message.toLocaleLowerCase().includes(inputName))
        ? "error" : ""

    const displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)

    return (

        <KeyboardAvoidingView
            style={styles.inputContainer}
            behavior='padding'
        >

            <Text h2>Log In</Text>

            <Text h4>Log into your Councils account.</Text>

            <Input
                name="email"
                style={styles.input}
                placeholder='Email'
                onChangeText={handleChangeEmail}
                value={email}
                type='email'
                inputContainerStyle={{ marginVertical: 15 }}
                inputStyle={{ marginVertical: 10 }}
            />

            <Input
                name="password"
                style={styles.input}
                placeholder="Password"
                onChangeText={handleChangePassword}
                value={password}
                type="password"
                secureTextEntry={true}
                inputContainerStyle={{ marginVertical: 15 }}
                inputStyle={{ marginVertical: 10 }}
            />

            <Text h4 h4Style={{ color: 'green' }} onPress={handleSubmit}>Log In</Text>

            <View>
                <Text>Don't have an account?</Text>
                <Link to='/register' style={styles.link}>
                    <Text>Register Here</Text>
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
        alignItems: 'center',
        marginTop: '50%'
    },
    headerText: {
        padding: 10
    },
    link: {
        flex: 1
    }
})

export default Login
