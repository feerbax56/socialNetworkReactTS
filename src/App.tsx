import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialog"
                           render={() => <DialogsContainer/>}/>

                    <Route path="/profile/:userId?"> <ProfileContainer/></Route>
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
