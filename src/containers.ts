import {
  __Container_T,
  __Container_type,
  __KeyedContainer_TKey,
} from "./__internal__/symbols.js";
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
  Updater,
} from "./functions.js";
import {
  DeferredObservableLike,
  DictionaryLike,
  DispatcherLike,
  DisposableLike,
  EnumerableLike,
  EnumeratorLike,
  EventSourceLike,
  MulticastObservableLike,
  ObservableLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReadonlyObjectMapLike,
  RunnableLike,
  SchedulerLike,
  SharedObservableLike,
} from "./types.js";

export const Container_T: typeof __Container_T = __Container_T;
export const Container_type: typeof __Container_type = __Container_type;
export const KeyedContainer_TKey: typeof __KeyedContainer_TKey =
  __KeyedContainer_TKey;

export namespace Container {
  /**
   * Base type for all Container.
   *
   * @noInheritDoc
   */
  export interface Type {
    readonly [Container_T]?: unknown;
    readonly [Container_type]?: unknown;
  }
  /**
   * Utility type for higher order programming with Container.
   */
  export type Of<C extends Container.Type, T> = C extends {
    readonly [Container_type]?: unknown;
  }
    ? NonNullable<
        (C & {
          readonly [Container_T]: T;
        })[typeof Container_type]
      >
    : {
        readonly _C: C;
        readonly _T: () => T;
      };

  /**
   * Utility type for a generic operator function that transforms a Container's inner value type.
   */
  export type Operator<C extends Container.Type, TA, TB> = Function1<
    Container.Of<C, TA>,
    Container.Of<C, TB>
  >;
}

export namespace KeyedContainer {
  export interface Type extends Container.Type {
    readonly [KeyedContainer_TKey]?: unknown;
  }

  export type Of<C extends Container.Type, TKey, T> = C extends {
    readonly [Container_type]?: unknown;
  }
    ? NonNullable<
        (C & {
          readonly [Container_T]: T;
          readonly [KeyedContainer_TKey]: TKey;
        })[typeof Container_type]
      >
    : {
        readonly _C: C;
        readonly _T: () => T;
        readonly _TKey: () => TKey;
      };

  export type KeyOf<C extends KeyedContainer.Type> = C extends {
    readonly [Container_type]?: unknown;
  }
    ? NonNullable<C[typeof KeyedContainer_TKey]>
    : // eslint-disable-next-line @typescript-eslint/ban-types
      {};

  /**
   * Utility type for a generic operator function that transforms a Container's inner value type.
   */
  export type Operator<C extends KeyedContainer.Type, TKey, TA, TB> = Function1<
    KeyedContainer.Of<C, TKey, TA>,
    KeyedContainer.Of<C, TKey, TB>
  >;
}

export namespace EnumeratorContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends Container.Type {
    readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]>;
  }

  export interface TypeClass
    extends ContainerTypeClass<Type>,
      DeferredTypeClass<Type>,
      RunnableTypeClass<Type> {}
}

export namespace IterableContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends Container.Type {
    readonly [Container_type]?: Iterable<this[typeof Container_T]>;
  }

  export interface TypeClass
    extends ContainerTypeClass<Type>,
      DeferredTypeClass<Type>,
      RunnableTypeClass<Type>,
      EnumerableTypeClass<Type> {}
}

export namespace ReadonlyArrayContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends KeyedContainer.Type {
    readonly [Container_type]?: ReadonlyArray<this[typeof Container_T]>;

    readonly [KeyedContainer_TKey]?: number;
  }

  export type TKey = KeyedContainer.KeyOf<ReadonlyArrayContainer.Type>;

  export interface TypeClass
    extends KeyedContainerTypeClass<Type>,
      DeferredTypeClass<Type>,
      RunnableTypeClass<Type> {
    empty: KeyedContainerTypeClass<Type>["empty"];
    fromReadonlyArray: KeyedContainerTypeClass<Type>["fromReadonlyArray"];
    reduce: KeyedContainerTypeClass<Type>["reduce"];
    toReadonlyArray: KeyedContainerTypeClass<Type>["toReadonlyArray"];
  }
}

export namespace PromiseContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends Container.Type {
    readonly [Container_type]?: PromiseLike<this[typeof Container_T]>;
  }

  export interface TypeClass extends ContainerTypeClass<Type> {}
}

export namespace AsyncIterableContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends Container.Type {
    readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
  }

  export interface TypeClass extends ContainerTypeClass<Type> {
    // FIXME: Surely this can be shared
    /**
     * @category Transform
     */
    flow<T>(
      scheduler: SchedulerLike,
      options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      },
    ): Function1<
      Container.Of<Type, T>,
      PauseableObservableLike<T> & DisposableLike
    >;
  }
}

export namespace EventSourceContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends Container.Type {
    readonly [Container_type]?: EventSourceLike<this[typeof Container_T]>;
  }

  export interface TypeClass extends ContainerTypeClass<Type> {}
}

export namespace ObservableContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends Container.Type {
    readonly [Container_type]?: ObservableLike<this[typeof Container_T]>;
  }

  export interface TypeClass
    extends ObservableTypeClass<Type>,
      AsynchronousTypeClass<Type> {}
}

export namespace SharedObservableContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends ObservableContainer.Type {
    readonly [Container_type]?: SharedObservableLike<this[typeof Container_T]>;
  }
  /**
   * @noInheritDoc
   */
  export interface TypeClass extends ObservableTypeClass<Type> {}
}

export namespace DeferredObservableContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends ObservableContainer.Type {
    readonly [Container_type]?: DeferredObservableLike<
      this[typeof Container_T]
    >;
  }

  /**
   * @noInheritDoc
   */
  export interface TypeClass extends DeferredObservableTypeClass<Type> {}
}

export namespace RunnableContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends DeferredObservableContainer.Type {
    readonly [Container_type]?: RunnableLike<this[typeof Container_T]>;
  }

  /**
   * @noInheritDoc
   */
  export interface TypeClass extends RunnableObservableTypeClass<Type> {}
}

export namespace EnumerableContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends RunnableContainer.Type {
    readonly [Container_type]?: EnumerableLike<this[typeof Container_T]>;
  }

  interface EnumerableEnumeratorContainer extends Container.Type {
    readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]> &
      DisposableLike;
  }

  /**
   * @noInheritDoc
   */
  export interface TypeClass
    extends EnumerableObservableTypeClass<Type>,
      EnumerableTypeClass<Type, EnumerableEnumeratorContainer> {}
}

export namespace PauseableObservableContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends ObservableContainer.Type {
    readonly [Container_type]?: PauseableObservableLike<
      this[typeof Container_T]
    >;
  }

  export interface TypeClass extends ObservableTypeClass<Type> {}
}

export namespace DictionaryContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends KeyedContainer.Type {
    readonly [Container_type]?: DictionaryLike<
      this[typeof KeyedContainer_TKey],
      this[typeof Container_T]
    >;

    readonly [KeyedContainer_TKey]?: unknown;
  }

  export type TKey = KeyedContainer.KeyOf<Type>;

  export interface TypeClass extends KeyedContainerTypeClass<Type> {}
}

export namespace ReadonlyObjectMapContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends Container.Type {
    readonly [Container_type]?: ReadonlyObjectMapLike<
      NonNullable<this[typeof KeyedContainer_TKey]>,
      this[typeof Container_T]
    >;

    readonly [KeyedContainer_TKey]?: symbol | number | string;
  }

  export type TKey = KeyedContainer.KeyOf<Type>;

  export interface TypeClass extends KeyedContainerTypeClass<Type> {}
}

export namespace ReadonlyMapContainer {
  /**
   * @noInheritDoc
   */
  export interface Type extends Container.Type {
    readonly [Container_type]?: ReadonlyMap<
      this[typeof KeyedContainer_TKey],
      this[typeof Container_T]
    >;

    readonly [KeyedContainer_TKey]?: unknown;
  }

  export type TKey = KeyedContainer.KeyOf<Type>;

  export interface TypeClass extends KeyedContainerTypeClass<Type> {}
}

export interface ContainerTypeClass<C extends Container.Type> {
  /**
   * Returns a Container which buffers items produced by the source until the
   * number of items reaches the specified maximum buffer size.
   *
   * @category Operator
   */
  buffer: <T>(options?: {
    readonly count?: number;
  }) => Container.Operator<C, T, readonly T[]>;

  /**
   * Returns a Container.Operator that emits all items emitted by the source that
   * are distinct by comparison from the previous item.
   *
   * @category Operator
   */
  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): Container.Operator<C, T, T>;

  /**
   *
   * @category Transform
   */
  firstAsync<T>(): Function1<Container.Of<C, T>, PromiseLike<Optional<T>>>;

  /**
   * @category Operator
   */
  flatMapIterable: <TA, TB>(
    selector: Function1<TA, Iterable<TB>>,
  ) => Container.Operator<C, TA, TB>;

  /**
   * Returns a Container.Operator that applies the side effect function to each
   * value emitted by the source.
   *
   * @category Operator
   */
  forEach<T>(effect: SideEffect1<T>): Container.Operator<C, T, T>;

  /**
   * @category Operator
   */
  forkZip<T, TA, TB>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
  ): Container.Operator<C, T, readonly [TA, TB]>;
  forkZip<T, TA, TB, TC>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
  ): Container.Operator<C, T, readonly [TA, TB, TC]>;
  forkZip<T, TA, TB, TC, TD>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD]>;
  forkZip<T, TA, TB, TC, TD, TE>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE]>;
  forkZip<T, TA, TB, TC, TD, TE, TF>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
  forkZip<T, TA, TB, TC, TD, TE, TF, TG>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
    g: Container.Operator<C, T, TG>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
    g: Container.Operator<C, T, TG>,
    h: Container.Operator<C, T, TH>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
    g: Container.Operator<C, T, TG>,
    h: Container.Operator<C, T, TH>,
    i: Container.Operator<C, T, TI>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  /**
   * @category Operator
   */
  identity<T>(): Container.Operator<C, T, T>;

  /**
   * @category Operator
   */
  ignoreElements<T>(): Container.Operator<C, unknown, T>;

  /**
   * Returns a Container.Operator that only emits items produced by the
   * source that satisfy the specified predicate.
   *
   * @category Operator
   */
  keep<T>(predicate: Predicate<T>): Container.Operator<C, T, T>;

  /**
   *
   * @category Operator
   */
  keepType<TA, TB extends TA>(
    predicate: TypePredicate<TA, TB>,
  ): Container.Operator<C, TA, TB>;

  /**
   *
   * @category Transform
   */
  lastAsync<T>(): Function1<Container.Of<C, T>, PromiseLike<Optional<T>>>;

  /**
   * Returns a Container.Operator that applies the `selector` function to each
   * value emitted by the source.
   *
   * @param selector - A pure map function that is applied each value emitted by the source
   * @typeparam TA - The inner type of the source container
   * @typeparam TB - The inner type of the mapped container
   *
   * @category Operator
   */
  map<TA, TB>(selector: Function1<TA, TB>): Container.Operator<C, TA, TB>;

  /**
   * @category Operator
   */
  mapTo<TA, TB>(value: TB): Container.Operator<C, TA, TB>;

  /**
   * @category Operator
   */
  pairwise<T>(): Container.Operator<C, T, readonly [T, T]>;

  /**
   * @category Operator
   */
  pick<T, TKey extends keyof T>(key: TKey): Container.Operator<C, T, T[TKey]>;
  pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(
    keyA: TKeyA,
    keyB: TKeyB,
  ): Container.Operator<C, T, T[TKeyA][TKeyB]>;
  pick<
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
    TKeyC extends keyof T[TKeyA][TKeyB],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
    keyC: TKeyC,
  ): Container.Operator<C, T, T[TKeyA][TKeyB][TKeyC]>;

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
  ): Container.Operator<C, T, TAcc>;

  /**
   * @category Operator
   */
  scanLast: <T, TAcc>(
    scanner: Function2<TAcc, T, Container.Of<C, TAcc>>,
    initialValue: Factory<TAcc>,
  ) => Container.Operator<C, T, TAcc>;

  /**
   * Returns a Container that skips the first count items emitted by the source.
   *
   * @category Operator
   */
  skipFirst<T>(options?: {
    readonly count?: number;
  }): Container.Operator<C, T, T>;

  /**
   * Returns a Container that only emits the first `count` values emitted by the source.
   *
   * @category Operator
   */
  takeFirst<T>(options?: {
    readonly count?: number;
  }): Container.Operator<C, T, T>;

  /**
   *  Returns a Container that only emits the last `count` items emitted by the source.
   *
   * @category Operator
   */
  takeLast<T>(options?: {
    readonly count?: number;
  }): Container.Operator<C, T, T>;

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
  ): Container.Operator<C, T, T>;

  /**
   * @category Transform
   */
  toObservable: <T>() => Function1<Container.Of<C, T>, ObservableLike<T>>;

  /**
   * Combines multiple sources to create a Container whose values are calculated from the values,
   * in order, of each of its input sources.
   *
   * @category Constructor
   */
  zip<TA, TB>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
  ): Container.Of<C, readonly [TA, TB]>;
  zip<TA, TB, TC>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
  ): Container.Of<C, readonly [TA, TB, TC]>;
  zip<TA, TB, TC, TD>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
  ): Container.Of<C, readonly [TA, TB, TC, TD]>;
  zip<TA, TB, TC, TD, TE>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE]>;
  zip<TA, TB, TC, TD, TE, TF>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
  zip<TA, TB, TC, TD, TE, TF, TG>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
    h: Container.Of<C, TH>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
    h: Container.Of<C, TH>,
    i: Container.Of<C, TI>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  /**
   * @category Operator
   */
  zipWith<TA, TB>(
    b: Container.Of<C, TB>,
  ): Container.Operator<C, TA, readonly [TA, TB]>;
  zipWith<TA, TB, TC>(
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
  ): Container.Operator<C, TA, readonly [TA, TB, TC]>;
  zipWith<TA, TB, TC, TD>(
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
  ): Container.Operator<C, TA, readonly [TA, TB, TC, TD]>;
  zipWith<TA, TB, TC, TD, TE>(
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
  ): Container.Operator<C, TA, readonly [TA, TB, TC, TD, TE]>;
  zipWith<TA, TB, TC, TD, TE, TF>(
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
  ): Container.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF]>;
  zipWith<TA, TB, TC, TD, TE, TF, TG>(
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
  ): Container.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
    h: Container.Of<C, TH>,
  ): Container.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
    h: Container.Of<C, TH>,
    i: Container.Of<C, TI>,
  ): Container.Operator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}

/**
 * @noInheritDoc
 */
export interface KeyedContainerTypeClass<C extends KeyedContainer.Type> {
  /**
   * Return an Container that emits no items.
   *
   * @category Constructor
   */
  empty<
    T,
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(): KeyedContainer.Of<C, TKey, T>;

  /**
   *
   * @category Transform
   */
  entries<
    T,
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(): Function1<KeyedContainer.Of<C, TKey, T>, EnumeratorLike<[TKey, T]>>;

  /**
   * Returns a Container.Operator that applies the side effect function to each
   * value emitted by the source.
   *
   * @category Operator
   */
  forEach<T, TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>>(
    effect: SideEffect1<T>,
  ): KeyedContainer.Operator<C, TKey, T, T>;

  /**
   * Returns a KeyedContainer.Operator that applies the side effect function to each
   * value emitted by the source.
   *
   * @category Operator
   */
  forEachWithKey<
    T,
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(
    effect: SideEffect2<T, TKey>,
  ): KeyedContainer.Operator<C, TKey, T, T>;

  /**
   * @category Constructor
   */
  fromEntries<
    T,
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(): Function1<EnumeratorLike<[TKey, T]>, KeyedContainer.Of<C, TKey, T>>;

  /**
   * @category Constructor
   */
  fromReadonlyArray<
    T,
    TKey extends KeyedContainer.KeyOf<ReadonlyArrayContainer.Type> = ReadonlyArrayContainer.TKey,
  >(options?: {
    readonly start?: number;
    readonly count?: number;
  }): Function1<readonly T[], KeyedContainer.Of<C, TKey, T>>;

  /**
   * @category Operator
   */
  identity<
    T,
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(): KeyedContainer.Operator<C, TKey, T, T>;

  /**
   * Returns a Container.Operator that only emits items produced by the
   * source that satisfy the specified predicate.
   *
   * @category Operator
   */
  keep<T, TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>>(
    predicate: Predicate<T>,
  ): KeyedContainer.Operator<C, TKey, T, T>;

  /**
   *
   * @category Operator
   */
  keepType<
    TA,
    TB extends TA,
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(
    predicate: TypePredicate<TA, TB>,
  ): KeyedContainer.Operator<C, TKey, TA, TB>;

  /**
   * Returns a Container.Operator that only emits items produced by the
   * source that satisfy the specified predicate.
   *
   * @category Operator
   */
  keepWithKey<
    T,
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(
    predicate: Function2<T, TKey, boolean>,
  ): KeyedContainer.Operator<C, TKey, T, T>;

  /**
   *
   * @category Transform
   */
  keys<
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(): Function1<KeyedContainer.Of<C, TKey, unknown>, EnumeratorLike<TKey>>;

  /**
   *
   * @category Transform
   */
  keySet<
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(): Function1<KeyedContainer.Of<C, TKey, unknown>, ReadonlySet<TKey>>;

  /**
   * Returns a Container.Operator that applies the `selector` function to each
   * value emitted by the source.
   *
   * @param selector - A pure map function that is applied each value emitted by the source
   * @typeparam TA - The inner type of the source container
   * @typeparam TB - The inner type of the mapped container
   *
   * @category Operator
   */
  map<TA, TB, TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>>(
    selector: Function1<TA, TB>,
  ): KeyedContainer.Operator<C, TKey, TA, TB>;

  /**
   * Returns a Container.Operator that applies the `selector` function to each
   * value emitted by the source.
   *
   * @param selector - A pure map function that is applied each value emitted by the source
   * @typeparam TA - The inner type of the source container
   * @typeparam TB - The inner type of the mapped container
   *
   * @category Operator
   */
  mapWithKey<
    TA,
    TB,
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(
    selector: Function2<TA, TKey, TB>,
  ): KeyedContainer.Operator<C, TKey, TA, TB>;

  /**
   * @category Transform
   */
  reduce<
    T,
    TAcc,
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<KeyedContainer.Of<C, TKey, T>, TAcc>;

  /**
   * @category Transform
   */
  reduceWithKey<
    T,
    TAcc,
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<KeyedContainer.Of<C, TKey, T>, TAcc>;

  /**
   * Converts the Container to a `ReadonlyArrayContainer`.
   *
   * @category Transform
   */
  toReadonlyArray<
    T,
    TKey extends KeyedContainer.KeyOf<C> = KeyedContainer.KeyOf<C>,
  >(): Function1<KeyedContainer.Of<C, TKey, T>, ReadonlyArray<T>>;

  /**
   *
   * @category Transform
   */
  values<T>(): Function1<KeyedContainer.Of<C, any, T>, EnumeratorLike<T>>;
}

export interface AsynchronousTypeClass<C extends Container.Type> {
  /**
   * @category Constructor
   */
  fromAsyncIterable<T>(): Function1<AsyncIterable<T>, Container.Of<C, T>>;
}

export interface DeferredTypeClass<C extends Container.Type> {
  /**
   * Returns a Container which emits all values from each source sequentially.
   *
   * @category Constructor
   */
  concat<T>(
    fst: Container.Of<C, T>,
    snd: Container.Of<C, T>,
    ...tail: readonly Container.Of<C, T>[]
  ): Container.Of<C, T>;

  /**
   * Converts a higher-order Container into a first-order
   * Container by concatenating the inner sources in order.
   *
   * @category Operator
   */
  concatAll: <T>() => Container.Operator<C, Container.Of<C, T>, T>;

  /**
   * @category Operator
   */
  concatMap: <TA, TB>(
    selector: Function1<TA, Container.Of<C, TB>>,
  ) => Container.Operator<C, TA, TB>;

  /**
   * @category Operator
   */
  concatWith: <T>(
    snd: Container.Of<C, T>,
    ...tail: readonly Container.Of<C, T>[]
  ) => Container.Operator<C, T, T>;

  /**
   * Return an Container that emits no items.
   *
   * @category Constructor
   */
  empty<T>(): Container.Of<C, T>;

  /**
   * @category Operator
   */
  endWith<T>(value: T, ...values: readonly T[]): Container.Operator<C, T, T>;

  /**
   * @category Operator
   */
  forkConcat<TIn, TOut>(
    fst: Container.Operator<C, TIn, TOut>,
    snd: Container.Operator<C, TIn, TOut>,
    ...tail: readonly Container.Operator<C, TIn, TOut>[]
  ): Container.Operator<C, TIn, TOut>;

  /**
   * @category Constructor
   */
  fromEnumerable<T>(): Function1<EnumerableLike<T>, Container.Of<C, T>>;

  /**
   * @category Constructor
   */
  fromEnumeratorFactory<T>(
    factory: Factory<EnumeratorLike<T>>,
  ): Container.Of<C, T>;

  /**
   * @category Constructor
   */
  fromFactory<T>(factory: Factory<T>): Container.Of<C, T>;

  /**
   * @category Constructor
   */
  fromIterable<T>(): Function1<Iterable<T>, Container.Of<C, T>>;

  /**
   * @category Constructor
   */
  fromOptional<T>(): Function1<Optional<T>, Container.Of<C, T>>;

  /**
   * @category Constructor
   */
  fromReadonlyArray<T>(options?: {
    readonly start?: number;
    readonly count?: number;
  }): Function1<readonly T[], Container.Of<C, T>>;

  /**
   * @category Constructor
   */
  fromRunnable: <T>() => Function1<RunnableLike<T>, Container.Of<C, T>>;

  /**
   * Generates a Container from a generator function
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
  ): Container.Of<C, T>;

  /**
   * Returns a Container that mirrors the source, repeating it whenever the predicate returns true.
   *
   * @param predicate
   *
   * @category Operator
   */
  repeat<T>(predicate: Predicate<number>): Container.Operator<C, T, T>;
  /**
   * Returns a Container that mirrors the source, repeating it `count` times.
   *
   * @param count
   *
   * @category Operator
   */
  repeat<T>(count: number): Container.Operator<C, T, T>;

  /**
   * Returns a Container that mirrors the source, continually repeating it.
   *
   * @category Operator
   */
  repeat<T>(): Container.Operator<C, T, T>;

  /**
   * Returns an `ObservableLike` that mirrors the source, re-subscribing
   * if the source completes with an error.
   *
   * @category Operator
   */
  retry<T>(): Container.Operator<C, T, T>;

  /**
   * Returns an `ObservableLike` that mirrors the source, resubscrbing
   * if the source completes with an error which satisfies the predicate function.
   *
   * @param predicate
   *
   * @category Operator
   */
  retry<T>(
    predicate: Function2<number, unknown, boolean>,
  ): Container.Operator<C, T, T>;

  /**
   * @category Operator
   */
  startWith<T>(value: T, ...values: readonly T[]): Container.Operator<C, T, T>;
}

export interface RunnableTypeClass<C extends Container.Type> {
  /**
   * @category Transform
   */
  contains: <T>(
    value: T,
    options?: {
      readonly equality?: Equality<T>;
    },
  ) => Function1<Container.Of<C, T>, boolean>;

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
  ): Function1<Container.Of<C, T>, boolean>;

  /**
   *
   * @category Transform
   */
  first<T>(): Function1<Container.Of<C, T>, Optional<T>>;

  /**
   * @category Transform
   */
  flow<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<Container.Of<C, T>, PauseableObservableLike<T> & DisposableLike>;

  /**
   *
   * @category Transform
   */
  last<T>(): Function1<Container.Of<C, T>, Optional<T>>;

  /**
   * @category Transform
   */
  noneSatisfy<T>(
    predicate: Predicate<T>,
  ): Function1<Container.Of<C, T>, boolean>;

  /**
   * @category Transform
   */
  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<Container.Of<C, T>, TAcc>;

  /**
   * @category Transform
   */
  someSatisfy<T>(
    predicate: Predicate<T>,
  ): Function1<Container.Of<C, T>, boolean>;

  /**
   * Converts the Container to a `ReadonlyArrayContainer`.
   *
   * @category Transform
   */
  toReadonlyArray<T>(): Function1<Container.Of<C, T>, ReadonlyArray<T>>;

  /**
   * @category Transform
   */
  toRunnable: <T>() => Function1<Container.Of<C, T>, RunnableLike<T>>;
}

export interface StatefulTypeClass<C extends Container.Type> {
  /**
   * Returns a Container which catches errors produced by the source and either continues with
   * the Container returned from the `onError` callback or swallows the error if
   * void is returned.
   *
   * @param onError - A function that takes source error and either returns a Container
   * to continue with or void if the error should be propagated.
   *
   * @category Operator
   */
  catchError<T>(
    onError: Function1<unknown, Container.Of<C, T> | void>,
  ): Container.Operator<C, T, T>;

  /**
   * @category Operator
   */
  decodeWithCharset(options?: {
    charset?: string;
  }): Container.Operator<C, ArrayBuffer, string>;

  /**
   * @category Constructor
   */
  defer<T>(factory: Factory<Container.Of<C, T>>): Container.Of<C, T>;

  /**
   * @category Operator
   */
  encodeUtf8(): Container.Operator<C, string, Uint8Array>;

  /**
   * Returns a Container that emits an error if the source completes without emitting a value.
   *
   * @param factory - A factory function invoked to produce the error to be thrown.
   *
   * @category Operator
   */
  throwIfEmpty<T>(factory: Factory<unknown>): Container.Operator<C, T, T>;

  /**
   * @category Constructor
   */
  throws<T>(options?: { raise?: Factory<unknown> }): Container.Of<C, T>;
}

export interface EnumerableTypeClass<
  C extends Container.Type,
  CEnumerator extends EnumeratorContainer.Type = EnumeratorContainer.Type,
> {
  /**
   *
   * @category Transform
   */
  enumerate<T>(): Function1<Container.Of<C, T>, Container.Of<CEnumerator, T>>;

  /**
   * @category Transform
   */
  toEnumerable<T>(): Function1<Container.Of<C, T>, EnumerableLike<T>>;

  /**
   * Converts the Container to a `IterableLike`.
   *
   * @category Transform
   */
  toIterable<T>(): Function1<Container.Of<C, T>, Iterable<T>>;
}

export interface ObservableTypeClass<C extends ObservableContainer.Type>
  extends ContainerTypeClass<C>,
    StatefulTypeClass<C> {
  /**
   * @category Operator
   */
  backpressureStrategy<T>(
    capacity: number,
    backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
  ): Container.Operator<C, T, T>;

  /**
   * @category Constructor
   */
  combineLatest<TA, TB>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
  ): Container.Of<C, readonly [TA, TB]>;
  combineLatest<TA, TB, TC>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
  ): Container.Of<C, readonly [TA, TB, TC]>;
  combineLatest<TA, TB, TC, TD>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
  ): Container.Of<C, readonly [TA, TB, TC, TD]>;
  combineLatest<TA, TB, TC, TD, TE>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE]>;
  combineLatest<TA, TB, TC, TD, TE, TF>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
    h: Container.Of<C, TH>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
    h: Container.Of<C, TH>,
    i: Container.Of<C, TI>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  /**
   *
   * @category Operator
   */
  dispatchTo<T>(dispatcher: DispatcherLike<T>): Container.Operator<C, T, T>;

  /**
   *
   * @category Operator
   */
  enqueue<T>(queue: QueueableLike<T>): Container.Operator<C, T, T>;

  /**
   *
   * @category Operator
   */
  exhaust: <T>() => Container.Operator<C, Container.Of<C, T>, T>;

  /**
   * @category Operator
   */
  exhaustMap: <TA, TB>(
    selector: Function1<TA, Container.Of<C, TB>>,
  ) => Container.Operator<C, TA, TB>;

  /**
   *
   * @category Transform
   */
  firstAsync<T>(): Function1<Container.Of<C, T>, PromiseLike<Optional<T>>>;
  firstAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      capacity?: number;
      backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<Container.Of<C, T>, PromiseLike<Optional<T>>>;

  /**
   * @category Operator
   */
  forkCombineLatest<T, TA, TB>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
  ): Container.Operator<C, T, readonly [TA, TB]>;
  forkCombineLatest<T, TA, TB, TC>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
  ): Container.Operator<C, T, readonly [TA, TB, TC]>;
  forkCombineLatest<T, TA, TB, TC, TD>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD]>;
  forkCombineLatest<T, TA, TB, TC, TD, TE>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE]>;
  forkCombineLatest<T, TA, TB, TC, TD, TE, TF>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
  forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
    g: Container.Operator<C, T, TG>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
    g: Container.Operator<C, T, TG>,
    h: Container.Operator<C, T, TH>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
    g: Container.Operator<C, T, TG>,
    h: Container.Operator<C, T, TH>,
    i: Container.Operator<C, T, TI>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  /**
   * @category Operator
   */
  forkMerge<TIn, TOut>(
    fst: Container.Operator<C, TIn, TOut>,
    snd: Container.Operator<C, TIn, TOut>,
    ...tail: readonly Container.Operator<C, TIn, TOut>[]
  ): Container.Operator<C, TIn, TOut>;

  /**
   * @category Operator
   */
  forkZipLatest<T, TA, TB>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
  ): Container.Operator<C, T, readonly [TA, TB]>;
  forkZipLatest<T, TA, TB, TC>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
  ): Container.Operator<C, T, readonly [TA, TB, TC]>;
  forkZipLatest<T, TA, TB, TC, TD>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD]>;
  forkZipLatest<T, TA, TB, TC, TD, TE>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE]>;
  forkZipLatest<T, TA, TB, TC, TD, TE, TF>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
  forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
    g: Container.Operator<C, T, TG>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
    g: Container.Operator<C, T, TG>,
    h: Container.Operator<C, T, TH>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: Container.Operator<C, T, TA>,
    b: Container.Operator<C, T, TB>,
    c: Container.Operator<C, T, TC>,
    d: Container.Operator<C, T, TD>,
    e: Container.Operator<C, T, TE>,
    f: Container.Operator<C, T, TF>,
    g: Container.Operator<C, T, TG>,
    h: Container.Operator<C, T, TH>,
    i: Container.Operator<C, T, TI>,
  ): Container.Operator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  /**
   *
   * @category Transform
   */
  lastAsync<T>(): Function1<Container.Of<C, T>, PromiseLike<Optional<T>>>;
  lastAsync<T>(
    scheduler: SchedulerLike,
    options?: {
      capacity?: number;
      backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<Container.Of<C, T>, PromiseLike<Optional<T>>>;

  /**
   *
   * @category Constructor
   */
  merge<T>(
    fst: Container.Of<C, T>,
    snd: Container.Of<C, T>,
    ...tail: readonly Container.Of<C, T>[]
  ): Container.Of<C, T>;

  /**
   *
   * @category Operator
   */
  mergeAll: <T>(options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
  }) => Container.Operator<C, Container.Of<C, T>, T>;

  /**
   * @category Operator
   */
  mergeMap: <TA, TB>(
    selector: Function1<TA, Container.Of<C, TB>>,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
      readonly concurrency?: number;
    },
  ) => Container.Operator<C, TA, TB>;

  /**
   * @category Operator
   */
  mergeWith: <T>(
    snd: Container.Of<C, T>,
    ...tail: readonly Container.Of<C, T>[]
  ) => Container.Operator<C, T, T>;

  /**
   * Returns a Container instance that emits no items and never disposes its state.
   *
   * @category Constructor
   */
  never<T>(): Container.Of<C, T>;

  /**
   * @category Operator
   */
  scanMany: <T, TAcc>(
    scanner: Function2<TAcc, T, Container.Of<C, TAcc>>,
    initialValue: Factory<TAcc>,
  ) => Container.Operator<C, T, TAcc>;

  /**
   *
   * @category Operator
   */
  switchAll: <T>() => Container.Operator<C, Container.Of<C, T>, T>;

  /**
   * @category Operator
   */
  switchMap: <TA, TB>(
    selector: Function1<TA, Container.Of<C, TB>>,
  ) => Container.Operator<C, TA, TB>;

  /**
   * @category Operator
   */
  takeUntil<T>(notifier: Container.Of<C, unknown>): Container.Operator<C, T, T>;

  /**
   * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
   *
   * @param duration - Function function that is used to determine the silence duration in between emitted values.
   * @param mode - The throttle mode.
   *
   * @category Operator
   */
  throttle<T>(
    duration: Function1<T, Container.Of<C, unknown>>,
    options?: { readonly mode?: "first" | "last" | "interval" },
  ): Container.Operator<C, T, T>;

  /**
   * Returns an `ObservableLike` which emits a value from the source,
   * then ignores subsequent source values for `duration` milliseconds.
   *
   * @param duration - Time to wait before emitting another value after
   * emitting the last value, measured in milliseconds.
   * @param mode - The throttle mode.
   *
   * @category Operator
   */
  throttle<T>(
    duration: number,
    options?: { readonly mode?: "first" | "last" | "interval" },
  ): Container.Operator<C, T, T>;

  /**
   * Returns an `ObservableLike` that completes with an error if the source
   * does not emit a value in given time span.
   *
   * @param duration - Time in ms within which the source must emit values.
   *
   * @category Operator
   */
  timeout<T>(duration: number): Container.Operator<C, T, T>;

  /**
   *
   * @param duration
   *
   * @category Operator
   */
  timeout<T>(duration: Container.Of<C, unknown>): Container.Operator<C, T, T>;

  /**
   * @category Operator
   */
  withCurrentTime<T, TOut>(
    selector: Function2<number, T, TOut>,
  ): Container.Operator<C, T, TOut>;

  /**
   * @category Operator
   */
  withLatestFrom<TA, TB, T>(
    other: Container.Of<C, TB>,
    selector: Function2<TA, TB, T>,
  ): Container.Operator<C, TA, T>;

  /**
   * Returns a container that zips the latest values from
   * multiple sources.
   *
   * @category Constructor
   */
  zipLatest<TA, TB>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
  ): Container.Of<C, readonly [TA, TB]>;
  zipLatest<TA, TB, TC>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
  ): Container.Of<C, readonly [TA, TB, TC]>;
  zipLatest<TA, TB, TC, TD>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
  ): Container.Of<C, readonly [TA, TB, TC, TD]>;
  zipLatest<TA, TB, TC, TD, TE>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE]>;
  zipLatest<TA, TB, TC, TD, TE, TF>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
    h: Container.Of<C, TH>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: Container.Of<C, TA>,
    b: Container.Of<C, TB>,
    c: Container.Of<C, TC>,
    d: Container.Of<C, TD>,
    e: Container.Of<C, TE>,
    f: Container.Of<C, TF>,
    g: Container.Of<C, TG>,
    h: Container.Of<C, TH>,
    i: Container.Of<C, TI>,
  ): Container.Of<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

  /**
   * @category Operator
   */
  zipWithLatestFrom<TA, TB, T>(
    other: Container.Of<C, TB>,
    selector: Function2<TA, TB, T>,
  ): Container.Operator<C, TA, T>;
}

export interface DeferredObservableTypeClass<
  C extends DeferredObservableContainer.Type,
> extends ObservableTypeClass<C>,
    DeferredTypeClass<C> {
  /**
   * @category Constructor
   */
  empty<T>(options?: { delay?: number }): Container.Of<C, T>;

  /**
   * @category Constructor
   */
  fromEnumeratorFactory<T>(
    factory: Factory<EnumeratorLike<T>>,
    options?: {
      readonly delay?: number;
      readonly delayStart?: boolean;
    },
  ): Container.Of<C, T>;

  /**
   * @category Constructor
   */
  fromFactory<T>(
    factory: Factory<T>,
    options?: {
      readonly delay?: number;
    },
  ): Container.Of<C, T>;

  /**
   * @category Constructor
   */
  fromIterable<T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }): Function1<Iterable<T>, Container.Of<C, T>>;

  /**
   * @category Constructor
   */
  fromOptional<T>(options?: {
    readonly delay?: number;
  }): Function1<Optional<T>, Container.Of<C, T>>;

  /**
   * @category Constructor
   */
  fromReadonlyArray<T>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }): Function1<readonly T[], Container.Of<C, T>>;

  /**
   * @category Constructor
   */
  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
    options?: {
      readonly delay?: number;
      readonly delayStart?: boolean;
    },
  ): Container.Of<C, T>;

  /**
   * Returns a `MulticastObservableLike` backed by a single subscription to the source.
   *
   * @param scheduler - A `SchedulerLike` that is used to subscribe to the source observable.
   *
   * @category Transform
   */
  multicast<T>(
    scheduler: SchedulerLike,
    options?: {
      /**
       * The number of items to buffer for replay when an observer subscribes
       * to the stream.
       */
      readonly replay?: number;
      /**
       * The capacity of the stream's request queue.
       */
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<Container.Of<C, T>, MulticastObservableLike<T> & DisposableLike>;

  /**
   * Returns an `ObservableLike` backed by a shared refcounted subscription to the
   * source. When the refcount goes to 0, the underlying subscription
   * to the source is disposed.
   *
   * @param scheduler - A `SchedulerLike` that is used to subscribe to the source.
   *
   * @category Transform
   */
  share<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<Container.Of<C, T>, SharedObservableLike<T>>;
}

export interface RunnableObservableTypeClass<C extends RunnableContainer.Type>
  extends DeferredObservableTypeClass<C>,
    RunnableTypeClass<C> {}

export interface EnumerableObservableTypeClass<
  C extends EnumerableContainer.Type,
> extends RunnableObservableTypeClass<C> {}
