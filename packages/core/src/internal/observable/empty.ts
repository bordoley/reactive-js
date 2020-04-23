import { ObservableLike } from "./interfaces";
import { fromArray } from "./fromArray";

const defaultEmpty = fromArray([]);

/**
 * Return an `ObservableLike` that emits no items and disposes the subscription after a specified delay.
 */
export function empty<T>(delay = 0): ObservableLike<T> {
  return delay > 0 ? fromArray([], { delay }) : defaultEmpty;
}
