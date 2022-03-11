import { combineReducers } from "redux";
import { userReducer, selecteduserReducer } from "./userReducer";

const reducers = combineReducers({
    allusers: userReducer,
    user: selecteduserReducer
});

export default reducers