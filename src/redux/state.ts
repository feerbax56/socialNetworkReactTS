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


let state: RootStateType = {
    profilePage: {
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
            {id: 7, name: 'Sveta'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi every won'},
            {id: 3, message: 'Hi people!!!'},
            {id: 4, message: 'good news!'},
        ]
    },
    sidebar: {}
}

export default state