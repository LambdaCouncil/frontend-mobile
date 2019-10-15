
import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import {Grid, Header, Icon, Dropdown, Image} from "semantic-ui-react";
import {connect} from 'react-redux';
import {View} from 'react-native';

function UserPanel (props) {

  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser)
  }, []);

  const dropdownOptions = () => [
    {
      key: 'user',
      text: <span>Signed in as <strong>{user.displayName}</strong></span>,
      disabled: true
    },
    {
      key: 'avatar',
      text: <span>Change Avatar</span>
    },
    {
      key: 'signout',
      text: <span onClick={handleSignout}>Sign Out</span>
    }
  ];

  const handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('Signed Out'))
  };

  return (
  
          <View>
          <Header>
            <Icon name="code"/>
            <Text>LDSlack</Text>
          </Header>
          {/*User Dropdown*/}
          <Header>
            {/* <Dropdown trigger={
              <span>
                              <Image src={user.photoURL} spaced='right' avatar/>
                {user.displayName}
                          </span>
            } options={dropdownOptions()}/> */}
          </Header>
          </View>
  )
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(UserPanel);
