import React from "react"
import { Switch, Route } from "react-router-native"
import { View, Text } from "react-native"

import Home from './Home'
import SidePanel from "./SidePanel/SidePanel"

export default _ => (
    <Switch>
        <Route exact path="/home" component={SidePanel} />
        <Route component={Page404} />
    </Switch>
)

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
