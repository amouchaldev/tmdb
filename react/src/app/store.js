import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "../features";
const store = legacy_createStore(allReducers, applyMiddleware(thunk))
export default store