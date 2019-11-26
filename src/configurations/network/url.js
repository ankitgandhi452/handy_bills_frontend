const url = {
    api: {
        baseURL: process.env.REACT_APP_API_BASE_URL,
        authentication: {
            register: 'v1/auth',
            login: 'v1/auth/sign_in',
            forgotPassword: 'v1/auth/password'
        }
    }
}

export { url }

