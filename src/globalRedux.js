import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { resettableReducer } from 'reduxsauce';
import saga from './globalSaga';

export default () => {
  const resettable = resettableReducer(ApplicationTypes.RESET_APPLICATION);

  const reducers = combineReducers({
  	
  	
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware,
    websocketChatMiddleware,
  ];

  const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

  sagaMiddleware.run(saga);

  return store;
};