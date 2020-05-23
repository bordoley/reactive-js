export const dispatch = (dispatcher, v) => {
    dispatcher.dispatch(v);
};
export const dispatchTo = (dispatcher) => v => dispatch(dispatcher, v);
