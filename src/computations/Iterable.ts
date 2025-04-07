import {
  Array_length,
  Array_map,
  Iterator_done,
  Iterator_next,
  Iterator_value,
  MAX_SAFE_INTEGER,
} from "../__internal__/constants.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationModule,
  ComputationTypeLike,
  ComputationTypeLike_T,
  ComputationTypeLike_baseOfT,
  DeferredComputationModule,
  InteractiveComputationModule,
  IterableLike,
  IterableWithSideEffectsLike,
  PureIterableLike,
  RunnableLike,
  RunnableLike_eval,
  SynchronousComputationModule,
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
  identityLazy,
  invoke,
  isFunction,
  isNone,
  isSome,
  newInstance,
  none,
  pick,
  raise as raiseError,
  returns,
  strictEquality,
  tuple,
} from "../functions.js";
import { clampPositiveInteger, clampPositiveNonZeroInteger } from "../math.js";
import * as Disposable from "../utils/Disposable.js";
import * as Queue from "../utils/Queue.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DropOldestBackpressureStrategy,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  QueueableLike_enqueue,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../utils.js";
import * as ComputationM from "./Computation.js";
import {
  Observable_gen,
  Observable_genPure,
} from "./Observable/__private__/Observable.gen.js";
import {
  Producer_gen,
  Producer_genPure,
} from "./Producer/__private__/Producer.gen.js";

/**
 * @noInheritDoc
 */
export interface IterableComputation extends ComputationTypeLike {
  readonly [ComputationTypeLike_baseOfT]?: IterableLike<
    this[typeof ComputationTypeLike_T]
  >;
}

export type Computation = IterableComputation;

export interface IterableModule
  extends ComputationModule<IterableComputation>,
    DeferredComputationModule<IterableComputation>,
    SynchronousComputationModule<IterableComputation>,
    InteractiveComputationModule<IterableComputation> {
  of<T>(): Function1<Iterable<T>, PureIterableLike<T>>;
}

export type Signature = IterableModule;

class BufferIterable<T> implements IterableLike<ReadonlyArray<T>> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly s: IterableLike<T>,
    private readonly c: number,
  ) {
    this[ComputationLike_isPure] = ComputationM.isPure(s);
  }

  *[Symbol.iterator]() {
    const { s: src, c: count } = this;
    let buffer: T[] = [];
    for (const v of src) {
      buffer.push(v);

      if (buffer.length === count) {
        const result = buffer;
        buffer = [];
        yield result;
      }
    }

    if (buffer.length > 0) {
      yield buffer;
    }
  }
}

export const buffer: Signature["buffer"] = (<T>(options?: { count?: number }) =>
  (iter: IterableLike<T>) =>
    newInstance(
      BufferIterable<T>,
      iter,
      clampPositiveNonZeroInteger(options?.count ?? MAX_SAFE_INTEGER),
    )) as Signature["buffer"];

class CatchErrorIterable<T> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly s: IterableLike<T>,
    private readonly onError:
      | SideEffect1<Error>
      | Function1<Error, IterableLike<T>>,
    isPure: boolean,
  ) {
    this[ComputationLike_isPure] = ComputationM.isPure(s) && isPure;
  }

  *[Symbol.iterator]() {
    try {
      yield* this.s;
    } catch (e) {
      const err = error(e);
      let action: Optional<IterableLike<T>> = none;
      try {
        action = this.onError(err) as Optional<IterableLike<T>>;
      } catch (e) {
        throw error([error(e), err]);
      }

      isSome(action) && (yield* action);
    }
  }
}

export const catchError: Signature["catchError"] = (<T>(
    onError: SideEffect1<Error> | Function1<Error, IterableLike<T>>,
    options?: {
      [ComputationLike_isPure]: Optional<boolean>;
    },
  ) =>
  (iter: IterableLike<T>) =>
    newInstance(
      CatchErrorIterable,
      iter,
      onError,
      options?.[ComputationLike_isPure] ?? true,
    )) as Signature["catchError"];

class ConcatAllIterable<T> {
  public readonly [ComputationLike_isPure]: boolean;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly s: IterableLike<IterableLike<T>>,
    isPure: boolean,
  ) {
    this[ComputationLike_isPure] = ComputationM.isPure(s) && isPure;
  }

  *[Symbol.iterator]() {
    for (const iter of this.s) {
      yield* iter;
    }
  }
}
export const concatAll: Signature["concatAll"] = (<T>(options?: {
    [ComputationLike_isPure]: Optional<boolean>;
  }) =>
  (iterable: IterableLike<IterableLike<T>>) =>
    newInstance(
      ConcatAllIterable,
      iterable,
      options?.[ComputationLike_isPure] ?? true,
    )) as Signature["concatAll"];

export const concat: Signature["concat"] = (<T>(
  ...iterables: ReadonlyArray<IterableLike<T>>
) => {
  const iters = of<IterableLike<T>>()(iterables);
  return newInstance(
    ConcatAllIterable,
    iters,
    ComputationM.areAllPure(iterables),
  );
}) as Signature["concat"];

class DecodeWithCharsetIterable implements IterableLike<string> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly s: IterableLike<ArrayBuffer>,
    private readonly o: Optional<{
      charset?: string;
      fatal?: boolean;
      ignoreBOM?: boolean;
    }>,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    const { s: src, o: options } = this;
    const textDecoder = newInstance(
      TextDecoder,
      options?.charset ?? "utf-8",
      options,
    );

    for (const next of src) {
      const data = textDecoder.decode(next, {
        stream: true,
      });

      const shouldEmit = data[Array_length] > 0;

      if (shouldEmit) {
        yield data;
      }
    }

    const data = textDecoder.decode(newInstance(Uint8Array, []), {
      stream: false,
    });

    const shouldEmit = data[Array_length] > 0;

    if (shouldEmit) {
      yield data;
    }
  }
}

export const decodeWithCharset: Signature["decodeWithCharset"] = ((options?: {
    readonly charset?: string;
    readonly fatal?: boolean;
    readonly ignoreBOM?: boolean;
  }) =>
  (iter: IterableLike<ArrayBuffer>) =>
    newInstance(
      DecodeWithCharsetIterable,
      iter,
      options,
    )) as Signature["decodeWithCharset"];

class DistinctUntilChangedIterable<T> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private s: IterableLike<T>,
    private eq: Equality<T>,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    const equals = this.eq;

    let hasPrev = false;
    let prev: T = none as T;

    for (const v of this.s) {
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
  (iterable: IterableLike<T>) =>
    newInstance(
      DistinctUntilChangedIterable,
      iterable,
      options?.equality ?? strictEquality,
    )) as Signature["distinctUntilChanged"];

class EncodeUtf8Iterable implements IterableLike<Uint8Array<ArrayBufferLike>> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(private readonly s: IterableLike<string>) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    const textEncoder = newInstance(TextEncoder);

    for (const chunk of this.s) {
      yield textEncoder.encode(chunk);
    }
  }
}

export const encodeUtf8: Signature["encodeUtf8"] = (() =>
  (iterable: IterableLike<string>) =>
    newInstance(EncodeUtf8Iterable, iterable)) as Signature["encodeUtf8"];

class ForEachIterable<T> implements IterableWithSideEffectsLike<T> {
  public readonly [ComputationLike_isPure]: false = false as const;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly d: IterableLike<T>,
    private readonly ef: SideEffect1<T>,
  ) {}

  *[Symbol.iterator]() {
    const delegate = this.d;
    const effect = this.ef;

    for (const v of delegate) {
      effect(v);
      yield v;
    }
  }
}

export const forEach: Signature["forEach"] = (<T>(effect: SideEffect1<T>) =>
  (iterable: IterableLike<T>) =>
    newInstance(ForEachIterable, iterable, effect)) as Signature["forEach"];

class GenIterable<T> implements IterableWithSideEffectsLike<T> {
  public readonly [ComputationLike_isSynchronous]: true = true as const;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isPure]: false = false as const;

  constructor(readonly f: Factory<Iterator<T>>) {}

  [Symbol.iterator]() {
    return this.f();
  }
}

export const gen: Signature["gen"] = (<T>(factory: Factory<Iterator<T>>) =>
  newInstance(GenIterable<T>, factory)) as Signature["gen"];

class GenPureIterable<T> implements PureIterableLike<T> {
  public readonly [ComputationLike_isSynchronous]: true = true as const;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isPure]: true = true as const;

  constructor(readonly f: Factory<Iterator<T>>) {}

  [Symbol.iterator]() {
    return this.f();
  }
}

export const genPure: Signature["genPure"] = (<T>(
  factory: Factory<Iterator<T>>,
) => newInstance(GenPureIterable<T>, factory)) as Signature["genPure"];

class KeepIterable<T> implements IterableLike<T> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly d: IterableLike<T>,
    private readonly p: Predicate<T>,
  ) {
    this[ComputationLike_isPure] = d[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    const delegate = this.d;
    const predicate = this.p;

    for (const v of delegate) {
      if (predicate(v)) {
        yield v;
      }
    }
  }
}

export const keep: Signature["keep"] = (<T>(predicate: Predicate<T>) =>
  (iterable: IterableLike<T>) =>
    newInstance(KeepIterable, iterable, predicate)) as Signature["keep"];

class MapIterable<TA, TB> implements IterableLike<TB> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly d: IterableLike<TA>,
    private readonly m: Function1<TA, TB>,
  ) {
    this[ComputationLike_isPure] = d[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    const delegate = this.d;
    const mapper = this.m;

    for (const v of delegate) {
      yield mapper(v);
    }
  }
}

export const map: Signature["map"] = (<TA, TB>(mapper: Function1<TA, TB>) =>
  (iterable: IterableLike<TA>) =>
    newInstance(MapIterable, iterable, mapper)) as Signature["map"];

export const of: Signature["of"] = identityLazy as Signature["of"];

class PairwiseIterable<T> implements IterableLike<Tuple2<T, T>> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(private s: IterableLike<T>) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    let hasPrev = false;
    let prev: T = none as T;

    for (const v of this.s) {
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
  (iterable: IterableLike<T>) =>
    newInstance(PairwiseIterable<T>, iterable)) as Signature["pairwise"];

class RepeatIterable<T> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private i: IterableLike<T>,
    private p: Predicate<number>,
  ) {
    this[ComputationLike_isPure] = i[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
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

  return (src: IterableLike<T>) =>
    newInstance(RepeatIterable, src, repeatPredicate);
}) as Signature["repeat"];

class RetryIterable<T> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private i: IterableLike<T>,
    private p: (count: number, error: Error) => boolean,
  ) {
    this[ComputationLike_isPure] = i[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    const iterable = this.i;
    const predicate = this.p;

    let cnt = 0;

    while (true) {
      try {
        yield* iterable;
        return;
      } catch (e) {
        cnt++;
        if (!predicate(cnt, error(e))) {
          throw e;
        }
      }
    }
  }
}

export const retry: Signature["retry"] = (<T>(
    shouldRetry?: (count: number, error: Error) => boolean,
  ) =>
  (deferable: IterableLike<T>) =>
    newInstance(
      RetryIterable,
      deferable,
      shouldRetry ?? alwaysTrue,
    )) as Signature["retry"];

class ScanIterable<T, TAcc> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly s: IterableLike<T>,
    private readonly r: Reducer<T, TAcc>,
    private readonly iv: Factory<TAcc>,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    const reducer = this.r;
    let acc = this.iv();

    for (const v of this.s) {
      acc = reducer(acc, v);
      yield acc;
    }
  }
}

export const scan: Signature["scan"] = (<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) =>
  (iter: IterableLike<T>) =>
    newInstance(
      ScanIterable,
      iter,
      scanner,
      initialValue,
    )) as Signature["scan"];

class SkipFirstIterable<T> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private s: IterableLike<T>,
    private c: number,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    const skipCount = this.c;
    let count = 0;

    for (const v of this.s) {
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
  (iterable: IterableLike<T>) =>
    newInstance(
      SkipFirstIterable,
      iterable,
      clampPositiveInteger(options?.count ?? 1),
    )) as Signature["skipFirst"];

class TakeFirstIterable<T> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private s: IterableLike<T>,
    private c: number,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    const takeCount = this.c;
    let count = 0;

    for (const v of this.s) {
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
  (iterable: IterableLike<T>) =>
    newInstance(
      TakeFirstIterable,
      iterable,
      clampPositiveInteger(options?.count ?? 1),
    )) as Signature["takeFirst"];

class TakeLastIterable<T> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private s: IterableLike<T>,
    private c: number,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    const { s: src, c: capacity } = this;

    const queue = Queue.create({
      backpressureStrategy: DropOldestBackpressureStrategy,
      capacity,
    });

    for (const v of src) {
      queue[QueueableLike_enqueue](v);
    }

    while (queue[EnumeratorLike_moveNext]()) {
      yield queue[EnumeratorLike_current];
    }
  }
}

export const takeLast: Signature["takeLast"] = (<T>(options?: {
    readonly count?: number;
  }) =>
  (iterable: IterableLike<T>) =>
    newInstance(
      TakeLastIterable,
      iterable,
      clampPositiveInteger(options?.count ?? 1),
    )) as Signature["takeLast"];

class TakeWhileIterable<T> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private s: IterableLike<T>,
    private p: Predicate<T>,
    private i: boolean,
  ) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    const predicate = this.p;
    const inclusive = this.i;

    for (const next of this.s) {
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
  (iterable: IterableLike<T>) =>
    newInstance(
      TakeWhileIterable,
      iterable,
      predicate,
      options?.inclusive ?? false,
    )) as Signature["takeWhile"];

class ThrowIfEmptyIterable<T> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly i: IterableLike<T>,
    private readonly f: Factory<unknown>,
  ) {
    this[ComputationLike_isPure] = i[ComputationLike_isPure];
  }

  *[Symbol.iterator]() {
    let isEmpty = true;
    for (const v of this.i) {
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
  (iter: IterableLike<T>) =>
    newInstance(
      ThrowIfEmptyIterable,
      iter,
      factory,
    )) as Signature["throwIfEmpty"];

export const toObservable: Signature["toObservable"] = /*@__PURE__*/ returns(
  (iter: IterableLike) =>
    ComputationM.isPure(iter)
      ? Observable_genPure(bindMethod(iter, Symbol.iterator))
      : Observable_gen(bindMethod(iter, Symbol.iterator)),
) as Signature["toObservable"];

export const toProducer: Signature["toProducer"] = /*@__PURE__*/ returns(
  (iterable: IterableLike) =>
    ComputationM.isPure(iterable)
      ? Producer_genPure(bindMethod(iterable, Symbol.iterator))
      : Producer_gen(bindMethod(iterable, Symbol.iterator)),
) as Signature["toProducer"];

class IterableToRunnable<T> implements RunnableLike<T> {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(private readonly s: IterableLike<T>) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    for (const v of this.s) {
      if (sink[SinkLike_isCompleted]) {
        break;
      }

      sink[EventListenerLike_notify](v);
    }
    sink[SinkLike_complete]();
  }
}

export const toRunnable: Signature["toRunnable"] = /*@__PURE__*/ returns(
  (iterable: IterableLike) => newInstance(IterableToRunnable, iterable),
) as Signature["toRunnable"];

class WithEffectIterable<T> implements IterableWithSideEffectsLike<T> {
  public readonly [ComputationLike_isPure]: false = false as const;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(
    private readonly d: IterableLike<T>,
    private readonly e: () =>
      | void
      | DisposableLike
      | SideEffect1<Optional<Error>>,
  ) {}

  *[Symbol.iterator]() {
    const delegate = this.d;
    const effect = this.e;

    const cleanup = effect();
    if (isSome(cleanup) && !isFunction(cleanup)) {
      Disposable.raiseIfDisposedWithError(cleanup as DisposableLike);
    }

    let didThrow = false;

    try {
      for (const v of delegate) {
        if (isSome(cleanup) && !isFunction(cleanup)) {
          Disposable.raiseIfDisposedWithError(cleanup as DisposableLike);
        }
        yield v;
      }
    } catch (e) {
      didThrow = true;
      if (isFunction(cleanup)) {
        cleanup(error(e));
      } else if (isSome(cleanup)) {
        (cleanup as DisposableLike)[DisposableLike_dispose](error(e));
      }
    } finally {
      if (!didThrow && isFunction(cleanup)) {
        cleanup(none);
      } else if (!didThrow && isSome(cleanup)) {
        (cleanup as DisposableLike)[DisposableLike_dispose]();
      }
    }
  }
}

export const withEffect: Signature["withEffect"] = (<T>(
    effect: () => void | DisposableLike | SideEffect1<Optional<Error>>,
  ) =>
  (iterable: IterableLike<T>) =>
    newInstance(
      WithEffectIterable,
      iterable,
      effect,
    )) as Signature["withEffect"];

class ZipIterable {
  public readonly [ComputationLike_isPure]: Optional<boolean>;
  public readonly [ComputationLike_isDeferred]: true = true as const;
  public readonly [ComputationLike_isSynchronous]: true = true as const;

  constructor(private readonly iters: readonly IterableLike<any>[]) {
    this[ComputationLike_isPure] = ComputationM.areAllPure(iters);
  }

  *[Symbol.iterator]() {
    const iterators = this.iters[Array_map](invoke(Symbol.iterator));

    while (true) {
      const next = iterators[Array_map](invoke(Iterator_next));
      if (next.some(x => x[Iterator_done] ?? false)) {
        break;
      }
      yield next[Array_map](pick(Iterator_value));
    }
  }
}

export const zip: Signature["zip"] = ((
  ...iters: readonly IterableLike<any>[]
) => newInstance(ZipIterable, iters)) as Signature["zip"];
