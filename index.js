import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './src/components/App';
// import mainReducer from './src/reducer';

const root = document.getElementById('root');
// const store = createStore(
//   mainReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  root,
);
