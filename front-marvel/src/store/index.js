import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";

import characterSaga from "./character/sagas";
import { CharacterReducer } from "./character/reducer";

//initial state
export const initialState = {
  characters: { 
    loading: false, 
    results: [], 
    errors: undefined,
    info: { 
      count: 0, 
      limit: 0 ,
      offset: 20,
      total: 0
    } 
  }
};

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers({
  characters: CharacterReducer
});

// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all([fork(characterSaga)]);
}
