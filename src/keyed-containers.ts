import { KeyedContainerLike_TKey } from "./__internal__/symbols.js";
import {
  Container,
  ContainerLike,
  ContainerLike_T,
  ContainerLike_type,
  EnumeratorLike,
  ReadonlySetLike,
} from "./containers.js";

import {
  Function1,
  Function2,
  Predicate,
  SideEffect1,
  SideEffect2,
  TypePredicate,
} from "./functions.js";

export { KeyedContainerLike_TKey };

/**
 * Base type for all Containers.
 *
 * @noInheritDoc
 * @category Container
 */
export interface KeyedContainerLike extends ContainerLike {
  readonly [KeyedContainerLike_TKey]?: unknown;
}

/**
 * A compile time only type for using a Javascript `ReadonlyArray` as a `ContainerLike`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyArrayLike<T = unknown>
  extends KeyedContainerLike,
    ReadonlyArray<T> {
  readonly [ContainerLike_type]?: ReadonlyArrayLike<
    this[typeof ContainerLike_T]
  >;

  readonly [KeyedContainerLike_TKey]?: number;
}

export interface ReadonlyMapLike<TKey = unknown, T = unknown>
  extends ContainerLike,
    ReadonlyMap<TKey, T> {
  readonly [ContainerLike_type]?: ReadonlyMap<
    this[typeof KeyedContainerLike_TKey],
    this[typeof ContainerLike_T]
  >;

  readonly [KeyedContainerLike_TKey]?: unknown;
}

interface ReadonlyRecord extends ContainerLike {
  readonly [ContainerLike_type]?: ReadonlyRecordLike<
    NonNullable<this[typeof KeyedContainerLike_TKey]>,
    this[typeof ContainerLike_T]
  >;

  readonly [KeyedContainerLike_TKey]?: symbol | number | string;
}

export type ReadonlyRecordLike<
  TKey extends symbol | number | string = symbol | number | string,
  T = unknown,
> = Readonly<Record<TKey, T>> & ReadonlyRecord;

/**
 * Utility type for higher order programming with keyed-containers.
 */
export type KeyedContainerOf<C extends ContainerLike, TKey, T> = C extends {
  readonly [ContainerLike_type]?: unknown;
}
  ? NonNullable<
      (C & {
        readonly [ContainerLike_T]: T;
        readonly [KeyedContainerLike_TKey]: TKey;
      })[typeof ContainerLike_type]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
      readonly _TKey: () => TKey;
    };

/**
 * Utility type for a generic operator function that transforms a Container's inner value type.
 */
export type KeyedContainerOperator<
  C extends KeyedContainerLike,
  TKey,
  TA,
  TB,
> = Function1<KeyedContainerOf<C, TKey, TA>, KeyedContainerOf<C, TKey, TB>>;

export type KeyOf<C extends KeyedContainerLike> = C extends {
  readonly [ContainerLike_type]?: unknown;
}
  ? NonNullable<C[typeof KeyedContainerLike_TKey]>
  : // eslint-disable-next-line @typescript-eslint/ban-types
    {};

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Empty<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   * Return an ContainerLike that emits no items.
   *
   * @category Constructor
   */
  empty<T, TKey extends KeyOf<C> = KeyOf<C>>(
    options?: O,
  ): KeyedContainerOf<C, TKey, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Entries<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   *
   * @category Transform
   */
  entries<T, TKey extends KeyOf<C> = KeyOf<C>>(
    options?: O,
  ): Function1<KeyedContainerOf<C, TKey, T>, EnumeratorLike<[TKey, T]>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForEach<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   * Returns a ContainerOperator that applies the side effect function to each
   * value emitted by the source.
   *
   * @category Operator
   */
  forEach<T, TKey extends KeyOf<C> = KeyOf<C>>(
    effect: SideEffect1<T>,
    options?: O,
  ): KeyedContainerOperator<C, TKey, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForEachWithKey<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   * Returns a KeyedContainerOperator that applies the side effect function to each
   * value emitted by the source.
   *
   * @category Operator
   */
  forEachWithKey<T, TKey extends KeyOf<C> = KeyOf<C>>(
    effect: SideEffect2<T, TKey>,
    options?: O,
  ): KeyedContainerOperator<C, TKey, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromEntries<C extends KeyedContainerLike, O = unknown>
  extends Container<C> {
  /**
   * @category Constructor
   */
  fromEntries<T, TKey extends KeyOf<C> = KeyOf<C>>(
    options?: O,
  ): Function1<EnumeratorLike<[TKey, T]>, KeyedContainerOf<C, TKey, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromReadonlyArray<C extends KeyedContainerLike, O = unknown>
  extends Container<C> {
  /**
   * @category Constructor
   */
  fromReadonlyArray<
    T,
    TKey extends KeyOf<ReadonlyArrayLike> = KeyOf<ReadonlyArrayLike>,
  >(
    options?: O & {
      readonly start?: number;
      readonly count?: number;
    },
  ): Function1<readonly T[], KeyedContainerOf<C, TKey, T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Identity<C extends KeyedContainerLike> extends Container<C> {
  /**
   * @category Operator
   */
  identity<T, TKey extends KeyOf<C> = KeyOf<C>>(): KeyedContainerOperator<
    C,
    TKey,
    T,
    T
  >;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Keep<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   * Returns a ContainerOperator that only emits items produced by the
   * source that satisfy the specified predicate.
   *
   * @category Operator
   */
  keep<T, TKey extends KeyOf<C> = KeyOf<C>>(
    predicate: Predicate<T>,
    options?: O,
  ): KeyedContainerOperator<C, TKey, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface KeepType<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   *
   * @category Operator
   */
  keepType<TA, TB extends TA, TKey extends KeyOf<C> = KeyOf<C>>(
    predicate: TypePredicate<TA, TB>,
    options?: O,
  ): KeyedContainerOperator<C, TKey, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface KeepWithKey<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   * Returns a ContainerOperator that only emits items produced by the
   * source that satisfy the specified predicate.
   *
   * @category Operator
   */
  keepWithKey<T, TKey extends KeyOf<C> = KeyOf<C>>(
    predicate: Function2<T, TKey, boolean>,
    options?: O,
  ): KeyedContainerOperator<C, TKey, T, T>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Keys<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   *
   * @category Transform
   */
  keys<TKey extends KeyOf<C> = KeyOf<C>>(
    options?: O,
  ): Function1<KeyedContainerOf<C, TKey, unknown>, EnumeratorLike<TKey>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface KeySet<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   *
   * @category Transform
   */
  keySet<TKey extends KeyOf<C> = KeyOf<C>>(
    options?: O,
  ): Function1<KeyedContainerOf<C, TKey, unknown>, ReadonlySetLike<TKey>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Map<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   * Returns a ContainerOperator that applies the `mapper` function to each
   * value emitted by the source.
   *
   * @param mapper - A pure map function that is applied each value emitted by the source
   * @typeparam TA - The inner type of the source container
   * @typeparam TB - The inner type of the mapped container
   *
   * @category Operator
   */
  map<TA, TB, TKey extends KeyOf<C> = KeyOf<C>>(
    mapper: Function1<TA, TB>,
    options?: O,
  ): KeyedContainerOperator<C, TKey, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface MapWithKey<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   * Returns a ContainerOperator that applies the `mapper` function to each
   * value emitted by the source.
   *
   * @param mapper - A pure map function that is applied each value emitted by the source
   * @typeparam TA - The inner type of the source container
   * @typeparam TB - The inner type of the mapped container
   *
   * @category Operator
   */
  mapWithKey<TA, TB, TKey extends KeyOf<C> = KeyOf<C>>(
    mapper: Function2<TA, TKey, TB>,
    options?: O,
  ): KeyedContainerOperator<C, TKey, TA, TB>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToReadonlyArray<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   * Converts the ContainerLike to a `ReadonlyArrayLike`.
   *
   * @category Transform
   */
  toReadonlyArray<T, TKey extends KeyOf<C> = KeyOf<C>>(
    options?: O,
  ): Function1<KeyedContainerOf<C, TKey, T>, ReadonlyArrayLike<T>>;
}

/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Values<C extends KeyedContainerLike, O = never>
  extends Container<C> {
  /**
   *
   * @category Transform
   */
  values<T>(
    options?: O,
  ): Function1<KeyedContainerOf<C, unknown, T>, EnumeratorLike<T>>;
}
