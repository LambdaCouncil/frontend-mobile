import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
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
  FooterTab
} from "native-base";

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

  

  return (
    <View style={styles.container}>
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon name="close" />
          </Button>
        </Left>
        <Body>
          <Title>New Council Discussion</Title>
        </Body>
      </Header>
      <Form>
        <Item floatingLabel>
          <Input
            name="channelName"
            onChangeText={text => handleChannelName(text)}
            placeholder="Discussion Topic"
            value={channelName}
          />
        </Item>

        <Label>Which</Label>
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
            onValueChange={() => handleChannelDetails()}
          >
            <Picker.Item disabled label="Council Name" value="" />
            <Picker.Item label="Bishopric" value="bishopric" />
          </Picker>
        </Item>
      </Form>
      <Footer>
        <FooterTab>
          <Button light>
            <Text>Create</Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>
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
});

export default AddChannel;