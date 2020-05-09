import { Operator, compose, call } from "../../functions.ts";
import { ObservableLike } from "./interfaces.ts";
import { fromValue } from "./fromValue"
import { map } from "./map.ts";

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
export const compute = <T>(
  options?: { delay: number },
): Operator<() => T, ObservableLike<T>> =>
  compose(
    fromValue(options),
    map(call()),
  );
