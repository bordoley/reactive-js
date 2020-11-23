import { Function1, compose, callWith, Factory } from "../../functions";
import { fromValue } from "./fromValue";
import { ObservableLike } from "../../observable";
import { map } from "./map";

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
