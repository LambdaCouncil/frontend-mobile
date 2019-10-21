import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { StackNavigator } from 'react-navigation';
import { Link, withRouter } from 'react-router-native';
import { connect } from 'react-redux';

const SideMenu = props => {
  console.log('props in SideMenu', props);
  return (
    <View sytle={styles.sideMenu}>
      <Link 
        to='/login'
      >
        <Text>Agendas</Text>
      </Link>
      <Button light>
        <Text>Discussions</Text>
      </Button>
      <Button light>
        <Text>Assignments</Text>
      </Button>
      <Button light>
        <Text>Files</Text>
      </Button>
      <Button light>
        <Text>Promptings</Text>
      </Button>
      <Button light>
        <Text>Notifications</Text>
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