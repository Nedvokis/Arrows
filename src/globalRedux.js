import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from 'globalSaga';

import { reducer as reduxSignIn } from 'redux/reduxSignIn';

export default (history) => {

  const reducers = combineReducers({
    router: routerReducer,
  	signin: reduxSignIn,
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

  sagaMiddleware.run(saga);

  return store;
};