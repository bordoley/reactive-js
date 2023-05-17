import type * as Enumerator from "./Enumerator.js";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Function3,
  Optional,
  Predicate,
  Reducer,
  SideEffect1,
  SideEffect2,
  TypePredicate,
} from "./functions.js";
import {
  Container,
  ContainerOf,
  ContainerOperator,
  DeferredObservableContainer,
  DictionaryLike,
  EnumerableLike,
  EnumeratorLike,
  KeyOf,
  KeyedContainer,
  KeyedContainerOf,
  KeyedContainerOperator,
  KeyedContainer_TKey,
  ObservableContainer,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "./types.js";

export interface ContainerTypeClass<C extends Container> {
  buffer<T>(count: number): ContainerOperator<C, T, readonly T[]>;

  /**
   * Returns a ContainerOperator that emits all items emitted by the source that
   * are distinct by comparison from the previous item.
   *
   * @category Operator
   */
  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): ContainerOperator<C, T, T>;

  /**
   * Returns a ContainerOperator that applies the side effect function to each
   * value emitted by the source.
   *
   * @category Operator
   */
  forEach<T>(effect: SideEffect1<T>): ContainerOperator<C, T, T>;

  /**
   * Returns a ContainerOperator that only emits items produced by the
   * source that satisfy the specified predicate.
   *
   * @category Operator
   */
  keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;

  /**
   * @category Operator
   */
  keepType<TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): ContainerOperator<C, TA, TB>;

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

  /**
   * @category Operator
   */
  mapTo<TA, TB>(value: TB): ContainerOperator<C, TA, TB>;

  /**
   * @category Operator
   */
  pairwise<T>(): ContainerOperator<C, T, readonly [T, T]>;

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

  /**
   * Returns a Container that applies an accumulator function over the source,
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

  /**
   * Returns a Container that skips the first count items emitted by the source.
   *
   * @category Operator
   */
  skipFirst<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;

  /**
   * Returns a Container that only emits the first `count` values emitted by the source.
   *
   * @category Operator
   */
  takeFirst<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;

  /**
   * Returns a Container which emits values emitted by the source as long
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

export interface ConcreteContainerBaseTypeClass<C extends Container> {
  /**
   * Return an Container that emits no items.
   *
   * @category Constructor
   */
  empty<T>(): ContainerOf<C, T>;

  /**
   * @category Constructor
   */
  fromEnumerable<T>(): Function1<EnumerableLike<T>, ContainerOf<C, T>>;

  /**
   * @category Constructor
   */
  fromEnumeratorFactory<T>(): Function1<
    Factory<EnumeratorLike<T>>,
    ContainerOf<C, T>
  >;

  /**
   * @category Constructor
   */
  fromFactory<T>(): Function1<Factory<T>, ContainerOf<C, T>>;

  /**
   * @category Constructor
   */
  fromIterable<T>(): Function1<Iterable<T>, ContainerOf<C, T>>;

  /**
   * @category Constructor
   */
  fromOptional<T>(): Function1<Optional<T>, ContainerOf<C, T>>;

  /**
   * @category Constructor
   */
  fromReadonlyArray<T>(options?: {
    readonly start?: number;
    readonly count?: number;
  }): Function1<readonly T[], ContainerOf<C, T>>;

  /**
   * @category Constructor
   */
  fromValue<T>(): Function1<T, ContainerOf<C, T>>;
}

export interface ConcreteAsyncContainerBaseTypeClass<C extends Container> {
  fromAsyncIterable<T>(): Function1<AsyncIterable<T>, ContainerOf<C, T>>;
}

export interface BlockingContainerBaseTypeClass<C extends Container> {
  /**
   * Converts the Container to a `ReadonlyArrayContainer`.
   *
   * @category Transform
   */
  toReadonlyArray<T>(): Function1<ContainerOf<C, T>, ReadonlyArray<T>>;
}

export interface EnumerableContainerBaseTypeClass<
  C extends Container,
  CEnumerator extends Enumerator.Type = Enumerator.Type,
> {
  /**
   *
   * @category Transform
   */
  enumerate<T>(): Function1<ContainerOf<C, T>, ContainerOf<CEnumerator, T>>;

  /**
   * Converts the Container to a `IterableLike`.
   *
   * @category Transform
   */
  toIterable<T>(): Function1<ContainerOf<C, T>, Iterable<T>>;
}

export interface RunnableContainerTypeClass<C extends Container>
  extends ConcreteContainerBaseTypeClass<C>,
    ContainerTypeClass<C>,
    BlockingContainerBaseTypeClass<C> {
  /**
   * Returns a Container which emits all values from each source sequentially.
   *
   * @category Constructor
   */
  concat<T>(
    fst: ContainerOf<C, T>,
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ): ContainerOf<C, T>;

  /**
   * Converts a higher-order Container into a first-order
   * Container by concatenating the inner sources in order.
   *
   * @category Operator
   */
  concatAll: <T>() => ContainerOperator<C, ContainerOf<C, T>, T>;

  /**
   * @category Operator
   */
  concatMap: <TA, TB>(
    selector: Function1<TA, ContainerOf<C, TB>>,
  ) => ContainerOperator<C, TA, TB>;

  /**
   * @category Operator
   */
  concatWith: <T>(
    snd: ContainerOf<C, T>,
    ...tail: readonly ContainerOf<C, T>[]
  ) => ContainerOperator<C, T, T>;

  /**
   * @category Transform
   */
  contains: <T>(
    value: T,
    options?: {
      readonly equality?: Equality<T>;
    },
  ) => Function1<ContainerOf<C, T>, boolean>;

  /**
   * @category Operator
   */
  endWith<T>(value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;

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

  /**
   *
   * @category Transform
   */
  first<T>(): Function1<ContainerOf<C, T>, Optional<T>>;

  /**
   * @category Operator
   */
  flatMapIterable<TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ): ContainerOperator<C, TA, TB>;

  /**
   *
   * @category Transform
   */
  last<T>(): Function1<ContainerOf<C, T>, Optional<T>>;

  /**
   * @category Transform
   */
  noneSatisfy<T>(
    predicate: Predicate<T>,
  ): Function1<ContainerOf<C, T>, boolean>;

  /**
   * @category Transform
   */
  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<ContainerOf<C, T>, TAcc>;

  /**
   * @category Transform
   */
  someSatisfy<T>(
    predicate: Predicate<T>,
  ): Function1<ContainerOf<C, T>, boolean>;

  /**
   * @category Operator
   */
  startWith<T>(value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;

  /**
   *  Returns a Container that only emits the last `count` items emitted by the source.
   *
   * @category Operator
   */
  takeLast<T>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;

  /**
   * Combines multiple sources to create a Container whose values are calculated from the values,
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

export interface EnumerableContainerTypeClass<
  C extends Container,
  CEnumerator extends Enumerator.Type = Enumerator.Type,
> extends RunnableContainerTypeClass<C>,
    EnumerableContainerBaseTypeClass<C, CEnumerator>,
    ConcreteContainerBaseTypeClass<C> {}

export interface HigherOrderObservableBaseTypeClass<
  C extends ObservableContainer,
  CInner extends DeferredObservableContainer,
> {
  /**
   * Converts a higher-order Container into a first-order
   * Container by concatenating the inner sources in order.
   *
   * @category Operator
   */
  concatAll<T>(): ContainerOperator<C, ContainerOf<CInner, T>, T>;

  /**
   * @category Operator
   */
  concatMap<TA, TB>(
    selector: Function1<TA, ContainerOf<CInner, TB>>,
  ): ContainerOperator<C, TA, TB>;

  /**
   * @category Operator
   */
  exhaust<T>(): ContainerOperator<C, ContainerOf<CInner, T>, T>;

  /**
   * @category Operator
   */
  exhaustMap<TA, TB>(
    selector: Function1<TA, ContainerOf<CInner, TB>>,
  ): ContainerOperator<C, TA, TB>;

  /**
   * @category Operator
   */
  mergeAll<T>(options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  }): ContainerOperator<C, ContainerOf<CInner, T>, T>;

  /**
   * @category Operator
   */
  mergeMap<TA, TB>(
    selector: Function1<TA, ContainerOf<CInner, TB>>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ): ContainerOperator<C, TA, TB>;

  /**
   *
   * @category Operator
   */
  switchAll<T>(): ContainerOperator<C, ContainerOf<CInner, T>, T>;

  /**
   * @category Operator
   */
  switchMap<TA, TB>(
    selector: Function1<TA, ContainerOf<CInner, TB>>,
  ): ContainerOperator<C, TA, TB>;
}

export interface KeyedContainerTypeClass<
  C extends KeyedContainer,
  TKeyBase extends KeyOf<C> = KeyOf<C>,
> {
  /**
   * @category Transform
   */
  entries<T, TKey extends TKeyBase>(): Function1<
    KeyedContainerOf<C, TKey, T>,
    EnumeratorLike<[TKey, T]>
  >;

  /**
   * Returns a ContainerOperator that applies the side effect function to each
   * value emitted by the source.
   *
   * @category Operator
   */
  forEach<T, TKey extends TKeyBase>(
    effect: SideEffect1<T>,
  ): KeyedContainerOperator<C, TKey, T, T>;

  /**
   * Returns a KeyedContainerOperator that applies the side effect function to each
   * value emitted by the source.
   *
   * @category Operator
   */
  forEachWithKey<T, TKey extends TKeyBase>(
    effect: SideEffect2<T, TKey>,
  ): KeyedContainerOperator<C, TKey, T, T>;

  /**
   * @category Transform
   */
  reduce<T, TAcc, TKey extends TKeyBase>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<KeyedContainerOf<C, TKey, T>, TAcc>;

  /**
   * @category Transform
   */
  reduceWithKey<T, TAcc, TKey extends TKeyBase>(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<KeyedContainerOf<C, TKey, T>, TAcc>;

  /**
   *
   * @category Transform
   */
  values<T>(): Function1<KeyedContainerOf<C, any, T>, EnumeratorLike<T>>;
}

export interface ConcreteKeyedContainerTypeClass<
  C extends KeyedContainer,
  TKeyBase extends KeyOf<C> = KeyOf<C>,
> extends KeyedContainerTypeClass<C, TKeyBase> {
  /**
   * Returns a ContainerOperator that only emits items produced by the
   * source that satisfy the specified predicate.
   *
   * @category Operator
   */
  keep<T, TKey extends TKeyBase>(
    predicate: Predicate<T>,
  ): KeyedContainerOperator<C, TKey, T, T>;

  /**
   *
   * @category Operator
   */
  keepType<TA, TB extends TA, TKey extends TKeyBase>(
    predicate: TypePredicate<TA, TB>,
  ): KeyedContainerOperator<C, TKey, TA, TB>;

  /**
   * Returns a ContainerOperator that only emits items produced by the
   * source that satisfy the specified predicate.
   *
   * @category Operator
   */
  keepWithKey<T, TKey extends TKeyBase>(
    predicate: Function2<T, TKey, boolean>,
  ): KeyedContainerOperator<C, TKey, T, T>;

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
  map<TA, TB, TKey extends TKeyBase>(
    selector: Function1<TA, TB>,
  ): KeyedContainerOperator<C, TKey, TA, TB>;

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
  mapWithKey<TA, TB, TKey extends TKeyBase>(
    selector: Function2<TA, TKey, TB>,
  ): KeyedContainerOperator<C, TKey, TA, TB>;
}

export interface AssociativeKeyedContainerTypeClass<
  C extends KeyedContainer,
  TKeyBase extends KeyOf<C> = KeyOf<C>,
> extends KeyedContainerTypeClass<C, TKeyBase> {
  fromReadonlyMap<T, TKey extends TKeyBase>(): Function1<
    ReadonlyMap<TKey, T>,
    KeyedContainerOf<C, TKey, T>
  >;

  fromReadonlyObjectMap<
    T,
    TKey extends TKeyBase,
  >(): TKey extends KeyOf<ReadonlyObjectMapContainer>
    ? Function1<ReadonlyObjectMapLike<TKey, T>, KeyedContainerOf<C, TKey, T>>
    : never;

  /**
   *
   * @category Transform
   */
  keys<TKey extends TKeyBase>(): Function1<
    KeyedContainerOf<C, TKey, unknown>,
    EnumeratorLike<TKey>
  >;

  /**
   *
   * @category Transform
   */
  keySet<TKey extends TKeyBase>(): Function1<
    KeyedContainerOf<C, TKey, unknown>,
    ReadonlySet<TKey>
  >;

  toDictionary<T, TKey extends TKeyBase>(): Function1<
    KeyedContainerOf<C, TKey, T>,
    DictionaryLike<TKey, T>
  >;

  toReadonlyMap<T, TKey extends TKeyBase>(): Function1<
    KeyedContainerOf<C, TKey, T>,
    ReadonlyMap<TKey, T>
  >;

  toReadonlyObjectMap<
    T,
    TKey extends TKeyBase,
  >(): TKey extends KeyOf<ReadonlyObjectMapContainer>
    ? Function1<KeyedContainerOf<C, TKey, T>, ReadonlyObjectMapLike<TKey, T>>
    : never;
}

export interface ConcreteAssociativeKeyedContainerTypeClass<
  C extends KeyedContainer,
  TKeyBase extends KeyOf<C> = KeyOf<C>,
> extends ConcreteKeyedContainerTypeClass<C, TKeyBase>,
    AssociativeKeyedContainerTypeClass<C, TKeyBase> {
  /**
   * Return an Container that emits no items.
   *
   * @category Constructor
   */
  empty<
    T,
    TKey extends NonNullable<C[typeof KeyedContainer_TKey]> = NonNullable<
      C[typeof KeyedContainer_TKey]
    >,
  >(): KeyedContainerOf<C, TKey, T>;

  /**
   * @category Constructor
   */
  fromEntries<T, TKey extends TKeyBase>(): Function1<
    EnumeratorLike<[TKey, T]>,
    KeyedContainerOf<C, TKey, T>
  >;
}
