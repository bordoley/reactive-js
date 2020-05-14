import { Function } from "../../functions.ts";
import { fromArray } from "./fromArray.ts";
import { ObservableLike } from "./interfaces.ts";

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the observer.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
export const fromValue = <T>(
  config = { delay: 0 },
): Function<T, ObservableLike<T>> => {
  const call = fromArray(config);
  return v => call([v]);
};
