import React from 'react';
import s from './users.module.css'
import {UsersPropsType} from './UsersContainer';


const Users = (props: UsersPropsType) => {
    if (props.setUsers.length === 0) {
        props.usersPage.users = [
            {
                userId: '1',
                photoUrl: 'https://img08.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/1/fa/1fab197f55db4e40987a3aaf6764572a.jpg',
                followed: true,
                fullName: 'Gorik',
                status: 'Holy Wor',
                location: {city: 'Tomsk', country: 'Belarus'}
            },
            {
                userId: '2', photoUrl: 'https://i.pinimg.com/originals/4f/36/37/4f3637dbd229f4887fba999336524bae.png',
                followed: true, fullName: 'Timur', status: 'i am a GOD', location: {city: 'Rim', country: 'Israel'}
            },
            {
                userId: '3',
                photoUrl: 'https://i.pinimg.com/originals/f1/1f/5a/f11f5a23d538286db7814d41176a4c14.png',
                followed: true,
                fullName: 'Gorik',
                status: 'I am found you!',
                location: {city: 'Omsk', country: 'NoName'},
            },
        ]
    }

    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.userId}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.userId)
                            }}> Unfollow </button>
                            : <button onClick={() => {
                                props.follow(u.userId)
                            }}> Follow </button>}

                </span>
                        <span>
                        <div>{u.fullName}</div>
                            <div>{u.status}</div>
                    </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                    </span>
                    </div>
                )

            }
        </div>)
};

export default Users;