import { bindDisposables } from "./disposable";
import {
  pipe,
  identity,
  Factory,
  Equality,
  Updater,
  updaterReducer,
  Function1,
} from "./functions";
import {
  onNotify,
  using,
  zipWithLatestFrom,
  dispatchTo,
  subscribe,
} from "./observable";
import {
  StreamableLike,
  createActionReducer,
  StreamableOperator,
  createStreamable,
  stream as streamStreamable,
  mapReq,
  map as mapStream,
} from "./streamable";

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
  equals?: Equality<T>,
): StateStoreLike<T> =>
  createActionReducer(updaterReducer, initialState, equals);

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
      const stream = streamStreamable(streamable, scheduler);
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
  store: StateStoreLike<TA>,
  parse: Function1<TA, TB>,
  serialize: Function1<TB, TA>,
): StateStoreLike<TB> =>
  pipe(store, mapReq(requestMapper(parse, serialize)), mapStream(parse));
