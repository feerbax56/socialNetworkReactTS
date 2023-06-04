export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    name: string | null
    lookingForAJob: string | null
    photos: PhotosType
}

type PhotosType = {
    small: string | null | undefined
    large: string | null | undefined
}

export type ActionsUsersTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setTogleIsFetching>


let initialState = {
    users: [] as Array<UserType>,
    totalCount: 0,
    pageSize: 15,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_COUNT':
            return {...state, totalCount: action.count}
        case 'SET_TOGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}


export const follow = (userId: number) => {
    return {
        type: 'FOLLOW', userId

    } as const
}

export const unFollow = (userId: number) => {
    return {
        type: 'UNFOLLOW', userId
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS', users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    console.log('from AC',currentPage)
    return {
        type: 'SET_CURRENT_PAGE', currentPage
    } as const
}

export const setTotalCount = (count: number) => {
    return {
        type: 'SET_TOTAL_COUNT', count
    } as const
}

export const setTogleIsFetching = (isFetching: boolean) => {
    return {
        type: 'SET_TOGLE_IS_FETCHING', isFetching
    } as const
}

export default usersReducer