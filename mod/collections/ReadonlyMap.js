/// <reference types="./ReadonlyMap.d.ts" />

import { KeyedCollection_TKey, KeyedCollection_type, } from "../collections.js";
import { identityLazy } from "../functions.js";
import ReadonlyMap_empty from "./ReadonlyMap/__private__/ReadonlyMap.empty.js";
import ReadonlyMap_entries from "./ReadonlyMap/__private__/ReadonlyMap.entries.js";
import ReadonlyMap_forEach from "./ReadonlyMap/__private__/ReadonlyMap.forEach.js";
import ReadonlyMap_fromEntries from "./ReadonlyMap/__private__/ReadonlyMap.fromEntries.js";
import ReadonlyMap_keySet from "./ReadonlyMap/__private__/ReadonlyMap.keySet.js";
import ReadonlyMap_keys from "./ReadonlyMap/__private__/ReadonlyMap.keys.js";
import ReadonlyMap_map from "./ReadonlyMap/__private__/ReadonlyMap.map.js";
import ReadonlyMap_reduce from "./ReadonlyMap/__private__/ReadonlyMap.reduce.js";
import ReadonlyMap_toDictionary from "./ReadonlyMap/__private__/ReadonlyMap.toDictionary.js";
import ReadonlyMap_values from "./ReadonlyMap/__private__/ReadonlyMap.values.js";
export const empty = ReadonlyMap_empty;
export const entries = ReadonlyMap_entries;
export const forEach = ReadonlyMap_forEach;
export const fromEntries = ReadonlyMap_fromEntries;
export const keys = ReadonlyMap_keys;
export const keySet = ReadonlyMap_keySet;
export const map = ReadonlyMap_map;
export const reduce = ReadonlyMap_reduce;
export const toDictionary = ReadonlyMap_toDictionary;
export const toReadonlyMap = identityLazy;
export const values = ReadonlyMap_values;
