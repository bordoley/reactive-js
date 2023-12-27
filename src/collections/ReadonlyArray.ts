import {
  Collection,
  CollectionModule,
  CollectionOf,
  Collection_T,
  Collection_type,
  EnumerableLike,
  KeyOf,
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
import ReadonlyArray_slice from "./ReadonlyArray/__private__/ReadonlyArray.slice.js";
import ReadonlyArray_toDictionary from "./ReadonlyArray/__private__/ReadonlyArray.toDictionary.js";
import ReadonlyArray_toReadonlyMap from "./ReadonlyArray/__private__/ReadonlyArray.toReadonlyMap.js";

/**
 * @noInheritDoc
 */
export interface ReadonlyArrayCollection extends Collection<number> {
  readonly [Collection_type]?: ReadonlyArray<this[typeof Collection_T]>;
}

export type TKeyBase = KeyOf<ReadonlyArrayCollection>;

/**
 * @noInheritDoc
 */
export interface ReadonlyArrayModule
  extends CollectionModule<ReadonlyArrayCollection> {
  /**
   */
  entries<T, TKey extends number = number>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<
    CollectionOf<ReadonlyArrayCollection, T, TKey>,
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
    CollectionOf<ReadonlyArrayCollection, T, TKey>,
    EnumerableLike<T>
  >;

  slice<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<CollectionOf<ReadonlyArrayCollection, T>, ReadonlyArray<T>>;
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
export const slice: Signature["slice"] = ReadonlyArray_slice;
export const toDictionary: Signature["toDictionary"] =
  ReadonlyArray_toDictionary;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  ReadonlyArray_toReadonlyMap;
export const values: Signature["values"] = Enumerable_fromReadonlyArray;
