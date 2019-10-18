import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { connect } from "react-redux";

import UserPanel from './UserPanel';


const SidePanel = props => {
  return (
    <View style={styles.container}>
      <UserPanel />
      <View>
        <Button light>
          <Text>Agendas</Text>
        </Button>
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
    </View>
  );
};

const mapStateToProps = state => ({
  ...state
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingTop: 25
  }
});

export default connect(mapStateToProps, {})(SidePanel);