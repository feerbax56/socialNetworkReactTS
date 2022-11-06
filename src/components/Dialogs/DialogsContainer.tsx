import React from 'react';
import {addNewMessageAC, sendMessageAC} from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {


    return (<StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().dialogPage.dialogsList
                    let message = store.getState().dialogPage.newMessageText
                    let Messages = store.getState().dialogPage.messages

                    let addMessage = () => {
                        store.dispatch(sendMessageAC(message))
                    }

                    let onNewMessageChange = (body: string) => {
                        store.dispatch(addNewMessageAC(body))
                    }
                    return <Dialogs
                        addNewMessageBody={onNewMessageChange}
                        sendMessage={addMessage}
                        dialogPage={state}
                        Messages={Messages}/>
                }

            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;