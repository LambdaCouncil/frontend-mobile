import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import firebase from '../firebase'
import { H3 } from "native-base";
import { Link } from "react-router-native";

const Home = props => {
    console.log('homeprops', props.currentUser)
    return (
        <View style={homeStyle}>
            <Text>{`Hello, ${props.currentUser.displayName}`}</Text>
            <Text style = {{ fontFamily: "gotham" }}>{`Hello, ${props.currentUser.displayName}`}</Text>
            <Text style = {{ fontFamily: "bern" }}>{`Hello, ${props.currentUser.displayName}`}</Text>
            <Text style = {{ fontFamily: "bern2" }}>{`Hello, ${props.currentUser.displayName}`}</Text>
            <Button onPress={() => firebase.auth().signOut()} title='Log out' />
            <Link to='/settings'>
                <H3>Settings</H3>
            </Link>
            <Link to='/messages'>
                <H3>Messages</H3>
            </Link>
        </View>
    )
}

const homeStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
}

export default connect(state => ({ ...state }))(Home)
