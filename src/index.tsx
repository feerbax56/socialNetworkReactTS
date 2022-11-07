import React from 'react';
import './index.css';
import store from './redux/reduxStore';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

let renderTree = () => {
    ReactDOM.render(
        < BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    )
}

renderTree()
store.subscribe(() => {
        renderTree();
    }
)



