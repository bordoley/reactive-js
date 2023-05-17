/// <reference types="./Dictionary.d.ts" />

import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_forEach from "./Dictionary/__internal__/Dictionary.forEach.js";
import Dictionary_forEachWithKey from "./Dictionary/__internal__/Dictionary.forEachWithKey.js";
import Dictionary_keySet from "./Dictionary/__internal__/Dictionary.keySet.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_reduce from "./Dictionary/__internal__/Dictionary.reduce.js";
import Dictionary_reduceWithKey from "./Dictionary/__internal__/Dictionary.reduceWithKey.js";
import Dictionary_toReadonlyMap from "./Dictionary/__internal__/Dictionary.toReadonlyMap.js";
import Dictionary_toReadonlyObjectMap from "./Dictionary/__internal__/Dictionary.toReadonlyObjectMap.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";
import ReadonlyMap_toDictionary from "./ReadonlyMap/__internal__/ReadonlyMap.toDictionary.js";
import ReadonlyObjectMap_toDictionary from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toDictionary.js";
import { identityLazy } from "./functions.js";
/**
 * @category Functor
 */
export const CreateModule = () => ({
    entries: Dictionary_entries,
    forEach: Dictionary_forEach,
    forEachWithKey: Dictionary_forEachWithKey,
    fromReadonlyObjectMap: ReadonlyObjectMap_toDictionary,
    fromReadonlyMap: ReadonlyMap_toDictionary,
    keys: Dictionary_keys,
    keySet: Dictionary_keySet,
    reduce: Dictionary_reduce,
    reduceWithKey: Dictionary_reduceWithKey,
    toDictionary: identityLazy,
    toReadonlyMap: Dictionary_toReadonlyMap,
    toReadonlyObjectMap: Dictionary_toReadonlyObjectMap,
    values: Dictionary_values,
});
export const entries = Dictionary_entries;
export const forEach = Dictionary_forEach;
export const forEachWithKey = Dictionary_forEachWithKey;
export const fromReadonlyMap = ReadonlyMap_toDictionary;
export const fromReadonlyObjectMap = ReadonlyObjectMap_toDictionary;
export const keys = Dictionary_keys;
export const keySet = Dictionary_keySet;
export const reduce = Dictionary_reduce;
export const reduceWithKey = Dictionary_reduceWithKey;
export const toDictionary = identityLazy;
export const toReadonlyMap = Dictionary_toReadonlyMap;
export const toReadonlyObjectMap = Dictionary_toReadonlyObjectMap;
export const values = Dictionary_values;
