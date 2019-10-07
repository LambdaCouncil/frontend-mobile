import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { action } from '../actions'

const Home = props => {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Button onPress={props.action} title='Click to use the action' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { action })(Home)

