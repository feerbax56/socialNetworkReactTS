import {ActionsTypes, dialogPageType} from './store';

const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'


let initialState = {
    dialogsList: [
        {id: 1, name: 'Robot'},
        {id: 2, name: 'BigBurger'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Pavel'},
        {id: 6, name: 'Alex'},
        {id: 7, name: 'Elena'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi every won'},
        {id: 3, message: 'Hi people!!!'},
        {id: 4, message: 'good news!'},
    ],
    newMessageText: ''
}

const dialogReducer = (state: dialogPageType = initialState, action: ActionsTypes): dialogPageType => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            const UpdateNewMessageStateCopy = {...state}
            UpdateNewMessageStateCopy.newMessageText = action.newMessageText
            return UpdateNewMessageStateCopy
        case SEND_MESSAGE:
            let SendMessageStateCopy = {...state}
            let body = state.newMessageText;
            console.log('body', body)
            SendMessageStateCopy.messages.push({id: 6, message: body});
            console.log('SendMessageStateCopy', SendMessageStateCopy.messages)
            SendMessageStateCopy.newMessageText = '';
            console.log(SendMessageStateCopy.newMessageText)
            return SendMessageStateCopy
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

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
        // sendMessage: sendMessage
    } as const
}

export default dialogReducer