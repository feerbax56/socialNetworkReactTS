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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={'Robot'} id={1}/>
                <DialogItem name={'BigBurger'} id={2}/>
                <DialogItem name={'Valera'} id={3}/>
                <DialogItem name={'Anton'} id={4}/>
                <DialogItem name={'Pavel'} id={5}/>
                <DialogItem name={'Alex'} id={6}/>
                <DialogItem name={'Sveta'} id={7}/>
            </div>
            <div className={classes.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hi every won'}/>
                <Message message={'Hi people!!!'}/>
                <Message message={'good news!'}/>
            </div>
        </div>)
}

export default Dialogs;