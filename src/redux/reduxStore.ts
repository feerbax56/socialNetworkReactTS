import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReduser';
import {sidebarReducer} from './sidebarReduser';


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
})


let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

export default store