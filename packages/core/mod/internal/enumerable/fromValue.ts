import { fromArray } from "./fromArray.ts";
import { EnumerableLike } from "./interfaces.ts";

/**
 * Creates an EnumerableLike that yields `value`.
 *
 * @param value The value to emit.
 */
export const fromValue = <T>(value: T): EnumerableLike<T> => fromArray([value]);
