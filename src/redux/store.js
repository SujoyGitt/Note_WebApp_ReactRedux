import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Note_Reducer } from "./Reducer/Notes_reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({ Note_Reducer });
let middleware = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
