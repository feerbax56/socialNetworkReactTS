export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    name: string
    status: string
    photos: PhotosType
}

type PhotosType = {
    small: string | null | undefined
    large: string | null | undefined
}

export type ActionsUsersTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>


let initialState = {
    users: [

    ] as Array<UserType>
}

export type initialStateType = typeof initialState

const usersReducer = (state: initialStateType = initialState, action: ActionsUsersTypes): initialStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}


export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW', userId

    } as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW', userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS', users
    } as const
}

export default usersReducer