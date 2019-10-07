import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { action } from '../actions'

const Home = props => {
    const [something, setSomething] = useState('something')

    console.log(props.actions)

    return (
        <View style={styles.container}>
            <Text>Things below</Text>
            <Button
                onPress={() => setSomething(props.actions === 'something' ? 'something else' : 'something')}
                title='Change Something'
            />
            <Button
                onPress={() => props.action(something)}
                title='Click to use the action'
            />
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

