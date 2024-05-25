import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./rootReducer";

/**
 * the logger executes in the browser console
 * whenever we perform an action
 */
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger)
))

export default store