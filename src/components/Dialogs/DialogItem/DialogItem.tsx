import classes from './../Dialogs.module.css'
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

export default DialogItem;