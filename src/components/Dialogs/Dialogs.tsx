import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogItemType = {
    name: string
    id: number
}


const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/dialog/' + props.id;
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

type MessageType = {
    message: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )

}


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