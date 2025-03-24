import {
  CollectionModule,
  CollectionOf,
  CollectionType,
  Collection_T,
  Collection_type,
  KeyOf,
} from "../collections.js";
import { Function1, Tuple2 } from "../functions.js";
import ReadonlyArray_empty from "./ReadonlyArray/__private__/ReadonlyArray.empty.js";
import ReadonlyArray_entries from "./ReadonlyArray/__private__/ReadonlyArray.entries.js";
import ReadonlyArray_forEach from "./ReadonlyArray/__private__/ReadonlyArray.forEach.js";
import ReadonlyArray_fromIterable from "./ReadonlyArray/__private__/ReadonlyArray.fromIterable.js";
import ReadonlyArray_keep from "./ReadonlyArray/__private__/ReadonlyArray.keep.js";
import ReadonlyArray_keys from "./ReadonlyArray/__private__/ReadonlyArray.keys.js";
import ReadonlyArray_map from "./ReadonlyArray/__private__/ReadonlyArray.map.js";
import ReadonlyArray_reduce from "./ReadonlyArray/__private__/ReadonlyArray.reduce.js";
import ReadonlyArray_slice from "./ReadonlyArray/__private__/ReadonlyArray.slice.js";
import ReadonlyArray_toDictionary from "./ReadonlyArray/__private__/ReadonlyArray.toDictionary.js";
import ReadonlyArray_toReadonlyMap from "./ReadonlyArray/__private__/ReadonlyArray.toReadonlyMap.js";

/**
 * @noInheritDoc
 */
export interface ReadonlyArrayCollection extends CollectionType<number> {
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
    Iterable<Tuple2<TKey, T>>
  >;

  fromIterable<T>(): Function1<Iterable<T>, ReadonlyArray<T>>;

  /**
   *
   */
  values<
    T,
    TKey extends
      KeyOf<ReadonlyArrayCollection> = KeyOf<ReadonlyArrayCollection>,
  >(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<CollectionOf<ReadonlyArrayCollection, T, TKey>, Iterable<T>>;

  slice<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<CollectionOf<ReadonlyArrayCollection, T>, ReadonlyArray<T>>;
}

export type Signature = ReadonlyArrayModule;

export type Collection = ReadonlyArrayCollection;

export const empty: Signature["empty"] = ReadonlyArray_empty;
export const entries: Signature["entries"] = ReadonlyArray_entries;
export const forEach: Signature["forEach"] = ReadonlyArray_forEach;
export const fromIterable: Signature["fromIterable"] =
  ReadonlyArray_fromIterable;
export const keep: Signature["keep"] = ReadonlyArray_keep;
export const keys: Signature["keys"] = ReadonlyArray_keys;
export const map: Signature["map"] = ReadonlyArray_map;
export const reduce: Signature["reduce"] = ReadonlyArray_reduce;
export const slice: Signature["slice"] = ReadonlyArray_slice;
export const toDictionary: Signature["toDictionary"] =
  ReadonlyArray_toDictionary;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  ReadonlyArray_toReadonlyMap;
export const values: Signature["values"] = ReadonlyArray_slice;
