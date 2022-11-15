import {ActionsTypes, PostsType, profilePageType} from './store';
import {addPostAC, changeNewTextAC} from './profileReducer';
import {addNewMessageAC, sendMessageAC} from './dialogsReduser';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

type LocationType = {
    city: string
    country: string
}
export type initialStateType = {
    users: UsersType[]
}
export type ActionsUsersTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>


let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://img08.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/1/fa/1fab197f55db4e40987a3aaf6764572a.jpg',
            followed: true,
            fullName: 'Gorik',
            status: 'Holy Wor',
            location: {city: 'Tomsk', country: 'Belarus'}
        },
        {
            id: 2, photoUrl: 'https://i.pinimg.com/originals/4f/36/37/4f3637dbd229f4887fba999336524bae.png',
            followed: true, fullName: 'Timur', status: 'i am a GOD', location: {city: 'Rim', country: 'Israel'}
        },
        {
            id: 3,
            photoUrl: 'https://i.pinimg.com/originals/f1/1f/5a/f11f5a23d538286db7814d41176a4c14.png',
            followed: true,
            fullName: 'Gorik',
            status: 'I am found you!',
            location: {city: 'Omsk', country: 'NoName'},
        },
    ]
}

const usersReducer = (state: initialStateType = initialState, action: ActionsUsersTypes): initialStateType => {

    switch (action.type) {
        case FOLLOW:
            const stateCopyFoll = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return
                })
            }
        case UNFOLLOW:
            const stateCopyUnFoll = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}


export const followAC = (userId: string) => {
    return {
        type: FOLLOW, userId

    } as const
}

export const unFollowAC = (userId: string) => {
    return {
        type: UNFOLLOW, userId
    } as const
}

export const setUsersAC = (users: string) => {
    return {
        type: SET_USERS, users
    } as const
}

export default usersReducer