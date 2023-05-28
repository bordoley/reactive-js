/// <reference types="./Dictionary.d.ts" />

import Dictionary_empty from "./Dictionary/__internal__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_forEach from "./Dictionary/__internal__/Dictionary.forEach.js";
import Dictionary_forEachWithKey from "./Dictionary/__internal__/Dictionary.forEachWithKey.js";
import Dictionary_fromEntries from "./Dictionary/__internal__/Dictionary.fromEntries.js";
import Dictionary_keep from "./Dictionary/__internal__/Dictionary.keep.js";
import Dictionary_keepType from "./Dictionary/__internal__/Dictionary.keepType.js";
import Dictionary_keepWithKey from "./Dictionary/__internal__/Dictionary.keepWithKey.js";
import Dictionary_keySet from "./Dictionary/__internal__/Dictionary.keySet.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_map from "./Dictionary/__internal__/Dictionary.map.js";
import Dictionary_mapWithKey from "./Dictionary/__internal__/Dictionary.mapWithKey.js";
import Dictionary_reduce from "./Dictionary/__internal__/Dictionary.reduce.js";
import Dictionary_reduceWithKey from "./Dictionary/__internal__/Dictionary.reduceWithKey.js";
import Dictionary_toReadonlyMap from "./Dictionary/__internal__/Dictionary.toReadonlyMap.js";
import Dictionary_toReadonlyObjectMap from "./Dictionary/__internal__/Dictionary.toReadonlyObjectMap.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";
import ReadonlyMap_toDictionary from "./ReadonlyMap/__internal__/ReadonlyMap.toDictionary.js";
import ReadonlyObjectMap_toDictionary from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toDictionary.js";
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
export const empty = Dictionary_empty;
export const entries = Dictionary_entries;
export const forEach = Dictionary_forEach;
export const forEachWithKey = Dictionary_forEachWithKey;
export const fromDictionary = identityLazy;
export const fromEntries = Dictionary_fromEntries;
export const fromReadonlyMap = ReadonlyMap_toDictionary;
export const fromReadonlyObjectMap = ReadonlyObjectMap_toDictionary;
export const keep = Dictionary_keep;
export const keepType = Dictionary_keepType;
export const keepWithKey = Dictionary_keepWithKey;
export const keys = Dictionary_keys;
export const keySet = Dictionary_keySet;
export const map = Dictionary_map;
export const mapWithKey = Dictionary_mapWithKey;
export const reduce = Dictionary_reduce;
export const reduceWithKey = Dictionary_reduceWithKey;
export const toDictionary = identityLazy;
export const toReadonlyMap = Dictionary_toReadonlyMap;
export const toReadonlyObjectMap = Dictionary_toReadonlyObjectMap;
export const values = Dictionary_values;
