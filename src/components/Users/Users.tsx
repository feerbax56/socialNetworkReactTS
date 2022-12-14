import avatar from '../../assets/img/avatar.jpg';
import s from './users.module.css';
import React from 'react';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';
import {AppStateType} from '../../redux/reduxStore';


class Users extends React.Component<UsersPropsType, AppStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onPgeChanged(pageNumber: number) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = []
        for (let i = 0; i <= pageCount; i++) {
            pages.push(i)
        }


        return <div>
            <div>
                {pages.map(p => {
                    let activePage = this.props.currentPage === p ? s.selectedPage : s.noneSelectedPage
                    return <span className={activePage}
                                 onClick={(e) => {
                                     this.onPgeChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {this.props.usersPage.users.map((u) =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : avatar} className={s.userPhoto}
                                 alt={'avatar'}/>
                        </div>
                        {u.followed ?
                            <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}> Unfollow </button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}> Follow </button>}

                </span>
                    <span>
                        <div>{u.name}</div>
                            <div>{u.status}</div>
                    </span>
                    <span>
                            <div>{'u.photos.large'}</div>
                            <div>{'u.photos.small'}</div>
                    </span>
                </div>)}
        </div>
    }
}

export default Users