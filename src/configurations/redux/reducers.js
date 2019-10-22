import Authentication from "components/Authentication/Authentication.reducer";
import { combineReducers } from "redux";


const allReducer = {
    authentication: Authentication
}

const combinedReducer = combineReducers(allReducer);

export { combinedReducer };

