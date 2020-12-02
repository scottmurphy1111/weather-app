import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/css/index.css';
// import data from './data/data.json';

// import { combineReducers, createStore, compose } from 'redux';
// import { Provider } from 'react-redux';
// import initReducer from './reducers/initReducer';
// import wheelReducer from './reducers/wheelReducer';

// const allReducers = combineReducers({
//   init: initReducer,
//   wheel: wheelReducer
// });

// const allStoreEnhancers = compose(
//   window.devToolsExtension && window.devToolsExtension()
// );

// const store = createStore(
//   allReducers,
//   {
//     init: {
//       loadMainContent: false,
//       removeDelays: false
//     },
//     wheel: {
//       isWheel: false,
//       movingPanel: false
//     }
//   },
//   allStoreEnhancers
// );

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  
  <App />,
  //</AppContext.Provider>,
  document.getElementById('root')
);

registerServiceWorker();
