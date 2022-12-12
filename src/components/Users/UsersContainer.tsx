import {connect} from 'react-redux';
import UsersC from './Users';
import {followAC, initialStateType, setUsersAC, unFollowAC, UserType} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/reduxStore';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    usersPage: initialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
}


type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersC)