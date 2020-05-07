import { fromArray } from "./fromArray";
import { EnumerableLike } from "./interfaces";

/**
 * Creates an EnumerableLike that yields `value`.
 *
 * @param value The value to emit.
 */
export const ofValue = <T>(value: T): EnumerableLike<T> => fromArray([value]);
