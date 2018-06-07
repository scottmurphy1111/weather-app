import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/css/index.css';

// import thunk from 'redux-thunk';
// import { applyMiddleware, compose, combineReducers, createStore } from "redux";
// import { Provider } from "react-redux";
// import initReducer from './reducers/initReducer';


// const allReducers = combineReducers({
//     loaded: initReducer
// });

// const allStoreEnhancers = compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension && window.devToolsExtension()
// )

// const store = createStore(
//     allReducers, {
//         loaded: false
//     },
//     allStoreEnhancers
// );

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

registerServiceWorker();
