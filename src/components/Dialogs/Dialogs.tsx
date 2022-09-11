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

    let DialogsData = [
        {id: 1, name: 'Robot'},
        {id: 2, name: 'BigBurger'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Pavel'},
        {id: 6, name: 'Alex'},
        {id: 7, name: 'Sveta'},
    ]

    let MessageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi every won'},
        {id: 3, message: 'Hi people!!!'},
        {id: 4, message: 'good news!'},

    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={MessageData[0].message}/>
                <Message message={MessageData[1].message}/>
                <Message message={MessageData[2].message}/>
            </div>
        </div>)
}

export default Dialogs;