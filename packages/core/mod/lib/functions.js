export function callWith(...args) {
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
export const referenceEquality = (a, b) => a === b;
const isReferenceEqualTo = (b) => a => a === b;
export const isEqualTo = (b, equality = referenceEquality) => equality === referenceEquality
    ? isReferenceEqualTo(b)
    : (a) => equality(a, b);
export const isEven = (x) => x % 2 === 0;
export const isOdd = (x) => x % 2 !== 0;
export const negate = (v) => !v;
export const sum = (...args) => {
    let acc = 0;
    for (let i = 0; i < args.length; i++) {
        acc += args[i];
    }
    return acc;
};
export const arrayEquality = (valuesEquality = referenceEquality) => (a, b) => a.length === b.length && a.every((v, i) => valuesEquality(b[i], v));
export function pipe(source, ...operators) {
    return operators.reduce((acc, next) => next(acc), source);
}
export function compose(...operators) {
    return source => operators.reduce((acc, next) => next(acc), source);
}
export function defer(source, ...operators) {
    return () => operators.reduce((acc, next) => next(acc), source);
}
export function flip(f) {
    return (...args) => {
        args.reverse();
        return f(...args);
    };
}
