import React, { useState, useEffect } from "react";
import { List, ListItem, Icon, Overlay, Header, Input, Button, Form, Item } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import firebase from "../../firebase";
import { connect } from "react-redux";
import { setCurrentChannel } from "../../actions";
import AddChannel from "./AddChannel";

const Channels = ({ currentUser, setCurrentChannel }) => {
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState(null);
  const [modal, setModal] = useState(false);

  const channelsRef = firebase.database().ref("channels");
  const messagesRef = firebase.database().ref("messages");
  const user = currentUser;
  const [barndon, setBarndon] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [activeChannel, setActiveChannel] = useState("");
  const [notifications, setNotifications] = useState([]);

  // const notifications = [];

  const addListeners = () => {
    let loadedChannels = [];
    channelsRef.on("child_added", snap => {
      loadedChannels.push(snap.val());
      loadedChannels.length > 0 &&
        // console.log('loadedChannels', loadedChannels);
        setChannels(loadedChannels);
      setFirstChannel();
      setBarndon(true);
      addNotificationListener(snap.key);
    });
  };

  const addNotificationListener = channelId => {
    messagesRef.child(channelId).on("value", snap => {
      if (channel) {
        handleNotifications(channelId, channel.id, notifications, snap);
      }
    });
  };

  const handleNotifications = (
    channelId,
    currentChannelId,
    notifications,
    snap
  ) => {
    let lastTotal = 0;
    let index = notifications.findIndex(
      notification => notification.id === channelId
    );
    if (index !== -1) {
      if (channelId !== currentChannelId) {
        lastTotal = notifications[index].total;
        if (snap.numChildren() - lastTotal > 0) {
          notifications[index].count = snap.numChildren() - lastTotal;
        }
      }
      notifications[index].lastKnownTotal = snap.numChildren();
    } else {
      notifications.push({
        id: channelId,
        total: snap.numChildren(),
        lastKnownTotal: snap.numChildren(),
        count: 0
      });
    }
    setNotifications();
  };
  // console.log('notifications', notifications);

  const removeListeners = () => {
    channelsRef.off();
  };

  useEffect(() => {
    !barndon && addListeners();
  }, [channels]);

  useEffect(() => {
    return () => {
      removeListeners();
    };
  }, []);

  const toggleOverlay = () => {
    setModal(!modal);
  };

  const addChannel = () => {
    const key = channelsRef.push().key;
    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      createdBy: {
        name: user.displayName,
        avatar: user.photoURL
      }
    };
    channelsRef
      .child(key)
      .update(newChannel)
      .then(() => {
        setChannelName("");
        setChannelDetails("");
        closeModal();
        console.log("channel added");
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isFormValid()) {
      addChannel();
    }
  };

  const isFormValid = () => channelName && channelDetails;

  const displayChannels = channels => {
    return (
      channels.length > 0 &&
      channels.map(channel => {
        // console.log('map run');
        return (
          <ListItem
            key={channel.id}
            onPress={() => changeChannel(channel)}
            // onPress={() => console.log(channel)}
            title={channel.name}
            containerStyle={{ opacity: 1 }}
            disabled={channel.id === activeChannel}
          >
            <Text># {channel.name}</Text>
          </ListItem>
        );
      })
    );
  };

  const setFirstChannel = async () => {
    const firstChannel = channels[0];
    if (firstLoad && channels.length) {
      await setCurrentChannel(firstChannel);
      await setActiveChannel(firstChannel.id);
      // console.log('firstChannel', firstChannel)
    }
    setFirstLoad(false);
  };

  const changeChannel = channel => {
    setActiveChannel(channel.id);
    setCurrentChannel(channel);
    setChannel(channel);
  };

  return (
    <View>
      {/* <Overlay > */}
      {/* <ListItem> */}
        {/* <span> */}
        {/* <Icon ios="ios-folder-open" android="md-rose" /> */}
        {/* </span>{" "} */}
        {/* <Text>({channels.length})</Text> */}
        {/* <Icon
          name="add"
          onPress={toggleOverlay}
          iconStyle={{ cursor: "pointer" }}
        /> */}
      {/* </ListItem> */}
      {/* </Overlay> */}

      {/* <Overlay
        isVisible={toggleOverlay}
        height="auto"
        width="auto"
        onBackdropPress={() => toggleOverlay()}
      > */}
      <AddChannel />
      
      {/* <List>{displayChannels(channels)}</List> */}

      {/* <View>
        <Button
          title="Create"
          onPress={handleSubmit}
          icon={<Icon name="checkmark" color="green" />}
        />
        <Button
          title="Cancel"
          onPress={toggleOverlay}
          icon={<Icon name="remove" color="red" />}
        />
      </View> */}
      {/* </Overlay> */}
    </View>
  );
};

const mapStateToProps = state => ({
  // currentUser: state.user.currentUser
  ...state
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FAFAFA'
  }
})

export default connect(
  mapStateToProps,
  { setCurrentChannel }
)(Channels);
