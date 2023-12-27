/// <reference types="./Dictionary.d.ts" />

import { Collection_TKey, Collection_type, } from "../collections.js";
import { identityLazy } from "../functions.js";
import Dictionary_empty from "./Dictionary/__private__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__private__/Dictionary.entries.js";
import Dictionary_forEach from "./Dictionary/__private__/Dictionary.forEach.js";
import Dictionary_fromEntries from "./Dictionary/__private__/Dictionary.fromEntries.js";
import Dictionary_keep from "./Dictionary/__private__/Dictionary.keep.js";
import Dictionary_keySet from "./Dictionary/__private__/Dictionary.keySet.js";
import Dictionary_keys from "./Dictionary/__private__/Dictionary.keys.js";
import Dictionary_map from "./Dictionary/__private__/Dictionary.map.js";
import Dictionary_reduce from "./Dictionary/__private__/Dictionary.reduce.js";
import Dictionary_toReadonlyMap from "./Dictionary/__private__/Dictionary.toReadonlyMap.js";
import Dictionary_union from "./Dictionary/__private__/Dictionary.union.js";
import Dictionary_values from "./Dictionary/__private__/Dictionary.values.js";
export const empty = Dictionary_empty;
export const entries = Dictionary_entries;
export const forEach = Dictionary_forEach;
export const fromEntries = Dictionary_fromEntries;
export const keep = Dictionary_keep;
export const keys = Dictionary_keys;
export const keySet = Dictionary_keySet;
export const map = Dictionary_map;
export const reduce = Dictionary_reduce;
export const toDictionary = identityLazy;
export const toReadonlyMap = Dictionary_toReadonlyMap;
export const union = Dictionary_union;
export const values = Dictionary_values;
