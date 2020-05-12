import { pipe, returns, Factory, Reducer, Equality } from "../../functions";
import {
  ObservableLike,
  fromValue,
  scan,
  distinctUntilChanged,
  mergeWith,
} from "../../observable";
import { StreamableLike } from "./interfaces";
import { createStreamable } from "./streamable";

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
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  equals?: Equality<T>,
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
      src,
      scan(reducer, returns(acc)),
      mergeWith(fromValue()(acc)),
      distinctUntilChanged(equals),
    );
  };

  return createStreamable(operator);
};
