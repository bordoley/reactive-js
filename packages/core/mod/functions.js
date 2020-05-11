export function call(...args) {
    return f => f(...args);
}
export function bind(selector, ...args) {
    return () => selector(...args);
}
export const identity = (v) => v;
export const returns = (v) => (..._args) => v;
export const alwaysFalse = returns(false);
export const alwaysTrue = returns(true);
export const ignore = returns(undefined);
export const increment = (x) => x + 1;
export const incrementBy = (incr) => (x) => x + incr;
export const decrement = (x) => x - 1;
export const decrementBy = (decr) => (x) => x - decr;
export const referenceEquals = (a, b) => a === b;
export const isReferenceEqualTo = (b) => a => a === b;
export const sum = (...args) => {
    let acc = 0;
    for (let i = 0; i < args.length; i++) {
        acc += args[i];
    }
    return acc;
};
export const arrayEquals = (valuesAreEqual) => (a, b) => a.length === b.length && a.every((v, i) => valuesAreEqual(b[i], v));
export function pipe(source, ...operators) {
    return operators.reduce((acc, next) => next(acc), source);
}
export function compose(...operators) {
    return source => operators.reduce((acc, next) => next(acc), source);
}
