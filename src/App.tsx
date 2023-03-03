import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialog"
                           render={() => <DialogsContainer/>}/>

                    <Route path="/profile"> <ProfileContainer/></Route>
                    {/*<Route path='/news'> <Profile/></Route>*/}
                    {/*<Route path='/music'> <Profile/></Route>*/}
                    {/*<Route path='/setting'> <Profile/></Route>*/}
                    <Route path="/users"> <UsersContainer/> </Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
