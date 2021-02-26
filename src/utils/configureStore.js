import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import createReducer from '../store/reducers';
import promiseLifecycleMiddleware from '../middlewares/promiseLifecycle';

export default function configureStore(initialState = {}) {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const middlewares = [
    promiseLifecycleMiddleware,
    promiseMiddleware,
    reduxThunk,
  ];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  return store;
}

export const store = configureStore();