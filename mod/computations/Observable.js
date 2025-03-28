/// <reference types="./Observable.d.ts" />

import { Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../computations.js";
import { identity, returns } from "../functions.js";
import Observable_buffer from "./Observable/__private__/Observable.buffer.js";
import Observable_catchError from "./Observable/__private__/Observable.catchError.js";
import Observable_concat from "./Observable/__private__/Observable.concat.js";
import Observable_currentTime from "./Observable/__private__/Observable.currentTime.js";
import Observable_decodeWithCharset from "./Observable/__private__/Observable.decodeWithCharset.js";
import Observable_distinctUntilChanged from "./Observable/__private__/Observable.distinctUntilChanged.js";
import Observable_encodeUtf8 from "./Observable/__private__/Observable.encodeUtf8.js";
import Observable_forEach from "./Observable/__private__/Observable.forEach.js";
import { Observable_gen, Observable_genPure, } from "./Observable/__private__/Observable.gen.js";
import { Observable_genAsync, Observable_genPureAsync, } from "./Observable/__private__/Observable.genAsync.js";
import Observable_keep from "./Observable/__private__/Observable.keep.js";
import Observable_map from "./Observable/__private__/Observable.map.js";
import Observable_pairwise from "./Observable/__private__/Observable.pairwise.js";
import Observable_scan from "./Observable/__private__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__private__/Observable.skipFirst.js";
import Observable_takeFirst from "./Observable/__private__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__private__/Observable.takeLast.js";
import Observable_takeUntil from "./Observable/__private__/Observable.takeUntil.js";
import Observable_takeWhile from "./Observable/__private__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__private__/Observable.throwIfEmpty.js";
import Observable_toProducer from "./Observable/__private__/Observable.toProducer.js";
import Observable_toRunnable from "./Observable/__private__/Observable.toRunnable.js";
import Observable_withCurrentTime from "./Observable/__private__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__private__/Observable.withLatestFrom.js";
export const buffer = Observable_buffer;
export const catchError = Observable_catchError;
export const concat = Observable_concat;
export const currentTime = Observable_currentTime;
export const decodeWithCharset = Observable_decodeWithCharset;
export const distinctUntilChanged = Observable_distinctUntilChanged;
export const encodeUtf8 = Observable_encodeUtf8;
export const forEach = Observable_forEach;
export const fromObservable = 
/*@__PURE__*/ returns(identity);
export const gen = Observable_gen;
export const genAsync = Observable_genAsync;
export const genPure = Observable_genPure;
export const genPureAsync = Observable_genPureAsync;
export const keep = Observable_keep;
export const map = Observable_map;
export const pairwise = Observable_pairwise;
export const scan = Observable_scan;
export const skipFirst = Observable_skipFirst;
export const takeFirst = Observable_takeFirst;
export const takeLast = Observable_takeLast;
export const takeUntil = Observable_takeUntil;
export const takeWhile = Observable_takeWhile;
export const throwIfEmpty = Observable_throwIfEmpty;
export const toProducer = Observable_toProducer;
export const toRunnable = Observable_toRunnable;
export const withCurrentTime = Observable_withCurrentTime;
export const withLatestFrom = Observable_withLatestFrom;
