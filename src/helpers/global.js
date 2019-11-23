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