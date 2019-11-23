import Authentication from "components/Authentication/Authentication.reducer";
import User from "components/Authentication/User.reducer";
import { combineReducers } from "redux";


const allReducer = {
    authentication: Authentication,
    user: User
}

const combinedReducer = combineReducers(allReducer);

export { combinedReducer };

