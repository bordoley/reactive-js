import { Function1 } from "../functions";
import { ObservableLike } from "../observable";
import { fromArray } from "./fromArray";

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the observer.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
export const fromValue = <T>(
  options: { readonly delay?: number } = {},
): Function1<T, ObservableLike<T>> => {
  const call = fromArray(options);
  return v => call([v]);
};
