import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { View, Text, Picker, StyleSheet, Image, Modal } from "react-native";
import {Grid, Col, Row, Header, Icon} from 'native-base'
// import { Header, Icon, Image } from 'react-native-elements';
// import { Grid, Row, Col } from 'react-native-easy-grid';
import { connect } from "react-redux";

const UserPanel = props => {
  const [user, setUser] = useState(props.currentUser);

  // console.log('user in UserPanel', user.providerData);
  useEffect(() => {
    setUser(props.currentUser);
  }, []);

  const dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{user.displayName}</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: "avatar",
      text: <span>Change Avatar</span>
    },
    {
      key: "signout",
      text: <span onClick={handleSignout}>Sign Out</span>
    }
  ];

  const handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("Signed Out"));
  };

  return (
    <View style={styles.container}>
      <Col>
        <Row>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={{uri: 'https://avatars3.githubusercontent.com/u/46138601?s=400&v=4'}}
              // source={{
              //   uri:
              //     user.photoURL
              // }}
            />
            <View style={styles.userInfo}>
              <Text>{user.displayName}</Text>
              <Text>{user.email}</Text>
            </View>
          </View>
          {/*User Dropdown*/}
          {/* <Header >
            <Picker
              trigger={
                <span>
                  <Image src={user.photoURL} spaced="right" avatar />
                  {user.displayName}
                </span>
              }
            >
              <Picker.Item label={`Signed in as ${user.displayName}`} />
              <Picker.Item label="Change Avatar" />
              <Picker.Item label="Sign Out" />
            </Picker>
          </Header> */}
        </Row>
      </Col>
    </View>
  );
};

const mapStateToProps = state => ({
  // currentUser: state.user.currentUser
  ...state
});

const styles = StyleSheet.create({
  container: {
    color: '#3CB18A',
    // paddingVertical: 'auto'
  },
  header: {
    // marginTop: 100,
    color: '#3CB18A',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  userInfo: {
    padding: 10
  }
})

export default connect(mapStateToProps, {} )(UserPanel);
