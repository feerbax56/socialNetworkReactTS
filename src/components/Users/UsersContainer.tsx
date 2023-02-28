import {connect} from 'react-redux';
import {
    follow,
    initialStateType,
    setCurrentPage,
    setTogleIsFetching,
    setTotalCount,
    setUsers,
    unFollow,
    UserType
} from '../../redux/usersReducer';
import {AppStateType} from '../../redux/reduxStore';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import preloader from '../../assets/img/loading-gif.gif'


type MapStateToPropsType = {
    usersPage: initialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}


type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (count: number) => void
    setTogleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType, AppStateType> {

    componentDidMount() {
        this.props.setTogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.setTogleIsFetching(false)
            })
    }

    onPgeChanged(pageNumber: number) {
        // console.log(pageNumber)
        // this.props.setCurrentPage(10)
        this.props.setCurrentPage(pageNumber);
        this.props.setTogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setTogleIsFetching(false)
                this.props.setUsers(response.data.items)
            });
    }

    render() {

        return <>
            {this.props.isFetching ? <img src={preloader} alt={'preloader'} style={{width: '350px'}}/> :
                <Users totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       users={this.props.usersPage.users}
                       currentPage={this.props.currentPage}
                       onPgeChanged={this.onPgeChanged}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                />
            }
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalCount, setTogleIsFetching
})(UsersContainer)
