import classes from './Dialogs.module.css'
import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = () => {

    let Dialogs = [
        {id: 1, name: 'Robot'},
        {id: 2, name: 'BigBurger'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Pavel'},
        {id: 6, name: 'Alex'},
        {id: 7, name: 'Sveta'},
    ]

    let Messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi every won'},
        {id: 3, message: 'Hi people!!!'},
        {id: 4, message: 'good news!'},
    ]

    let dialogsElements = Dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let MessageElements = Messages.map(m => <Message message={m.message}/>)


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