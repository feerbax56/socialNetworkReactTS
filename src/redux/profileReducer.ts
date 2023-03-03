import {addNewMessageAC, sendMessageAC} from './dialogsReduser';

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof setUserProfile>


export type PostsType = {
    id?: number
    message: string
    likesCount: number
}

let initialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hiiii', likesCount: 4},
        {id: 1, message: 'Hi, go back!', likesCount: 2},
        {id: 1, message: 'It is good', likesCount: 12},
    ] as Array<PostsType>,
    profile: {},
}

export type profilePageType = typeof initialState

const profileReducer = (state: profilePageType = initialState, action: ActionsTypes): profilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 5
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }
        case CHANGE_NEW_TEXT:
            state.messageForNewPost = action.newText
            return {...state, messageForNewPost: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}


export const addPostAC = (message: string) => {
    return {
        type: ADD_POST,
        messageForNewPost: message
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}

export const setUserProfile = (profile: {}) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}


export default profileReducer