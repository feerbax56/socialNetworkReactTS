import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'db1390cd-7d21-4afb-b286-c415d1aa1c63'
    },
    withCredentials: true,
});
