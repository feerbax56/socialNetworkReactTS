import {ActionsTypes, DialogsListType, MessagesType} from './store';

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
    //newMessageText: ''
}

type DialogsStateType = {
    dialogsList: Array<DialogsListType>
    messages: Array<MessagesType>
}

const dialogReducer = (state: DialogsStateType = initialState, action: ActionsTypes): DialogsStateType => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.value;
            return {...state, messages: [...state.messages, {id: 6, message: body}]};
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

export const sendMessageAC = (value: string) => {
    return {
        type: SEND_MESSAGE,
        value
    } as const
}

export default dialogReducer