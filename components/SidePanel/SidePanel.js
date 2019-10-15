import React from "react";
import { SideMenu } from 'react-native-elements';
import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import { connect } from "react-redux";
import { setCurrentChannel } from "../../actions";

const SidePanel = props => {
  const { currentUser } = props;
  console.log('currentUser in SidePanel', currentUser)

  return (
    <SideMenu
      className="sidePanel"
      // size="large"
      // inverted
      // fixed="left"
      // vertical
      // style={{ background: "#4c3c4c", fontsize: "1.2rem" }}
    >
      <UserPanel />
      <Channels currentUser={currentUser} />
      <DirectMessages currentUser={currentUser} />
    </SideMenu>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(SidePanel);
