import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialog'><Dialogs/> </Route>
                    <Route path='/profile'> <Profile/></Route>
                    <Route path='/news'> <Profile/></Route>
                    <Route path='/music'> <Profile/></Route>
                    <Route path='/setting'> <Profile/></Route>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
