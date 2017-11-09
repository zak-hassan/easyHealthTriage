import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import messageReducer from "./pf-lib/message/messageReducer";
import modalReducer from "./pf-lib/modal/modalReducer";

export default createStore(
  combineReducers({
    modalReducer,
    messageReducer,
  }),
    applyMiddleware(thunk)
);

