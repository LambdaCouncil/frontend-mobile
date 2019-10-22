import React from 'react'
import { List, ListItem, Thumbnail, Left, Body, Text, Right } from 'native-base'

const Discussions = _ => {

    return (
        <List style={{ marginVertical: 25 }}>
            <ListItem avatar>
                <Left>
                    <Thumbnail />
                </Left>
                <Body>
                    <Text>Whoever</Text>
                    <Text note>Some stuff...</Text>
                </Body>
                <Right>
                    <Text note>Time?</Text>
                </Right>
            </ListItem>
        </List>
    )
}

export default Discussions
