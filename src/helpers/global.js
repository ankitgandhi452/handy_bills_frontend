import { store } from 'configurations/redux/store';
import camelCase from 'lodash/camelCase';
import mapKeys from 'lodash/mapKeys';

export const stateSetter = (context) => {
    let cancelled = false;
    return {
        cancel: () => {
            cancelled = true
        },
        setState: (newState, callback=() => {}) => {
            if (!cancelled) {
                context.setState(newState, callback);
            }
        }
    }
}

export const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

export const formatErrorCaseForForms = (errors) => {
    return mapKeys(errors, (v, k) => camelCase(k))
}

export const setFormikErrors = (errors, formikScope) => {
    for (var key in errors) {
        if (key !== "fullMessages") {
            formikScope.setFieldError(key, errors[key]);
        }
    }
    formikScope.setSubmitting(false);
}

export const isAuthenticated = () => (
    store.getState().authentication.isAuthenticated
)