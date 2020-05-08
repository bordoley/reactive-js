import { fromArray } from "./fromArray";
import { ObservableLike } from "./interfaces";
import { Operator } from "../../functions";

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
export const fromValue = <T>(delay = 0): Operator<T, ObservableLike<T>> => {
  const call = fromArray({ delay });
  return v => call([v]);
}
