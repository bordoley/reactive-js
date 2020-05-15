import { fromArray } from "./fromArray.ts";
import { EnumerableLike } from "./interfaces.ts";
import { Function, pipe } from "../../functions.ts";

const _fromValue = <T>(value: T): EnumerableLike<T> =>
  pipe([value], fromArray());

/**
 * Creates an EnumerableLike that yields `value`.
 *
 * @param value The value to emit.
 */
export const fromValue = <T>(): Function<T, EnumerableLike<T>> => _fromValue;
