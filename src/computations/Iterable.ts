import {
  Array_length,
  Array_map,
  Iterator_done,
  Iterator_next,
  Iterator_value,
} from "../__internal__/constants.js";
import { clampPositiveInteger } from "../__internal__/math.js";
import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import * as ReadonlyArray from "../collections/ReadonlyArray.js";
import {
  ComputationLike_isPure,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_deferredWithSideEffectsOfT,
  Computation_pureDeferredOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  HigherOrderInnerComputationLike,
  InteractiveComputationModule,
  IterableLike,
  IterableWithSideEffectsLike,
  PureIterableLike,
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
  error,
  identity,
  invoke,
  isFunction,
  isNone,
  isSome,
  newInstance,
  none,
  pick,
  raise as raiseError,
  returns,
  tuple,
} from "../functions.js";
import * as ComputationM from "./Computation.js";
import Runnable_fromIterable from "./Runnable/__private__/Runnable.fromIterable.js";

/**
 * @noInheritDoc
 */
export interface IterableComputation extends ComputationType {
  readonly [Computation_baseOfT]?: IterableLike<this[typeof Computation_T]>;
  readonly [Computation_pureDeferredOfT]?: PureIterableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_deferredWithSideEffectsOfT]?: IterableWithSideEffectsLike<
    this[typeof Computation_T]
  >;

  readonly [Computation_pureSynchronousOfT]?: PureIterableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_synchronousWithSideEffectsOfT]?: IterableWithSideEffectsLike<
    this[typeof Computation_T]
  >;
}

export type Computation = IterableComputation;

export interface IterableModule
  extends InteractiveComputationModule<IterableComputation> {}

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
      for (const v of this.s) {
        yield v;
      }
    } catch (e) {
      const err = error(e);
      let action: Optional<IterableLike<T>> = none;
      try {
        action = this.onError(err) as Optional<IterableLike<T>>;
      } catch (e) {
        throw error([error(e), err]);
      }

      if (isSome(action)) {
        for (const v of action) {
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
    onError: SideEffect1<Error> | Function1<Error, IterableLike<T>>,
    options?: {
      readonly innerType: TInnerType;
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
      for (const v of iter) {
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

export const first: Signature["first"] = /*@__PURE__*/ returns(
  (iter: IterableLike) => {
    for (const v of iter) {
      return v;
    }
    return none;
  },
) as Signature["first"];

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

export const forEach: Signature["forEach"] =
  <T>(effect: SideEffect1<T>) =>
  (iterable: IterableLike<T>) =>
    newInstance(ForEachIterable, iterable, effect);

export const fromIterable: Signature["fromIterable"] = /*@__PURE__*/ returns(
  identity,
) as Signature["fromIterable"];

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

class GeneratorIterable<T> {
  public readonly [ComputationLike_isPure]?: true;

  constructor(
    readonly generator: Updater<T>,
    readonly initialValue: Factory<T>,
    readonly count?: number,
  ) {}

  *[Symbol.iterator]() {
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
) => newInstance(GeneratorIterable, generator, initialValue, options?.count);

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

class RaiseIterable<T> {
  constructor(private r: SideEffect) {}

  *[Symbol.iterator](): Iterator<T> {
    raiseError(error(this.r()));
  }
}
export const raise: Signature["raise"] = <T>(options?: {
  readonly raise?: SideEffect;
}) => {
  const { raise: factory = raise } = options ?? {};
  return newInstance(RaiseIterable<T>, factory);
};

export const reduce: Signature["reduce"] =
  <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (iterable: IterableLike<T>) => {
    let acc = initialValue();
    for (let v of iterable) {
      acc = reducer(acc, v);
    }

    return acc;
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
      for (const v of iterable) {
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
        for (const v of iterable) {
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

export const toRunnable: Signature["toRunnable"] = Runnable_fromIterable;

export const toReadonlyArray: Signature["toReadonlyArray"] =
  ReadonlyArray.fromIterable;

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
