import React from "react"
import moment from "moment"
import { Comment, Image } from "react-native-elements"

const isOwnMessage = (message, user) => {
    return message.user.id === user.uid ? 'message__self' : '';
};

const timeFromNow = timestamp => moment(timestamp).fromNow();

const Message = ({ message, user, key }) => {


    return (

        <Comment>
            <Comment.Avatar src={user.avatar} />
            <Comment.Content className={isOwnMessage(message, user)}>
                <Comment.Author as='a'>{message.user.name}</Comment.Author>
                {/*<Comment.MetaData>{timeFromNow(message.timestamp)}</Comment.MetaData>*/}
                <Comment.Text>{message.content}</Comment.Text>
            </Comment.Content>
        </Comment>
    );
};

export default Message;