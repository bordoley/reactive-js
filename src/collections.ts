import { Set } from "./__internal__/constants.js";
import {
  type Factory,
  type Function1,
  type Function2,
  type Function3,
  type Optional,
  type SideEffect1,
  type SideEffect2,
  type Tuple2,
  newInstance,
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
export type ReadonlyObjectMapLike<TKey extends string = string, T = unknown> = {
  readonly [P in TKey]?: T;
};

export const DictionaryLike_get = Symbol("DictionaryLike_get");
export const DictionaryLike_keys = Symbol("DictionaryLike_keys");

/**
 * @noInheritDoc
 */
export interface DictionaryLike<TKey = unknown, T = unknown> {
  readonly [DictionaryLike_keys]: EnumerableLike<TKey>;

  [DictionaryLike_get](index: TKey): Optional<T>;
}

export const Collection_T = Symbol("Collection_T");
export const Collection_type = Symbol("Collection_type");
export const Collection_TKey = Symbol("Collection_TKey");

/**
 * @noInheritDoc
 */
export interface Collection<TKey = unknown> {
  readonly [Collection_T]?: unknown;
  readonly [Collection_type]?: unknown;
  readonly [Collection_TKey]?: TKey;
}

/**
 */
export type KeyOf<C extends Collection> = NonNullable<
  C[typeof Collection_TKey]
>;

/**
 */
export type CollectionOf<
  C extends Collection,
  T,
  TKey extends KeyOf<C> = KeyOf<C>,
> = C extends {
  readonly [Collection_type]?: unknown;
}
  ? NonNullable<
      (C & {
        readonly [Collection_T]: T;
        readonly [Collection_TKey]: TKey;
      })[typeof Collection_type]
    >
  : {
      readonly _C: C;
      readonly _T: () => T;
      readonly _TKey: () => TKey;
    };

/**
 * Utility type for a generic operator function that transforms a Collection's inner value type.
 */
export type CollectionOperator<
  C extends Collection,
  TA,
  TB,
  TKey extends KeyOf<C> = KeyOf<C>,
> = Function1<CollectionOf<C, TA, TKey>, CollectionOf<C, TB, TKey>>;

/**
 * @noInheritDoc
 */
export interface CollectionModule<C extends Collection> {
  /**
   * Return an Collection that emits no items.
   *
   */
  empty<T, TKey extends KeyOf<C> = KeyOf<C>>(): CollectionOf<C, T, TKey>;

  /**
   */
  entries<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<
    CollectionOf<C, T, TKey>,
    EnumerableLike<Tuple2<TKey, T>>
  >;

  forEach<T, TKey extends KeyOf<C> = KeyOf<C>>(
    selector: SideEffect2<T, TKey>,
  ): SideEffect1<CollectionOf<C, T, TKey>>;

  keep<T, TKey extends KeyOf<C> = KeyOf<C>>(
    predicate: Function2<T, TKey, boolean>,
  ): CollectionOperator<C, T, T, TKey>;

  /**
   *
   */
  keys<TKey extends KeyOf<C>>(): Function1<
    CollectionOf<C, unknown, TKey>,
    EnumerableLike<TKey>
  >;

  /**
   * Returns a CollectionOperator that applies the `selector` function to each
   * value emitted by the source.
   *
   * @param selector - A pure map function that is applied each value emitted by the source
   * @typeparam TA - The inner type of the source container
   * @typeparam TB - The inner type of the mapped container
   *
   */
  map<TA, TB, TKey extends KeyOf<C> = KeyOf<C>>(
    selector: Function2<TA, TKey, TB>,
  ): CollectionOperator<C, TA, TB, TKey>;

  /**
   */
  reduce<T, TAcc, TKey extends KeyOf<C> = KeyOf<C>>(
    reducer: Function3<TAcc, T, TKey, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<CollectionOf<C, T, TKey>, TAcc>;

  /**
   *
   */
  toDictionary<T, TKey extends KeyOf<C>>(): Function1<
    CollectionOf<C, T, TKey>,
    DictionaryLike<TKey, T>
  >;

  /**
   *
   */
  toReadonlyMap<T, TKey extends KeyOf<C>>(): Function1<
    CollectionOf<C, T, TKey>,
    ReadonlyMap<TKey, T>
  >;

  /**
   *
   */
  values<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<
    CollectionOf<C, T, TKey>,
    EnumerableLike<T>
  >;
}

/**
 * @noInheritDoc
 */
export interface DictionaryCollectionModule<C extends Collection>
  extends CollectionModule<C> {
  fromEntries<T, TKey extends KeyOf<C>>(): Function1<
    EnumerableLike<Tuple2<TKey, T>>,
    CollectionOf<C, T, TKey>
  >;

  union<TKey extends string | symbol, T>(
    m2: CollectionOf<C, T, TKey>,
  ): Function1<CollectionOf<C, T, TKey>, CollectionOf<C, T, TKey>>;
}

export const keySet =
  <C extends Collection>(keys: CollectionModule<C>["keys"]) =>
  <TKey extends KeyOf<C> = KeyOf<C>>(
    collection: CollectionOf<C, unknown, TKey>,
  ): ReadonlySet<TKey> =>
    newInstance(Set<TKey>, keys<TKey>()(collection));
