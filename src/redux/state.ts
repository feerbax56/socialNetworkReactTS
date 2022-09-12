type MessagesType = {
    id: number
    message: string
}
type DialogsListType = {
    id: number
    name: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}

type profilePageType = {
    Posts: Array<PostsType>
}
type dialogPageType = {
    DialogsList: Array<DialogsListType>
    Messages: Array<MessagesType>
}

type SidebarType = {}

type RootStateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
    sidebar: SidebarType
}


let state: RootStateType = {
    profilePage: {
        Posts: [
            {id: 1, message: 'Hi', likesCount: 4},
            {id: 1, message: 'Hi, go back!', likesCount: 2},
            {id: 1, message: 'It is good', likesCount: 12},
        ]
    },
    dialogPage: {
        DialogsList: [
            {id: 1, name: 'Robot'},
            {id: 2, name: 'BigBurger'},
            {id: 3, name: 'Valera'},
            {id: 4, name: 'Anton'},
            {id: 5, name: 'Pavel'},
            {id: 6, name: 'Alex'},
            {id: 7, name: 'Sveta'},
        ],
        Messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi every won'},
            {id: 3, message: 'Hi people!!!'},
            {id: 4, message: 'good news!'},
        ]
    },
    sidebar: {}
}

export default state