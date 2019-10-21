
import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import { Header, Icon,  Image} from "react-native";
import {connect} from 'react-redux';
import {View} from 'react-native';
import {Text} from 'react-native';

const UserPanel (props) => {

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
//   currentUser: state.user.currentUser
...state
});

export default connect(mapStateToProps)(UserPanel);
