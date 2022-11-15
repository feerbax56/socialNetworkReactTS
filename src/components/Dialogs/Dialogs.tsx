import classes from './Dialogs.module.css'
import React, {ChangeEvent, useState} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';


const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const [value, setValue] = useState<string>('')

    let dialogsElements = props.dialogPage.map((d, i) => {
        return <DialogItem key={i} name={d.name} id={d.id}/>
    })
    let MessageElements = props.Messages.map((m,index) => <Message key={index} fullName={m.fullName}/>)

    let addMessage = () => {
        props.sendMessage(value)
        setValue('')
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        setValue(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {MessageElements}
            </div>

            <div>
                <textarea
                    value={value}
                    placeholder={'жми сюда!'}
                    onChange={onNewMessageChange}
                ></textarea>
            </div>
            <div>
                <button onClick={addMessage}>send message</button>
            </div>

        </div>)
}

export default Dialogs;