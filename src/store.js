import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import homeReducer from "./Reducers/homeReducer";

var middleware = [thunk,logger]

const rootRuducer = combineReducers({
    home:homeReducer
})

const store = createStore(
    rootRuducer,
    applyMiddleware(...middleware)
)

export default store;