import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from './reducer';
import thunk from 'redux-thunk';

import { fetchTodos } from './actions';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

store.dispatch(fetchTodos());

render(
    <div className="container">
        <div className="row">
            <div className="col-md-8 mx-md-auto">
                <Provider store={store}><App /></Provider>
            </div>
        </div>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();