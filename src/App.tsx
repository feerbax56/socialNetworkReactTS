import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='/dialog' element={<Dialogs />} />
                      <Route path='/profile' element={<Profile />} />
                      <Route path='/news' element={<Profile />} />
                      <Route path='/music' element={<Profile />} />
                      <Route path='/setting' element={<Profile />} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
