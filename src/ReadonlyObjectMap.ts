import ReadonlyObjectMap_empty from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.empty.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.entries.js";
import ReadonlyObjectMap_forEach from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.forEach.js";
import ReadonlyObjectMap_forEachWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.forEachWithKey.js";
import ReadonlyObjectMap_fromEntries from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.fromEntries.js";
import ReadonlyObjectMap_fromReadonlyMap from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.fromReadonlyMap.js";
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
import ReadonlyObjectMap_values from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
import { ConcreteAssociativeKeyedContainerTypeClass } from "./type-classes.js";
import { KeyOf, ReadonlyObjectMapContainer } from "./types.js";

export type Type<
  TKey extends symbol | number | string = symbol | number | string,
> = ReadonlyObjectMapContainer<TKey>;

export type TKeyBase = KeyOf<Type>;

export interface ReadonlyObjectMapModule<
  TType extends Type = Type,
  TKey extends TKeyBase = TKeyBase,
> extends ConcreteAssociativeKeyedContainerTypeClass<TType, TKey> {}

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
  ReadonlyObjectMap_fromReadonlyMap;
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
export const values: Signature["values"] = ReadonlyObjectMap_values;
