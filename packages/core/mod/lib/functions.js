export function callWith(...args) {
    return f => f(...args);
}
export function bind(func, ...args) {
    return () => func(...args);
}
export const identity = (v) => v;
export const returns = (v) => (..._args) => v;
const _alwaysFalse = returns(false);
export const alwaysFalse = _alwaysFalse;
const _alwaysTrue = returns(true);
export const alwaysTrue = _alwaysTrue;
const _ignore = returns(undefined);
export const ignore = _ignore;
export const increment = (x) => x + 1;
export const incrementBy = (incr) => (x) => x + incr;
export const decrement = (x) => x - 1;
export const decrementBy = (decr) => (x) => x - decr;
export const strictEquality = (a, b) => a === b;
const isStrictlyEqualTo = (b) => a => a === b;
export const isEqualTo = (b, equality = strictEquality) => equality === strictEquality ? isStrictlyEqualTo(b) : (a) => equality(a, b);
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
export const arrayEquality = (valuesEquality = strictEquality) => (a, b) => a.length === b.length && a.every((v, i) => valuesEquality(b[i], v));
export const updaterReducer = (acc, updater) => updater(acc);
export function pipe(source, ...operators) {
    return operators.reduce(updaterReducer, source);
}
export function compose(...operators) {
    return source => operators.reduce(updaterReducer, source);
}
export const composeWith = (op2) => op1 => compose(op1, op2);
export function defer(source, ...operators) {
    return () => operators.reduce((acc, next) => next(acc), source);
}
export function flip(f) {
    return (...args) => {
        args.reverse();
        return f(...args);
    };
}
