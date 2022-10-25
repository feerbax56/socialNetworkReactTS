import classes from './Dialogs.module.css'
import React, {ChangeEvent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {ActionsTypes, addNewMessageAC, DialogsListType, MessagesType, sendMessageAC} from '../../redux/state';


type DialogsPropsType = {
    Dialogs: Array<DialogsListType>
    Messages: Array<MessagesType>
    dispatch: (action: ActionsTypes) => void
    messag: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.Dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })
    let MessageElements = props.Messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        let text = newMessageElement.current?.value
        props.dispatch(sendMessageAC(props.messag))
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       let body =  e.target.value;
       props.dispatch(addNewMessageAC(body))
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