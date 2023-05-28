/// <reference types="./ReadonlyMap.d.ts" />

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
import ReadonlyMap_mapTo from "./ReadonlyMap/__internal__/ReadonlyMap.mapTo.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.mapWithKey.js";
import ReadonlyMap_reduce from "./ReadonlyMap/__internal__/ReadonlyMap.reduce.js";
import ReadonlyMap_reduceWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.reduceWithKey.js";
import ReadonlyMap_toDictionary from "./ReadonlyMap/__internal__/ReadonlyMap.toDictionary.js";
import ReadonlyMap_toReadonlyObjectMap from "./ReadonlyMap/__internal__/ReadonlyMap.toReadonlyObjectMap.js";
import ReadonlyMap_values from "./ReadonlyMap/__internal__/ReadonlyMap.values.js";
import ReadonlyObjectMap_toReadonlyMap from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toReadonlyMap.js";
import { identityLazy } from "./functions.js";
import { Container_TKey, Container_type, } from "./types.js";
/**
 * @category Functor
 */
export const CreateModule = () => ({
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
});
export const empty = ReadonlyMap_empty;
export const entries = ReadonlyMap_entries;
export const fromDictionary = Dictionary_toReadonlyMap;
export const fromEntries = ReadonlyMap_fromEntries;
export const fromReadonlyMap = identityLazy;
export const forEach = ReadonlyMap_forEach;
export const forEachWithKey = ReadonlyMap_forEachWithKey;
export const fromReadonlyObjectMap = ReadonlyObjectMap_toReadonlyMap;
export const keep = ReadonlyMap_keep;
export const keepType = ReadonlyMap_keepType;
export const keepWithKey = ReadonlyMap_keepWithKey;
export const keys = ReadonlyMap_keys;
export const keySet = ReadonlyMap_keySet;
export const map = ReadonlyMap_map;
export const mapTo = ReadonlyMap_mapTo;
export const mapWithKey = ReadonlyMap_mapWithKey;
export const reduce = ReadonlyMap_reduce;
export const reduceWithKey = ReadonlyMap_reduceWithKey;
export const toDictionary = ReadonlyMap_toDictionary;
export const toReadonlyMap = identityLazy;
export const toReadonlyObjectMap = ReadonlyMap_toReadonlyObjectMap;
export const values = ReadonlyMap_values;
