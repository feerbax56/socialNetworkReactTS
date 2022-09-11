import classes from './../Dialogs.module.css'
import React from 'react';


type MessageType = {
    message: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )

}

export default Message;