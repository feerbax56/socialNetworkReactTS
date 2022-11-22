import React from 'react';
import {addNewMessageAC, DialogsListType, MessagesType, sendMessageAC} from '../../redux/dialogsReduser';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {Dispatch} from 'redux';


type MapStatePropsType = {
    dialogPage: Array<DialogsListType>
    Messages: Array<MessagesType>
}

type MapDispatchPropsType = {
    addNewMessageBody: (body: string) => void
    sendMessage: (value: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage.dialogsList,
        Messages: state.dialogPage.messages,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addNewMessageBody: (body: string) => {
            dispatch(addNewMessageAC(body))
        },
        sendMessage: (value: string) => {
            dispatch(sendMessageAC(value))
        },
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;