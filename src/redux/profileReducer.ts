import {ActionsTypes, PostsType, profilePageType} from './state';

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'


const profileReducer = (state: profilePageType, action: ActionsTypes) => {


    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 5
            };
            state.posts.unshift(newPost)
            state.messageForNewPost = '';
            return state
        case CHANGE_NEW_TEXT:
            state.messageForNewPost = action.newText
            return state
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