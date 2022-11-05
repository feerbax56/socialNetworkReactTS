import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom'
import {storeType} from './redux/reduxStore';
import DialogsContainer from './components/Dialogs/DialogsContainer';

type PropsType = {
    store: storeType
}


const App: React.FC<PropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialog"
                           render={() => <DialogsContainer store={props.store}
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
