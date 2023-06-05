import {instance} from './instance'
import {UserType} from '../redux/usersReducer';


export const getUsers = (pageNumber: number, pageSize: number) => {
    return instance.get<getUserResponse>(`users?page=${pageNumber}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}





type getUserResponse = {
    items: Array<UserType>,
    totalCount: number,
}