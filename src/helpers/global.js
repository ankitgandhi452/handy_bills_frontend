import { store } from 'configurations/redux/store';
import { camelCase, isPlainObject, mapKeys } from 'helpers/lodash';

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
    console.log("isPlainObject", isPlainObject(errors), errors)
    return isPlainObject(errors) ? mapKeys(errors, (v, k) => camelCase(k)) : errors;
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

export const commonSuccessNavigationWithDelay = (historyRef, route, action= "push", params = {}, timeout=1000) => {
    setTimeout(() => {
        historyRef[action]({
            pathname: route,
            state: params
        })
    }, timeout)
}

export const isMobile = () => (
    window.innerHeight > window.innerWidth
)
