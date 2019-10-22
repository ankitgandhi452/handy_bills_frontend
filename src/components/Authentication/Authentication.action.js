import { STORE_AUTH } from 'components/Authentication/Authentication.actionConstant';

export const storeAuthDataDispatch = (payload) => (
    {
        type: STORE_AUTH,
        payload
    }
)