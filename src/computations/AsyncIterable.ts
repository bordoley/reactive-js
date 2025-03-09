import {
  Array_map,
  Array_push,
  Iterator_done,
  Iterator_next,
  Iterator_value,
} from "../__internal__/constants.js";
import { clampPositiveInteger } from "../__internal__/math.js";
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
  DeferredComputationModule,
  DeferredObservableWithSideEffectsLike,
  EventSourceLike,
  HigherOrderInnerComputationLike,
  InteractiveComputationModule,
  IterableLike,
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
import * as ComputationM from "./Computation.js";
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
    InteractiveComputationModule<AsyncIterableComputation> {
  empty: DeferredComputationModule<AsyncIterableComputation>["empty"];
  fromIterable: DeferredComputationModule<AsyncIterableComputation>["fromIterable"];

  of<T>(): Function1<AsyncIterable<T>, AsyncIterableWithSideEffectsLike<T>>;

  raise: DeferredComputationModule<AsyncIterableComputation>["raise"];

  toObservable<T>(): Function1<
    AsyncIterableLike<T>,
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
      for await (const v of this.s) {
        yield v;
      }
    } catch (e) {
      const err = error(e);
      let action: Optional<AsyncIterableLike<T>> = none;
      try {
        action = this.onError(err) as Optional<AsyncIterableLike<T>>;
      } catch (e) {
        throw error([error(e), err]);
      }

      if (isSome(action)) {
        for await (const v of action) {
          yield v;
        }
      }
    }
  }
}

export const catchError: Signature["catchError"] = (<
    T,
    TInnerType extends HigherOrderInnerComputationLike,
  >(
    onError: SideEffect1<Error> | Function1<Error, AsyncIterableLike<T>>,
    options?: {
      readonly innerType: TInnerType;
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
      for await (const v of iter) {
        yield v;
      }
    }
  }
}
export const concatAll: Signature["concatAll"] = (<
    T,
    TInnerType extends HigherOrderInnerComputationLike,
  >(options?: {
    readonly innerType: TInnerType;
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
      for await (const v of iter) {
        yield v;
      }
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

class FromIterableAsyncIterable<T> implements PureAsyncIterableLike<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;

  constructor(private s: IterableLike<T>) {}

  async *[Symbol.asyncIterator]() {
    for (const v of this.s) {
      yield v;
    }
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

export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  <T>(options?: { readonly count?: number; readonly start?: number }) =>
  (arr: readonly T[]) => {
    let [start, count] = parseArrayBounds(arr, options);
    return newInstance(FromReadonlyArrayAsyncIterable, arr, count, start);
  };

export const empty: Signature["empty"] = (() =>
  pipe([], fromReadonlyArray(), returns))();

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

export const generate: Signature["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: {
    readonly count?: number;
  },
) =>
  newInstance(GeneratorAsyncIterable, generator, initialValue, options?.count);

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

export const raise: Signature["raise"] = <T>(options?: {
  readonly raise?: SideEffect;
}) => {
  const { raise: factory = raise } = options ?? {};
  return newInstance(RaiseAsyncIterable<T>, factory);
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
      for await (const v of iterable) {
        yield v;
      }
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
        for await (const v of iterable) {
          yield v;
        }
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
