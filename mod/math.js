/// <reference types="./math.d.ts" />

import { MAX_SAFE_INTEGER, Math } from "./__internal__/constants.js";
export const abs = Math.abs;
export const floor = Math.floor;
export const max = Math.max;
export const min = Math.min;
export const random = Math.random;
export const clamp = (min, v, max) => v > max ? max : v < min ? min : v;
export const clampPositiveNonZeroInteger = (v) => floor(clamp(1, v, MAX_SAFE_INTEGER));
export const clampPositiveInteger = (v) => floor(clamp(0, v, MAX_SAFE_INTEGER));
/**
 * An updater function that returns the result of decrementing `x`.
 */
export const decrement = (x) => x - 1;
/**
 * Returns a function that decrements a number `x` by the value `decr`.
 */
export const decrementBy = (decr) => (x) => x - decr;
/**
 * An updater function that returns the result of incrementing `x`.
 */
export const increment = (x) => x + 1;
/**
 * Returns a function that increments a number `x` by the value `incr`.
 */
export const incrementBy = (incr) => (x) => x + incr;
export const scale = (start, end) => {
    const diff = end - start;
    return (v) => start + v * diff;
};
export const sum = (a, b) => a + b;
