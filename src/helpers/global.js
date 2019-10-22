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