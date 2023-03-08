/// <reference types="./Sequence.d.ts" />

import { identity, returns } from "../functions.js";
import Optional_toSequence from "./Optional/__internal__/Optional.toSequence.js";
import ReadonlyArray_toSequence from "./ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
import Sequence_compute from "./Sequence/__internal__/Sequence.compute.js";
import Sequence_concat from "./Sequence/__internal__/Sequence.concat.js";
import Sequence_concatAll from "./Sequence/__internal__/Sequence.concatAll.js";
import Sequence_concatMap from "./Sequence/__internal__/Sequence.concatMap.js";
import Sequence_concatWith from "./Sequence/__internal__/Sequence.concatWith.js";
import Sequence_distinctUntilChanged from "./Sequence/__internal__/Sequence.distinctUntilChanged.js";
import Sequence_endWith from "./Sequence/__internal__/Sequence.endWith.js";
import Sequence_enumerate from "./Sequence/__internal__/Sequence.enumerate.js";
import Sequence_first from "./Sequence/__internal__/Sequence.first.js";
import Sequence_generate from "./Sequence/__internal__/Sequence.generate.js";
import Sequence_ignoreElements from "./Sequence/__internal__/Sequence.ignoreElements.js";
import Sequence_keep from "./Sequence/__internal__/Sequence.keep.js";
import Sequence_keepType from "./Sequence/__internal__/Sequence.keepType.js";
import Sequence_last from "./Sequence/__internal__/Sequence.last.js";
import Sequence_map from "./Sequence/__internal__/Sequence.map.js";
import Sequence_mapTo from "./Sequence/__internal__/Sequence.mapTo.js";
import Sequence_pairwise from "./Sequence/__internal__/Sequence.pairwise.js";
import Sequence_repeat from "./Sequence/__internal__/Sequence.repeat.js";
import Sequence_scan from "./Sequence/__internal__/Sequence.scan.js";
import Sequence_skipFirst from "./Sequence/__internal__/Sequence.skipFirst.js";
import Sequence_startWith from "./Sequence/__internal__/Sequence.startWith.js";
import Sequence_takeFirst from "./Sequence/__internal__/Sequence.takeFirst.js";
import Sequence_takeLast from "./Sequence/__internal__/Sequence.takeLast.js";
import Sequence_takeWhile from "./Sequence/__internal__/Sequence.takeWhile.js";
import Sequence_toAsyncEnumerable from "./Sequence/__internal__/Sequence.toAsyncEnumerable.js";
import Sequence_toFlowable from "./Sequence/__internal__/Sequence.toFlowable.js";
import Sequence_toIterable from "./Sequence/__internal__/Sequence.toIterable.js";
import Sequence_toObservable from "./Sequence/__internal__/Sequence.toObservable.js";
import Sequence_toReadonlyArray from "./Sequence/__internal__/Sequence.toReadonlyArray.js";
import Sequence_zip from "./Sequence/__internal__/Sequence.zip.js";
import Sequence_zipWith from "./Sequence/__internal__/Sequence.zipWith.js";
export const compute = Sequence_compute;
export const concat = Sequence_concat;
export const concatAll = Sequence_concatAll;
export const concatMap = Sequence_concatMap;
export const concatWith = Sequence_concatWith;
export const distinctUntilChanged = Sequence_distinctUntilChanged;
export const endWith = Sequence_endWith;
export const enumerate = Sequence_enumerate;
export const first = Sequence_first;
export const fromOptional = Optional_toSequence;
export const fromReadonlyArray = ReadonlyArray_toSequence;
export const generate = Sequence_generate;
export const ignoreElements = Sequence_ignoreElements;
export const keep = Sequence_keep;
export const keepType = Sequence_keepType;
export const last = Sequence_last;
export const map = Sequence_map;
export const mapTo = Sequence_mapTo;
export const pairwise = Sequence_pairwise;
export const repeat = Sequence_repeat;
export const scan = Sequence_scan;
export const skipFirst = Sequence_skipFirst;
export const startWith = Sequence_startWith;
export const takeFirst = Sequence_takeFirst;
export const takeLast = Sequence_takeLast;
export const takeWhile = Sequence_takeWhile;
export const toAsyncEnumerable = Sequence_toAsyncEnumerable;
export const toEnumerable = Sequence_toObservable;
export const toFlowable = Sequence_toFlowable;
export const toIterable = Sequence_toIterable;
export const toObservable = Sequence_toObservable;
export const toReadonlyArray = Sequence_toReadonlyArray;
export const toRunnable = Sequence_toObservable;
export const toSequence = 
/*@__PURE__*/ returns(identity);
export const zip = Sequence_zip;
export const zipWith = Sequence_zipWith;
