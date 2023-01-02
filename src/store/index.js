import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from 'redux-thunk';
import authReducer from "./reducers/auth";
import eventsReducer from "./reducers/event";

const rootReducer = combineReducers({
  auth: authReducer,
  event: eventsReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))