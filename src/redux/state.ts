const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE'


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
type profilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}
type dialogPageType = {
    dialogsList: Array<DialogsListType>
    messages: Array<MessagesType>
    newMessageText: string

}
type SidebarType = {}
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

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> | ReturnType<typeof addNewMessageAC> | ReturnType<typeof sendMessageAC>


let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi', likesCount: 4},
                {id: 1, message: 'Hi, go back!', likesCount: 2},
                {id: 1, message: 'It is good', likesCount: 12},
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
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi every won'},
                {id: 3, message: 'Hi people!!!'},
                {id: 4, message: 'good news!'},
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _renderTree() {
        console.log('state')
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.messageForNewPost,
                likesCount: 5
            };
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.messageForNewPost = '';
            this._renderTree()
        } else if (action.type === CHANGE_NEW_TEXT) {
            this._state.profilePage.messageForNewPost = action.newText
            this._renderTree()
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogPage.newMessageText = action.newMessageText
            this._renderTree();
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageText
            this._state.dialogPage.newMessageText = ''
            this._state.dialogPage.messages.push({id: 6, message: body})
            this._renderTree();
        }
        },


        subscribe(callback)
        {
            this._renderTree = callback
        }
    ,
        getState()
        {
            return this._state
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

    export default store