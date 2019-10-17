import React from "react";
// import { Overlay } from 'react-native-elements';
import { View, Text } from "react-native";
import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import { connect } from "react-redux";
import { setCurrentChannel } from "../../actions";

const SidePanel = props => {
  const { currentUser } = props;
  console.log('currentUser in SidePanel', currentUser)

  return (
    <View>
      {/* <Overlay
      // size="large"
      // inverted
      // fixed="left"
      // vertical
      // style={{ background: "#4c3c4c", fontsize: "1.2rem" }}
      >
        <UserPanel />
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser} />
      </Overlay> */}
    </View>
  );
};

const mapStateToProps = state => ({
  // currentUser: state.user.currentUser
  ...state
});

export default connect(mapStateToProps, { setCurrentChannel })(SidePanel);
