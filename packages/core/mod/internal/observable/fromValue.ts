import { fromArray } from "./fromArray.ts";
import { ObservableLike } from "./interfaces.ts";
import { Operator } from "../../functions.ts";

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
export const fromValue = <T>(
  config = { delay: 0 },
): Operator<T, ObservableLike<T>> => {
  const call = fromArray(config);
  return v => call([v]);
};
