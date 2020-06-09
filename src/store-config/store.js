import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer/index';
import loggerMiddleware from './logger-middleware';
import DevTools from './devtools';
import history from '../router/history';

export const sagaMiddleware = createSagaMiddleware();

const defaultMiddlewares = [sagaMiddleware, routerMiddleware(history)];

const composedMiddlewares = () =>
  process.env.NODE_ENV === 'development'
    ? compose(
        applyMiddleware(...defaultMiddlewares, loggerMiddleware),
        DevTools.instrument()
      )
    : compose(applyMiddleware(...defaultMiddlewares));

const initialize = (initialState) => createStore(reducer(history), initialState, composedMiddlewares());

export default initialize;
