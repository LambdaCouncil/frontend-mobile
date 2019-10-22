import React from "react"
import moment from "moment"
import { Text, Content, Container, Thumbnail } from 'native-base'


const isOwnMessage = (message, user) => {
    return message.user.id === user.uid ? 'message__self' : '';
};

const timeFromNow = timestamp => moment(timestamp).fromNow();

const Message = ({ message, user, key }) => {


    return (

        <Container>
            <Thumbnail src={user.avatar} />
            <Content className={isOwnMessage(message, user)}>
                <Text as='a'>{message.user.name}</Text>
                {/*<Comment.MetaData>{timeFromNow(message.timestamp)}</Comment.MetaData>*/}
                <Text>{message.content}</Text>
            </Content>
        </Container>
    );
};

export default Message;