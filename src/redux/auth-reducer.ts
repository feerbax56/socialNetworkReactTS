export type UserDataType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

export type ActionsUsersTypes =
    ReturnType<typeof setAuthUserData>

let initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
}


const authReducer = (state: UserDataType = initialState, action: ActionsUsersTypes): UserDataType => {

    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: number,
                                email: string,
                                login: string,
                                isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA', data: {id, email, login, isAuth}
    } as const
}

export default authReducer