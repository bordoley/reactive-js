/// <reference types="./DeferredObservable.d.ts" />

import DeferredObservable_catchError from "./DeferredObservable/__internal__/DeferredObservable.catchError.js";
import DeferredObservable_concatAll from "./DeferredObservable/__internal__/DeferredObservable.concatAll.js";
import DeferredObservable_concatMap from "./DeferredObservable/__internal__/DeferredObservable.concatMap.js";
import DeferredObservable_exhaust from "./DeferredObservable/__internal__/DeferredObservable.exhaust.js";
import DeferredObservable_exhaustMap from "./DeferredObservable/__internal__/DeferredObservable.exhaustMap.js";
import DeferredObservable_mergeAll from "./DeferredObservable/__internal__/DeferredObservable.mergeAll.js";
import DeferredObservable_mergeMap from "./DeferredObservable/__internal__/DeferredObservable.mergeMap.js";
import DeferredObservable_multicast from "./DeferredObservable/__internal__/DeferredObservable.multicast.js";
import DeferredObservable_repeat from "./DeferredObservable/__internal__/DeferredObservable.repeat.js";
import DeferredObservable_retry from "./DeferredObservable/__internal__/DeferredObservable.retry.js";
import DeferredObservable_scanLast from "./DeferredObservable/__internal__/DeferredObservable.scanLast.js";
import DeferredObservable_scanMany from "./DeferredObservable/__internal__/DeferredObservable.scanMany.js";
import DeferredObservable_share from "./DeferredObservable/__internal__/DeferredObservable.share.js";
import DeferredObservable_switchAll from "./DeferredObservable/__internal__/DeferredObservable.switchAll.js";
import DeferredObservable_switchMap from "./DeferredObservable/__internal__/DeferredObservable.switchMap.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import { DeferredObservable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_flatMapIterable from "./Observable/__internal__/Observable.flatMapIterable.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_fromValue from "./Observable/__internal__/Observable.fromValue.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Optional_toObservable from "./Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { identityLazy } from "./functions.js";
import { Container_type, } from "./types.js";
export const buffer = Observable_buffer;
export const catchError = DeferredObservable_catchError;
export const compute = DeferredObservable_compute;
export const concat = Observable_concat;
export const concatAll = DeferredObservable_concatAll;
export const concatMap = DeferredObservable_concatMap;
export const concatWith = Observable_concatWith;
export const distinctUntilChanged = Observable_distinctUntilChanged;
export const empty = Observable_empty;
export const endWith = Observable_endWith;
export const exhaust = DeferredObservable_exhaust;
export const exhaustMap = DeferredObservable_exhaustMap;
export const flatMapIterable = Observable_flatMapIterable;
export const fromEnumerable = identityLazy;
export const fromFactory = Observable_fromFactory;
export const fromIterable = Iterable_toObservable;
export const fromOptional = Optional_toObservable;
export const fromReadonlyArray = ReadonlyArray_toObservable;
export const fromValue = Observable_fromValue;
export const keep = Observable_keep;
export const keepType = Observable_keepType;
export const map = Observable_map;
export const mapTo = Observable_mapTo;
export const mergeAll = DeferredObservable_mergeAll;
export const mergeMap = DeferredObservable_mergeMap;
export const multicast = DeferredObservable_multicast;
export const pairwise = Observable_pairwise;
export const pick = Observable_pick;
export const repeat = DeferredObservable_repeat;
export const retry = DeferredObservable_retry;
export const scan = Observable_scan;
export const scanLast = DeferredObservable_scanLast;
export const scanMany = DeferredObservable_scanMany;
export const share = DeferredObservable_share;
export const skipFirst = Observable_skipFirst;
export const startWith = Observable_startWith;
export const switchAll = DeferredObservable_switchAll;
export const switchMap = DeferredObservable_switchMap;
export const takeFirst = Observable_takeFirst;
export const takeLast = Observable_takeLast;
export const takeWhile = Observable_takeWhile;
export const toObservable = identityLazy;
export const zip = Observable_zip;
export const zipWith = Observable_zipWith;
