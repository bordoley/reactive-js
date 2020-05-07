import { none } from "./option.js";
export const identity = (v) => v;
export const returns = (v) => (..._args) => v;
export const alwaysFalse = returns(false);
export const alwaysTrue = returns(true);
export const alwaysVoid = returns(none);
export const increment = (x) => x + 1;
export const decrement = (x) => x - 1;
export const referenceEquals = (a, b) => a === b;
export const arrayEquals = (valuesAreEqual) => (a, b) => a.length === b.length && a.every((v, i) => valuesAreEqual(b[i], v));
export function pipe(source, ...operators) {
    return operators.reduce((acc, next) => next(acc), source);
}
export function compose(...operators) {
    return source => operators.reduce((acc, next) => next(acc), source);
}
