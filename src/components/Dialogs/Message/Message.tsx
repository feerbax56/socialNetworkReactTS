import classes from './../Dialogs.module.css'
import React from 'react';

type MessageType = {
    fullName: string
}

const Message: React.FC<MessageType> = (props) => {



    return (<>
            <div className={classes.fullName}>{props.fullName}</div>

        </>
    )

}

export default Message;