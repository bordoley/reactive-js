import { fromArray } from "./fromArray.ts";
import { EnumerableLike } from "./interfaces.ts";
import { pipe } from "../../functions.ts";

/**
 * Creates an EnumerableLike that yields `value`.
 *
 * @param value The value to emit.
 */
export const fromValue = <T>(value: T): EnumerableLike<T> =>
  pipe([value], fromArray());
