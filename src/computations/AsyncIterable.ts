import {
  Array_push,
  Iterator_done,
  Iterator_next,
  Iterator_value,
} from "../__internal__/constants.js";
import {
  AsyncIterableLike,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationModule,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_deferredWithSideEffectsOfT,
  DeferredObservableWithSideEffectsLike,
  EventSourceLike,
  PauseableObservableLike,
} from "../computations.js";
import {
  Function1,
  Predicate,
  bindMethod,
  error,
  newInstance,
  pipe,
  returns,
} from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import {
  BackpressureStrategy,
  DispatcherLike_complete,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  QueueableLike_enqueue,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
} from "../utils.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_fromAsyncIterable from "./Observable/__private__/Observable.fromAsyncIterable.js";
import Observable_multicast from "./Observable/__private__/Observable.multicast.js";
import * as PauseableObservable from "./PauseableObservable.js";
/**
 * @noInheritDoc
 */
export interface AsyncIterableComputation extends ComputationType {
  readonly [Computation_baseOfT]?: AsyncIterableLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_deferredWithSideEffectsOfT]?: AsyncIterableLike<
    this[typeof Computation_T]
  >;
}
export type Computation = AsyncIterableComputation;

export interface AsyncIterableModule
  extends ComputationModule<AsyncIterableComputation> {
  fromReadonlyArray<T>(): Function1<ReadonlyArray<T>, AsyncIterableLike<T>>;

  of<T>(): Function1<AsyncIterable<T>, AsyncIterableLike<T>>;

  toObservable<T>(): Function1<
    AsyncIterable<T>,
    DeferredObservableWithSideEffectsLike<T>
  >;

  toPauseableObservable<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ): Function1<
    AsyncIterableLike<T>,
    PauseableObservableLike<T> & DisposableLike
  >;
}

export type Signature = AsyncIterableModule;

class FromReadonlyArrayAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isPure]: false = false as const;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(private s: ReadonlyArray<T>) {}

  async *[Symbol.asyncIterator]() {
    for (const v of this.s) {
      yield v;
    }
  }
}

export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  /*@__PURE__*/
  returns(arr => newInstance(FromReadonlyArrayAsyncIterable, arr));

class KeepAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isPure]: false = false as const;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private readonly d: AsyncIterableLike<T>,
    private readonly p: Predicate<T>,
  ) {
    this[ComputationLike_isPure] = d[ComputationLike_isPure];
  }

  async *[Symbol.asyncIterator]() {
    const delegate = this.d;
    const predicate = this.p;

    for await (const v of delegate) {
      if (predicate(v)) {
        yield v;
      }
    }
  }
}

export const keep: Signature["keep"] = (<T>(predicate: Predicate<T>) =>
  (iterable: AsyncIterableLike<T>) =>
    newInstance(KeepAsyncIterable, iterable, predicate)) as Signature["keep"];

class MapAsyncIterable<TA, TB> implements AsyncIterableLike<TB> {
  public readonly [ComputationLike_isPure]: false = false as const;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private readonly d: AsyncIterable<TA>,
    private readonly m: Function1<TA, TB>,
  ) {}

  async *[Symbol.asyncIterator]() {
    const delegate = this.d;
    const mapper = this.m;

    for await (const v of delegate) {
      yield mapper(v);
    }
  }
}

export const map: Signature["map"] = (<TA, TB>(mapper: Function1<TA, TB>) =>
  (iter: AsyncIterableLike<TA>) =>
    newInstance(MapAsyncIterable, iter, mapper)) as Signature["map"];

class AsyncIterableOf<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isPure]: false = false as const;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(private d: AsyncIterable<T>) {}

  [Symbol.asyncIterator]() {
    return this.d[Symbol.asyncIterator]();
  }
}

export const of: Signature["of"] = /*@__PURE__*/ returns(iter =>
  newInstance(AsyncIterableOf, iter),
);

export const toObservable: Signature["toObservable"] =
  Observable_fromAsyncIterable;

export const toPauseableObservable: Signature["toPauseableObservable"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly autoDispose?: boolean;
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: BackpressureStrategy;
    },
  ) =>
  (iterable: AsyncIterableLike<T>) =>
    PauseableObservable.create<T>((modeObs: EventSourceLike<boolean>) =>
      pipe(
        Observable_create((observer: ObserverLike<T>) => {
          const iterator = iterable[Symbol.asyncIterator]();
          const maxYieldInterval = observer[SchedulerLike_maxYieldInterval];

          let isPaused = true;

          const continuation = async () => {
            const startTime = observer[SchedulerLike_now];

            try {
              while (
                !observer[DisposableLike_isDisposed] &&
                !isPaused &&
                observer[SchedulerLike_now] - startTime < maxYieldInterval
              ) {
                const next = await iterator[Iterator_next]();

                if (next[Iterator_done]) {
                  observer[DispatcherLike_complete]();
                  break;
                } else if (
                  !observer[QueueableLike_enqueue](next[Iterator_value])
                ) {
                  // An async iterable can produce resolved promises which are immediately
                  // scheduled on the microtask queue. This prevents the observer's scheduler
                  // from running and draining dispatched events.
                  //
                  // Check the observer's buffer size so we can avoid queueing forever
                  // in this situation.
                  break;
                }
              }
            } catch (e) {
              observer[DisposableLike_dispose](error(e));
            }

            if (!isPaused) {
              pipe(
                observer[SchedulerLike_schedule](continuation),
                Disposable.addTo(observer),
              );
            }
          };

          pipe(
            modeObs,
            EventSource_addEventHandler((mode: boolean) => {
              const wasPaused = isPaused;
              isPaused = mode;

              if (!isPaused && wasPaused) {
                pipe(
                  observer[SchedulerLike_schedule](continuation),
                  Disposable.addTo(observer),
                );
              }
            }),
            Disposable.addTo(observer),
            DisposableContainer.onComplete(
              bindMethod(observer, DispatcherLike_complete),
            ),
          );
        }),
        Observable_multicast(scheduler, options),
        Disposable.addToContainer(modeObs),
      ),
    );

export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  /*@__PURE__*/
  returns(async (iter: AsyncIterableLike) => {
    const result: any[] = [];
    for await (const v of iter) {
      result[Array_push](v);
    }
    return result;
  });
