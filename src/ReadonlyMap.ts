import ReadonlyMap_empty from "./ReadonlyMap/__internal__/ReadonlyMap.empty.js";
import ReadonlyMap_entries from "./ReadonlyMap/__internal__/ReadonlyMap.entries.js";
import ReadonlyMap_forEach from "./ReadonlyMap/__internal__/ReadonlyMap.forEach.js";
import ReadonlyMap_forEachWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.forEachWithKey.js";
import ReadonlyMap_fromEntries from "./ReadonlyMap/__internal__/ReadonlyMap.fromEntries.js";
import ReadonlyMap_keep from "./ReadonlyMap/__internal__/ReadonlyMap.keep.js";
import ReadonlyMap_keepType from "./ReadonlyMap/__internal__/ReadonlyMap.keepType.js";
import ReadonlyMap_keepWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.keepWithKey.js";
import ReadonlyMap_keySet from "./ReadonlyMap/__internal__/ReadonlyMap.keySet.js";
import ReadonlyMap_keys from "./ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import ReadonlyMap_map from "./ReadonlyMap/__internal__/ReadonlyMap.map.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.mapWithKey.js";
import ReadonlyMap_reduce from "./ReadonlyMap/__internal__/ReadonlyMap.reduce.js";
import ReadonlyMap_reduceWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.reduceWithKey.js";
import ReadonlyMap_toDictionary from "./ReadonlyMap/__internal__/ReadonlyMap.toDictionary.js";
import ReadonlyMap_toReadonlyObjectMap from "./ReadonlyMap/__internal__/ReadonlyMap.toReadonlyObjectMap.js";
import ReadonlyMap_values from "./ReadonlyMap/__internal__/ReadonlyMap.values.js";
import ReadonlyObjectMap_toReadonlyMap from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toReadonlyMap.js";
import { identityLazy } from "./functions.js";
import {
  ConcreteAssociativeKeyedContainerModule,
  Container_T,
  Container_type,
  KeyOf,
  KeyedContainer,
  KeyedContainer_TKey,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyMapContainer<TKey = unknown>
  extends KeyedContainer<TKey> {
  readonly [Container_type]?: ReadonlyMap<
    this[typeof KeyedContainer_TKey],
    this[typeof Container_T]
  >;

  readonly [KeyedContainer_TKey]?: TKey;
}

export type Type<TKey = unknown> = ReadonlyMapContainer<TKey>;

export type TKeyBase = KeyOf<Type>;

/**
 * @noInheritDoc
 */
export interface ReadonlyMapModule<
  TType extends Type = Type,
  TKey extends TKeyBase = TKeyBase,
> extends ConcreteAssociativeKeyedContainerModule<TType, TKey> {}

export type Signature = ReadonlyMapModule;

/**
 * @category Functor
 */
export const CreateModule = <TKey extends TKeyBase>(): ReadonlyMapModule<
  Type<TKey>,
  TKey
> =>
  ({
    empty: ReadonlyMap_empty,
    entries: ReadonlyMap_entries,
    fromEntries: ReadonlyMap_fromEntries,
    forEach: ReadonlyMap_forEach,
    forEachWithKey: ReadonlyMap_forEachWithKey,
    fromReadonlyMap: identityLazy,
    fromReadonlyObjectMap: ReadonlyObjectMap_toReadonlyMap,
    keep: ReadonlyMap_keep,
    keepType: ReadonlyMap_keepType,
    keepWithKey: ReadonlyMap_keepWithKey,
    keys: ReadonlyMap_keys,
    keySet: ReadonlyMap_keySet,
    map: ReadonlyMap_map,
    mapWithKey: ReadonlyMap_mapWithKey,
    reduce: ReadonlyMap_reduce,
    reduceWithKey: ReadonlyMap_reduceWithKey,
    toDictionary: ReadonlyMap_toDictionary,
    toReadonlyMap: identityLazy,
    toReadonlyObjectMap: ReadonlyMap_toReadonlyObjectMap,
    values: ReadonlyMap_values,
  } as ReadonlyMapModule<Type<TKey>, TKey>);

export const empty: Signature["empty"] = ReadonlyMap_empty;
export const entries: Signature["entries"] = ReadonlyMap_entries;
export const fromEntries: Signature["fromEntries"] = ReadonlyMap_fromEntries;
export const fromReadonlyMap: Signature["fromReadonlyMap"] = identityLazy;
export const forEach: Signature["forEach"] = ReadonlyMap_forEach;
export const forEachWithKey: Signature["forEachWithKey"] =
  ReadonlyMap_forEachWithKey;
export const fromReadonlyObjectMap: Signature["fromReadonlyObjectMap"] =
  ReadonlyObjectMap_toReadonlyMap as Signature["fromReadonlyObjectMap"];
export const keep: Signature["keep"] = ReadonlyMap_keep;
export const keepType: Signature["keepType"] = ReadonlyMap_keepType;
export const keepWithKey: Signature["keepWithKey"] = ReadonlyMap_keepWithKey;
export const keys: Signature["keys"] = ReadonlyMap_keys;
export const keySet: Signature["keySet"] = ReadonlyMap_keySet;
export const map: Signature["map"] = ReadonlyMap_map;
export const mapWithKey: Signature["mapWithKey"] = ReadonlyMap_mapWithKey;
export const reduce: Signature["reduce"] = ReadonlyMap_reduce;
export const reduceWithKey: Signature["reduceWithKey"] =
  ReadonlyMap_reduceWithKey;
export const toDictionary: Signature["toDictionary"] = ReadonlyMap_toDictionary;
export const toReadonlyMap: Signature["toReadonlyMap"] = identityLazy;
export const toReadonlyObjectMap: Signature["toReadonlyObjectMap"] =
  ReadonlyMap_toReadonlyObjectMap;
export const values: Signature["values"] = ReadonlyMap_values;
