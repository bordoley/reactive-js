/// <reference types="./Dictionary.d.ts" />

import { Collection_TKey, Collection_type, } from "../collections.js";
import { identityLazy } from "../functions.js";
import Dictionary_empty from "./Dictionary/__internal__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__internal__/Dictionary.entries.js";
import Dictionary_fromEntries from "./Dictionary/__internal__/Dictionary.fromEntries.js";
import Dictionary_keys from "./Dictionary/__internal__/Dictionary.keys.js";
import Dictionary_map from "./Dictionary/__internal__/Dictionary.map.js";
import Dictionary_reduce from "./Dictionary/__internal__/Dictionary.reduce.js";
import Dictionary_toReadonlyMap from "./Dictionary/__internal__/Dictionary.toReadonlyMap.js";
import Dictionary_values from "./Dictionary/__internal__/Dictionary.values.js";
export const empty = Dictionary_empty;
export const entries = Dictionary_entries;
export const fromEntries = Dictionary_fromEntries;
export const keys = Dictionary_keys;
export const map = Dictionary_map;
export const reduce = Dictionary_reduce;
export const toDictionary = identityLazy;
export const toReadonlyMap = Dictionary_toReadonlyMap;
export const values = Dictionary_values;
