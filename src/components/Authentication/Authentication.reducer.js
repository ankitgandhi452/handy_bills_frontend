import { LOGOUT_FAILURE, LOGOUT_INITIATE, LOGOUT_SUCCESS, STORE_AUTH } from 'components/Authentication/Authentication.actionConstant';

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
        case LOGOUT_INITIATE:
            return {...state, isAuthenticated: false}
        case LOGOUT_SUCCESS:
        case LOGOUT_FAILURE:
            return {...DEFAULT_STATE}
        default:
            return state;
    }
}

export default Authentication;