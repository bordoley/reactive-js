import Dictionary_toReadonlyMap from "./Dictionary/__internal__/Dictionary.toReadonlyMap.js";
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
  AssociativeCollectionContainerModule,
  Container,
  Container_T,
  Container_TKey,
  Container_type,
  KeyOf,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyMapContainer<TKey = unknown> extends Container<TKey> {
  readonly [Container_type]?: ReadonlyMap<
    this[typeof Container_TKey],
    this[typeof Container_T]
  >;

  readonly [Container_TKey]?: TKey;
}

export type Type<TKey = unknown> = ReadonlyMapContainer<TKey>;

export type TKeyBase = KeyOf<Type>;

/**
 * @noInheritDoc
 * @category Module
 */
export interface ReadonlyMapModule<TKey extends TKeyBase = TKeyBase>
  extends AssociativeCollectionContainerModule<Type<TKey>> {}

export type Signature = ReadonlyMapModule;

/**
 * @category Functor
 */
export const CreateModule = <
  TKey extends TKeyBase,
>(): ReadonlyMapModule<TKey> =>
  ({
    empty,
    entries,
    fromDictionary,
    fromEntries,
    forEach,
    forEachWithKey,
    fromReadonlyMap,
    fromReadonlyObjectMap,
    keep,
    keepType,
    keepWithKey,
    keys,
    keySet,
    map,
    mapWithKey,
    reduce,
    reduceWithKey,
    toDictionary,
    toReadonlyMap,
    toReadonlyObjectMap,
    values,
  } as unknown as ReadonlyMapModule<TKey>);

export const empty: Signature["empty"] = ReadonlyMap_empty;
export const entries: Signature["entries"] = ReadonlyMap_entries;
export const fromDictionary: Signature["fromDictionary"] =
  Dictionary_toReadonlyMap;
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
