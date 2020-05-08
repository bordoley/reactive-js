import { fromArray } from "./fromArray.ts";
import { ObservableLike } from "./interfaces.ts";

const defaultEmpty = fromArray()([]);

/**
 * Return an `ObservableLike` that emits no items and disposes the subscription after a specified delay.
 */
export const empty = <T>({ delay } = { delay: 0 }): ObservableLike<T> =>
  delay > 0 ? fromArray({ delay })([]) : defaultEmpty;
