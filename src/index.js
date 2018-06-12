import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/css/index.css';

import { combineReducers, createStore, compose } from "redux";
import { Provider } from "react-redux";
import initReducer from './reducers/initReducer';

const allReducers = combineReducers({
    init: initReducer
});

const allStoreEnhancers = compose(
    window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(
    allReducers,
    {
        init: {
            loadMainContent: false,
            removeDelays: false,
            isWheel: false,
            movingPanel: false
        }
    },
    allStoreEnhancers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
