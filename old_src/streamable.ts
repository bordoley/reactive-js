import { createStream } from "./__internal__.stream";
import { concatWith, fromValue, ignoreElements } from "./container";
import { dispatchTo } from "./dispatcher";
import { add, addTo } from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  Reducer,
  Updater,
  compose,
  getLength,
  newInstance,
  pipe,
  returns,
  updateReducer,
} from "./functions";
import {
  ObservableOperator,
  __currentScheduler,
  __memo,
  __observe,
  __using,
  createObservable,
  distinctUntilChanged,
  fromArrayT as fromArrayTObs,
  keepT,
  merge,
  mergeT,
  onNotify,
  onSubscribe,
  scan,
  subscribe,
} from "./observable";
import { Option, isSome, none } from "./option";
import { sinkInto as sinkIntoSink } from "./reactiveContainer";
import { SchedulerLike } from "./scheduler";
import { StreamLike } from "./stream";

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
): StreamableLike<TAction, T> =>
  createLiftedStreamable(obs =>
    createObservable(observer => {
      const acc = initialState();
      return pipe(
        obs,
        scan(reducer, returns(acc)),
        concatWith(mergeT, fromValue(fromArrayTObs)(acc)),
        distinctUntilChanged(options),
        sinkIntoSink(observer),
      );
    }),
  );

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
  createActionReducer(updateReducer, initialState, options);

const streamOnSchedulerFactory = <TReq, T, TStream extends StreamLike<TReq, T>>(
  streamable: StreamableLike<TReq, T, TStream>,
  scheduler: SchedulerLike,
  replay: number,
) => pipe(streamable, stream(scheduler, { replay }));

export const __stream = <TReq, T, TStream extends StreamLike<TReq, T>>(
  streamable: StreamableLike<TReq, T, TStream>,
  {
    replay = 0,
    scheduler,
  }: { readonly replay?: number; readonly scheduler?: SchedulerLike } = {},
): TStream => {
  const currentScheduler = __currentScheduler();
  return __using(
    streamOnSchedulerFactory,
    streamable,
    scheduler ?? currentScheduler,
    replay,
  );
};

const createStateOptions = <T>(equality: Option<Equality<T>>) =>
  isSome(equality) ? { equality } : none;

export const __state = <T>(
  initialState: () => T,
  options: {
    readonly equality?: Option<Equality<T>>;
  } = {},
): StreamLike<Updater<T>, T> => {
  const { equality } = options;
  const optionsMemo = __memo(createStateOptions, equality);
  const streamable = __memo(createStateStore, initialState, optionsMemo);
  return __stream(streamable);
};
