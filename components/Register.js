import React, { useState } from 'react'
import firebase from "../firebase"
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Text } from 'react-native-elements'
import { Link } from 'react-router-native'
import { connect } from 'react-redux'

import Icon from './Icon'
import { signUpDisplayName } from '../actions'

function Register(props) {

    const [userName, setUserName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [passwordConfirm, setPasswordConfirm] = useState(' ')
    const [focus, setFocus] = useState([false, false, false, false])

    const userRef = firebase.database().ref('users'),

        handleChangeUserName = text => setUserName(text),

        handleChangeEmail = text => setEmail(text),

        handleChangePassword = text => setPassword(text),

        handleChangePasswordConfirm = text => setPasswordConfirm(text),

        handleSubmit = _ => {
            if (password === passwordConfirm) {
                props.signUpDisplayName(userName)

                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(createdUser => {
                        createdUser.user
                            .updateProfile({ displayName: userName })
                            .then(_ => {
                                userRef
                                    .child(createdUser.user.uid)
                                    .set({ name: createdUser.user.displayName })
                                    .then(_ => {
                                        setUserName(' ')
                                        setEmail(' ')
                                        setPassword(' ')
                                        setPasswordConfirm(' ')
                                    })
                            })
                    })
                    .catch(err => console.error(err))
            } else alert("Passwords don't match.")

        },

        isFieldValid = type => {
            switch (type) {
                case 'username':
                    return userName.length ? '' : 'Username is required.'
                case 'email':
                    return email.length ? '' : 'Email is required.'
                case 'password':
                    return password.length ? '' : 'Password is required.'
                default:
                    return passwordConfirm.length ? '' : 'Password Confirmation is required.'
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
                name='username'
                label="Username"
                labelStyle={{
                    transform: [{ translateY: focus[0] ? 0 : 35 }],
                    color: focus[0] ? 'black' : 'gray',
                }}
                style={styles.input}
                onChangeText={handleChangeUserName}
                containerStyle={{ marginVertical: 15 }}
                inputStyle={{ marginVertical: 10 }}
                onFocus={() => setFocus([true, email.length > 1, password.length > 1, passwordConfirm.length > 1])}
                onBlur={() => setFocus([userName.length > 1, email.length > 1, password.length > 1, passwordConfirm.length > 1])}
                errorMessage={isFieldValid('username')}
            />

            <Input
                name='email'
                label="Email"
                labelStyle={{
                    transform: [{ translateY: focus[1] ? 0 : 35 }],
                    color: focus[1] ? 'black' : 'gray',
                }}
                style={styles.input}
                onChangeText={handleChangeEmail}
                containerStyle={{ marginVertical: 15 }}
                inputStyle={{ marginVertical: 10 }}
                onFocus={() => setFocus([userName.length > 1, true, password.length > 1, passwordConfirm.length > 1])}
                onBlur={() => setFocus([userName.length > 1, email.length > 1, password.length > 1, passwordConfirm.length > 1])}
                errorMessage={isFieldValid('email')}
            />

            <Input
                name='password'
                label="Password"
                labelStyle={{
                    transform: [{ translateY: focus[2] ? 0 : 35 }],
                    color: focus[2] ? 'black' : 'gray',
                }}
                style={styles.input}
                onChangeText={handleChangePassword}
                secureTextEntry={true}
                containerStyle={{ marginVertical: 15 }}
                inputStyle={{ marginVertical: 10 }}
                onFocus={() => setFocus([userName.length > 1, email.length > 1, true, passwordConfirm > 1])}
                onBlur={() => setFocus([userName.length > 1, email.length > 1, password.length > 1, passwordConfirm.length > 1])}
                errorMessage={isFieldValid('password')}
            />

            <Input
                name='passwordConfirm'
                label="Confirm Password"
                labelStyle={{
                    transform: [{ translateY: focus[3] ? 0 : 35 }],
                    color: focus[3] ? 'black' : 'gray',
                }}
                style={styles.input}
                secureTextEntry={true}
                onChangeText={handleChangePasswordConfirm}
                containerStyle={{ marginVertical: 15 }}
                inputStyle={{ marginVertical: 10 }}
                onFocus={() => setFocus([userName.length > 1, email.length > 1, password.length > 1, true])}
                onBlur={() => setFocus([userName.length > 1, email.length > 1, password.length > 1, passwordConfirm.length > 1])}
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

export default connect(state => ({ ...state }), { signUpDisplayName })(Register)
