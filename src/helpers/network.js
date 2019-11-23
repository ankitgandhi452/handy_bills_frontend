import mapKeys from 'lodash/mapKeys';
import snakeCase from 'lodash/snakeCase';


const getNoInternetMessage = () => (
    "please connect to internet for this operation."
)

const getServerErrorMessage = () => (
    "We are unable to take your request now. Please try again after sometime."
)

export const getRequestDataInFormat = (data) => {
    return mapKeys(data, (v, k) => snakeCase(k))
}

export const getNetworkError = (error) => {
    console.log(error.config, error.message);
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return error.response.data.errors;
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        return {errors: {full_messages: [getServerErrorMessage()]}}
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        return {errors: {full_messages: [getNoInternetMessage()]}}
    }
}