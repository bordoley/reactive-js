import {
  Array_map,
  Array_push,
  Iterator_done,
  Iterator_next,
  Iterator_value,
} from "../__internal__/constants.js";
import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import {
  AsyncIterableLike,
  AsyncIterableWithSideEffectsLike,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationModule,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_deferredWithSideEffectsOfT,
  Computation_pureDeferredOfT,
  ConcurrentDeferredComputationModule,
  DeferredComputationModule,
  EventSourceLike,
  HigherOrderInnerComputationLike,
  InteractiveComputationModule,
  IterableLike,
  PauseableEventSourceLike,
  PauseableObservableLike,
  PureAsyncIterableLike,
} from "../computations.js";
import {
  Factory,
  Function1,
  Optional,
  Predicate,
  Reducer,
  SideEffect,
  SideEffect1,
  Updater,
  alwaysTrue,
  bindMethod,
  error,
  invoke,
  isFunction,
  isNone,
  isSome,
  newInstance,
  none,
  pick,
  pipe,
  raiseError,
  returns,
} from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
  ObserverLike,
  QueueableLike_isReady,
  SchedulerLike,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_schedule,
  SinkLike_complete,
} from "../utils.js";
import * as ComputationM from "./Computation.js";
import EventSource_addEventHandler from "./EventSource/__private__/EventSource.addEventHandler.js";
import EventSource_create from "./EventSource/__private__/EventSource.create.js";
import EventSource_fromAsyncIterable from "./EventSource/__private__/EventSource.fromAsyncIterable.js";
import Observable_create from "./Observable/__private__/Observable.create.js";
import Observable_fromAsyncIterable from "./Observable/__private__/Observable.fromAsyncIterable.js";
import Observable_multicast from "./Observable/__private__/Observable.multicast.js";
import * as PauseableEventSource from "./PauseableEventSource.js";
import * as PauseableObservable from "./PauseableObservable.js";

/**
 * @noInheritDoc
 */
export interface AsyncIterableComputation extends ComputationType {
  readonly [Computation_baseOfT]?: AsyncIterableLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_deferredWithSideEffectsOfT]?: AsyncIterableWithSideEffectsLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_pureDeferredOfT]?: PureAsyncIterableLike<
    this[typeof Computation_T]
  >;
}
export type Computation = AsyncIterableComputation;

export interface AsyncIterableModule
  extends ComputationModule<AsyncIterableComputation>,
    DeferredComputationModule<AsyncIterableComputation>,
    InteractiveComputationModule<AsyncIterableComputation>,
    ConcurrentDeferredComputationModule<AsyncIterableComputation> {
  of<T>(): Function1<AsyncIterable<T>, AsyncIterableWithSideEffectsLike<T>>;

  toEventSource<T>(): Function1<
    AsyncIterableLike<T>,
    EventSourceLike<T> & DisposableLike
  >;

  toPauseableEventSource<T>(): Function1<
    AsyncIterableLike<T>,
    PauseableEventSourceLike<T> & DisposableLike
  >;

  toPauseableObservable<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly replay?: number;
    },
  ): Function1<
    AsyncIterableLike<T>,
    PauseableObservableLike<T> & DisposableLike
  >;
}

export type Signature = AsyncIterableModule;

class CatchErrorAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isPure]?: boolean;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private readonly s: AsyncIterableLike<T>,
    private readonly onError:
      | SideEffect1<Error>
      | Function1<Error, AsyncIterableLike<T>>,
    isPure: boolean,
  ) {
    this[ComputationLike_isPure] = ComputationM.isPure(s) && isPure;
  }

  async *[Symbol.asyncIterator]() {
    try {
      yield* this.s;
    } catch (e) {
      const err = error(e);
      let action: Optional<AsyncIterableLike<T>> = none;
      try {
        action = this.onError(err) as Optional<AsyncIterableLike<T>>;
      } catch (e) {
        throw error([error(e), err]);
      }

      isSome(action) && (yield* action);
    }
  }
}

export const catchError: Signature["catchError"] = (<
    T,
    TInnerLike extends HigherOrderInnerComputationLike,
  >(
    onError: SideEffect1<Error> | Function1<Error, AsyncIterableLike<T>>,
    options?: {
      readonly innerType: TInnerLike;
    },
  ) =>
  (iter: AsyncIterableLike<T>) =>
    newInstance(
      CatchErrorAsyncIterable,
      iter,
      onError,
      options?.innerType?.[ComputationLike_isPure] ?? true,
    )) as Signature["catchError"];

class ConcatAllAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;
  public readonly [ComputationLike_isPure]?: boolean;

  constructor(
    private readonly s: AsyncIterableLike<AsyncIterableLike<T>>,
    isPure: boolean,
  ) {
    this[ComputationLike_isPure] = ComputationM.isPure(s) && isPure;
  }

  async *[Symbol.asyncIterator]() {
    for await (const iter of this.s) {
      yield* iter;
    }
  }
}
export const concatAll: Signature["concatAll"] = (<
    T,
    TInnerLike extends HigherOrderInnerComputationLike,
  >(options?: {
    readonly innerType: TInnerLike;
  }) =>
  (iterable: AsyncIterableLike<AsyncIterableLike<T>>) =>
    newInstance(
      ConcatAllAsyncIterable,
      iterable,
      options?.innerType?.[ComputationLike_isPure] ?? true,
    )) as Signature["concatAll"];

class ConcatAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;
  public readonly [ComputationLike_isPure]?: boolean;

  constructor(private readonly s: ReadonlyArray<AsyncIterableLike<T>>) {
    this[ComputationLike_isPure] = ComputationM.areAllPure(s);
  }

  async *[Symbol.asyncIterator]() {
    for (const iter of this.s) {
      yield* iter;
    }
  }
}

export const concat: Signature["concat"] = (<T>(
  ...iterables: ReadonlyArray<AsyncIterableLike<T>>
) =>
  newInstance(
    ConcatAsyncIterable,
    iterables,
  )) as unknown as Signature["concat"];

class FromAsyncFactoryIterable<T>
  implements AsyncIterableWithSideEffectsLike<T>
{
  public [ComputationLike_isPure]: false = false as const;
  public [ComputationLike_isSynchronous]: false = false as const;

  constructor(private f: (options?: { signal: AbortSignal }) => Promise<T>) {}

  async *[Symbol.asyncIterator]() {
    const result = await this.f();
    yield result;
  }
}

export const fromAsyncFactory: Signature["fromAsyncFactory"] = returns(
  factory => newInstance(FromAsyncFactoryIterable, factory),
);

class FromIterableAsyncIterable<T> implements PureAsyncIterableLike<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(private s: IterableLike<T>) {}

  async *[Symbol.asyncIterator]() {
    yield* this.s;
  }
}

export const fromIterable: Signature["fromIterable"] =
  /*@__PURE__*/
  returns(arr =>
    newInstance(FromIterableAsyncIterable, arr),
  ) as Signature["fromIterable"];

class FromReadonlyArrayAsyncIterable<T> implements PureAsyncIterableLike<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private readonly arr: readonly T[],
    private readonly count: number,
    private readonly start: number,
  ) {}

  async *[Symbol.asyncIterator]() {
    let { arr, start, count } = this;
    while (count !== 0) {
      const next = arr[start];
      yield next;

      count > 0 ? (start++, count--) : (start--, count++);
    }
  }
}

export const fromReadonlyArray: Signature["fromReadonlyArray"] = (<
    T,
  >(options?: {
    readonly count?: number;
    readonly start?: number;
  }) =>
  (arr: readonly T[]) => {
    let [start, count] = parseArrayBounds(arr, options);
    return newInstance(FromReadonlyArrayAsyncIterable, arr, count, start);
  }) as Signature["fromReadonlyArray"];

export const empty: Signature["empty"] = (<T>() =>
  pipe([], fromReadonlyArray<T>(), returns))() as Signature["empty"];

class EncodeUtf8AsyncIterable
  implements AsyncIterableLike<Uint8Array<ArrayBufferLike>>
{
  public readonly [ComputationLike_isPure]?: boolean;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(private readonly s: AsyncIterableLike<string>) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  async *[Symbol.asyncIterator]() {
    const textEncoder = newInstance(TextEncoder);

    for await (const chunk of this.s) {
      yield textEncoder.encode(chunk);
    }
  }
}

export const encodeUtf8: Signature["encodeUtf8"] = (() =>
  (iterable: AsyncIterableLike<string>) =>
    newInstance(EncodeUtf8AsyncIterable, iterable)) as Signature["encodeUtf8"];

export const firstAsync: Signature["firstAsync"] = /*@__PURE__*/ returns(
  async (iter: AsyncIterableLike) => {
    for await (const v of iter) {
      return v;
    }
    return none;
  },
) as Signature["firstAsync"];

class ForEachAsyncIterable<T> implements AsyncIterableWithSideEffectsLike<T> {
  public [ComputationLike_isPure]: false = false as const;
  public [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private readonly d: AsyncIterableLike<T>,
    private readonly ef: SideEffect1<T>,
  ) {}

  async *[Symbol.asyncIterator]() {
    const delegate = this.d;
    const effect = this.ef;

    for await (const v of delegate) {
      effect(v);
      yield v;
    }
  }
}

export const forEach: Signature["forEach"] = (<T>(effect: SideEffect1<T>) =>
  (iter: AsyncIterableLike<T>) =>
    newInstance(ForEachAsyncIterable, iter, effect)) as Signature["forEach"];

export const fromValue: Signature["fromValue"] =
  /*@__PURE__*/
  returns(v => fromReadonlyArray()([v])) as Signature["fromValue"];

class GeneratorAsyncIterable<T> implements PureAsyncIterableLike<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    readonly generator: Updater<T>,
    readonly initialValue: Factory<T>,
    readonly count?: number,
  ) {}

  async *[Symbol.asyncIterator]() {
    const { count, generator } = this;
    let acc = this.initialValue();

    for (let cnt = 0; count === none || cnt < count; cnt++) {
      acc = generator(acc);
      yield acc;
    }
  }
}

export const generate: Signature["generate"] = (<T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: {
    readonly count?: number;
  },
) =>
  newInstance(
    GeneratorAsyncIterable,
    generator,
    initialValue,
    options?.count,
  )) as Signature["generate"];

class KeepAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isPure]?: boolean;
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

export const lastAsync: Signature["lastAsync"] = /*@__PURE__*/ returns(
  async (iter: AsyncIterableLike) => {
    let result: Optional<unknown> = none;
    for await (const v of iter) {
      result = v;
    }
    return result;
  },
) as Signature["lastAsync"];

class MapAsyncIterable<TA, TB> implements AsyncIterableLike<TB> {
  public readonly [ComputationLike_isPure]?: boolean;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private readonly d: AsyncIterableLike<TA>,
    private readonly m: Function1<TA, TB>,
  ) {
    this[ComputationLike_isPure] = d[ComputationLike_isPure];
  }

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

class ScanAsyncIterable<T, TAcc> implements AsyncIterableLike<TAcc> {
  public readonly [ComputationLike_isPure]?: boolean;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private readonly s: AsyncIterableLike<T>,
    private readonly r: Reducer<T, TAcc>,
    private readonly iv: Factory<TAcc>,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  async *[Symbol.asyncIterator]() {
    const reducer = this.r;
    let acc = this.iv();

    for await (const v of this.s) {
      acc = reducer(acc, v);
      yield acc;
    }
  }
}

class RaiseAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isPure]?: true;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(private r: SideEffect) {}

  async *[Symbol.asyncIterator]() {
    raiseError(error(this.r()));
  }
}

export const raise: Signature["raise"] = (<T>(options?: {
  readonly raise?: SideEffect;
}) => {
  const { raise: factory = raise } = options ?? {};
  return newInstance(RaiseAsyncIterable<T>, factory);
}) as Signature["raise"];

export const reduceAsync: Signature["reduceAsync"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  async (iterable: AsyncIterableLike<T>) => {
    let acc = initialValue();
    for await (let v of iterable) {
      acc = reducer(acc, v);
    }

    return acc;
  };

class RepeatAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isPure]?: boolean;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private i: AsyncIterableLike<T>,
    private p: Predicate<number>,
  ) {
    this[ComputationLike_isPure] = i[ComputationLike_isPure];
  }

  async *[Symbol.asyncIterator]() {
    const iterable = this.i;
    const predicate = this.p;

    let cnt = 0;

    while (true) {
      yield* iterable;

      cnt++;
      if (!predicate(cnt)) {
        break;
      }
    }
  }
}

export const repeat: Signature["repeat"] = (<T>(
  predicate?: Predicate<number> | number,
) => {
  const repeatPredicate = isFunction(predicate)
    ? predicate
    : isNone(predicate)
      ? alwaysTrue
      : (count: number) => count < predicate;

  return (src: AsyncIterableLike<T>) =>
    newInstance(RepeatAsyncIterable, src, repeatPredicate);
}) as Signature["repeat"];

class RetryAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isPure]?: boolean;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private i: AsyncIterableLike<T>,
    private p: (count: number, error: Error) => boolean,
  ) {
    this[ComputationLike_isPure] = i[ComputationLike_isPure];
  }

  async *[Symbol.asyncIterator]() {
    const iterable = this.i;
    const predicate = this.p;

    let cnt = 0;

    while (true) {
      try {
        yield* iterable;
      } catch (e) {
        cnt++;
        if (!predicate(cnt, error(e))) {
          break;
        }
      }
    }
  }
}

export const retry: Signature["retry"] = (<T>(
    shouldRetry?: (count: number, error: Error) => boolean,
  ) =>
  (deferable: AsyncIterableLike<T>) =>
    newInstance(
      RetryAsyncIterable,
      deferable,
      shouldRetry ?? alwaysTrue,
    )) as Signature["retry"];

export const scan: Signature["scan"] = (<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) =>
  (iter: AsyncIterableLike<T>) =>
    newInstance(
      ScanAsyncIterable,
      iter,
      scanner,
      initialValue,
    )) as Signature["scan"];

class TakeFirstAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isPure]?: boolean;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private s: AsyncIterableLike<T>,
    private c: number,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  async *[Symbol.asyncIterator]() {
    const takeCount = this.c;
    let count = 0;

    for await (const v of this.s) {
      if (count < takeCount) {
        yield v;
      } else {
        break;
      }
      count++;
    }
  }
}

export const takeFirst: Signature["takeFirst"] = (<T>(options?: {
    readonly count?: number;
  }) =>
  (iterable: AsyncIterableLike<T>) =>
    newInstance(
      TakeFirstAsyncIterable,
      iterable,
      clampPositiveInteger(options?.count ?? 1),
    )) as Signature["takeFirst"];

class TakeWhileAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isPure]?: boolean;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private s: AsyncIterableLike<T>,
    private p: Predicate<T>,
    private i: boolean,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  async *[Symbol.asyncIterator]() {
    const predicate = this.p;
    const inclusive = this.i;

    for await (const next of this.s) {
      const satisfiesPredicate = predicate(next);

      if (satisfiesPredicate || inclusive) {
        yield next;
      }

      if (!satisfiesPredicate) {
        break;
      }
    }
  }
}

export const takeWhile: Signature["takeWhile"] = (<T>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ) =>
  (iterable: AsyncIterableLike<T>) =>
    newInstance(
      TakeWhileAsyncIterable,
      iterable,
      predicate,
      options?.inclusive ?? false,
    )) as Signature["takeWhile"];

class ThrowIfEmptyAsyncIterable<T> implements AsyncIterableLike<T> {
  public readonly [ComputationLike_isPure]?: boolean;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(
    private readonly i: AsyncIterableLike<T>,
    private readonly f: Factory<unknown>,
  ) {
    this[ComputationLike_isPure] = i[ComputationLike_isPure];
  }

  async *[Symbol.asyncIterator]() {
    let isEmpty = true;
    for await (const v of this.i) {
      isEmpty = false;
      yield v;
    }

    if (isEmpty) {
      raiseError(error(this.f()));
    }
  }
}

export const throwIfEmpty: Signature["throwIfEmpty"] = (<T>(
    factory: Factory<unknown>,
  ) =>
  (iter: AsyncIterableLike<T>) =>
    newInstance(
      ThrowIfEmptyAsyncIterable,
      iter,
      factory,
    )) as Signature["throwIfEmpty"];

export const toEventSource: Signature["toEventSource"] =
  EventSource_fromAsyncIterable;

export const toObservable: Signature["toObservable"] =
  Observable_fromAsyncIterable as Signature["toObservable"];

export const toPauseableEventSource: Signature["toPauseableEventSource"] =
  <T>() =>
  (iterable: AsyncIterableLike<T>) =>
    PauseableEventSource.create<T>((modeObs: EventSourceLike<boolean>) =>
      pipe(
        EventSource_create((listener: EventListenerLike<T>) => {
          const iterator = iterable[Symbol.asyncIterator]();

          let isPaused = true;

          const continuation = async () => {
            try {
              while (!listener[DisposableLike_isDisposed] && !isPaused) {
                const next = await iterator[Iterator_next]();

                if (next[Iterator_done]) {
                  listener[DisposableLike_dispose]();
                  break;
                } else if (!listener[DisposableLike_isDisposed]) {
                  listener[EventListenerLike_notify](next[Iterator_value]);
                }
              }
            } catch (e) {
              listener[DisposableLike_dispose](error(e));
            }
          };

          pipe(
            modeObs,
            EventSource_addEventHandler(async (mode: boolean) => {
              const wasPaused = isPaused;
              isPaused = mode;

              if (!isPaused && wasPaused) {
                await continuation();
              }
            }),
            Disposable.bindTo(listener),
          );
        }),
        Disposable.addToContainer(modeObs),
      ),
    );

export const toPauseableObservable: Signature["toPauseableObservable"] =
  <T>(
    scheduler: SchedulerLike,
    options?: {
      readonly replay?: number;
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
                  observer[SinkLike_complete]();
                  break;
                } else if (
                  (observer[EventListenerLike_notify](next[Iterator_value]),
                  !observer[QueueableLike_isReady])
                ) {
                  // An async iterable can produce resolved promises which are immediately
                  // scheduled on the microtask queue. This prevents the observer's scheduler
                  // from running and draining queued events.
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
              bindMethod(observer, SinkLike_complete),
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

class ZipAsyncIterable implements AsyncIterableLike {
  public readonly [ComputationLike_isPure]?: boolean;
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(private readonly iters: readonly AsyncIterableLike<any>[]) {
    this[ComputationLike_isPure] = ComputationM.areAllPure(iters);
  }

  async *[Symbol.asyncIterator]() {
    const iterators = this.iters[Array_map](invoke(Symbol.asyncIterator));

    while (true) {
      const next = await Promise.all(
        iterators[Array_map](invoke(Iterator_next)),
      );

      if (next.some(x => x[Iterator_done] ?? false)) {
        break;
      }
      yield next[Array_map](pick(Iterator_value));
    }
  }
}

export const zip: Signature["zip"] = ((
  ...iters: readonly AsyncIterableLike<any>[]
) => newInstance(ZipAsyncIterable, iters)) as unknown as Signature["zip"];
