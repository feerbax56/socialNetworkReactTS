import React from 'react';
import './index.css';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

let renderTree = () => {
    ReactDOM.render(
        < BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root')
    )
}

renderTree()
store.subscribe(renderTree)



