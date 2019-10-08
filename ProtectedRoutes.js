import React from "react"

import { Switch, Route } from "react-router-native"
import { View, Text } from "react-native"

export default props => {
    return (
        <Switch>
            <Route exact path="/home" component={() => <Text>Hello</Text>} />

            <Route component={Page404} />
        </Switch>
    )
}

const Page404 = () => {
    return (
        <View style={page404Style}>
            <Text>404 page not found</Text>
        </View>
    )
}

const page404Style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
}