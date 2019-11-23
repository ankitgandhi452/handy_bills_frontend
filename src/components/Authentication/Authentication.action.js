import { REGISTER_FAILURE, REGISTER_INITIATE, REGISTER_SUCCESS, STORE_AUTH } from 'components/Authentication/Authentication.actionConstant';
import { getNetworkError, getRequestDataInFormat } from 'helpers/network';

export const storeAuth = (payload) => (
    {
        type: STORE_AUTH,
        payload
    }
)

// export const register = (userData) => (
//     {
//         type: REGISTER_INITIATE,
//         payLoad: userData,
//         meta: {
//             offline: {
//               // the network action to execute:
//               effect: { url: '/api/follow', method: 'POST', data: userData },
//               // action to dispatch when effect succeeds:
//               commit: { type: 'STORE_AUTH', meta: { userData } },
//               // action to dispatch if network action fails permanently:
//               rollback: { type: 'REGISTER_ROLLBACK', meta: { userData } }
//             }
//         }
//     }
// )

const registerInitiate = (payload) => (
    {
        type: REGISTER_INITIATE,
        payload
    }
)

const registerSuccess = (payload) => (
    {
        type: REGISTER_SUCCESS,
        payload
    }
)

const registerFailure = (payload) => (
    {
        type: REGISTER_FAILURE,
        payload
    }
)

export const register = (userData) => {
    return (dispatch, getState, { ApiInstance, urls }) => {
        return new Promise((resolve, reject) => {
            dispatch(registerInitiate())
            const authDetails = getState().authentication;
            if (!authDetails.isAuthenticated) {
                let requestOptions = {
                    method: "POST",
                    url: urls.api.authentication.register,
                    data: getRequestDataInFormat(userData)
                }
                console.log("requestOptions", requestOptions)
                return ApiInstance.fetch(requestOptions)
                    .then(user => {
                        console.log("user", user)
                        const userDetails = user.data.data;
                        dispatch(registerSuccess(userDetails))
                        resolve(userDetails);
                    })
                    .catch(error => {
                        let simplifiedError = getNetworkError(error);
                        console.log("error", simplifiedError);
                        dispatch(registerFailure(simplifiedError));
                        reject(simplifiedError);
                    })
            } else {
                resolve({msg: "Already Authenticated"})
            }
        })
    }
}