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

        // {
        //     userId: '1',
        //     photoUrl: 'https://img08.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/1/fa/1fab197f55db4e40987a3aaf6764572a.jpg',
        //     followed: true,
        //     fullName: 'Gorik',
        //     status: 'Holy Wor',
        //     location: {city: 'Tomsk', country: 'Belarus'}
        // },
        // {
        //     userId: '2', photoUrl: 'https://i.pinimg.com/originals/4f/36/37/4f3637dbd229f4887fba999336524bae.png',
        //     followed: true, fullName: 'Timur', status: 'i am a GOD', location: {city: 'Rim', country: 'Israel'}
        // },
        // {
        //     userId: '3',
        //     photoUrl: 'https://i.pinimg.com/originals/f1/1f/5a/f11f5a23d538286db7814d41176a4c14.png',
        //     followed: true,
        //     fullName: 'Gorik',
        //     status: 'I am found you!',
        //     location: {city: 'Omsk', country: 'NoName'},
        // },
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