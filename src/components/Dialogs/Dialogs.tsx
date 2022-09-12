import classes from './Dialogs.module.css'
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsListType, MessagesType} from '../../redux/state';


type DialogsPropsType = {
    Dialogs: Array<DialogsListType>
    Messages: Array<MessagesType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.Dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let MessageElements = props.Messages.map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {MessageElements}
            </div>
        </div>)
}

export default Dialogs;