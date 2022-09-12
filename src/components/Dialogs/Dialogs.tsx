import classes from './Dialogs.module.css'
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsListType} from '../../App';




const Dialogs = () => {

    let dialogsElements = props.DialogsList.map(d => <DialogItem name={d.name} id={d.id}/>)
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