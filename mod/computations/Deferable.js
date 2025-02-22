/// <reference types="./Deferable.d.ts" />

import { Computation_type, } from "../computations.js";
import { identity, returns } from "../functions.js";
import Deferable_buffer from "./Deferable/__private__/Deferable.buffer.js";
import Deferable_catchError from "./Deferable/__private__/Deferable.catchError.js";
import Deferable_concat from "./Deferable/__private__/Deferable.concat.js";
import Deferable_concatAll from "./Deferable/__private__/Deferable.concatAll.js";
import Deferable_concatMany from "./Deferable/__private__/Deferable.concatMany.js";
import Deferable_concatMap from "./Deferable/__private__/Deferable.concatMap.js";
import Deferable_concatWith from "./Deferable/__private__/Deferable.concatWith.js";
import Deferable_decodeWithCharset from "./Deferable/__private__/Deferable.decodeWithCharset.js";
import Deferable_distinctUntilChanged from "./Deferable/__private__/Deferable.distinctUntilChanged.js";
import Deferable_endWith from "./Deferable/__private__/Deferable.endWith.js";
import Deferable_forEach from "./Deferable/__private__/Deferable.forEach.js";
import Deferable_fromIterable from "./Deferable/__private__/Deferable.fromIterable.js";
import Deferable_fromReadonlyArray from "./Deferable/__private__/Deferable.fromReadonlyArray.js";
import Deferable_fromValue from "./Deferable/__private__/Deferable.fromValue.js";
import Deferable_generate from "./Deferable/__private__/Deferable.generate.js";
import Deferable_ignoreElements from "./Deferable/__private__/Deferable.ignoreElements.js";
import Deferable_keep from "./Deferable/__private__/Deferable.keep.js";
import Deferable_last from "./Deferable/__private__/Deferable.last.js";
import Deferable_map from "./Deferable/__private__/Deferable.map.js";
import Deferable_pairwise from "./Deferable/__private__/Deferable.pairwise.js";
import Deferable_reduce from "./Deferable/__private__/Deferable.reduce.js";
import Deferable_repeat from "./Deferable/__private__/Deferable.repeat.js";
import Deferable_retry from "./Deferable/__private__/Deferable.retry.js";
import Deferable_scan from "./Deferable/__private__/Deferable.scan.js";
import Deferable_skipFirst from "./Deferable/__private__/Deferable.skipFirst.js";
import Deferable_startWith from "./Deferable/__private__/Deferable.startWith.js";
import Deferable_takeFirst from "./Deferable/__private__/Deferable.takeFirst.js";
import Deferable_takeLast from "./Deferable/__private__/Deferable.takeLast.js";
import Deferable_takeWhile from "./Deferable/__private__/Deferable.takeWhile.js";
import Deferable_throwIfEmpty from "./Deferable/__private__/Deferable.throwIfEmpty.js";
import Deferable_throws from "./Deferable/__private__/Deferable.throws.js";
import Deferable_toReadonlyArray from "./Deferable/__private__/Deferable.toReadonlyArray.js";
export const buffer = Deferable_buffer;
export const catchError = Deferable_catchError;
export const concat = Deferable_concat;
export const concatAll = Deferable_concatAll;
export const concatMap = Deferable_concatMap;
export const concatMany = Deferable_concatMany;
export const concatWith = Deferable_concatWith;
export const decodeWithCharset = Deferable_decodeWithCharset;
export const distinctUntilChanged = Deferable_distinctUntilChanged;
export const endWith = Deferable_endWith;
export const forEach = Deferable_forEach;
export const fromIterable = Deferable_fromIterable;
export const fromReadonlyArray = Deferable_fromReadonlyArray;
export const fromValue = Deferable_fromValue;
export const generate = Deferable_generate;
export const ignoreElements = Deferable_ignoreElements;
export const keep = Deferable_keep;
export const last = Deferable_last;
export const map = Deferable_map;
export const pairwise = Deferable_pairwise;
export const reduce = Deferable_reduce;
export const repeat = Deferable_repeat;
export const retry = Deferable_retry;
export const scan = Deferable_scan;
export const skipFirst = Deferable_skipFirst;
export const startWith = Deferable_startWith;
export const takeFirst = Deferable_takeFirst;
export const takeLast = Deferable_takeLast;
export const takeWhile = Deferable_takeWhile;
export const throwIfEmpty = Deferable_throwIfEmpty;
export const throws = Deferable_throws;
export const toDeferable = 
/*@PURE*/ returns(identity);
export const toReadonlyArray = Deferable_toReadonlyArray;
