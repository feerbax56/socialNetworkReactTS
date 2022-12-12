import React from 'react';
import s from './users.module.css'
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import avatar from '../../assets/img/avatar.jpg'

const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5').then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
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
                    </div>
                )

            }
        </div>)
};

export default Users;