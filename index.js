import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reducer from './src/reducer';
import App from './src/components/App';
import User from './src/components/User';
import { watchFetchUsers } from './src/sagas';

const root = document.getElementById('root');
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(watchFetchUsers);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>,
  root,
);
