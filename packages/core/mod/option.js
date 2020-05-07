export const none = undefined;
export const isSome = (option) => option !== none;
export const isNone = (option) => option === none;
export const orCompute = (compute) => (value) => value !== null && value !== void 0 ? value : compute();
