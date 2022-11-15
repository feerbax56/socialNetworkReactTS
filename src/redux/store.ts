import profileReducer, {addPostAC, changeNewTextAC} from './profileReducer';
import {addNewMessageAC, sendMessageAC} from './dialogsReduser';
import {sidebarReducer} from './sidebarReduser';


export type MessagesType = {
    id: number
    message: string
}
export type DialogsListType = {
    id: number
    name: string
}
export type PostsType = {
    id?: number
    message: string
    likesCount: number
}
export type profilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}
export type dialogPageType = {
    dialogsList: Array<DialogsListType>
    messages: Array<MessagesType>
    newMessageText: string

}
export type SidebarType = {}
export type RootStateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    _renderTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof sendMessageAC>


let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, fullName: 'Hi', likesCount: 4},
                {id: 1, fullName: 'Hi, go back!', likesCount: 2},
                {id: 1, fullName: 'It is good', likesCount: 12},
            ]
        },
        dialogPage: {
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
                {id: 1, fullName: 'Hi'},
                {id: 2, fullName: 'Hi every won'},
                {id: 3, fullName: 'Hi people!!!'},
                {id: 4, fullName: 'good news!'},
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _renderTree() {
        console.log('state')
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        //this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    },
    subscribe(callback)
    {
        this._renderTree = callback
    },
    getState()
    {
        return this._state
    }
}


export default store