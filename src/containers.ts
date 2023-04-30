import {
  __ContainerLike_T as ContainerLike_T,
  __ContainerLike_type as ContainerLike_type,
  __EnumeratorLike_current as EnumeratorLike_current,
  __EnumeratorLike_hasCurrent as EnumeratorLike_hasCurrent,
  __EnumeratorLike_move as EnumeratorLike_move,
} from "./__internal__/symbols.js";
import {
  Equality,
  Factory,
  Function1,
  Optional,
  Predicate,
  Reducer,
  SideEffect1,
  TypePredicate,
  Updater,
} from "./functions.js";

export {
  ContainerLike_T,
  ContainerLike_type,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
};

/**
 * Base type for all Containers.
 *
 * @noInheritDoc
 * @category Container
 */
export interface ContainerLike {
  readonly [ContainerLike_T]?: unknown;
  readonly [ContainerLike_type]?: unknown;
}

/**
 * A compile time only type for using a Javascript `Iterable` as a `ContainerLike`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface IterableContainerLike<T = unknown>
  extends ContainerLike,
    Iterable<T> {
  readonly [ContainerLike_type]?: Iterable<this[typeof ContainerLike_T]>;
}

/**
 * A compile time only type for using a Javascript `AsyncIterable` as a `ContainerLike`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface AsyncIterableContainerLike<T = unknown>
  extends ContainerLike,
    AsyncIterable<T> {
  readonly [ContainerLike_type]?: AsyncIterable<this[typeof ContainerLike_T]>;
}

/**
 * A compile time only type for using a Javascript `PromiseLike` as a `ContainerLike`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface PromiseContainerLike<T = unknown>
  extends ContainerLike,
    PromiseLike<T> {
  readonly [ContainerLike_type]?: PromiseLike<this[typeof ContainerLike_T]>;
}

/**
 * A compile time only type for using a Javascript `ReadonlyArray` as a `ContainerLike`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyArrayContainerLike<T = unknown>
  extends ContainerLike,
    ReadonlyArray<T> {
  readonly [ContainerLike_type]?: ReadonlyArray<this[typeof ContainerLike_T]>;
}

/**
 * An interactive mutable enumerator that can be used to iterate
 * over an underlying source of data.
 */
export interface EnumeratorLike<T = unknown> {
  /**
   * Returns the element if present.
   */
  readonly [EnumeratorLike_current]: T;

  /**
   * Indicates if the `EnumeratorLike` has a current value.
   */
  readonly [EnumeratorLike_hasCurrent]: boolean;

  /**
   * Advances the enumerator to the next value, if present.
   *
   * @returns true if successful, otherwise false.
   */
  [EnumeratorLike_move](): boolean;
}

/**
 * @noInheritDoc
 * @category Container
 */
export interface EnumeratorContainerLike<T = unknown>
  extends EnumeratorLike<T>,
    ContainerLike {
  readonly [ContainerLike_type]?: EnumeratorLike<this[typeof ContainerLike_T]>;
}

/**
 * Utility type for higher order programming with Containers.
 */
export type ContainerOf<C extends ContainerLike, T> = C extends {
  readonly [ContainerLike_type]?: unknown;
}
  ? NonNullable<
      (C & {
        readonly [ContainerLike_T]: T;
      })[typeof ContainerLike_type]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
    };

/**
 * Utility type for a generic operator function that transforms a Container's inner value type.
 */
export type ContainerOperator<C extends ContainerLike, TA, TB> = Function1<
  ContainerOf<C, TA>,
  ContainerOf<C, TB>
>;

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Buffer<C extends ContainerLike> {
  /**
   * Returns a ContainerLike which buffers items produced by the source until the
   * number of items reaches the specified maximum buffer size.
   *
   * @category Operator
   */
  buffer: <T>(options?: {
    readonly count?: number;
  }) => ContainerOperator<C, T, readonly T[]>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Concat<C extends ContainerLike> {
  /**
   * Returns a ContainerLike which emits all values from each source sequentially.
   *
   * @category Constructor
   */
  concat<T>(
    fst: ContainerOf<C, T>,
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ): ContainerOf<C, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ConcatAll<C extends ContainerLike> {
  /**
   * Converts a higher-order ContainerLike into a first-order
   * ContainerLike by concatenating the inner sources in order.
   *
   * @category Operator
   */
  concatAll: <T>() => ContainerOperator<C, ContainerOf<C, T>, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ConcatMap<C extends ContainerLike> {
  /**
   * @category Operator
   */
  concatMap: <TA, TB>(
    selector: Function1<TA, ContainerOf<C, TB>>,
  ) => ContainerOperator<C, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ConcatWith<C extends ContainerLike> {
  /**
   * @category Operator
   */
  concatWith: <T>(
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ) => ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Contains<C extends ContainerLike> {
  /**
   * @category Transform
   */
  contains: <T>(
    value: T,
    options?: {
      readonly equality?: Equality<T>;
    },
  ) => Function1<ContainerOf<C, T>, boolean>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface DistinctUntilChanged<C extends ContainerLike> {
  /**
   * Returns a ContainerOperator that emits all items emitted by the source that
   * are distinct by comparison from the previous item.
   *
   * @category Operator
   */
  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Empty<C extends ContainerLike> {
  /**
   * Return an ContainerLike that emits no items.
   *
   * @category Constructor
   */
  empty<T>(): ContainerOf<C, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface EndWith<C extends ContainerLike> {
  /**
   * @category Operator
   */
  endWith<T>(value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Enumerate<
  C extends ContainerLike,
  CEnumerator extends EnumeratorContainerLike = EnumeratorContainerLike,
> {
  /**
   *
   * @category Transform
   */
  enumerate<T>(): Function1<ContainerOf<C, T>, ContainerOf<CEnumerator, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface EverySatisfy<C extends ContainerLike> {
  /**
   * Determines whether all the members of an Container satisfy the predicate.
   * The predicate function is invoked for each element in the Container until the
   * it returns false, or until the end of the Container.
   *
   * @param predicate
   * @category Transform
   */
  everySatisfy<T>(
    predicate: Predicate<T>,
  ): Function1<ContainerOf<C, T>, boolean>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface First<C extends ContainerLike> {
  /**
   *
   * @category Transform
   */
  first<T>(): Function1<ContainerOf<C, T>, Optional<T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FlatMapIterable<C extends ContainerLike> {
  /**
   * @category Operator
   */
  flatMapIterable: <TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ) => ContainerOperator<C, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForEach<C extends ContainerLike> {
  /**
   * Returns a ContainerOperator that applies the side effect function to each
   * value emitted by the source.
   *
   * @category Operator
   */
  forEach<T>(effect: SideEffect1<T>): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForkConcat<C extends ContainerLike> {
  /**
   * @category Operator
   */
  forkConcat<TIn, TOut>(
    fst: ContainerOperator<C, TIn, TOut>,
    snd: ContainerOperator<C, TIn, TOut>,
    ...tail: readonly ContainerOperator<C, TIn, TOut>[]
  ): ContainerOperator<C, TIn, TOut>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForkZip<C extends ContainerLike> {
  /**
   * @category Operator
   */
  forkZip<T, TA, TB>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
  ): ContainerOperator<C, T, readonly [TA, TB]>;
  forkZip<T, TA, TB, TC>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC]>;
  forkZip<T, TA, TB, TC, TD>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD]>;
  forkZip<T, TA, TB, TC, TD, TE>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE]>;
  forkZip<T, TA, TB, TC, TD, TE, TF>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
  forkZip<T, TA, TB, TC, TD, TE, TF, TG>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
    h: ContainerOperator<C, T, TH>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ContainerOperator<C, T, TA>,
    b: ContainerOperator<C, T, TB>,
    c: ContainerOperator<C, T, TC>,
    d: ContainerOperator<C, T, TD>,
    e: ContainerOperator<C, T, TE>,
    f: ContainerOperator<C, T, TF>,
    g: ContainerOperator<C, T, TG>,
    h: ContainerOperator<C, T, TH>,
    i: ContainerOperator<C, T, TI>,
  ): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromAsyncIterable<C extends ContainerLike> {
  /**
   * @category Constructor
   */
  fromAsyncIterable<T>(): Function1<AsyncIterable<T>, ContainerOf<C, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromEnumeratorFactory<C extends ContainerLike> {
  /**
   * @category Constructor
   */
  fromEnumeratorFactory<T>(
    factory: Factory<EnumeratorLike<T>>,
  ): ContainerOf<C, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromFactory<C extends ContainerLike> {
  /**
   * @category Constructor
   */
  fromFactory<T>(factory: Factory<T>): ContainerOf<C, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromIterable<C extends ContainerLike> {
  /**
   * @category Constructor
   */
  fromIterable<T>(): Function1<Iterable<T>, ContainerOf<C, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromOptional<C extends ContainerLike> {
  /**
   * @category Constructor
   */
  fromOptional<T>(): Function1<Optional<T>, ContainerOf<C, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromReadonlyArray<C extends ContainerLike> {
  /**
   * @category Constructor
   */
  fromReadonlyArray<T>(options?: {
    readonly start?: number;
    readonly count?: number;
  }): Function1<readonly T[], ContainerOf<C, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Generate<C extends ContainerLike> {
  /**
   * Generates a ContainerLike from a generator function
   * that is applied to an accumulator value between emitted items.
   *
   * @param generator - The generator function.
   * @param initialValue - Factory function used to generate the initial accumulator.
   *
   * @category Constructor
   */
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
  ): ContainerOf<C, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Identity<C extends ContainerLike> {
  /**
   * @category Operator
   */
  identity<T>(): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface IgnoreElements<C extends ContainerLike> {
  /**
   * @category Operator
   */
  ignoreElements<T>(): ContainerOperator<C, unknown, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Keep<C extends ContainerLike> {
  /**
   * Returns a ContainerOperator that only emits items produced by the
   * source that satisfy the specified predicate.
   *
   * @category Operator
   */
  keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface KeepType<C extends ContainerLike> {
  /**
   *
   * @category Operator
   */
  keepType<TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): ContainerOperator<C, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Last<C extends ContainerLike> {
  /**
   *
   * @category Transform
   */
  last<T>(): Function1<ContainerOf<C, T>, Optional<T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Map<C extends ContainerLike> {
  /**
   * Returns a ContainerOperator that applies the `selector` function to each
   * value emitted by the source.
   *
   * @param selector - A pure map function that is applied each value emitted by the source
   * @typeparam TA - The inner type of the source container
   * @typeparam TB - The inner type of the mapped container
   *
   * @category Operator
   */
  map<TA, TB>(selector: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface MapTo<C extends ContainerLike> {
  /**
   * @category Operator
   */
  mapTo<TA, TB>(value: TB): ContainerOperator<C, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface NoneSatisfy<C extends ContainerLike> {
  /**
   * @category Transform
   */
  noneSatisfy<T>(
    predicate: Predicate<T>,
  ): Function1<ContainerOf<C, T>, boolean>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Pairwise<C extends ContainerLike> {
  /**
   * @category Operator
   */
  pairwise<T>(): ContainerOperator<C, T, readonly [T, T]>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Pick<C extends ContainerLike> {
  /**
   * @category Operator
   */
  pick<T, TKey extends keyof T>(key: TKey): ContainerOperator<C, T, T[TKey]>;
  pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(
    keyA: TKeyA,
    keyB: TKeyB,
  ): ContainerOperator<C, T, T[TKeyA][TKeyB]>;
  pick<
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
    TKeyC extends keyof T[TKeyA][TKeyB],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
    keyC: TKeyC,
  ): ContainerOperator<C, T, T[TKeyA][TKeyB][TKeyC]>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Reduce<C extends ContainerLike> {
  /**
   * @category Transform
   */
  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<ContainerOf<C, T>, TAcc>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Repeat<C extends ContainerLike> {
  /**
   * Returns a ContainerLike that mirrors the source, repeating it whenever the predicate returns true.
   *
   * @param predicate
   *
   * @category Operator
   */
  repeat<T>(predicate: Predicate<number>): ContainerOperator<C, T, T>;
  /**
   * Returns a ContainerLike that mirrors the source, repeating it `count` times.
   *
   * @param count
   *
   * @category Operator
   */
  repeat<T>(count: number): ContainerOperator<C, T, T>;

  /**
   * Returns a ContainerLike that mirrors the source, continually repeating it.
   *
   * @category Operator
   */
  repeat<T>(): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Scan<C extends ContainerLike> {
  /**
   * Returns a ContainerLike that applies an accumulator function over the source,
   * and emits each intermediate result.
   *
   * @param scanner - The accumulator function called on each source value.
   * @param initialValue - The initial accumulation value.
   *
   * @category Operator
   */
  scan<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface SkipFirst<C extends ContainerLike> {
  /**
   * Returns a ContainerLike that skips the first count items emitted by the source.
   *
   * @category Operator
   */
  skipFirst<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface SomeSatisfy<C extends ContainerLike> {
  /**
   * @category Transform
   */
  someSatisfy<T>(
    predicate: Predicate<T>,
  ): Function1<ContainerOf<C, T>, boolean>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface StartWith<C extends ContainerLike> {
  /**
   * @category Operator
   */
  startWith<T>(value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface TakeFirst<C extends ContainerLike> {
  /**
   * Returns a ContainerLike that only emits the first `count` values emitted by the source.
   *
   * @category Operator
   */
  takeFirst<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface TakeLast<C extends ContainerLike> {
  /**
   *  Returns a ContainerLike that only emits the last `count` items emitted by the source.
   *
   * @category Operator
   */
  takeLast<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface TakeWhile<C extends ContainerLike> {
  /**
   * Returns a ContainerLike which emits values emitted by the source as long
   * as each value satisfies the given predicate, and then completes as soon as
   * this predicate is not satisfied.
   *
   * @param predicate - The predicate function.
   *
   * @category Operator
   */
  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
  ): ContainerOperator<C, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToIterable<C extends ContainerLike> {
  /**
   * Converts the ContainerLike to a `IterableLike`.
   *
   * @category Transform
   */
  toIterable<T>(): Function1<ContainerOf<C, T>, Iterable<T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToReadonlyArray<C extends ContainerLike> {
  /**
   * Converts the ContainerLike to a `ReadonlyArrayContainerLike`.
   *
   * @category Transform
   */
  toReadonlyArray<T>(): Function1<
    ContainerOf<C, T>,
    ReadonlyArrayContainerLike<T>
  >;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Zip<C extends ContainerLike> {
  /**
   * Combines multiple sources to create a ContainerLike whose values are calculated from the values,
   * in order, of each of its input sources.
   *
   * @category Constructor
   */
  zip<TA, TB>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
  ): ContainerOf<C, readonly [TA, TB]>;
  zip<TA, TB, TC>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
  ): ContainerOf<C, readonly [TA, TB, TC]>;
  zip<TA, TB, TC, TD>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD]>;
  zip<TA, TB, TC, TD, TE>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE]>;
  zip<TA, TB, TC, TD, TE, TF>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF]>;
  zip<TA, TB, TC, TD, TE, TF, TG>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ContainerOf<C, TA>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
    i: ContainerOf<C, TI>,
  ): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ZipWith<C extends ContainerLike> {
  /**
   * @category Operator
   */
  zipWith<TA, TB>(
    b: ContainerOf<C, TB>,
  ): ContainerOperator<C, TA, readonly [TA, TB]>;
  zipWith<TA, TB, TC>(
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC]>;
  zipWith<TA, TB, TC, TD>(
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD]>;
  zipWith<TA, TB, TC, TD, TE>(
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE]>;
  zipWith<TA, TB, TC, TD, TE, TF>(
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF]>;
  zipWith<TA, TB, TC, TD, TE, TF, TG>(
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
    i: ContainerOf<C, TI>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
