import { bindDisposables } from "./disposable.ts";
import {
  pipe,
  identity,
  Factory,
  Equality,
  Updater,
  updaterReducer,
  Function1,
  compose,
} from "./functions.ts";
import {
  onNotify,
  using,
  zipWithLatestFrom,
  dispatchTo,
  subscribe,
} from "./observable.ts";
import {
  StreamableLike,
  createActionReducer,
  StreamableOperator,
  createStreamable,
  stream as streamStreamable,
  mapReq,
  map as mapStream,
} from "./streamable.ts";

/** @noInheritDoc */
export interface StateStoreLike<T> extends StreamableLike<Updater<T>, T> {}

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
): StateStoreLike<T> =>
  createActionReducer(updaterReducer, initialState, options);

/**
 * Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const toStateStore = <T>(): StreamableOperator<
  T,
  T,
  Updater<T>,
  T
> => streamable =>
  createStreamable(updates =>
    using(scheduler => {
      const stream = pipe(streamable, streamStreamable(scheduler));
      const updatesSubscription = pipe(
        updates,
        zipWithLatestFrom(stream, (updateState, prev) => updateState(prev)),
        onNotify(dispatchTo(stream)),
        subscribe(scheduler),
      );

      bindDisposables(updatesSubscription, stream);

      return stream;
    }, identity),
  );

const requestMapper = <TA, TB>(
  parse: Function1<TA, TB>,
  serialize: Function1<TB, TA>,
) => (stateUpdater: Updater<TB>): Updater<TA> => oldStateTA => {
  const oldStateTB = parse(oldStateTA);
  const newStateTB = stateUpdater(oldStateTB);

  return oldStateTB === newStateTB ? oldStateTA : serialize(newStateTB);
};

export const map = <TA, TB>(
  parse: Function1<TA, TB>,
  serialize: Function1<TB, TA>,
): Function1<StateStoreLike<TA>, StateStoreLike<TB>> =>
  compose(mapReq(requestMapper(parse, serialize)), mapStream(parse));
