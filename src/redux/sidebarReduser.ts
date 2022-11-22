import {SidebarType} from './store';
import {ActionsUsersTypes} from './usersReducer';


let initialState = {}

export const sidebarReducer = (state: SidebarType = initialState, action?: ActionsUsersTypes): SidebarType => {
    return state
}