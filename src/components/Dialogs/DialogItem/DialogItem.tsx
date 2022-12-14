import classes from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogItemType = {
    id: number
    name: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/dialog/' + props.id;
    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;