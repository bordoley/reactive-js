import { bindDisposables } from "./disposable.ts";
import {
  pipe,
  identity,
  Factory,
  Equality,
  strictEquality,
  Updater,
} from "./functions.ts";
import {
  onNotify,
  using,
  zipWithLatestFrom,
  distinctUntilChanged,
  dispatchTo,
  subscribe,
} from "./observable.ts";
import {
  StreamableLike,
  createActionReducer,
  StreamableOperator,
  createStreamable,
  stream as streamStreamable,
} from "./streamable.ts";

/** @noInheritDoc */
export interface StateStoreLike<T> extends StreamableLike<Updater<T>, T> {}

const stateStoreReducer = <T>(state: T, action: Updater<T>) => action(state);

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
  equals?: Equality<T>,
): StateStoreLike<T> =>
  createActionReducer(stateStoreReducer, initialState, equals);

/**
 * Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const toStateStore = <T>(
  equality: Equality<T> = strictEquality,
): StreamableOperator<T, T, Updater<T>, T> => streamable =>
  createStreamable(updates =>
    using(scheduler => {
      const stream = streamStreamable(streamable, scheduler);
      const updatesSubscription = pipe(
        updates,
        zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)),
        distinctUntilChanged(equality),
        onNotify(dispatchTo(stream)),
        subscribe(scheduler),
      );

      bindDisposables(updatesSubscription, stream);

      return stream;
    }, identity),
  );
