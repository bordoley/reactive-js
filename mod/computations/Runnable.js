/// <reference types="./Runnable.d.ts" />

import { Computation_baseOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../computations.js";
import { identity, returns } from "../functions.js";
//import Runnable_actionReducer from "./Runnable/__private__/Runnable.actionReducer.js";
import Runnable_buffer from "./Runnable/__private__/Runnable.buffer.js";
import Runnable_catchError from "./Runnable/__private__/Runnable.catchError.js";
import Runnable_concat from "./Runnable/__private__/Runnable.concat.js";
//import Runnable_concatAll from "./Runnable/__private__/Runnable.concatAll.js";
import Runnable_decodeWithCharset from "./Runnable/__private__/Runnable.decodeWithCharset.js";
import Runnable_distinctUntilChanged from "./Runnable/__private__/Runnable.distinctUntilChanged.js";
import Runnable_encodeUtf8 from "./Runnable/__private__/Runnable.encodeUtf8.js";
import Runnable_forEach from "./Runnable/__private__/Runnable.forEach.js";
import { Runnable_gen, Runnable_genPure, } from "./Runnable/__private__/Runnable.gen.js";
import Runnable_keep from "./Runnable/__private__/Runnable.keep.js";
import Runnable_map from "./Runnable/__private__/Runnable.map.js";
import Runnable_pairwise from "./Runnable/__private__/Runnable.pairwise.js";
import Runnable_repeat from "./Runnable/__private__/Runnable.repeat.js";
//import Runnable_retry from "./Runnable/__private__/Runnable.retry.js";
import Runnable_scan from "./Runnable/__private__/Runnable.scan.js";
import Runnable_skipFirst from "./Runnable/__private__/Runnable.skipFirst.js";
import Runnable_takeFirst from "./Runnable/__private__/Runnable.takeFirst.js";
import Runnable_takeLast from "./Runnable/__private__/Runnable.takeLast.js";
import Runnable_takeWhile from "./Runnable/__private__/Runnable.takeWhile.js";
import Runnable_throwIfEmpty from "./Runnable/__private__/Runnable.throwIfEmpty.js";
import Runnable_toProducer from "./Runnable/__private__/Runnable.toProducer.js";
//export const actionReducer: Signature["actionReducer"] = Runnable_actionReducer;
export const buffer = Runnable_buffer;
export const catchError = Runnable_catchError;
//export const concatAll: Signature["concatAll"] = Runnable_concatAll;
export const concat = Runnable_concat;
export const decodeWithCharset = Runnable_decodeWithCharset;
export const distinctUntilChanged = Runnable_distinctUntilChanged;
export const encodeUtf8 = Runnable_encodeUtf8;
export const forEach = Runnable_forEach;
export const gen = Runnable_gen;
export const genPure = Runnable_genPure;
export const keep = Runnable_keep;
export const map = Runnable_map;
export const pairwise = Runnable_pairwise;
export const repeat = Runnable_repeat;
//export const retry: Signature["retry"] = Runnable_retry;
export const scan = Runnable_scan;
export const skipFirst = Runnable_skipFirst;
export const takeFirst = Runnable_takeFirst;
export const takeLast = Runnable_takeLast;
export const takeWhile = Runnable_takeWhile;
export const throwIfEmpty = Runnable_throwIfEmpty;
export const toProducer = Runnable_toProducer;
export const toRunnable = /*@__PURE__*/ returns(identity);
