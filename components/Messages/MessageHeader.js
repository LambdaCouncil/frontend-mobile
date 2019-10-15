import React from 'react';
import { Header, Input, Icon } from "react-native-elements";
import { Text } from 'react-native';


const MessagesHeader = ({ channelName, numOfUsers, handleSearchChange }) => {

    return (
        <View>
            {/*Channel Title*/}
            <Header>
                <Text>
                    {channelName}
                    <Icon name={'star outline'} color='black' />
                </Text>
                <Text>{numOfUsers}</Text>
            </Header>
            {/*Channel Search Input*/}
            <Header>
                <Input
                    onChangeText={handleSearchChange}
                    size='mini'
                    icon='search'
                    name='searchTerm'
                    placeholder='Search Messages' />
            </Header>
        </View>
    )
};

export default MessagesHeader;