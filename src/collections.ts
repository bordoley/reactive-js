import type {
  Factory,
  Function1,
  Function2,
  Function3,
  Optional,
  SideEffect1,
  SideEffect2,
  Tuple2,
} from "./functions.js";

export const EnumeratorLike_current = Symbol("EnumeratorLike_current");
export const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");
export const EnumeratorLike_isCompleted = Symbol("EnumeratorLike_isCompleted");
export const EnumeratorLike_move = Symbol("EnumeratorLike_move");

/**
 * An interactive mutable enumerator that can be used to iterate
 * over an underlying source of data.
 *
 * @noInheritDoc
 */
export interface EnumeratorLike<T = unknown> {
  /**
   * Indicates if the `EnumeratorLike` is completed.
   */
  readonly [EnumeratorLike_isCompleted]: boolean;

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

export const EnumerableLike_enumerate = Symbol("EnumerableLike_enumerate");

/**
 * @noInheritDoc
 */
export interface EnumerableLike<T = unknown> extends Iterable<T> {
  [EnumerableLike_enumerate](): EnumeratorLike<T>;
}

/**
 * @noInheritDoc
 */
export type ReadonlyObjectMapLike<
  TKey extends symbol | string = string,
  T = unknown,
> = { readonly [P in TKey]?: T };

export const CollectionLike_count = Symbol("CollectionLike_count");

/**
 * @noInheritDoc
 */
export interface CollectionLike<T> extends EnumerableLike<T> {
  readonly [CollectionLike_count]: number;
}

export const KeyedLike_get = Symbol("KeyedLike_get");

/**
 * @noInheritDoc
 */
export interface KeyedLike<TKey = unknown, T = unknown>
  extends CollectionLike<T> {
  [KeyedLike_get](index: TKey): T;
}

export const AssociativeLike_keys = Symbol("AssociativeLike_keys");

/**
 * @noInheritDoc
 */
export interface AssociativeLike<TKey = unknown, T = unknown>
  extends KeyedLike<TKey, T> {
  readonly [AssociativeLike_keys]: EnumerableLike<TKey>;
}

/**
 * @noInheritDoc
 */
export interface DictionaryLike<TKey = unknown, T = unknown>
  extends AssociativeLike<TKey, Optional<T>> {
  [EnumerableLike_enumerate](): EnumeratorLike<T>;
  [Symbol.iterator](): Iterator<T>;
}

export const KeyedCollection_T = Symbol("KeyedCollection_T");
export const KeyedCollection_type = Symbol("KeyedCollection_type");
export const KeyedCollection_TKey = Symbol("KeyedCollection_TKey");

/**
 * @noInheritDoc
 */
export interface KeyedCollection<TKey = unknown> {
  readonly [KeyedCollection_T]?: unknown;
  readonly [KeyedCollection_type]?: unknown;
  readonly [KeyedCollection_TKey]?: TKey;
}

/**
 */
export type KeyOf<C extends KeyedCollection> = NonNullable<
  C[typeof KeyedCollection_TKey]
>;

/**
 */
export type KeyedCollectionOf<
  C extends KeyedCollection,
  T,
  TKey extends KeyOf<C> = KeyOf<C>,
> = C extends {
  readonly [KeyedCollection_type]?: unknown;
}
  ? NonNullable<
      (C & {
        readonly [KeyedCollection_T]: T;
        readonly [KeyedCollection_TKey]: TKey;
      })[typeof KeyedCollection_type]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
      readonly _TKey: () => TKey;
    };

/**
 * Utility type for a generic operator function that transforms a Collection's inner value type.
 */
export type KeyedCollectionOperator<
  C extends KeyedCollection,
  TA,
  TB,
  TKey extends KeyOf<C> = KeyOf<C>,
> = Function1<KeyedCollectionOf<C, TA, TKey>, KeyedCollectionOf<C, TB, TKey>>;

/**
 * @noInheritDoc
 */
export interface KeyedCollectionModule<C extends KeyedCollection> {
  /**
   * Return an Collection that emits no items.
   *
   */
  empty<T, TKey extends KeyOf<C> = KeyOf<C>>(): KeyedCollectionOf<C, T, TKey>;

  /**
   */
  entries<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<
    KeyedCollectionOf<C, T, TKey>,
    EnumerableLike<Tuple2<TKey, T>>
  >;

  forEach<T, TKey extends KeyOf<C> = KeyOf<C>>(
    selector: SideEffect2<T, TKey>,
  ): SideEffect1<KeyedCollectionOf<C, T, TKey>>;

  keep<T, TKey extends KeyOf<C> = KeyOf<C>>(
    predicate: Function2<T, TKey, boolean>,
  ): KeyedCollectionOperator<C, T, T, TKey>;

  /**
   *
   */
  keys<TKey extends KeyOf<C>>(): Function1<
    KeyedCollectionOf<C, unknown, TKey>,
    EnumerableLike<TKey>
  >;

  /**
   *
   */
  keySet<TKey extends KeyOf<C>>(): Function1<
    KeyedCollectionOf<C, unknown, TKey>,
    ReadonlySet<TKey>
  >;

  /**
   * Returns a KeyedCollectionOperator that applies the `selector` function to each
   * value emitted by the source.
   *
   * @param selector - A pure map function that is applied each value emitted by the source
   * @typeparam TA - The inner type of the source container
   * @typeparam TB - The inner type of the mapped container
   *
   */
  map<TA, TB, TKey extends KeyOf<C> = KeyOf<C>>(
    selector: Function2<TA, TKey, TB>,
  ): KeyedCollectionOperator<C, TA, TB, TKey>;

  /**
   */
  reduce<T, TAcc, TKey extends KeyOf<C> = KeyOf<C>>(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<KeyedCollectionOf<C, T, TKey>, TAcc>;

  /**
   *
   */
  toDictionary<T, TKey extends KeyOf<C>>(): Function1<
    KeyedCollectionOf<C, T, TKey>,
    DictionaryLike<TKey, T>
  >;

  /**
   *
   */
  toReadonlyMap<T, TKey extends KeyOf<C>>(): Function1<
    KeyedCollectionOf<C, T, TKey>,
    ReadonlyMap<TKey, T>
  >;

  /**
   *
   */
  values<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<
    KeyedCollectionOf<C, T, TKey>,
    EnumerableLike<T>
  >;
}

/**
 * @noInheritDoc
 */
export interface DictionaryCollectionModule<C extends KeyedCollection>
  extends KeyedCollectionModule<C> {
  fromEntries<T, TKey extends KeyOf<C>>(): Function1<
    EnumerableLike<Tuple2<TKey, T>>,
    KeyedCollectionOf<C, T, TKey>
  >;

  union<TKey extends string | symbol, T>(
    m2: KeyedCollectionOf<C, T, TKey>,
  ): Function1<KeyedCollectionOf<C, T, TKey>, KeyedCollectionOf<C, T, TKey>>;
}
