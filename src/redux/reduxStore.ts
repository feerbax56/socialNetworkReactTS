import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReduser';
import {sidebarReducer} from './sidebarReduser';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
})


let store = createStore(reducers)
export type storeType = typeof store


export default store