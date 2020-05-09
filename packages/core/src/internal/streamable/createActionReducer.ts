import { pipe, returns } from "../../functions";
import {
  ObservableLike,
  fromValue,
  scan,
  distinctUntilChanged,
} from "../../observable";
import { StreamableLike } from "./interfaces";
import { createStreamable } from "./streamable";
import { merge } from "../observable/merge";

/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createActionReducer = <TAction, T>(
  reducer: (state: T, action: TAction) => T,
  initialState: () => T,
  equals?: (a: T, b: T) => boolean,
): StreamableLike<TAction, T> => {
  const operator = (src: ObservableLike<TAction>) => {
    const acc = initialState();

    // Note: We want to product the initial value first,
    // but need to subscribe to src when the operator is initially
    // invoked to avoid missing any dispatch requests.
    // Hence we merge the two observables and take advantage
    // of the fact that merge notifies in the order of
    // the observables merged.
    return pipe(
      merge(fromValue()(acc), pipe(src, scan(reducer, returns(acc)))),
      distinctUntilChanged(equals),
    );
  };

  return createStreamable(operator);
};
