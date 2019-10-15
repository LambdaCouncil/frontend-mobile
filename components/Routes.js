import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, withRouter, Route, Redirect } from 'react-router-native'
import { ActivityIndicator, View } from 'react-native'

import firebase from '../firebase'
import Register from './Register'
import Login from './LogIn'
import Root from '../Root'
import ProtectedRoutes from "./ProtectedRoutes"
import { setUser, clearUser } from '../actions'

const Routes = props => {

    useEffect(_ => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                props.setUser(user)
                props.history.push('/home')
            } else {
                props.history.push('/')
                props.clearUser()
            }
        })
    }, [])

    return (props.isLoading ? (
        <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color="lime" />
        </View>
    ) : (
            <Switch>

                <Route
                    exact path='/'
                    render={props => <Root />}
                />

                <Route
                    exact path="/login"
                    render={props => <Login {...props} />}
                />

                <Route
                    path="/register"
                    render={props => <Register {...props} />}
                />

                <ProtectedRoute
                    component={props => <ProtectedRoutes />}
                    currentUser={props.currentUser}
                />

            </Switch>
        )
    )
}

const ProtectedRoute = ({ component: Component, currentUser }) => (
    <Route render={props => currentUser ?
        <Component {...props} currentUser={currentUser} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
        }} />
    }
    />
)

const styles = {
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
    },
}

export default connect(state => ({ ...state }), { setUser, clearUser })(withRouter(Routes))
