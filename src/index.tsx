import React from 'react';
import './index.css';
import {subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

let renderTree = () => {
    ReactDOM.render(
        < BrowserRouter>
            <App/>
        </BrowserRouter>, document.getElementById('root')
    )
}


subscribe(renderTree)



