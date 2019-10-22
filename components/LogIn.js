import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Text, Label, Item, H1, H3 } from 'native-base'
import { Link } from 'react-router-native'

import variables from '../native-base-theme/variables/commonColor'
import firebase from "../firebase"
import Icon from './Icon'

function Login(props) {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

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

        isFormValid = _ => email.length > 1 && password.length > 1

    return (

        <KeyboardAvoidingView
            style={styles.inputContainer}
            behavior='padding'
        >

            <Link to='/' style={styles.link}>
                <Icon
                    name='arrow-back'
                    color={variables.councils.text.greal}
                    style={styles.backButton}
                />
            </Link>

            <H1>Log In</H1>

            <Text>Log into your Councils account.</Text>

            <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={handleChangeEmail} />
            </Item>

            <Item floatingLabel>
                <Label>Password</Label>
                <Input
                    onChangeText={handleChangePassword}
                    secureTextEntry={true}
                />
            </Item>

            <H3 onPress={handleSubmit} submit>Log In</H3>

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
})

export default Login
