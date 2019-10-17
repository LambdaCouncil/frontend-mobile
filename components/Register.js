import React, { useState } from 'react'
import firebase from "../firebase"
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Input, Text, Label, Item, H1, H3 } from 'native-base'
import { Link } from 'react-router-native'
import { connect } from 'react-redux'

import Icon from './Icon'
import { signUpDisplayName } from '../actions'

function Register(props) {

    const [userName, setUserName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [passwordConfirm, setPasswordConfirm] = useState(' ')

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

            <H1>Sign Up</H1>

            <Text>Create Councils account.</Text>


            <Item floatingLabel style={styles.inputItem}>
                <Label>Username</Label>
                <Input onChangeText={handleChangeUserName} />
            </Item>

            <Item floatingLabel style={styles.inputItem}>
                <Label>Email</Label>
                <Input onChangeText={handleChangeEmail} />
            </Item>

            <Item floatingLabel style={styles.inputItem}>
                <Label>Password</Label>
                <Input
                    onChangeText={handleChangePassword}
                    secureTextEntry={true}
                />
            </Item>

            <Item floatingLabel style={styles.inputItem}>
                <Label>Confirm Password</Label>
                <Input
                    secureTextEntry={true}
                    onChangeText={handleChangePasswordConfirm}
                />
            </Item>

            <H3 onPress={handleSubmit}>Sign Up</H3>

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
    inputItem: {
        marginVertical: 10
    }
})

export default connect(state => ({ ...state }), { signUpDisplayName })(Register)
