/// <reference types="./dispatcher.d.ts" />
const dispatchTo = (dispatcher) => v => dispatcher.dispatch(v);

export { dispatchTo };
