import {addPostAC, changeNewTextAC} from './profileReducer';
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof sendMessageAC>



const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'

export type MessagesType = {
    id: number
    fullName: string
}
export type DialogsListType = {
    id: number
    name: string
}


let initialState = {
    dialogsList: [
        {id: 1, name: 'Robot'},
        {id: 2, name: 'BigBurger'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Pavel'},
        {id: 6, name: 'Alex'},
        {id: 7, name: 'Elena'},
    ] as Array<DialogsListType>,
    messages: [
        {id: 1, fullName: 'Hi'},
        {id: 2, fullName: 'Hi every won'},
        {id: 3, fullName: 'Hi people!!!'},
        {id: 4, fullName: 'good news!'},
    ] as Array<MessagesType>,
    newMessageText: ''
}

export type initialStateType = typeof initialState

const dialogReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.value;
            return {...state, messages: [...state.messages, {id: 6, fullName: body}]};
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