import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
  
  sagaMiddleware.run(saga);

  return store;
};