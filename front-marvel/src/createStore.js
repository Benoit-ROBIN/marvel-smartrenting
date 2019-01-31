import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer, rootSaga, initialState } from "./store/index";

export function configureStore() {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = composeWithDevTools({})

  const store = createStore(
    rootReducer, 
    initialState, 
    composeEnhancers(applyMiddleware(sagaMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
}