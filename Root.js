import React from 'react'
import { Text, H1, H2, View } from 'native-base'
import { Link } from 'react-router-native'

export default _ => {
    return (
        <View containerAllRoot>

            <View headerContainerRoot>
                <H1>Councils</H1>
                <H2>Area, Stake and Ward leadership communication.</H2>
            </View>

            <View buttonContainerRoot>

                <Link to='/login' style={{ width: '45%' }}>
                    <Text loginButton>Log In</Text>
                </Link>

                <Link to='/register' style={{ width: '45%' }}>
                    <Text registerButton>Sign Up</Text>
                </Link>

            </View>
        </View>
    )
}
