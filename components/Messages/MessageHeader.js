import React from 'react';
import { Header, Input, Icon, Text, View } from "native-base";


const MessagesHeader = ({ channelName, numOfUsers, handleSearchChange }) => {

    return (
        <View>
            {/*Channel Title*/}

            <Text>
                Tittyfuck
                {channelName}
                {/* <Icon name={'star outline'} color='black' /> */}
            </Text>
            <Text>{numOfUsers}</Text>

            {/*Channel Search Input*/}

            {/* <Input
                onChangeText={handleSearchChange}
                size='mini'
                icon='search'
                name='searchTerm'
                placeholder='Search Messages' /> */}

        </View>
    )
};

export default MessagesHeader;