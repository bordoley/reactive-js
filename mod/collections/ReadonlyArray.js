/// <reference types="./ReadonlyArray.d.ts" />

import { Collection_type, } from "../collections.js";
import Enumerable_fromReadonlyArray from "./Enumerable/__private__/Enumerable.fromReadonlyArray.js";
import ReadonlyArray_empty from "./ReadonlyArray/__private__/ReadonlyArray.empty.js";
import ReadonlyArray_entries from "./ReadonlyArray/__private__/ReadonlyArray.entries.js";
import ReadonlyArray_forEach from "./ReadonlyArray/__private__/ReadonlyArray.forEach.js";
import ReadonlyArray_keep from "./ReadonlyArray/__private__/ReadonlyArray.keep.js";
import ReadonlyArray_keys from "./ReadonlyArray/__private__/ReadonlyArray.keys.js";
import ReadonlyArray_map from "./ReadonlyArray/__private__/ReadonlyArray.map.js";
import ReadonlyArray_reduce from "./ReadonlyArray/__private__/ReadonlyArray.reduce.js";
import ReadonlyArray_slice from "./ReadonlyArray/__private__/ReadonlyArray.slice.js";
import ReadonlyArray_toDictionary from "./ReadonlyArray/__private__/ReadonlyArray.toDictionary.js";
import ReadonlyArray_toReadonlyMap from "./ReadonlyArray/__private__/ReadonlyArray.toReadonlyMap.js";
export const empty = ReadonlyArray_empty;
export const entries = ReadonlyArray_entries;
export const forEach = ReadonlyArray_forEach;
export const keep = ReadonlyArray_keep;
export const keys = ReadonlyArray_keys;
export const map = ReadonlyArray_map;
export const reduce = ReadonlyArray_reduce;
export const slice = ReadonlyArray_slice;
export const toDictionary = ReadonlyArray_toDictionary;
export const toReadonlyMap = ReadonlyArray_toReadonlyMap;
export const values = Enumerable_fromReadonlyArray;
