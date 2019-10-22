import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  Container,
  Left,
  Body,
  Title,
  List,
  ListItem,
  Icon,
  Overlay,
  Header,
  Input,
  Button,
  Form,
  Item,
  Content,
  Picker,
  Footer,
  FooterTab,
  Label
} from "native-base";
import { Link, withRouter } from "react-router-native";

const AddChannel = props => {
  const [channelName, setChannelName] = useState("");
  const [channelDetails, setChannelDetails] = useState("");

  // const [value, onChangeText] = useState('');

  const handleChannelName = text => {
    setChannelName(text);
  };

  const handleChannelDetails = text => {
    setChannelDetails(text);
  };

  console.log(channelName);
  console.log(channelDetails);

  const onCreateChannel = () => {
    console.log('onCreateChannel function called');
    console.log('props', props);
    props.history.push('/login')
  }

  const onCancelNewChannel = () => {
    props.history.push('/register')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => onCancelNewChannel()}>
              <Icon name="close" />
            </Button>
          </Left>
          <Body>
            <Title>New Council Discussion</Title>
          </Body>
        </Header>
        <Form>
          <Item floatingLabel style={styles.inputItem}>
            <Label>Discussion Topic</Label>
            <TextInput
              name="channelName"
              onChangeText={text => handleChannelName(text)}
              // placeholder="Discussion Topic"
              value={channelName}
              maxLength={2}
            />
          </Item>

          <Label floating>Which council will be discussing this topic?</Label>
          <Item picker>
            {/* <Icon name="search" />
          <Input
            name="channelDetails"
            onChangeText={(text) => handleChannelDetails(text)}
            placeholder="Council Name"
            value={channelDetails}
          /> */}
            <Picker
              mode="dropdown"
              style={{ width: undefined }}
              placeholder="Council Name"
              selectedValue={channelDetails}
              onValueChange={text => handleChannelDetails(text)}
            >
              <Picker.Item label="Council Name" value="" />
              <Picker.Item label="Bishopric" value="bishopric" />
              <Picker.Item label="Ward Council" value="wardCouncil" />
              <Picker.Item label="Elders" value="elders" />
              <Picker.Item label="Relief Society" value="reliefSociety" />
              <Picker.Item label="Young Men" value="youngMen" />
              <Picker.Item label="Young Women" value="youngWomen" />
              <Picker.Item label="Sunday School" value="sundaySchool" />
              <Picker.Item label="Primary" value="primary" />
            </Picker>
          </Item>
        </Form>

        <Footer>
          <FooterTab>
            <Button light onPress={() => onCreateChannel()}>
              <Text>Create</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingTop: 25
  },
  // header: {
  //   backgroundColor: "#FAFAFA"
  // }
  inputItem: {
    marginVertical: 15,
    paddingBottom: 10
  }
});

export default withRouter(AddChannel);