import classes from './Dialogs.module.css'
import React, {ChangeEvent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogPage.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let MessageElements = props.Messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.addNewMessageBody(body)
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
                    placeholder={'жми сюда!'}
                    ref={newMessageElement}
                    onChange={onNewMessageChange}
                ></textarea>
            </div>
            <div>
                <button onClick={addMessage}>send message</button>
            </div>

        </div>)
}

export default Dialogs;