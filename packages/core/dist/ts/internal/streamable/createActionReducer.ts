import { StreamableLike } from "./interfaces.ts";
import {
  ObservableLike,
  scan,
  startWith,
  distinctUntilChanged,
} from "../../observable.ts";
import { pipe } from "../../pipe.ts";
import { createStreamable } from "./streamable.ts";
import { returns } from "../../functions.ts";

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

    return pipe(
      src,
      scan(reducer, returns(acc)),
      startWith(acc),
      distinctUntilChanged(equals),
    );
  };

  return createStreamable(operator);
};
