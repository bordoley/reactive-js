import { concatWith, fromValue, ignoreElements } from "./container";
import { dispatchTo } from "./dispatcher";
import { add, bindTo } from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  Reducer,
  Updater,
  identity as identityF,
  pipe,
  returns,
  updateReducer,
} from "./functions";
import {
  ObservableLike,
  StreamLike,
  __currentScheduler,
  __memo,
  __observe,
  __using,
  createObservable,
  distinctUntilChanged,
  fromArrayT as fromArrayTObs,
  fromDisposable,
  keepT,
  merge,
  mergeT,
  onNotify,
  onSubscribe,
  scan,
  subscribe,
  subscribeOn,
  takeFirst,
  takeUntil,
} from "./observable";
import { scheduler as getScheduler } from "./observer";
import { Option, isSome, none } from "./option";
import { SchedulerLike, createPausableScheduler } from "./scheduler";
import { notifySink, sinkInto as sinkIntoSink, sourceFrom } from "./source";
import {
  createLiftedStreamable,
  createStream,
  stream,
} from "./streamable/streamable";

export interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T>> {
  stream(
    this: StreamableLike<TReq, T, TStream>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): TStream;
}

export interface StreamableStateLike<T>
  extends StreamableLike<Updater<T>, T, StateStreamLike<T>> {}
export interface StateStreamLike<T> extends StreamLike<Updater<T>, T> {}

export type FlowMode = "resume" | "pause";

export interface FlowableLike<T>
  extends StreamableLike<FlowMode, T, FlowableStreamLike<T>> {}
export interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {}

export interface FlowableSinkLike<T>
  extends StreamableLike<T, FlowMode, FlowableSinkStreamLike<T>> {}
export interface FlowableSinkStreamLike<T> extends StreamLike<T, FlowMode> {}

export {
  createStreamble,
  createLiftedStreamable,
  stream,
} from "./streamable/streamable";
export { createFlowableSinkAccumulator } from "./streamable/io";

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
): StreamableLike<TAction, T, StreamLike<TAction, T>> =>
  createLiftedStreamable(obs =>
    createObservable(observer => {
      const acc = initialState();
      return pipe(
        obs,
        scan(reducer, returns(acc)),
        concatWith(mergeT, fromValue(fromArrayTObs)(acc)),
        distinctUntilChanged(options),
        onNotify(notifySink(observer)),
        subscribe(getScheduler(observer)),
        bindTo(observer),
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

const _empty = createLiftedStreamable<any, any>(takeFirst({ count: 0 }));

/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
export const empty = <TReq, T>(): StreamableLike<
  TReq,
  T,
  StreamLike<TReq, T>
> => _empty;

export const flow =
  <T>({
    scheduler,
  }: {
    scheduler?: SchedulerLike;
  } = {}): Function1<ObservableLike<T>, FlowableLike<T>> =>
  observable =>
    createLiftedStreamable((modeObs: ObservableLike<FlowMode>) =>
      createObservable(observer => {
        const pausableScheduler = createPausableScheduler(
          scheduler ?? getScheduler(observer),
        );

        pipe(
          observer,
          sourceFrom(
            pipe(
              observable,
              subscribeOn(pausableScheduler),
              pipe(pausableScheduler, fromDisposable, takeUntil),
            ),
          ),
          add(
            pipe(
              modeObs,
              onNotify((mode: FlowMode) => {
                switch (mode) {
                  case "pause":
                    pausableScheduler.pause();
                    break;
                  case "resume":
                    pausableScheduler.resume();
                    break;
                }
              }),
              subscribe(getScheduler(observer)),
              bindTo(pausableScheduler),
            ),
          ),
          add(pausableScheduler),
        );
      }),
    );

const _identity = {
  stream(scheduler: SchedulerLike, options?: { readonly replay: number }) {
    return createStream(identityF, scheduler, options);
  },
};

/*
 * Returns an `StreamableLike` that publishes it's notifications.
 */
export const identity = <T>(): StreamableLike<T, T, StreamLike<T, T>> =>
  _identity as StreamableLike<T, T, StreamLike<T, T>>;

export const sinkInto =
  <TReq, T, TOut>(dest: StreamableLike<T, TReq, StreamLike<T, TReq>>) =>
  (src: StreamableLike<TReq, T, StreamLike<TReq, T>>): ObservableLike<TOut> =>
    createObservable(observer => {
      const srcStream = pipe(src, stream(getScheduler(observer)));
      const destStream = pipe(dest, stream(getScheduler(observer)));

      pipe(
        merge(
          pipe(
            srcStream,
            onNotify(dispatchTo(destStream)),
            ignoreElements(keepT),
            onSubscribe(() => destStream),
          ),
          pipe(
            destStream,
            onNotify(dispatchTo(srcStream)),
            ignoreElements(keepT),
            onSubscribe(() => srcStream),
          ),
        ),
        ignoreElements(keepT),
        sinkIntoSink(observer),
      );
    });

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
): StateStreamLike<T> => {
  const { equality } = options;
  const optionsMemo = __memo(createStateOptions, equality);
  const streamable = __memo(createStateStore, initialState, optionsMemo);
  return __stream(streamable);
};
