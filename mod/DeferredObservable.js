/// <reference types="./DeferredObservable.d.ts" />

import Container_identity from "./Container/__internal__/Container.identity.js";
import DeferredObservable_concatAll from "./DeferredObservable/__internal__/DeferredObservable.concatAll.js";
import DeferredObservable_concatMap from "./DeferredObservable/__internal__/DeferredObservable.concatMap.js";
import DeferredObservable_create from "./DeferredObservable/__internal__/DeferredObservable.create.js";
import DeferredObservable_defer from "./DeferredObservable/__internal__/DeferredObservable.defer.js";
import DeferredObservable_exhaust from "./DeferredObservable/__internal__/DeferredObservable.exhaust.js";
import DeferredObservable_exhaustMap from "./DeferredObservable/__internal__/DeferredObservable.exhaustMap.js";
import DeferredObservable_forkConcat from "./DeferredObservable/__internal__/DeferredObservable.forkConcat.js";
import DeferredObservable_mergeAll from "./DeferredObservable/__internal__/DeferredObservable.mergeAll.js";
import DeferredObservable_mergeMap from "./DeferredObservable/__internal__/DeferredObservable.mergeMap.js";
import DeferredObservable_share from "./DeferredObservable/__internal__/DeferredObservable.share.js";
import DeferredObservable_switchAll from "./DeferredObservable/__internal__/DeferredObservable.switchAll.js";
import DeferredObservable_switchMap from "./DeferredObservable/__internal__/DeferredObservable.switchMap.js";
import DeferredObservable_throttle from "./DeferredObservable/__internal__/DeferredObservable.throttle.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import Observable_concat from "./Observable/__internal__/Observable.concat.js";
import Observable_concatWith from "./Observable/__internal__/Observable.concatWith.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_empty from "./Observable/__internal__/Observable.empty.js";
import Observable_endWith from "./Observable/__internal__/Observable.endWith.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_forkMerge from "./Observable/__internal__/Observable.forkMerge.js";
import Observable_forkZip from "./Observable/__internal__/Observable.forkZip.js";
import Observable_forkZipLatest from "./Observable/__internal__/Observable.forkZipLatest.js";
import Observable_fromFactory from "./Observable/__internal__/Observable.fromFactory.js";
import Observable_generate from "./Observable/__internal__/Observable.generate.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_merge from "./Observable/__internal__/Observable.merge.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_repeat from "./Observable/__internal__/Observable.repeat.js";
import Observable_retry from "./Observable/__internal__/Observable.retry.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_startWith from "./Observable/__internal__/Observable.startWith.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_throws from "./Observable/__internal__/Observable.throws.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import Observable_zip from "./Observable/__internal__/Observable.zip.js";
import Observable_zipLatest from "./Observable/__internal__/Observable.zipLatest.js";
import Observable_zipWith from "./Observable/__internal__/Observable.zipWith.js";
import Observable_zipWithLatestFrom from "./Observable/__internal__/Observable.zipWithLatestFrom.js";
import Optional_toObservable from "./Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_toObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
export const backpressureStrategy = Observable_backpressureStrategy;
export const buffer = Observable_buffer;
/*
export const catchError: DeferredObservableContainer.TypeClass["catchError"] =
  DeferredObservable_catchError;*/
export const combineLatest = Observable_combineLatest;
/**
 * @category Constructor
 */
//export const compute = DeferredObservable_compute;
export const concat = Observable_concat;
export const concatAll = DeferredObservable_concatAll;
export const concatMap = DeferredObservable_concatMap;
export const concatWith = Observable_concatWith;
export const create = DeferredObservable_create;
export const decodeWithCharset = Observable_decodeWithCharset;
export const defer = DeferredObservable_defer;
export const dispatchTo = Observable_dispatchTo;
export const distinctUntilChanged = Observable_distinctUntilChanged;
export const empty = Observable_empty;
/*
export const encodeUtf8: DeferredObservableContainer.TypeClass["encodeUtf8"] =
  DeferredObservable_encodeUtf8;*/
export const enqueue = Observable_enqueue;
export const endWith = Observable_endWith;
export const exhaust = DeferredObservable_exhaust;
export const exhaustMap = DeferredObservable_exhaustMap;
export const firstAsync = Observable_firstAsync;
/*
export const flatMapIterable: DeferredObservableContainer.TypeClass["flatMapIterable"] =
  DeferredObservable_flatMapIterable;*/
export const forEach = Observable_forEach;
export const forkConcat = DeferredObservable_forkConcat;
export const forkMerge = Observable_forkMerge;
export const forkZip = Observable_forkZip;
export const forkZipLatest = Observable_forkZipLatest;
/*
export const fromEnumeratorFactory: DeferredObservableContainer.TypeClass["fromEnumeratorFactory"] =
  DeferredObservable_fromEnumeratorFactory;*/
export const fromFactory = Observable_fromFactory;
export const fromIterable = Iterable_toObservable;
export const fromOptional = Optional_toObservable;
export const fromReadonlyArray = ReadonlyArray_toObservable;
export const generate = Observable_generate;
export const identity = Container_identity;
export const ignoreElements = Observable_ignoreElements;
export const keep = Observable_keep;
export const keepType = Observable_keepType;
export const lastAsync = Observable_lastAsync;
export const map = Observable_map;
export const mapTo = Observable_mapTo;
export const merge = Observable_merge;
export const mergeAll = DeferredObservable_mergeAll;
export const mergeMap = DeferredObservable_mergeMap;
export const mergeWith = Observable_mergeWith;
export const pairwise = Observable_pairwise;
export const pick = Observable_pick;
export const repeat = Observable_repeat;
export const retry = Observable_retry;
export const scan = Observable_scan;
export const share = DeferredObservable_share;
/*
export const scanLast: DeferredObservableContainer.TypeClass["scanLast"] =
  DeferredObservable_scanLast;*/
/*
export const scanMany: DeferredObservableContainer.TypeClass["scanMany"] =
  DeferredObservable_scanMany;*/
export const skipFirst = Observable_skipFirst;
export const startWith = Observable_startWith;
export const switchAll = DeferredObservable_switchAll;
export const switchMap = DeferredObservable_switchMap;
export const takeFirst = Observable_takeFirst;
export const takeLast = Observable_takeLast;
/*
export const takeUntil: DeferredObservableContainer.TypeClass["takeUntil"] =
  Observable_takeUntil;*/
export const takeWhile = Observable_takeWhile;
export const throttle = DeferredObservable_throttle;
export const throwIfEmpty = Observable_throwIfEmpty;
export const throws = Observable_throws;
/*
export const timeout: DeferredObservableContainer.TypeClass["timeout"] =
  Observable_timeout;*/
/*
export const toReadonlyArray: DeferredObservableContainer.TypeClass["toReadonlyArray"] =
  DeferredObservable_toReadonlyArray;*/
export const withCurrentTime = Observable_withCurrentTime;
export const withLatestFrom = Observable_withLatestFrom;
export const zip = Observable_zip;
export const zipLatest = Observable_zipLatest;
export const zipWith = Observable_zipWith;
export const zipWithLatestFrom = Observable_zipWithLatestFrom;
