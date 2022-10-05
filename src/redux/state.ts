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

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>


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
            ]
        },
        sidebar: {}
    },
    _renderTree() {
        console.log('state')
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.messageForNewPost,
                likesCount: 5
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.messageForNewPost = '';
            this._renderTree()
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText
            this._renderTree()
        }
    },

    subscribe(callback) {
        this._renderTree = callback
    },
    getState() {
        return this._state
    }
}

export const addPostAC = (message: string) => {
    return {
        type: 'ADD-POST',
        messageForNewPost: message
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}

export default store