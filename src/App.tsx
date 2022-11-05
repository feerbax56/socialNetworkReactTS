import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom'
import store from './redux/store';
import {storeType} from './redux/reduxStore';

type PropsType = {
    store: storeType
}


const App: React.FC<PropsType> = (props) => {

    const state = store.getState()

    let message = state.dialogPage.messages
    let dialogs = state.dialogPage.dialogsList
    let messag = state.dialogPage.newMessageText


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialog"
                           render={() => <Dialogs Dialogs={dialogs}
                                                  Messages={message}
                                                  messag={messag}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                           />}/>

                    <Route path="/profile"> <Profile store={props.store}
                    /></Route>
                    {/*<Route path='/news'> <Profile/></Route>*/}
                    {/*<Route path='/music'> <Profile/></Route>*/}
                    {/*<Route path='/setting'> <Profile/></Route>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
