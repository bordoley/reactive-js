/// <reference types="./ReadonlyObjectMap.d.ts" />

import Dictionary_toReadonlyObjectMap from "./Dictionary/__internal__/Dictionary.toReadonlyObjectMap.js";
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
import ReadonlyObjectMap_mapTo from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapTo.js";
import ReadonlyObjectMap_mapWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_reduceWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduceWithKey.js";
import ReadonlyObjectMap_toDictionary from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toDictionary.js";
import ReadonlyObjectMap_toReadonlyMap from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toReadonlyMap.js";
import ReadonlyObjectMap_values from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";
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
export const empty = ReadonlyObjectMap_empty;
export const entries = ReadonlyObjectMap_entries;
export const forEach = ReadonlyObjectMap_forEach;
export const forEachWithKey = ReadonlyObjectMap_forEachWithKey;
export const fromDictionary = Dictionary_toReadonlyObjectMap;
export const fromEntries = ReadonlyObjectMap_fromEntries;
export const fromReadonlyMap = ReadonlyMap_toReadonlyObjectMap;
export const fromReadonlyObjectMap = identityLazy;
export const keep = ReadonlyObjectMap_keep;
export const keepType = ReadonlyObjectMap_keepType;
export const keepWithKey = ReadonlyObjectMap_keepWithKey;
export const keys = ReadonlyObjectMap_keys;
export const keySet = ReadonlyObjectMap_keySet;
export const map = ReadonlyObjectMap_map;
export const mapTo = ReadonlyObjectMap_mapTo;
export const mapWithKey = ReadonlyObjectMap_mapWithKey;
export const reduce = ReadonlyObjectMap_reduce;
export const reduceWithKey = ReadonlyObjectMap_reduceWithKey;
export const toDictionary = ReadonlyObjectMap_toDictionary;
export const toReadonlyMap = ReadonlyObjectMap_toReadonlyMap;
export const toReadonlyObjectMap = identityLazy;
export const values = ReadonlyObjectMap_values;
