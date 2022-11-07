import {ActionsTypes, PostsType, profilePageType} from './store';

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

let initialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hiiii', likesCount: 4},
        {id: 1, message: 'Hi, go back!', likesCount: 2},
        {id: 1, message: 'It is good', likesCount: 12},
    ]
}

const profileReducer = (state: profilePageType = initialState, action: ActionsTypes): profilePageType => {

    switch (action.type) {
        case ADD_POST:
            const addPostStateCopy = {...state}
            const newPost: PostsType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 5
            };
            addPostStateCopy.posts.unshift(newPost)
            addPostStateCopy.messageForNewPost = '';
            return addPostStateCopy
        case CHANGE_NEW_TEXT:
            state.messageForNewPost = action.newText
            return {...state, messageForNewPost: action.newText}
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


export default profileReducer