import React from 'react';
import s from './users.module.css';
import avatar from '../../assets/img/avatar.jpg';
import {UserType} from '../../redux/usersReducer';


type PropsType = {
    totalUserCount: number,
    pageSize: number,
    users: UserType[],
    currentPage: number,
    onPgeChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
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
                                 onClick={(e) => {
                                     props.onPgeChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map((u) =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : avatar} className={s.userPhoto}
                                 alt={'avatar'}/>
                        </div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}> Unfollow </button>
                            : <button onClick={() => {
                                props.follow(u.id)
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
    );
};

export default Users;