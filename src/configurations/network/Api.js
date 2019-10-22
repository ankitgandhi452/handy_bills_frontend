import axios from "axios";
import { storeAuth } from 'components/Authentication/Authentication.action';
import { config } from "configurations/network/default";
import { url } from "configurations/network/url";
import { store } from "configurations/redux/store";

class Api {

    constructor() {
        const baseURL = url.api.baseURL;
        const defaultConfig = config;

        this.authData = null;
        this.requestManager = axios.create({
            baseURL,
            ...defaultConfig
        })
        this.requestManager.interceptors.request.use(Api.requestInterceptor, Api.requestInterceptorError)
        this.requestManager.interceptors.response.use(Api.responseInterceptor, Api.responseInterceptorError)
    }

    static requestInterceptor = (config) => {
        let tokenData = this.getAuthData();
        return {
            ...config,
            headers: {
                ...config.headers,
                ...tokenData
            }
        }
    }

    static requestInterceptorError = (error) => {
        return Promise.reject(error);
    }

    static responseInterceptor = (response) => {
        this.storeAuthData(response);
        return response;
    }

    static responseInterceptorError = (error) => {
        return Promise.reject(error);
    }

    static getAuthData = () => {
        let authData = this.authData;
        if (!authData) {
            authData = store.getState().authenticate;
        }
        return authData;
    }

    static storeAuthData = (response) => {
        let accessToken = response.headers['access-token'];
        if (accessToken) {
            let { expiry, uid, client } = response.headers;
            const authData = {
                expiry,
                uid,
                client,
                'access-token': accessToken
            }
            this.authData = authData;
            store.dispatch(
                storeAuth(this.authData)
            )
        }
    }
    
    fetch = (options, action) => {
        return this.requestManager.request(options);
    }

    errorHandling = (error, _action, _retries) => {
        if (!error.status) return false;
      
        if (error.status === 401) {
          // ApiInstance logout method
        }
      
        return 400 <= error.status && error.status < 500;
    }

}

export default Api;
window.NetworkRequest = Api;