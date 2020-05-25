import { Function1, compose, callWith, Factory } from "../../functions.ts";
import { fromValue } from "./fromValue.ts";
import { ObservableLike } from "./interfaces.ts";
import { map } from "./map.ts";

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the observer.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
export const compute = <T>(options?: {
  readonly delay?: number;
}): Function1<Factory<T>, ObservableLike<T>> =>
  compose(fromValue(options), map(callWith()));
