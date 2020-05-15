import { fromArray } from "./fromArray";
import { EnumerableLike } from "./interfaces";
import { Function, pipe } from "../../functions";

const _fromValue = <T>(value: T): EnumerableLike<T> =>
  pipe([value], fromArray());

/**
 * Creates an EnumerableLike that yields `value`.
 *
 * @param value The value to emit.
 */
export const fromValue = <T>(): Function<T, EnumerableLike<T>> => _fromValue;
