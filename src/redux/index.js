import { combineReducers, createStore } from "redux";
import userReducer from "./userReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    userReducer,
    themeReducer: themeReducer
})

const store = createStore(rootReducer)

export default store
