import type { Updater } from "./functions.js";
export declare const abs: (x: number) => number;
export declare const floor: (x: number) => number;
export declare const max: (...values: number[]) => number;
export declare const min: (...values: number[]) => number;
export declare const random: () => number;
export declare const clamp: (min: number, v: number, max: number) => number;
export declare const clampPositiveNonZeroInteger: (v: number) => number;
export declare const clampPositiveInteger: (v: number) => number;
/**
 * An updater function that returns the result of decrementing `x`.
 */
export declare const decrement: (x: number) => number;
/**
 * Returns a function that decrements a number `x` by the value `decr`.
 */
export declare const decrementBy: (decr: number) => Updater<number>;
/**
 * An updater function that returns the result of incrementing `x`.
 */
export declare const increment: (x: number) => number;
/**
 * Returns a function that increments a number `x` by the value `incr`.
 */
export declare const incrementBy: (incr: number) => Updater<number>;
export declare const scale: (start: number, end: number) => Updater<number>;
export declare const sum: (a: number, b: number) => number;
