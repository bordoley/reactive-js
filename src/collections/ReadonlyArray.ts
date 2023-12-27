import {
  EnumerableLike,
  KeyOf,
  KeyedCollection,
  KeyedCollectionModule,
  KeyedCollectionOf,
  KeyedCollection_T,
  KeyedCollection_type,
} from "../collections.js";
import { Function1, Tuple2 } from "../functions.js";
import Enumerable_fromReadonlyArray from "./Enumerable/__private__/Enumerable.fromReadonlyArray.js";
import ReadonlyArray_empty from "./ReadonlyArray/__private__/ReadonlyArray.empty.js";
import ReadonlyArray_entries from "./ReadonlyArray/__private__/ReadonlyArray.entries.js";
import ReadonlyArray_forEach from "./ReadonlyArray/__private__/ReadonlyArray.forEach.js";
import ReadonlyArray_keep from "./ReadonlyArray/__private__/ReadonlyArray.keep.js";
import ReadonlyArray_keySet from "./ReadonlyArray/__private__/ReadonlyArray.keySet.js";
import ReadonlyArray_keys from "./ReadonlyArray/__private__/ReadonlyArray.keys.js";
import ReadonlyArray_map from "./ReadonlyArray/__private__/ReadonlyArray.map.js";
import ReadonlyArray_reduce from "./ReadonlyArray/__private__/ReadonlyArray.reduce.js";
import ReadonlyArray_toDictionary from "./ReadonlyArray/__private__/ReadonlyArray.toDictionary.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__private__/ReadonlyArray.toReadonlyArray.js";
import ReadonlyArray_toReadonlyMap from "./ReadonlyArray/__private__/ReadonlyArray.toReadonlyMap.js";

/**
 * @noInheritDoc
 */
export interface ReadonlyArrayCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: ReadonlyArray<
    this[typeof KeyedCollection_T]
  >;
}

export type TKeyBase = KeyOf<ReadonlyArrayCollection>;

/**
 * @noInheritDoc
 */
export interface ReadonlyArrayModule
  extends KeyedCollectionModule<ReadonlyArrayCollection> {
  /**
   */
  entries<T, TKey extends number = number>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<
    KeyedCollectionOf<ReadonlyArrayCollection, T, TKey>,
    EnumerableLike<Tuple2<TKey, T>>
  >;

  /**
   *
   */
  values<
    T,
    TKey extends KeyOf<ReadonlyArrayCollection> = KeyOf<ReadonlyArrayCollection>,
  >(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<
    KeyedCollectionOf<ReadonlyArrayCollection, T, TKey>,
    EnumerableLike<T>
  >;

  toReadonlyArray<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<
    KeyedCollectionOf<ReadonlyArrayCollection, T>,
    ReadonlyArray<T>
  >;
}

export type Signature = ReadonlyArrayModule;

export const empty: Signature["empty"] = ReadonlyArray_empty;
export const entries: Signature["entries"] = ReadonlyArray_entries;
export const forEach: Signature["forEach"] = ReadonlyArray_forEach;
export const keep: Signature["keep"] = ReadonlyArray_keep;
export const keys: Signature["keys"] = ReadonlyArray_keys;
export const keySet: Signature["keySet"] = ReadonlyArray_keySet;
export const map: Signature["map"] = ReadonlyArray_map;
export const reduce: Signature["reduce"] = ReadonlyArray_reduce;
export const toDictionary: Signature["toDictionary"] =
  ReadonlyArray_toDictionary;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  ReadonlyArray_toReadonlyMap;
export const values: Signature["values"] = Enumerable_fromReadonlyArray;
