import ReadonlyMap_toReadonlyObjectMap from "./ReadonlyMap/__internal__/ReadonlyMap.toReadonlyObjectMap.js";
import ReadonlyObjectMap_empty from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.empty.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.entries.js";
import ReadonlyObjectMap_forEach from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.forEach.js";
import ReadonlyObjectMap_forEachWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.forEachWithKey.js";
import ReadonlyObjectMap_fromEntries from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.fromEntries.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keep.js";
import ReadonlyObjectMap_keepType from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keepType.js";
import ReadonlyObjectMap_keepWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keepWithKey.js";
import ReadonlyObjectMap_keySet from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keySet.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_reduceWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduceWithKey.js";
import ReadonlyObjectMap_toDictionary from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toDictionary.js";
import ReadonlyObjectMap_toReadonlyMap from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toReadonlyMap.js";
import ReadonlyObjectMap_values from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
import { identityLazy } from "./functions.js";
import {
  ConcreteAssociativeKeyedContainerModule,
  Container_T,
  Container_type,
  KeyOf,
  KeyedContainer,
  KeyedContainer_TKey,
  ReadonlyObjectMapLike,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyObjectMapContainer<
  TKey extends symbol | number | string = symbol | number | string,
> extends KeyedContainer {
  readonly [Container_type]?: ReadonlyObjectMapLike<
    NonNullable<this[typeof KeyedContainer_TKey]>,
    this[typeof Container_T]
  >;

  readonly [KeyedContainer_TKey]?: TKey;
}

export type Type<
  TKey extends symbol | number | string = symbol | number | string,
> = ReadonlyObjectMapContainer<TKey>;

export type TKeyBase = KeyOf<Type>;

/**
 * @noInheritDoc
 * @category Module
 */
export interface ReadonlyObjectMapModule<
  TType extends Type = Type,
  TKey extends TKeyBase = TKeyBase,
> extends ConcreteAssociativeKeyedContainerModule<TType, TKey> {}

export type Signature = ReadonlyObjectMapModule;

/**
 * @category Functor
 */
export const CreateModule = <TKey extends TKeyBase>(): ReadonlyObjectMapModule<
  Type<TKey>,
  TKey
> =>
  ({
    empty: ReadonlyObjectMap_empty,
    entries: ReadonlyObjectMap_entries,
    fromEntries: ReadonlyObjectMap_fromEntries,
    forEach: ReadonlyObjectMap_forEach,
    forEachWithKey: ReadonlyObjectMap_forEachWithKey,
    fromReadonlyObjectMap: identityLazy as Signature["fromReadonlyObjectMap"],
    keep: ReadonlyObjectMap_keep,
    keepType: ReadonlyObjectMap_keepType,
    keepWithKey: ReadonlyObjectMap_keepWithKey,
    keys: ReadonlyObjectMap_keys,
    keySet: ReadonlyObjectMap_keySet,
    map: ReadonlyObjectMap_map,
    mapWithKey: ReadonlyObjectMap_mapWithKey,
    reduce: ReadonlyObjectMap_reduce,
    reduceWithKey: ReadonlyObjectMap_reduceWithKey,
    toDictionary: ReadonlyObjectMap_toDictionary,
    toReadonlyMap: ReadonlyObjectMap_toReadonlyMap,
    toReadonlyObjectMap: identityLazy,
    values: ReadonlyObjectMap_values,
  } as ReadonlyObjectMapModule<Type<TKey>, TKey>);

export const empty: Signature["empty"] = ReadonlyObjectMap_empty;
export const entries: Signature["entries"] = ReadonlyObjectMap_entries;
export const forEach: Signature["forEach"] = ReadonlyObjectMap_forEach;
export const forEachWithKey: Signature["forEachWithKey"] =
  ReadonlyObjectMap_forEachWithKey;
export const fromEntries: Signature["fromEntries"] =
  ReadonlyObjectMap_fromEntries;
export const fromReadonlyMap: Signature["fromReadonlyMap"] =
  ReadonlyMap_toReadonlyObjectMap as Signature["fromReadonlyMap"];
export const fromReadonlyObjectMap: Signature["fromReadonlyObjectMap"] =
  identityLazy as Signature["fromReadonlyObjectMap"];
export const keep: Signature["keep"] = ReadonlyObjectMap_keep;
export const keepType: Signature["keepType"] = ReadonlyObjectMap_keepType;
export const keepWithKey: Signature["keepWithKey"] =
  ReadonlyObjectMap_keepWithKey;
export const keys: Signature["keys"] = ReadonlyObjectMap_keys;
export const keySet: Signature["keySet"] = ReadonlyObjectMap_keySet;
export const map: Signature["map"] = ReadonlyObjectMap_map;
export const mapWithKey: Signature["mapWithKey"] = ReadonlyObjectMap_mapWithKey;
export const reduce: Signature["reduce"] = ReadonlyObjectMap_reduce;
export const reduceWithKey: Signature["reduceWithKey"] =
  ReadonlyObjectMap_reduceWithKey;
export const toDictionary: Signature["toDictionary"] =
  ReadonlyObjectMap_toDictionary;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  ReadonlyObjectMap_toReadonlyMap;
export const toReadonlyObjectMap: Signature["toReadonlyObjectMap"] =
  identityLazy as Signature["toReadonlyObjectMap"];
export const values: Signature["values"] = ReadonlyObjectMap_values;
