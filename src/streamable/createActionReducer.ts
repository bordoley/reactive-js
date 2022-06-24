import { fromValue } from "../container";
import { addDisposable, bindDisposables } from "../disposable";
import {
  Equality,
  Factory,
  Reducer,
  Updater,
  pipe,
  returns,
  updaterReducer,
} from "../functions";
import {
  ObservableLike,
  StreamLike,
  createObservableUnsafe,
  distinctUntilChanged,
  fromArrayT,
  mergeWith,
  scan,
  subscribe,
  zipWithLatestFrom,
} from "../observable";
import { sinkInto } from "../source";
import {
  StreamableLike,
  StreamableOperator,
  StreamableStateLike,
} from "../streamable";
import { createStreamable, stream as streamStreamable } from "./streamable";

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
  options?: { readonly equality?: Equality<T> },
): StreamableLike<TAction, T, StreamLike<TAction, T>> => {
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
      mergeWith(fromValue(fromArrayT)(acc)),
      distinctUntilChanged(options),
    );
  };

  return createStreamable(operator);
};

/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createStateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableStateLike<T> =>
  createActionReducer(updaterReducer, initialState, options);

/**
 * Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const toStateStore =
  <T>(): StreamableOperator<T, T, Updater<T>, T> =>
  streamable =>
    createStreamable(updates =>
      createObservableUnsafe(observer => {
        const stream = pipe(streamable, streamStreamable(observer));
        const updatesSubscription = pipe(
          updates,
          zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)),
          subscribe(observer, stream.dispatch, stream),
        );

        bindDisposables(updatesSubscription, stream);
        addDisposable(observer, stream);

        pipe(stream, sinkInto(observer));
      }),
    );
