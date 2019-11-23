import { REGISTER_FAILURE, REGISTER_INITIATE, REGISTER_SUCCESS } from 'components/Authentication/Authentication.actionConstant';

const DEFAULT_STATE = {
    loading: false,
    data: {},
    errors: {}
}

const User = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case REGISTER_INITIATE: 
            return {...DEFAULT_STATE, loading: true}
        case REGISTER_SUCCESS: 
            return {...DEFAULT_STATE, data: {...action.payload}}
        case REGISTER_FAILURE: 
            return {...DEFAULT_STATE, errors: {...action.payload}}
        default:
            return state;
    }
}

export default User;