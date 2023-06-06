import React from 'react';
import s from './users.module.css';
import avatar from '../../assets/img/avatar.jpg';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {UserType} from '../../redux/usersReducer';


type PropsType = {
    totalUserCount: number,
    pageSize: number,
    users: UserType[],
    currentPage: number,
    onPgeChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setFollowingProgress: (isFetching: boolean) => void,
    toggleFollowingProgress: boolean,
}
const Users = (props: PropsType) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 0; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    let activePage = props.currentPage === p ? s.selectedPage : s.noneSelectedPage
                    return <span className={activePage}
                                 onClick={() => {
                                     props.onPgeChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map((u) =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : avatar} className={s.userPhoto}
                                     alt={'avatar'}/>
                            </NavLink>
                        </div>
                        {u.followed ?
                            <button disabled={props.toggleFollowingProgress} onClick={() => {
                                props.setFollowingProgress(true)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'db1390cd-7d21-4afb-b286-c415d1aa1c63'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                        props.setFollowingProgress(false)
                                    })

                            }}> Unfollow </button>
                            : <button disabled={props.toggleFollowingProgress} onClick={() => {
                                props.setFollowingProgress(true)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'db1390cd-7d21-4afb-b286-c415d1aa1c63'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.setFollowingProgress(false)
                                    })

                            }}> Follow </button>}
                </span>
                    <span>
                        <div>{u.name}</div>
                            <div>{u.lookingForAJob}</div>
                    </span>
                    <span>
                            <div>{'u.photos.large'}</div>
                            <div>{'u.photos.small'}</div>
                    </span>
                </div>)}
        </div>
    );
};

export default Users;