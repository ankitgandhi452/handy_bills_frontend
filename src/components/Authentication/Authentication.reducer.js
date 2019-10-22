import { STORE_AUTH } from 'components/Authentication/Authentication.actionConstant';

const DEFAULT_STATE = {
    'access-token': null,
    client: null,
    uid: null,
    expiry: null,
    isAuthenticated: false,
    authenticationType: null
}

const Authentication = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case STORE_AUTH: 
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default Authentication;