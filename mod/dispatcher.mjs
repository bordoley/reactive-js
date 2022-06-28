/// <reference types="./dispatcher.d.ts" />
const dispatch = (v) => dispatcher => {
    dispatcher.dispatch(v);
    return dispatcher;
};
const dispatchTo = (dispatcher) => v => dispatcher.dispatch(v);

export { dispatch, dispatchTo };
