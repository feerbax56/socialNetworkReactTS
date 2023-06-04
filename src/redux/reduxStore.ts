import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReduser';
import {sidebarReducer} from './sidebarReduser';
import usersReducer from './usersReducer';
import authReducer from './auth-reducer';


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})


let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

export default store