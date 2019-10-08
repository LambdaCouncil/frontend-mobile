import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput } from 'react-native'

import firebase from "../firebase"

import Icon from './Icon';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        // console.log('Email', email)
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        // console.log('password', password)
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid(email, password)) {
            setErrors([]);
            setLoading(true);
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(signedInUser => {
                    console.log(signedInUser);
                    setEmail('');
                    setPassword('');
                })
                .catch(err => {
                    console.log(err);
                    setErrors((errors => errors.concat(err)));
                    setLoading(false);
                })

        }
    };

    const isFormValid = () => email && password;

    const handleInputError = (errors, inputName) => {
        return errors.some(error =>
            error.message.toLocaleLowerCase().includes(inputName))
            ? "error" : ""
    };

    const displayErrors = (errors) => errors.map((error, i) => <p key={i}>{error.message}</p>);


    return (
        <KeyboardAvoidingView style={styles.inputContainer} behavior='padding'>
            <Icon
                name="beer"
                color="green"
                size={25}
            />
            <Text style={styles.headerText}>Register for LDSlack</Text>

            <TextInput fluid name="email"
                style={styles.input}
                placeholder={"Email"}
                onChange={handleChangeEmail}
                value={email}
                type="text" />
            <TextInput
                name="password"
                style={styles.input}
                placeholder={"Password"}
                onChange={handleChangePassword}
                value={password}
                type="password" />
            <Button color="green" title='Submit' onPress={handleSubmit} />

            <Text>Need the undapants? <Text to="/register">Register</Text></Text>

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
        padding: 10
    }
})

export default Login;