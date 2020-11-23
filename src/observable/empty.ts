import { ObservableLike } from "../observable";
import { fromArray } from "./fromArray";

const defaultEmpty = fromArray()([]);

/**
 * Return an `ObservableLike` that emits no items and disposes the subscription after a specified delay.
 */
export const empty = <T>(
  options: { readonly delay?: number } = {},
): ObservableLike<T> => {
  const { delay = 0 } = options;
  return delay > 0 ? fromArray({ delay })([]) : defaultEmpty;
};
