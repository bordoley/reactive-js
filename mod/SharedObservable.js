/// <reference types="./SharedObservable.d.ts" />

import Container_identity from "./Container/__internal__/Container.identity.js";
import Observable_backpressureStrategy from "./Observable/__internal__/Observable.backpressureStrategy.js";
import Observable_buffer from "./Observable/__internal__/Observable.buffer.js";
import Observable_combineLatest from "./Observable/__internal__/Observable.combineLatest.js";
import { Observable_compute } from "./Observable/__internal__/Observable.compute.js";
import Observable_decodeWithCharset from "./Observable/__internal__/Observable.decodeWithCharset.js";
import Observable_dispatchTo from "./Observable/__internal__/Observable.dispatchTo.js";
import Observable_distinctUntilChanged from "./Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_enqueue from "./Observable/__internal__/Observable.enqueue.js";
import Observable_firstAsync from "./Observable/__internal__/Observable.firstAsync.js";
import Observable_flatMapAsync from "./Observable/__internal__/Observable.flatMapAsync.js";
import Observable_forEach from "./Observable/__internal__/Observable.forEach.js";
import Observable_fromAsyncFactory from "./Observable/__internal__/Observable.fromAsyncFactory.js";
import Observable_ignoreElements from "./Observable/__internal__/Observable.ignoreElements.js";
import Observable_keep from "./Observable/__internal__/Observable.keep.js";
import Observable_keepType from "./Observable/__internal__/Observable.keepType.js";
import Observable_lastAsync from "./Observable/__internal__/Observable.lastAsync.js";
import Observable_map from "./Observable/__internal__/Observable.map.js";
import Observable_mapTo from "./Observable/__internal__/Observable.mapTo.js";
import Observable_mergeWith from "./Observable/__internal__/Observable.mergeWith.js";
import Observable_onSubscribe from "./Observable/__internal__/Observable.onSubscribe.js";
import Observable_pairwise from "./Observable/__internal__/Observable.pairwise.js";
import Observable_pick from "./Observable/__internal__/Observable.pick.js";
import Observable_scan from "./Observable/__internal__/Observable.scan.js";
import Observable_skipFirst from "./Observable/__internal__/Observable.skipFirst.js";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe.js";
import Observable_subscribeOn from "./Observable/__internal__/Observable.subscribeOn.js";
import Observable_takeFirst from "./Observable/__internal__/Observable.takeFirst.js";
import Observable_takeLast from "./Observable/__internal__/Observable.takeLast.js";
import Observable_takeWhile from "./Observable/__internal__/Observable.takeWhile.js";
import Observable_throwIfEmpty from "./Observable/__internal__/Observable.throwIfEmpty.js";
import Observable_toEventSource from "./Observable/__internal__/Observable.toEventSource.js";
import Observable_withCurrentTime from "./Observable/__internal__/Observable.withCurrentTime.js";
import Observable_withLatestFrom from "./Observable/__internal__/Observable.withLatestFrom.js";
import SharedObservable_create from "./SharedObservable/__internal__/SharedObservable.create.js";
import SharedObservable_defer from "./SharedObservable/__internal__/SharedObservable.defer.js";
export const backpressureStrategy = Observable_backpressureStrategy;
/**
 * @category Operator
 */
export const buffer = Observable_buffer;
/*
export const catchError: SharedObservableContainer.TypeClass["catchError"] =
  Observable_catchError;*/
export const combineLatest = Observable_combineLatest;
/**
 * @category Constructor
 */
export const compute = Observable_compute;
/**
 * @category Constructor
 */
export const create = SharedObservable_create;
export const decodeWithCharset = Observable_decodeWithCharset;
export const defer = SharedObservable_defer;
export const dispatchTo = Observable_dispatchTo;
export const distinctUntilChanged = Observable_distinctUntilChanged;
/*
export const encodeUtf8: SharedObservableContainer.TypeClass["encodeUtf8"] =
  Observable_encodeUtf8;*/
export const enqueue = Observable_enqueue;
/*
export const exhaust: SharedObservableContainer.TypeClass["exhaust"] =
  Observable_exhaust;*/
/*
export const exhaustMap: SharedObservableContainer.TypeClass["exhaustMap"] =
  Observable_exhaustMap;*/
export const firstAsync = Observable_firstAsync;
/**
 * @category Operator
 */
export const flatMapAsync = Observable_flatMapAsync;
/*
export const flatMapIterable: SharedObservableContainer.TypeClass["flatMapIterable"] =
  Observable_flatMapIterable;*/
export const forEach = Observable_forEach;
/*
export const forkCombineLatest: SharedObservableContainer.TypeClass["forkCombineLatest"] =
  Observable_forkCombineLatest;*/
/*
export const forkMerge: SharedObservableContainer.TypeClass["forkMerge"] =
  Observable_forkMerge;*/
/*
export const forkZip: SharedObservableContainer.TypeClass["forkZip"] =
  Observable_forkZip;*/
/*
export const forkZipLatest: SharedObservableContainer.TypeClass["forkZipLatest"] =
  Observable_forkZipLatest;*/
/**
 * @category Constructor
 */
export const fromAsyncFactory = Observable_fromAsyncFactory;
export const identity = Container_identity;
export const ignoreElements = Observable_ignoreElements;
export const keep = Observable_keep;
export const keepType = Observable_keepType;
export const lastAsync = Observable_lastAsync;
export const map = Observable_map;
export const mapTo = Observable_mapTo;
/*
export const merge: SharedObservableContainer.TypeClass["merge"] =
  Observable_merge;*/
/*
export const mergeAll: SharedObservableContainer.TypeClass["mergeAll"] =
  Observable_mergeAll;*/
/*
export const mergeMap: SharedObservableContainer.TypeClass["mergeMap"] =
  Observable_mergeMap;*/
export const mergeWith = Observable_mergeWith;
/*
export const never: SharedObservableContainer.TypeClass["never"] =
  Observable_never;*/
/**
 * @category Operator
 */
export const onSubscribe = Observable_onSubscribe;
export const pairwise = Observable_pairwise;
export const pick = Observable_pick;
export const scan = Observable_scan;
/*
export const scanLast: SharedObservableContainer.TypeClass["scanLast"] =
  Observable_scanLast;*/
/*
export const scanMany: SharedObservableContainer.TypeClass["scanMany"] =
  Observable_scanLast;*/
export const skipFirst = Observable_skipFirst;
/*
export const switchAll: SharedObservableContainer.TypeClass["switchAll"] =
  Observable_switchAll;*/
/*
export const switchMap: SharedObservableContainer.TypeClass["switchMap"] =
  Observable_switchMap;*/
export const subscribe = Observable_subscribe;
/**
 * @category Operator
 */
export const subscribeOn = Observable_subscribeOn;
export const takeFirst = Observable_takeFirst;
export const takeLast = Observable_takeLast;
/*
export const takeUntil: SharedObservableContainer.TypeClass["takeUntil"] =
  Observable_takeUntil;*/
export const takeWhile = Observable_takeWhile;
/*
export const throttle: SharedObservableContainer.TypeClass["throttle"] =
  Observable_throttle;*/
export const throwIfEmpty = Observable_throwIfEmpty;
/*
interface Throws extends SharedObservableContainer.TypeClass {
  throws<T>(options?: {
    delay?: number;
    raise?: Factory<unknown>;
  }): ObservableLike<T>;
}
export const throws: Throws["throws"] = Observable_throws;*/
/*
export const timeout: SharedObservableContainer.TypeClass["timeout"] =
  Observable_timeout;*/
/**
 * @category Transform
 */
export const toEventSource = Observable_toEventSource;
export const toObservable = identity;
export const withCurrentTime = Observable_withCurrentTime;
export const withLatestFrom = Observable_withLatestFrom;
/*
export const zip: SharedObservableContainer.TypeClass["zip"] = Observable_zip;
*/
/*
export const zipLatest: SharedObservableContainer.TypeClass["zipLatest"] =
  Observable_zipLatest;*/
/*
export const zipWith: SharedObservableContainer.TypeClass["zipWith"] =
  Observable_zipWith;*/
/*
export const zipWithLatestFrom: SharedObservableContainer.TypeClass["zipWithLatestFrom"] =
  Observable_zipWithLatestFrom;*/
