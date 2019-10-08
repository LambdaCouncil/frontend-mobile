import React, { useState } from 'react'
import firebase from "../firebase"
import { Button, View, Text, TextInput } from 'react-native'

function Register(props) {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

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
        <View>
            <Text>Register for LDSlack</Text>
            <TextInput
                name="username"
                placeholder={"Username"}
                onChangeText={handleChangeUser}
                value={userName}
                type="text"
            />
            <TextInput
                name="email"
                placeholder={"Email"}
                onChangeText={handleChangeEmail}
                value={email}
                type="text"
            />
            <TextInput
                name="password"
                placeholder={"Password"}
                onChangeText={handleChangePassword}
                value={password}
                type="password"
            />
            <TextInput
                name="passwordConfirm"
                placeholder={"Confirm Password"}
                onChangeText={handleChangePasswordConfirm}
                value={passwordConfirm}
                type="password"
            />
            <Button color="green" title='Sumbit' onPress={handleSubmit} />
            <Text>Already wearing the undapants?</Text>
        </View>
    )
}



export default Register