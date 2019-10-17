import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { View, Text, Picker } from "react-native";
import { Header, Icon, Image } from 'react-native-elements';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { connect } from "react-redux";

const UserPanel = props => {
  const [user, setUser] = useState(props.currentUser);

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
    <Grid style={{ background: "4c3c4c" }}>
      <Col>
        {/* <Row style={{ padding: "1.2em", margin: 0 }}> */}
        <Row>
          {/*App Header*/}
          <Header>
            <Icon name="code" />
            <Text>LDSlack</Text>
          </Header>
          {/*User Dropdown*/}
          <Header style={{ padding: "0.25em" }} h4 inverted>
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
          </Header>
        </Row>
      </Col>
    </Grid>
  );
};

const mapStateToProps = state => ({
  // currentUser: state.user.currentUser
  ...state
});

export default connect(mapStateToProps, {} )(UserPanel);
