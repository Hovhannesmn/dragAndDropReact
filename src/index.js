import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './js/reducers/index';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import './index.css';
import './css/loader.css';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


import  bootstrap  from  './js/helpers/index';

import DragAndDrop from "./js/components/index";

const middleware = [thunk];
const store = createStore(allReducers,applyMiddleware(...middleware));

bootstrap(store);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path='/' component={DragAndDrop} />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
