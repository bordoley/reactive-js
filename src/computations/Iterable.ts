import {
  Array_length,
  Array_map,
  Iterator_done,
  Iterator_next,
  Iterator_value,
} from "../__internal__/constants.js";
import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import * as ReadonlyArray from "../collections/ReadonlyArray.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationModule,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  HigherOrderInnerComputationLike,
  InteractiveComputationModule,
  IterableLike,
  IterableWithSideEffectsLike,
  PureIterableLike,
  RunnableLike,
  RunnableLike_eval,
  SequentialComputationModule,
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
  error,
  invoke,
  isFunction,
  isNone,
  isSome,
  newInstance,
  none,
  pick,
  pipe,
  raise as raiseError,
  returns,
  strictEquality,
  tuple,
} from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import {
  ListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../utils.js";
import * as ComputationM from "./Computation.js";
import Iterable_first from "./Iterable/__private__/Iterable.first.js";
import Iterable_toObservable from "./Iterable/__private__/Iterable.toObservable.js";

/**
 * @noInheritDoc
 */
export interface IterableComputation extends ComputationType {
  readonly [Computation_baseOfT]?: IterableLike<this[typeof Computation_T]>;

  readonly [Computation_pureSynchronousOfT]?: PureIterableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_synchronousWithSideEffectsOfT]?: IterableWithSideEffectsLike<
    this[typeof Computation_T]
  >;
}

export type Computation = IterableComputation;

export interface IterableModule
  extends ComputationModule<IterableComputation>,
    SequentialComputationModule<IterableComputation>,
    SynchronousComputationModule<IterableComputation>,
    InteractiveComputationModule<IterableComputation> {}

export type Signature = IterableModule;

class CatchErrorIterable<T> {
  public readonly [ComputationLike_isPure]?: boolean;

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

export const catchError: Signature["catchError"] = (<
    T,
    TInnerLike extends HigherOrderInnerComputationLike,
  >(
    onError: SideEffect1<Error> | Function1<Error, IterableLike<T>>,
    options?: {
      readonly innerType: TInnerLike;
    },
  ) =>
  (iter: IterableLike<T>) =>
    newInstance(
      CatchErrorIterable,
      iter,
      onError,
      options?.innerType?.[ComputationLike_isPure] ?? true,
    )) as Signature["catchError"];

class ConcatAllIterable<T> {
  public readonly [ComputationLike_isPure]?: boolean;

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
export const concatAll: Signature["concatAll"] = (<
    T,
    TInnerLike extends HigherOrderInnerComputationLike,
  >(options?: {
    readonly innerType: TInnerLike;
  }) =>
  (iterable: IterableLike<IterableLike<T>>) =>
    newInstance(
      ConcatAllIterable,
      iterable,
      options?.innerType?.[ComputationLike_isPure] ?? true,
    )) as Signature["concatAll"];

export const concat: Signature["concat"] = (<T>(
  ...iterables: ReadonlyArray<IterableLike<T>>
) =>
  newInstance(
    ConcatAllIterable,
    iterables,
    ComputationM.areAllPure(iterables),
  )) as Signature["concat"];

class DistinctUntilChangedIterable<T> {
  public readonly [ComputationLike_isPure]?: boolean;

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

export const empty: Signature["empty"] = /*@__PURE__*/ returns([]);

class EncodeUtf8Iterable implements IterableLike<Uint8Array<ArrayBufferLike>> {
  public [ComputationLike_isPure]?: boolean;

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

export const first: Signature["first"] = Iterable_first;

export const firstAsync: Signature["firstAsync"] = /*@__PURE__*/ returns(
  async (iter: IterableLike) => {
    await Promise.resolve();
    return first()(iter);
  },
) as Signature["firstAsync"];

class ForEachIterable<T> implements IterableWithSideEffectsLike<T> {
  public [ComputationLike_isPure]: false = false as const;

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

export const fromValue: Signature["fromValue"] = /*@__PURE__*/ returns(tuple);

class FromReadonlyArrayIterable<T> {
  public readonly [ComputationLike_isPure]?: true;

  constructor(
    private readonly arr: readonly T[],
    private readonly count: number,
    private readonly start: number,
  ) {}

  *[Symbol.iterator]() {
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

    return start === 0 && count >= arr[Array_length]
      ? arr
      : newInstance(FromReadonlyArrayIterable, arr, count, start);
  };

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
  public readonly [ComputationLike_isPure]?: boolean;

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

export const last: Signature["last"] =
  <T>() =>
  (iter: IterableLike<T>) => {
    let result: Optional<T> = none;
    for (const v of iter) {
      result = v;
    }
    return result;
  };

export const lastAsync: Signature["lastAsync"] = (<T>() =>
  async (iter: IterableLike<T>) => {
    await Promise.resolve();
    return last<T>()(iter);
  }) as Signature["lastAsync"];

class MapIterable<TA, TB> implements IterableLike<TB> {
  public readonly [ComputationLike_isPure]?: boolean;

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

class PairwiseIterable<T> implements IterableLike<Tuple2<T, T>> {
  public readonly [ComputationLike_isPure]?: boolean;

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
        const result = tuple(v, prev);
        prev = v;

        yield result;
      }
    }
  }
}

export const pairwise: Signature["pairwise"] = (<T>() =>
  (iterable: IterableLike<T>) =>
    newInstance(PairwiseIterable<T>, iterable)) as Signature["pairwise"];

export const reduce: Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (iterable: IterableLike<T>) => {
    let acc = initialValue();
    for (let v of iterable) {
      acc = reducer(acc, v);
    }

    return acc;
  };

export const reduceAsync: Signature["reduceAsync"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  async (iterable: IterableLike<T>) => {
    await Promise.resolve();
    return reduce(reducer, initialValue)(iterable);
  };

class RepeatIterable<T> {
  public readonly [ComputationLike_isPure]?: boolean;

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
  public readonly [ComputationLike_isPure]?: boolean;

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
  (deferable: IterableLike<T>) =>
    newInstance(
      RetryIterable,
      deferable,
      shouldRetry ?? alwaysTrue,
    )) as Signature["retry"];

class ScanIterable<T, TAcc> {
  public readonly [ComputationLike_isPure]?: boolean;

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
  public readonly [ComputationLike_isPure]?: boolean;

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
  public readonly [ComputationLike_isPure]?: boolean;

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

class TakeWhileIterable<T> {
  public readonly [ComputationLike_isPure]?: boolean;

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
  public readonly [ComputationLike_isPure]?: boolean;

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

export const toObservable: Signature["toObservable"] = Iterable_toObservable;

export const toReadonlyArray: Signature["toReadonlyArray"] =
  ReadonlyArray.fromIterable;

export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  /*@__PURE__*/ returns(async (iter: IterableLike) =>
    pipe(iter, toReadonlyArray<unknown>()),
  ) as Signature["toReadonlyArrayAsync"];

class IterableToRunnable<T> implements RunnableLike<T> {
  readonly [ComputationLike_isDeferred]: false = false as const;
  readonly [ComputationLike_isPure]?: boolean;
  constructor(private readonly s: IterableLike<T>) {
    this[ComputationLike_isPure] = s[ComputationLike_isPure];
  }

  [RunnableLike_eval](sink: SinkLike<T>): void {
    for (const v of this.s) {
      if (sink[SinkLike_isCompleted]) {
        break;
      }

      sink[ListenerLike_notify](v);
    }
    sink[SinkLike_complete]();
  }
}

export const toRunnable: Signature["toRunnable"] = /*@__PURE__*/ returns(
  (iterable: IterableLike) => newInstance(IterableToRunnable, iterable),
) as Signature["toRunnable"];

class ZipIterable {
  public readonly [ComputationLike_isPure]?: boolean;

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
