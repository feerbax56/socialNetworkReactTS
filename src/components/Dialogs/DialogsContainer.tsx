import React from 'react';
import {addNewMessageAC, sendMessageAC} from '../../redux/dialogsReduser';
import {storeType} from '../../redux/reduxStore';
import Dialogs from './Dialogs';


type DialogsPropsType = {
    store: storeType
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    let state = props.store.getState().dialogPage.dialogsList
    let message = props.store.getState().dialogPage.newMessageText
    let Messages = props.store.getState().dialogPage.messages

    let addMessage = () => {
        props.store.dispatch(sendMessageAC(message))
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(addNewMessageAC(body))
    }

    return <Dialogs addNewMessageBody={onNewMessageChange} sendMessage={addMessage} dialogPage={state}
                    Messages={Messages}/>
}

export default DialogsContainer;