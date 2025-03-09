import { MAX_SAFE_INTEGER, Math } from "./__internal__/constants.js";
import type { Updater } from "./functions.js";

export const abs = Math.abs;
export const floor = Math.floor;
export const max = Math.max;
export const min = Math.min;
export const random = Math.random;

export const clamp = (min: number, v: number, max: number): number =>
  v > max ? max : v < min ? min : v;

export const clampPositiveNonZeroInteger = (v: number) =>
  floor(clamp(1, v, MAX_SAFE_INTEGER));

export const clampPositiveInteger = (v: number) =>
  floor(clamp(0, v, MAX_SAFE_INTEGER));

/**
 * An updater function that returns the result of decrementing `x`.
 */
export const decrement = (x: number) => x - 1;

/**
 * Returns a function that decrements a number `x` by the value `decr`.
 */
export const decrementBy =
  (decr: number): Updater<number> =>
  (x: number) =>
    x - decr;

/**
 * An updater function that returns the result of incrementing `x`.
 */
export const increment = (x: number) => x + 1;

/**
 * Returns a function that increments a number `x` by the value `incr`.
 */
export const incrementBy =
  (incr: number): Updater<number> =>
  (x: number) =>
    x + incr;

export const scale = (start: number, end: number): Updater<number> => {
  const diff = end - start;
  return (v: number) => start + v * diff;
};
