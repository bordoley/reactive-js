import { fromArray } from "./fromArray";
import { EnumerableLike } from "./interfaces";
import { Function1, pipe } from "../../functions";

const _fromValue = <T>(value: T): EnumerableLike<T> =>
  pipe([value], fromArray());

/**
 * Creates an EnumerableLike that yields `value`.
 *
 * @param value The value to emit.
 */
export const fromValue = <T>(): Function1<T, EnumerableLike<T>> => _fromValue;
