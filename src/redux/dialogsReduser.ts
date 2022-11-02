import {ActionsTypes, dialogPageType} from './state';

const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'


const dialogReducer = (state: dialogPageType, action: ActionsTypes) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessageText
            return state
        case SEND_MESSAGE:
            let body = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export const addNewMessageAC = (newMessageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessageText: newMessageText
    } as const
}

export const sendMessageAC = (sendMessage: string) => {
    return {
        type: SEND_MESSAGE,
        sendMessage: sendMessage
    } as const
}

export default dialogReducer