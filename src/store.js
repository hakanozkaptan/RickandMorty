import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import reducer from './reducer';

import {
  promiseMiddleware,
  localStorageMiddleware
} from './middleware';

export const history = createHistory();

history.listen(() => {
  window.scrollTo(0, 0);
});

const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
};

export const store = createStore(
  reducer, composeWithDevTools(getMiddleware()));
