import { STORE_AUTH } from 'components/Authentication/Authentication.actionConstant';

export const storeAuth = (payload) => (
    {
        type: STORE_AUTH,
        payload
    }
)

