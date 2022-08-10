import { createStore, applyMiddleware } from "redux";
import thunkMIddleware from "redux-thunk";
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(thunkMIddleware));
export default store;
