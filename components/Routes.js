import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Switch, withRouter, Route, Redirect} from 'react-router-native'
import {ActivityIndicator, View} from 'react-native'

import firebase from '../firebase'
import Register from './Register'
import Login from './LogIn'
import Root from '../Root'
import ProtectedRoutes from "./ProtectedRoutes"
import {setUser, clearUser} from '../actions'
import CompleteProfile from "./CompleteProfile";
import EditProfile from "./settings/EditProfile";
import ChangePassword from "./settings/ChangePassword";
import Settings from "./settings/Settings";
import PushNotifications from "./settings/PushNotifications";
import SubmitFeedback from "./settings/SubmitFeedback";
import About from "./settings/About";
import Channels from './SidePanel/Channels'

const Routes = props => {

  useEffect(_ => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          props.setUser(user)
          props.history.push('/home')
        } else {
          props.history.push('/')
          props.clearUser()
        }
      })
  }, [])

  return props.isLoading ? (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size="large" color="lime" />
    </View>
  ) : (
    <Switch>
      <Route exact path="/" render={props => <Root />} />

      <Route exact path="/login" render={props => <Login {...props} />} />

      <Route path="/register" render={props => <Register {...props} />} />

      <Route
        path="/completeprofile"
        render={props => <CompleteProfile {...props} />}
      />

      <Route path="/editprofile" render={props => <EditProfile {...props} />} />

      <Route
        path="/changepassword"
        render={props => <ChangePassword {...props} />}
      />

      <Route path="/settings" render={props => <Settings {...props} />} />

      <Route
        path="/notifications"
        render={props => <PushNotifications {...props} />}
      />

      <Route path="/feedback" render={props => <SubmitFeedback {...props} />} />

      <Route path="/about" render={props => <About {...props} />} />

      <Route path="/discussions" render={props => <Channels {...props} />} />

      <ProtectedRoute
        component={props => <ProtectedRoutes />}
        currentUser={props.currentUser}
      />
    </Switch>
  );
}

const ProtectedRoute = ({component: Component, currentUser}) => (
  <Route render={props => currentUser ?
    <Component {...props} currentUser={currentUser}/>
    : <Redirect to={{
      pathname: '/',
      state: {from: props.location}
    }}/>
  }
  />
)

const styles = {
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
}

export default connect(state => ({...state}), {setUser, clearUser})(withRouter(Routes))
