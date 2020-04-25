import { ObservableLike } from "./interfaces.ts";
import { fromArray } from "./fromArray.ts";

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the subscriber.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
export function ofValue<T>(value: T, delay = 0): ObservableLike<T> {
  return fromArray([value], { delay });
}
