import { FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_INITIATE, FORGOT_PASSWORD_SUCCESS, LOGIN_FAILURE, LOGIN_INITIATE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_INITIATE, REGISTER_SUCCESS, RESET_USER, STORE_AUTH } from 'components/Authentication/Authentication.actionConstant';
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

const loginInitiate = (payload) => (
    {
        type: LOGIN_INITIATE,
        payload
    }
)

const loginSuccess = (payload) => (
    {
        type: LOGIN_SUCCESS,
        payload
    }
)

const loginFailure = (payload) => (
    {
        type: LOGIN_FAILURE,
        payload
    }
)

const forgotPasswordInitiate = (payload) => (
    {
        type: FORGOT_PASSWORD_INITIATE,
        payload
    }
)

const forgotPasswordSuccess = (payload) => (
    {
        type: FORGOT_PASSWORD_SUCCESS,
        payload
    }
)

const forgotPasswordFailure = (payload) => (
    {
        type: FORGOT_PASSWORD_FAILURE,
        payload
    }
)

export const resetUser = () => (
    {
        type: RESET_USER,
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

export const login = (userData) => {
    return (dispatch, getState, { ApiInstance, urls }) => {
        return new Promise((resolve, reject) => {
            dispatch(loginInitiate())
            const authDetails = getState().authentication;
            if (!authDetails.isAuthenticated) {
                let requestOptions = {
                    method: "POST",
                    url: urls.api.authentication.login,
                    data: getRequestDataInFormat(userData)
                }
                console.log("requestOptions", requestOptions)
                return ApiInstance.fetch(requestOptions)
                    .then(user => {
                        console.log("user", user)
                        const userDetails = user.data.data;
                        dispatch(loginSuccess(userDetails))
                        resolve(userDetails);
                    })
                    .catch(error => {
                        let simplifiedError = getNetworkError(error);
                        console.log("error", simplifiedError);
                        dispatch(loginFailure(simplifiedError));
                        reject(simplifiedError);
                    })
            } else {
                resolve({msg: "Already Authenticated"})
            }
        })
    }
}

export const forgotPassword = (userData) => {
    return (dispatch, getState, { ApiInstance, urls }) => {
        return new Promise((resolve, reject) => {
            dispatch(forgotPasswordInitiate())
            const authDetails = getState().authentication;
            if (!authDetails.isAuthenticated) {
                let requestOptions = {
                    method: "POST",
                    url: urls.api.authentication.forgotPassword,
                    data: getRequestDataInFormat(userData)
                }
                console.log("requestOptions", requestOptions)
                return ApiInstance.fetch(requestOptions)
                    .then(user => {
                        console.log("user", user)
                        const userDetails = user.data.data;
                        dispatch(forgotPasswordSuccess(userDetails))
                        resolve(userDetails);
                    })
                    .catch(error => {
                        let simplifiedError = getNetworkError(error);
                        console.log("error", simplifiedError);
                        dispatch(forgotPasswordFailure(simplifiedError));
                        reject(simplifiedError);
                    })
            } else {
                resolve({msg: "Already Authenticated"})
            }
        })
    }
}