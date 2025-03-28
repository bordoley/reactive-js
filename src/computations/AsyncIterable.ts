import {
  Array_map,
  Iterator_done,
  Iterator_next,
  Iterator_value,
} from "../__internal__/constants.js";
import {
  AsyncIterableLike,
  AsyncIterableWithSideEffectsLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationModule,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_deferredWithSideEffectsOfT,
  Computation_pureDeferredOfT,
  ConcurrentComputationModule,
  ConcurrentDeferredComputationModule,
  HigherOrderInnerComputationLike,
  InteractiveComputationModule,
  PureAsyncIterableLike,
  SequentialComputationModule,
} from "../computations.js";
import {
  Equality,
  Factory,
  Function1,
  Optional,
  Predicate,
  Reducer,
  SideEffect1,
  Tuple2,
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
  strictEquality,
  tuple,
} from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import * as Disposable from "../utils/Disposable.js";
import * as Iterator from "../utils/__internal__/Iterator.js";
import {
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  SchedulerLike,
} from "../utils.js";
import AsyncIterable_broadcast from "./AsyncIterable/__private__/AsyncIterable.broadcast.js";
import * as ComputationM from "./Computation.js";
import {
  Producer_genAsync,
  Producer_genPureAsync,
} from "./Producer/__private__/Producer.genAsync.js";
/*
import {
  Observable_genAsync,
  Observable_genPureAsync,
} from "./Observable/__private__/Observable.genAsync.js";
*/

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
    SequentialComputationModule<AsyncIterableComputation>,
    InteractiveComputationModule<AsyncIterableComputation>,
    ConcurrentComputationModule<AsyncIterableComputation>,
    ConcurrentDeferredComputationModule<
      AsyncIterableComputation,
      {
        broadcast: {
          readonly scheduler?: SchedulerLike;
        };
      }
    > {
  of<T>(): Function1<AsyncIterable<T>, AsyncIterableWithSideEffectsLike<T>>;
}

export type Signature = AsyncIterableModule;

export const broadcast: Signature["broadcast"] = AsyncIterable_broadcast;

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

class DistinctUntilChangedAsyncIterable<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;
  public readonly [ComputationLike_isPure]?: boolean;

  constructor(
    private s: AsyncIterableLike<T>,
    private eq: Equality<T>,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  async *[Symbol.asyncIterator]() {
    const equals = this.eq;

    let hasPrev = false;
    let prev: T = none as T;

    for await (const v of this.s) {
      if (!hasPrev) {
        hasPrev = true;
        prev = v;
        yield v;
      } else if (!equals(v, prev)) {
        prev = v;
        yield v;
      }
    }
  }
}

export const distinctUntilChanged: Signature["distinctUntilChanged"] = (<
    T,
  >(options?: {
    readonly equality?: Equality<T>;
  }) =>
  (iterable: AsyncIterableLike<T>) =>
    newInstance(
      DistinctUntilChangedAsyncIterable,
      iterable,
      options?.equality ?? strictEquality,
    )) as Signature["distinctUntilChanged"];

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

class GenAsyncIterable<T> implements AsyncIterableWithSideEffectsLike<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isPure]: false = false as const;

  constructor(readonly f: Factory<Iterator<T>>) {}

  async *[Symbol.asyncIterator](): AsyncIterator<T, any, any> {
    const enumerator = pipe(this.f(), Iterator.toEnumerator<T>());

    while (enumerator[EnumeratorLike_moveNext]()) {
      yield Promise.resolve(enumerator[EnumeratorLike_current]);
    }
    Disposable.raiseIfDisposedWithError(enumerator);
  }
}

export const gen: Signature["gen"] = (<T>(factory: Factory<Iterator<T>>) =>
  newInstance(GenAsyncIterable<T>, factory)) as Signature["gen"];

class GenAsyncAsyncIterable<T> implements AsyncIterableWithSideEffectsLike<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isPure]: false = false as const;

  constructor(readonly f: Factory<AsyncIterator<T>>) {}

  [Symbol.asyncIterator]() {
    return this.f();
  }
}

export const genAsync: Signature["genAsync"] = (<T>(
  factory: Factory<AsyncIterator<T>>,
) => newInstance(GenAsyncAsyncIterable, factory)) as Signature["genAsync"];

class GenPureAsyncIterable<T> implements PureAsyncIterableLike<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isPure]: true = true as const;

  constructor(readonly f: Factory<Iterator<T>>) {}

  async *[Symbol.asyncIterator]() {
    const enumerator = pipe(this.f(), Iterator.toEnumerator<T>());

    while (enumerator[EnumeratorLike_moveNext]()) {
      yield Promise.resolve(enumerator[EnumeratorLike_current]);
    }
    Disposable.raiseIfDisposedWithError(enumerator);
  }
}

export const genPure: Signature["genPure"] = (<T>(
  factory: Factory<Iterator<T>>,
) => newInstance(GenPureAsyncIterable<T>, factory)) as Signature["genPure"];

class GenPureAsyncAsyncIterable<T> implements PureAsyncIterableLike<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isPure]: true = true as const;

  constructor(readonly f: Factory<AsyncIterator<T>>) {}

  [Symbol.asyncIterator]() {
    return this.f();
  }
}

export const genPureAsync: Signature["genPureAsync"] = (<T>(
  factory: Factory<AsyncIterator<T>>,
) =>
  newInstance(GenPureAsyncAsyncIterable, factory)) as Signature["genPureAsync"];

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

class PairwiseAsyncIterable<T> implements AsyncIterableLike<Tuple2<T, T>> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;
  public readonly [ComputationLike_isPure]?: boolean;

  constructor(private s: AsyncIterableLike<T>) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  async *[Symbol.asyncIterator]() {
    let hasPrev = false;
    let prev: T = none as T;

    for await (const v of this.s) {
      if (!hasPrev) {
        hasPrev = true;
        prev = v;
      } else {
        const result = tuple(prev, v);
        prev = v;

        yield result;
      }
    }
  }
}

export const pairwise: Signature["pairwise"] = (<T>() =>
  (iterable: AsyncIterableLike<T>) =>
    newInstance(PairwiseAsyncIterable<T>, iterable)) as Signature["pairwise"];

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

class SkipFirstAsyncIterable<T> {
  public readonly [ComputationLike_isSynchronous]: false = false as const;
  public readonly [ComputationLike_isPure]?: boolean;

  constructor(
    private s: AsyncIterableLike<T>,
    private c: number,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  async *[Symbol.asyncIterator]() {
    const skipCount = this.c;
    let count = 0;

    for await (const v of this.s) {
      if (count >= skipCount) {
        yield v;
      }
      count++;
    }
  }
}

export const skipFirst: Signature["skipFirst"] = (<T>(options?: {
    readonly count?: number;
  }) =>
  (iterable: AsyncIterableLike<T>) =>
    newInstance(
      SkipFirstAsyncIterable,
      iterable,
      clampPositiveInteger(options?.count ?? 1),
    )) as Signature["skipFirst"];

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
/*
export const toObservable: Signature["toObservable"] =
  //  @__PURE__
  returns((iter: AsyncIterableLike) =>
    ComputationM.isPure(iter)
      ? Observable_genPureAsync(bindMethod(iter, Symbol.asyncIterator))
      : Observable_genAsync(bindMethod(iter, Symbol.asyncIterator)),
  ) as Signature["toObservable"];
*/

export const toProducer: Signature["toProducer"] =
  //   @__PURE__
  returns((iter: AsyncIterableLike) =>
    ComputationM.isPure(iter)
      ? Producer_genPureAsync(bindMethod(iter, Symbol.asyncIterator))
      : Producer_genAsync(bindMethod(iter, Symbol.asyncIterator)),
  ) as Signature["toProducer"];

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
