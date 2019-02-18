import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRouter from './router/AppRouter';
import {Provider} from 'react-redux';
import store from './redux/Store'

//Wrap the app root in a provider to make use of redux 
const jsx = (
    <Provider store={store}><AppRouter/></Provider> 
)

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();
