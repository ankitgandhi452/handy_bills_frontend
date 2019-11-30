import Authentication from "components/Authentication/Authentication.reducer";
import User from "components/Authentication/User.reducer";
import Client from "components/Client/Client.reducer";
import { combineReducers } from "redux";


const allReducer = {
    authentication: Authentication,
    user: User,
    client: Client
}

const combinedReducer = combineReducers(allReducer);

export { combinedReducer };

