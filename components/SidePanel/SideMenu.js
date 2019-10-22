import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { Link, withRouter } from 'react-router-native';

const SideMenu = props => {
  console.log('props in SideMenu', props);
  return (
    <View sytle={styles.sideMenu}>
      <Button light>
        <Link to="/login">
          <Text>Agendas</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/discussions">
          <Text>Discussions</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/home">
          <Text>Assignments</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/login">
          <Text>Files</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/login">
          <Text>Promptings</Text>
        </Link>
      </Button>
      <Button light>
        <Link to="/login">
          <Text>Notifications</Text>
        </Link>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  sideMenu: {
    marginTop: 100,
    paddingVertical: 100,
    borderWidth: 2,
    borderColor: 'red'
  }
})

export default withRouter(SideMenu);