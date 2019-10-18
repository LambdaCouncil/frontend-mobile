import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, H1, H2 } from 'native-base'
import { Link } from 'react-router-native'

export default _ => {
    return (
        <View style={styles.containerAll}>

            <View style={styles.headerContainer}>
                <H1>Councils</H1>
                <H2>Area, Stake and Ward leadership communication.</H2>
            </View>

            <View style={styles.buttonContainer}>

                <Link to='/login' style={styles.link}>
                    <Text loginButton>Log In</Text>
                </Link>

                <Link to='/register' style={styles.link}>
                    <Text registerButton>Sign Up</Text>
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
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        borderTopWidth: 2,
        borderTopColor: 'lightgray',
        paddingVertical: 15
    },
    link: {
        width: '45%'
    },
})
