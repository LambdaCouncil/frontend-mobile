import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { Link } from 'react-router-native'

export default _ => {
    return (
        <View style={styles.containerAll}>

            <View style={styles.headerContainer}>
                <Text h1>Councils</Text>
                <Text h4 h4Style={styles.description}>Area, Stake and Ward leadership communication.</Text>
            </View>

            <View style={styles.buttonContainer}>

                <Link to='/login' style={styles.link}>
                    <Text style={styles.loginButton}>Log In</Text>
                </Link>

                <Link to='/register' style={styles.link}>
                    <Text style={styles.registerButton}>Sign Up</Text>
                </Link>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerAll: {
        height: '100%',
        justifyContent: 'space-between',
        paddingTop: 25
    },
    headerContainer: {
        width: '95%',
        alignItems: 'center',
    },
    description: {
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        borderTopWidth: 2,
        borderTopColor: 'lightgray',
        paddingVertical: 15
    },
    loginButton: {
        backgroundColor: 'whitesmoke',
        color: 'green',
        textAlign: 'center',
        padding: 10,
        paddingBottom: 15,
        fontSize: 35
    },
    registerButton: {
        borderRadius: 7.5,
        backgroundColor: 'green',
        padding: 10,
        paddingBottom: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'whitesmoke',
        fontSize: 35
    },
    link: {
        width: '45%'
    },
})
