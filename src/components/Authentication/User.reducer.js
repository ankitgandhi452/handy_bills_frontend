import { LOGIN_FAILURE, LOGIN_INITIATE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_INITIATE, REGISTER_SUCCESS } from 'components/Authentication/Authentication.actionConstant';

const DEFAULT_STATE = {
    loading: false,
    data: {},
    errors: {}
}

const User = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case REGISTER_INITIATE: 
        case LOGIN_INITIATE: 
            return {...DEFAULT_STATE, loading: true}
        case REGISTER_SUCCESS: 
        case LOGIN_SUCCESS: 
            return {...DEFAULT_STATE, data: {...action.payload}}
        case REGISTER_FAILURE: 
        case LOGIN_FAILURE: 
            return {...DEFAULT_STATE, errors: {...action.payload}}
        default:
            return state;
    }
}

export default User;