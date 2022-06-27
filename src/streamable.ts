import {
  concatWith,
  empty as emptyContainer,
  endWith,
  fromValue,
  ignoreElements,
} from "./container";
import { add, bindTo } from "./disposable";
import { fromIterable as fromIterableEnumerable } from "./enumerable";
import {
  Equality,
  Factory,
  Function1,
  Reducer,
  Updater,
  pipe,
  returns,
  updaterReducer,
} from "./functions";
import {
  ObservableLike,
  StreamLike,
  __memo,
  __observe,
  concatT,
  createObservable,
  createSubject,
  dispatchTo,
  distinctUntilChanged,
  fromArrayT,
  fromDisposable,
  keepT,
  merge,
  mergeT,
  onNotify,
  onSubscribe,
  scan,
  subscribe,
  subscribeOn,
  takeUntil,
} from "./observable";
import { none } from "./option";
import { SchedulerLike, toPausableScheduler } from "./scheduler";
import { sinkInto as sinkIntoSink, sourceFrom } from "./source";
import { fromEnumerable } from "./streamable/fromEnumerable";
import { createFromObservableOperator } from "./streamable/streamable";

export interface StreamableLike<TReq, T, TStream extends StreamLike<TReq, T>> {
  stream(
    this: StreamableLike<TReq, T, TStream>,
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): TStream;
}

export interface AsyncEnumerableLike<T>
  extends StreamableLike<void, T, AsyncEnumeratorLike<T>> {}
export interface AsyncEnumeratorLike<T> extends StreamLike<void, T> {}

export interface StreamableStateLike<T>
  extends StreamableLike<Updater<T>, T, StateStreamLike<T>> {}
export interface StateStreamLike<T> extends StreamLike<Updater<T>, T> {}

export type StreamableOperator<TSrcReq, TSrc, TReq, T> = Function1<
  StreamableLike<TSrcReq, TSrc, StreamLike<TSrcReq, TSrc>>,
  StreamableLike<TReq, T, StreamLike<TReq, T>>
>;

export type FlowMode = "resume" | "pause";

export interface FlowableLike<T>
  extends StreamableLike<FlowMode, T, FlowableStreamLike<T>> {}
export interface FlowableStreamLike<T> extends StreamLike<FlowMode, T> {}

export interface FlowableSinkLike<T>
  extends StreamableLike<T, FlowMode, FlowableSinkStreamLike<T>> {}
export interface FlowableSinkStreamLike<T> extends StreamLike<T, FlowMode> {}

export type ConsumeContinue<T> = {
  readonly type: "continue";
  readonly data: T;
};
export type ConsumeDone<T> = {
  readonly type: "done";
  readonly data: T;
};

export {
  createStreamble,
  createFromObservableOperator,
  lift,
  mapReq,
  stream,
  __stream,
} from "./streamable/streamable";
export { createFlowableSinkAccumulator } from "./streamable/io";
export { fromArray } from "./streamable/fromArray";
export { fromEnumerable } from "./streamable/fromEnumerable";
export { generate } from "./streamable/generate";
export {
  consumeContinue,
  consumeDone,
  consume,
  consumeAsync,
} from "./streamable/consume";

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
      concatWith(mergeT, fromValue(fromArrayT)(acc)),
      distinctUntilChanged(options),
    );
  };

  return createFromObservableOperator(operator);
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

const _empty = createFromObservableOperator<any, any>(_ =>
  emptyContainer(fromArrayT),
);

/**
 * Returns an empty `StreamableLike` that always returns
 * a disposed `StreamLike` instance.
 */
export const empty = <TReq, T>(
  options: {
    readonly delay?: number;
  } = {},
): StreamableLike<TReq, T, StreamLike<TReq, T>> => {
  const { delay = Math.max(options.delay ?? 0, 0) } = options;

  return delay === 0
    ? _empty
    : createFromObservableOperator<TReq, T>(_ =>
        emptyContainer(fromArrayT, options),
      );
};

export const flow =
  <T>({
    scheduler,
  }: {
    scheduler?: SchedulerLike;
  } = {}): Function1<ObservableLike<T>, FlowableLike<T>> =>
  observable =>
    createFromObservableOperator((modeObs: ObservableLike<FlowMode>) =>
      createObservable(observer => {
        const pausableScheduler = toPausableScheduler(
          scheduler ?? observer.scheduler,
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
              subscribe(observer.scheduler),
              bindTo(pausableScheduler),
            ),
          ),
          add(pausableScheduler),
        );
      }),
    );

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const _fromIterable = <T>(iterable: Iterable<T>): AsyncEnumerableLike<T> =>
  pipe(iterable, fromIterableEnumerable(), fromEnumerable());

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(): Function1<
  Iterable<T>,
  AsyncEnumerableLike<T>
> => _fromIterable;

const _identity = {
  stream(_: SchedulerLike, options?: { readonly replay: number }) {
    return createSubject(options);
  },
};

/*
 * Returns an `StreamableLike` that publishes it's notifications.
 */
export const identity = <T>(): StreamableLike<T, T, StreamLike<T, T>> =>
  _identity as StreamableLike<T, T, StreamLike<T, T>>;

export const sinkInto =
  <TReq, T>(dest: StreamableLike<T, TReq, StreamLike<T, TReq>>) =>
  (src: StreamableLike<TReq, T, StreamLike<TReq, T>>): ObservableLike<void> =>
    createObservable(observer => {
      const { scheduler } = observer;
      const srcStream = src.stream(scheduler);
      const destStream = dest.stream(scheduler);

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
        endWith({ ...fromArrayT, ...concatT }, none as void),
        sinkIntoSink(observer),
      );
    });
