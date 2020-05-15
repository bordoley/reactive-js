import { fromArray } from "./fromArray";
import { EnumerableLike } from "./interfaces";
import { pipe } from "../../functions";

/**
 * Creates an EnumerableLike that yields `value`.
 *
 * @param value The value to emit.
 */
export const fromValue = <T>(value: T): EnumerableLike<T> =>
  pipe([value], fromArray());
